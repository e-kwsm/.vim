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
    if (!args.context.input.match(/^\s*@\w*$/)) {
      return [];
    }

    return await Promise.all([
      "article",
      "artwork",
      "audio",
      "bibnote",
      "book",
      "bookinbook",
      "booklet",
      "collection",
      "commentary",
      "customa",
      "customb",
      "customc",
      "customd",
      "custome",
      "customf",
      "image",
      "inbook",
      "incollection",
      "inproceedings",
      "inreference",
      "jurisdiction",
      "legal",
      "legislation",
      "letter",
      "manual",
      "misc",
      "movie",
      "music",
      "mvbook",
      "mvcollection",
      "mvproceedings",
      "mvreference",
      "online",
      "patent",
      "performance",
      "periodical",
      "proceedings",
      "reference",
      "report",
      "review",
      "set",
      "software",
      "standard",
      "suppbook",
      "suppcollection",
      "suppperiodical",
      "thesis",
      "unpublished",
      "video",
    ].map(
      (word) => Promise.resolve({ menu: "type", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
