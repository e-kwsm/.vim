import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.9.1/types.ts#^";
import {
  GatherArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v3.9.1/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  candidates: string[] = [];

  async onInit(_args: OnInitArguments<Params>): Promise<void> {
    const command = new Deno.Command("fc-list", {
      args: ["--format", "%{family[0]}\n"],
      env: { "LANG": "C" },
      stdin: "null",
      stdout: "piped",
    });
    const { _code, stdout, _stderr } = await command.output();
    this.candidates = new TextDecoder().decode(stdout)
      .split(/\n/).filter(Boolean);
  }

  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (
      !args.context.input.match(
        /\\(?:set(?:main|math|mono|sans)font|IfFontExistsTF){\w*$/,
      )
    ) {
      return [];
    }
    return await Promise.all(this.candidates.map(
      (word) => Promise.resolve({ menu: "font", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
