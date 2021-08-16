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
      cmd: ["pygmentize", "-L", "lexers"],
      stdin: "null",
      stdout: "piped",
    });
    await p.status();

    const lines = new TextDecoder().decode(await p.output()).split(/\n/);
    this.candidates = lines
      .filter((line) => line.match(/^\*/))
      .flatMap((word) =>
        word.replace(/^\* */, "").replace(/:$/, "").split(/, */).filter(Boolean)
      );
  }

  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (
      !args.context.input.match(
        /^\.\. (?:code|code-block|highlight):: [A-Za-z]*$/,
      )
    ) {
      return [];
    }
    return await Promise.all(this.candidates
      .map((word) => Promise.resolve({ menu: "pygments", word: word })));
  }

  params(): Params {
    return {};
  }
}
