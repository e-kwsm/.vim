import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v0.18.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v0.18.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    return await Promise.all(
      [
        "LAPACK95_FOUND",
        "LAPACK95_LIBRARIES",
        "LAPACK_FOUND",
        "LAPACK_LIBRARIES",
        "LAPACK_LINKER_FLAGS",
        //
        "LAPACK::LAPACK",
      ].filter(
        (word) => {
          if (args.context.input.match(/\$\{\w*$/)) {
            return !word.includes("::");
          }
          return !args.context.input.match(/::\w*$/);
        },
      ).map(
        (word) => Promise.resolve({ menu: "FindLAPACK", word: word }),
      ),
    );
  }

  params(): Params {
    return {};
  }
}
