import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v6.0.0/types.ts#^";
import {
  GatherArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v6.0.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  candidates: string[] = [];

  override async onInit(_args: OnInitArguments<Params>): Promise<void> {
    const command = new Deno.Command("fc-list", {
      args: ["--format", "%{family[0]}\n"],
      env: { "LANG": "C" },
      stdin: "null",
      stdout: "piped",
    });
    const { stdout } = await command.output();
    const lines = new TextDecoder().decode(stdout);
    this.candidates = lines.trim().split(/\n/);
  }

  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (
      !args.context.input.match(
        /\\(?:set(?:main|math|mono|sans)font|IfFontExistsTF){\w*$/,
      )
    ) {
      return [];
    }
    const items = await Promise.all(this.candidates.map(
      (word) => Promise.resolve({ menu: "font", word: word }),
    ));
    return items;
  }

  params(): Params {
    return {};
  }
}
