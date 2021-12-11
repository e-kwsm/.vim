import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.1.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.1.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
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
