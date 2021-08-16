import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v0.18.0/types.ts#^";
import {
  GatherCandidatesArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v0.18.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  candidates: string[] = [];

  async onInit(_args: OnInitArguments<Params>): Promise<void> {
    const p = Deno.run({
      cmd: ["fc-list", "--format", "%{family[0]}\n"],
      stdin: "null",
      stdout: "piped",
    });
    await p.status();
    this.candidates = new TextDecoder().decode(await p.output()).split(/\n/);
  }

  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (!args.context.input.match(/\bfont-\w+\b.*/)) {
      return [];
    }
    return await Promise.all(this.candidates
      .map((word) => Promise.resolve({ menu: "font", word: word })));
  }

  params(): Params {
    return {};
  }
}
