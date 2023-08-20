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
      "bash",
      "C",
      "C++",
      "CMake",
      "CSV",
      "Diff",
      "Fortran",
      "Gnuplot",
      "INI",
      "latex",
      "Makefile",
      "Markdown",
      "Python console",
      "Python",
      "reStructuredText",
      "rst",
      "sh",
      "Shell",
      "ShellSession",
      "SVG",
      "TeX",
      "TOML",
      "TSV",
      "Vim script",
      "Vim Snippet",
      "vim",
      "XML",
      "YAML",
    ].map(
      (word) => Promise.resolve({ menu: "GitHub", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
