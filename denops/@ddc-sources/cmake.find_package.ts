import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.7.0/types.ts#^";
import {
  GatherArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v3.7.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  candidates: string[] = [];

  async onInit(_args: OnInitArguments<Params>): Promise<void> {
    const command = new Deno.Command("cmake", {
      args: ["--help-module-list"],
      stdin: "null",
      stdout: "piped",
    });
    const { _code, stdout, _stderr } = await command.output();
    const lines = new TextDecoder().decode(stdout).split(/\n/);
    this.candidates = lines
      .filter((line) => line.match(/^Find\S+/))
      .map((word) => word.replace(/^Find/, ""));
  }

  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\bfind_package\(\w*$/i)) {
      return [];
    }
    return await Promise.all(this.candidates.map(
      (word) => Promise.resolve({ menu: "find_package", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
