import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.4.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
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
