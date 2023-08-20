import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v4.0.4/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v4.0.4/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/^```\w*$/)) {
      return [];
    }

    return await Promise.all([
      // rouge
      "awk",
      "bibtex",
      "c",
      "cmake",
      "console",
      "cpp",
      "diff",
      "fortran",
      "html",
      "make",
      "markdown",
      "python",
      "shell",
      "tex",
      "toml",
      "viml",
      "xml",
      "yaml",
      //
      "math",
      "mermaid",
    ].map(
      (word) => Promise.resolve({ menu: "GitLab", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
