import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.4.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
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
