import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v2.3.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v2.3.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\blist\(\w*$/i)) {
      return [];
    }

    return await Promise.all([
      "APPEND",
      "FILTER",
      "FIND",
      "GET",
      "INSERT",
      "JOIN",
      "LENGTH",
      "POP_BACK",
      "POP_FRONT",
      "PREPEND",
      "REMOVE_AT",
      "REMOVE_DUPLICATES",
      "REMOVE_ITEM",
      "REVERSE",
      "SORT",
      "SUBLIST",
      "TRANSFORM",
    ].map(
      (word) => Promise.resolve({ menu: "list", word: word, abbr: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
