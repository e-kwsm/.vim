import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.4.0/types.ts#^";
import {
  GatherCandidatesArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v1.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  candidates: string[] = [];

  async onInit(_args: OnInitArguments<Params>): Promise<void> {
    const p = Deno.run({
      cmd: ["cmake", "--help-module-list"],
      stdin: "null",
      stdout: "piped",
    });
    await p.status();
    const lines = new TextDecoder().decode(await p.output()).split(/\n/);
    this.candidates = lines
      .filter((line) => line.match(/^Find\S+/))
      .map((word) => word.replace(/^Find/, ""));
  }

  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (!args.context.input.match(/\bfind_package\s*\(\w*$/i)) {
      return [];
    }
    return await Promise.all(this.candidates
      .map((word) => Promise.resolve({ menu: "find_package", word: word })));
  }

  params(): Params {
    return {};
  }
}
