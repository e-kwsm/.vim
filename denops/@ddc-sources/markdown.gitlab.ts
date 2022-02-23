import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.4.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
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
