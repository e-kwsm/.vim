import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.4.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
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
