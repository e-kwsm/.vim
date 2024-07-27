import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v6.0.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v6.0.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (
      !args.context.input.match(/#\s*doctest:(\s*[+-][A-Z_]+,)?\s*[+-][A-Z_]*$/)
    ) {
      return [];
    }

    // https://docs.python.org/3.11/library/doctest.html
    return await Promise.all([
      "DONT_ACCEPT_TRUE_FOR_1",
      "DONT_ACCEPT_BLANKLINE",
      "NORMALIZE_WHITESPACE",
      "ELLIPSIS",
      "IGNORE_EXCEPTION_DETAIL",
      "SKIP",
      "COMPARISON_FLAGS",
      //
      "REPORT_UDIFF",
      "REPORT_CDIFF",
      "REPORT_NDIFF",
      "REPORT_ONLY_FIRST_FAILURE",
      "FAIL_FAST",
      "REPORTING_FLAGS",
    ].map(
      (word) => Promise.resolve({ menu: "doctest", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
