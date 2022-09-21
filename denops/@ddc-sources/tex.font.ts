import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v2.5.1/types.ts#^";
import {
  GatherArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v2.5.1/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  candidates: string[] = [];

  async onInit(_args: OnInitArguments<Params>): Promise<void> {
    const p = Deno.run({
      cmd: ["env", "LANG=C", "fc-list", "--format", "%{family[0]}\n"],
      stdin: "null",
      stdout: "piped",
    });
    await p.status();
    this.candidates = new TextDecoder().decode(await p.output()).split(/\n/);
  }

  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (
      !args.context.input.match(
        /\\(?:set(?:main|math|mono|sans)font|IfFontExistsTF){\w*$/,
      )
    ) {
      return [];
    }
    return await Promise.all(this.candidates
      .map((word) => Promise.resolve({ menu: "font", word: word })));
  }

  params(): Params {
    return {};
  }
}
