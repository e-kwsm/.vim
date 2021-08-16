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
    if (!args.context.input.match(/\\setbeamersize\{\w*$/)) {
      return [];
    }

    return await Promise.all([
      "description width of",
      "description width",
      "mini frame offset",
      "mini frame size",
      "sidebar width left",
      "sidebar width right",
      "text margin left",
      "text margin right",
    ].map(
      (word) => Promise.resolve({ menu: "beamersize", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
