import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.8.1/types.ts#^";
import {
  GatherArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v3.8.1/base/source.ts#^";

type Params = Record<string, never>;
export class Source extends BaseSource<Params> {
  candidates: string[] = [];

  async onInit(_args: OnInitArguments<Params>): Promise<void> {
    const command = new Deno.Command("pygmentize", {
      args: ["-L", "lexers"],
      stdin: "null",
      stdout: "piped",
    });
    const { _code, stdout, _stderr } = await command.output();

    const lines = new TextDecoder().decode(stdout).split(/\n/);
    this.candidates = lines
      .filter((line) => line.match(/^\*/))
      .flatMap((word) =>
        word.replace(/^\* */, "").replace(/:$/, "").split(/, */).filter(Boolean)
      );
  }

  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (
      !args.context.input.match(
        /\\(?:begin\{minted\}|inputminted(?:\[.*?\])?|mint|mintinline){\w*?$/,
      )
    ) {
      return [];
    }
    return await Promise.all(this.candidates.map(
      (word) => Promise.resolve({ menu: "minted", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
