import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v2.3.1/types.ts#^";
import {
  GatherArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v2.3.1/base/source.ts#^";

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
    this.candidates = lines;
  }

  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\binclude\(\w*$/i)) {
      return [];
    }
    return await Promise.all(this.candidates
      .map((word) => Promise.resolve({ menu: "include", word: word })));
  }

  params(): Params {
    return {};
  }
}
