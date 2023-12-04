import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v4.2.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v4.2.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\bmessage\(\w*$/i)) {
      return [];
    }

    return await Promise.all([
      "AUTHOR_WARNING",
      "CHECK_FAIL",
      "CHECK_PASS",
      "CHECK_START",
      "DEBUG",
      "DEPRECATION",
      "FATAL_ERROR",
      "NOTICE",
      "SEND_ERROR",
      "STATUS",
      "TRACE",
      "VERBOSE",
      "WARNING",
    ].map(
      (word) => Promise.resolve({ menu: "message", word: word, abbr: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
