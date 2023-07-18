import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v6.0.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v6.0.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(_args: GatherArguments<Params>): Promise<DdcGatherItems> {
    return [
      { menu: "MPI", kind: "Intel MPI", word: "MPI_LOCALNRANKS" },
      { menu: "MPI", kind: "Intel MPI", word: "MPI_LOCALRANKID" },
      { menu: "MPI", kind: "Intel MPI", word: "PMI_RANK" },
      { menu: "MPI", kind: "Intel MPI", word: "PMI_SIZE" },
      { menu: "MPI", kind: "MPICH", word: "MPI_LOCALNRANKS" },
      { menu: "MPI", kind: "MPICH", word: "MPI_LOCALRANKID" },
      { menu: "MPI", kind: "MPICH", word: "PMI_RANK" },
      { menu: "MPI", kind: "MPICH", word: "PMI_SIZE" },
      { menu: "MPI", kind: "OpenMPI", word: "OMPI_COMM_WORLD_LOCAL_RANK" },
      { menu: "MPI", kind: "OpenMPI", word: "OMPI_COMM_WORLD_LOCAL_SIZE" },
      { menu: "MPI", kind: "OpenMPI", word: "OMPI_COMM_WORLD_NODE_RANK" },
      { menu: "MPI", kind: "OpenMPI", word: "OMPI_COMM_WORLD_RANK" },
      { menu: "MPI", kind: "OpenMPI", word: "OMPI_COMM_WORLD_SIZE" },
      { menu: "MPI", kind: "OpenMPI", word: "OMPI_MCA_initial_wdir" },
      { menu: "MPI", kind: "OpenMPI", word: "OMPI_UNIVERSE_SIZE" },
      { menu: "MPI", kind: "OpenMPI", word: "PMIX_RANK" },
    ];
  }

  params(): Params {
    return {};
  }
}
