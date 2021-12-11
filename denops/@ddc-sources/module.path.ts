import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.1.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.1.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (!args.context.input.match(/\b(?:append|prepend|remove)-path +\w*$/)) {
      return [];
    }

    return await Promise.all([
      "CPATH",
      "CPLUS_INCLUDE_PATH",
      "C_INCLUDE_PATH",
      "LD_LIBRARY_PATH",
      "LD_RUN_PATH",
      "LIBRARY_PATH",
      "MANPATH",
      "PATH",
      "PKG_CONFIG_PATH",
      "PYTHONPATH",
    ].map(
      (word) => Promise.resolve({ menu: "path", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
