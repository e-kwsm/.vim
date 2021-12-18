import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.2.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.2.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (!args.context.input.match(/^\s*#\w*$/)) {
      return [];
    }

    const options: Candidate[] = [
      { word: "e", kind: "stderr path" },
      { word: "l", kind: "resource list" },
      { word: "m", kind: "mail events" },
      { word: "N", kind: "job name" },
      { word: "o", kind: "stdout path" },
      { word: "q", kind: "destination queue" },
      { word: "S", kind: "interpreter" },
    ];

    return await Promise.all(options.map(
      (word) =>
        Promise.resolve({
          menu: "PBS",
          abbr: `#PBS -${word.word}`,
          word: `PBS -${word.word} `,
          kind: word.kind,
        }),
    ));
  }

  params(): Params {
    return {};
  }
}
