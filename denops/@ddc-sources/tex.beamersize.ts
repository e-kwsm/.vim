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
