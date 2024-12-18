import { Item } from "jsr:@shougo/ddc-vim@^9.1.0/types";
import {
  BaseSource,
  GatherArguments,
  OnInitArguments,
} from "jsr:@shougo/ddc-vim@^9.1.0/source";

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
    const lines = new TextDecoder().decode(stdout).split(/\n/);
    this.candidates = lines
      .filter((line) => line.match(/^Find\S+/))
      .map((word) => word.replace(/^Find/, ""));
  }

  override async gather(args: GatherArguments<Params>): Promise<Item[]> {
    if (!args.context.input.match(/\bfind_package\(\w*$/i)) {
      return [];
    }
    return await Promise.all(this.candidates.map(
      (word) => Promise.resolve({ menu: "find_package", word: word }),
    ));
  }

  override params(): Params {
    return {};
  }
}
