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
    const command = new Deno.Command("pygmentize", {
      args: ["-L", "lexers"],
      stdin: "null",
      stdout: "piped",
    });
    const { stdout } = await command.output();
    const lines = new TextDecoder().decode(stdout);
    this.candidates = lines.split(/\n/)
      .filter((line) => line.match(/^\*/))
      .flatMap((line) =>
        line
          .replace(/^\* */, "")
          .replace(/:$/, "")
          .split(/, */)
          .filter(Boolean)
      );
  }

  override async gather(args: GatherArguments<Params>): Promise<Item[]> {
    if (
      !args.context.input.match(
        /\\(?:begin\{minted\}|inputminted(?:\[.*?\])?|mint|mintinline){\w*?$/,
      )
    ) {
      return [];
    }
    const items: Item[] = await Promise.all(this.candidates.map(
      (word) => Promise.resolve({ menu: "minted", word: word }),
    ));
    return items;
  }

  override params(): Params {
    return {};
  }
}
