import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v2.5.1/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v2.5.1/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\bstring\(\w*$/i)) {
      return [];
    }

    return await Promise.all([
      "APPEND",
      "ASCII",
      "COMPARE",
      "CONCAT",
      "CONFIGURE",
      "FIND",
      "GENEX_STRIP",
      "JOIN",
      "LENGTH",
      "MAKE_C_IDENTIFIER",
      "MD5",
      "PREPEND",
      "RANDOM",
      "REGEX",
      "REPEAT",
      "REPLACE",
      "SHA1",
      "SHA224",
      "SHA256",
      "SHA384",
      "SHA3_224",
      "SHA3_256",
      "SHA3_384",
      "SHA3_512",
      "SHA512",
      "STRIP",
      "SUBSTRING",
      "TIMESTAMP",
      "TOLOWER",
      "TOUPPER",
      "UUID",
    ].map(
      (word) =>
        Promise.resolve({ menu: "string", word: word, abbr: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
