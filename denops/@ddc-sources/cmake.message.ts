import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.1.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.1.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (!args.context.input.match(/\bmessage\s*\(\w*$/i)) {
      return [];
    }

    return await Promise.all([
      "AUTHOR_WARNING",
      "CHECK_FAIL",
      "CHECK_PASS",
      "CHECK_START",
      "DEBUG",
      "DEPRECATION",
      "FATAL_ERROR",
      "NOTICE",
      "SEND_ERROR",
      "STATUS",
      "TRACE",
      "VERBOSE",
      "WARNING",
    ].map(
      (word) =>
        Promise.resolve({ menu: "message", word: `${word} `, abbr: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
