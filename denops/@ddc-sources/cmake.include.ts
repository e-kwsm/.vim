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
    const lines = new TextDecoder().decode(stdout);
    this.candidates = lines.trim().split(/\n/)
      .filter((line) => !line.match("^Find"));
  }

  override async gather(args: GatherArguments<Params>): Promise<Item[]> {
    if (!args.context.input.match(/\binclude\(\w*$/i)) {
      return [];
    }
    const items: Item[] = await Promise.all(this.candidates.map(
      (word) => Promise.resolve({ menu: "include", word: word }),
    ));
    return items;
  }

  override params(): Params {
    return {};
  }
}
