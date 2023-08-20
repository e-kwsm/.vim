import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v4.0.4/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v4.0.4/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(_args: GatherArguments<Params>): Promise<DdcGatherItems> {
    return await Promise.all([
      "CALLER_GRAPH",
      "CALL_GRAPH",
      "EXCLUDE",
      "EXCLUDE_PATTERNS",
      "EXCLUDE_SYMBOLS",
      "EXCLUDE_SYMLINKS",
      "EXTRACT_ALL",
      "EXTRACT_ANON_NSPACES",
      "EXTRACT_PACKAGE",
      "EXTRACT_PRIVATE",
      "EXTRACT_PRIV_VIRTUAL",
      "EXTRACT_STATIC",
      "FILE_PATTERNS",
      "GENERATE_HTML",
      "GENERATE_LATEX",
      "GENERATE_MAN",
      "OUTPUT_DIRECTORY",
      "RECURSIVE",
      "USE_MATHJAX",
    ].map((word) =>
      Promise.resolve({ menu: "Doxygen", word: `DOXYGEN_${word}` })
    ));
  }

  params(): Params {
    return {};
  }
}
