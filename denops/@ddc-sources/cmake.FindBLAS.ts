import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.3.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.3.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    return await Promise.all(
      [
        "BLAS95_FOUND",
        "BLAS95_LIBRARIES",
        "BLAS_FOUND",
        "BLAS_LIBRARIES",
        "BLAS_LINKER_FLAGS",
        //
        "BLAS::BLAS",
      ].filter(
        (word) => {
          if (args.context.input.match(/\$\{\w*$/)) {
            return !word.includes("::");
          }
          return !args.context.input.match(/::\w*$/);
        },
      ).map(
        (word) => Promise.resolve({ menu: "FindBLAS", word: word }),
      ),
    );
  }

  params(): Params {
    return {};
  }
}
