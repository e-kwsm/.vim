import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.8.2/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.8.2/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    return await Promise.all(
      [
        "LAPACK95_FOUND",
        "LAPACK95_LIBRARIES",
        "LAPACK_FOUND",
        "LAPACK_LIBRARIES",
        "LAPACK_LINKER_FLAGS",
        //
        "LAPACK::LAPACK",
      ].filter((word) => {
        if (args.context.input.match(/\$\{\w*$/)) return !word.includes("::");
        return !args.context.input.match(/::\w*$/);
      }).map(
        (word) => Promise.resolve({ menu: "FindLAPACK", word: word }),
      ),
    );
  }

  params(): Params {
    return {};
  }
}
