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
    const command = new Deno.Command("fc-list", {
      args: ["--format", "%{family[0]}\n"],
      env: { "LANG": "C" },
      stdin: "null",
      stdout: "piped",
    });
    const { stdout } = await command.output();
    this.candidates = new TextDecoder().decode(stdout)
      .split(/\n/);
  }

  override async gather(args: GatherArguments<Params>): Promise<Item[]> {
    if (!args.context.input.match(/\bfont-\w+\b.*/)) {
      return [];
    }
    const items = await Promise.all(
      this.candidates.map((word) => ({ menu: "font", word: word })),
    );
    return items;
  }

  override params(): Params {
    return {};
  }
}
