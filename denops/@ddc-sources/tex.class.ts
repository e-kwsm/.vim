import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.8.1/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.8.1/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (
      !args.context.input.match(
        /\\(?:documentclass|LoadClass|LoadClassWithOptions|PassOptionsToClass)(?:\[.*?\])?\{\w*$/,
      )
    ) {
      return [];
    }

    return await Promise.all([
      "article",
      "beamer",
      "book",
      "jlreq",
      "memoir",
      "minimal",
      "report",
      "scrartcl",
      "scrbook",
      "scrreprt",
      "standalone",
      "subfiles",
    ].map(
      (word) => Promise.resolve({ menu: "cls", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
