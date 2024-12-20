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
    const command = new Deno.Command("cmake", {
      args: ["--help-module-list"],
      stdin: "null",
      stdout: "piped",
    });
    const { stdout } = await command.output();
    const lines = new TextDecoder().decode(stdout);
    this.candidates = lines.trim().split(/\n/)
      .filter((line) => !line.match("^Find"));
  }

  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\binclude\(\w*$/i)) {
      return [];
    }
    const items = await Promise.all(this.candidates.map(
      (word) => Promise.resolve({ menu: "include", word: word }),
    ));
    return items;
  }

  params(): Params {
    return {};
  }
}
