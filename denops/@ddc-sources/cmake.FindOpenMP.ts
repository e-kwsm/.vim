import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v4.0.5/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v4.0.5/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    const langs = ["C", "CXX", "Fortran"];
    if (args.context.input.match(/\bOpenMP::\w*$/)) {
      return await Promise.all(langs.map(
        (lang) =>
          Promise.resolve({ menu: "FindOpenMP", word: `OpenMP_${lang}` }),
      ));
    }

    let vars = [
      "OpenMP_FOUND",
      "OpenMP_VERSION",
      "OpenMP_Fortran_HAVE_OMPLIB_HEADER",
      "OpenMP_Fortran_HAVE_OMPLIB_MODULE",
    ];

    vars = vars.concat(...langs.flatMap(
      (lang) => [
        `OpenMP_${lang}_FLAGS`,
        `OpenMP_${lang}_FOUND`,
        `OpenMP_${lang}_INCLUDE_DIRS`,
        `OpenMP_${lang}_LIBRARIES`,
        `OpenMP_${lang}_LIB_NAMES`,
        `OpenMP_${lang}_SPEC_DATE`,
        `OpenMP_${lang}_VERSION`,
        `OpenMP_${lang}_VERSION_MAJOR`,
        `OpenMP_${lang}_VERSION_MINOR`,
      ],
    ));

    return await Promise.all(vars.map(
      (word) => Promise.resolve({ menu: "FindOpenMP", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
