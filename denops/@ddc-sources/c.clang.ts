import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.7.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.7.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/^\s*#\s*pragma\s+clang\s+diagnostic\s+/)) {
      return [];
    }

    return await Promise.all([
      "error",
      "fatal",
      "ignored",
      "pop",
      "push",
      "warning",
    ].map(
      (word) => Promise.resolve({ menu: "diagnostic", word: word, abbr: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
