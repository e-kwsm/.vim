import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.8.2/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.8.2/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    const langs = ["C", "CXX", "Fortran"];
    if (args.context.input.match(/\bMPI::\w*$/)) {
      return await Promise.all(langs.map(
        (lang) => Promise.resolve({ menu: "FindMPI", word: `MPI_${lang}` }),
      ));
    }

    let vars = [
      "MPIEXEC_EXECUTABLE",
      "MPIEXEC_MAX_NUMPROCS",
      "MPIEXEC_NUMPROC_FLAG",
      "MPIEXEC_POSTFLAGS",
      "MPIEXEC_PREFLAGS",
      "MPI_FOUND",
      "MPI_Fortran_HAVE_F08_MODULE",
      "MPI_Fortran_HAVE_F77_HEADER",
      "MPI_Fortran_HAVE_F90_MODULE",
      "MPI_MPICXX_FOUND",
      "MPI_VERSION",
    ];

    vars = vars.concat(...langs.flatMap(
      (lang) => [
        `MPI_${lang}_COMPILER`,
        `MPI_${lang}_COMPILE_DEFINITIONS`,
        `MPI_${lang}_COMPILE_OPTIONS`,
        `MPI_${lang}_FOUND`,
        `MPI_${lang}_INCLUDE_DIRS`,
        `MPI_${lang}_LIBRARIES`,
        `MPI_${lang}_LINK_FLAGS`,
        `MPI_${lang}_VERSION`,
        `MPI_${lang}_VERSION_MAJOR`,
        `MPI_${lang}_VERSION_MINOR`,
      ],
    ));

    return await Promise.all(vars.map(
      (word) => Promise.resolve({ menu: "FindMPI", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
