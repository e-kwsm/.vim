import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v2.2.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v2.2.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/^\s*#\w*$/)) {
      return [];
    }

    const options = [
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