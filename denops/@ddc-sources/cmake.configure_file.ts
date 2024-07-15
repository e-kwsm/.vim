import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v5.0.1/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v5.0.1/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/@\w*$/)) {
      return [];
    }

    return await Promise.all([
      "CMAKE_BINARY_DIR",
      "CMAKE_CURRENT_BINARY_DIR",
      "CMAKE_CURRENT_SOURCE_DIR",
      "CMAKE_INSTALL_PREFIX",
      "CMAKE_MODULE_PATH",
      "CMAKE_PROJECT_NAME",
      "CMAKE_PROJECT_VERSION",
      "CMAKE_SOURCE_DIR",
      "CMAKE_TOOLCHAIN_FILE",
      "CMAKE_VERSION",
      "PROJECT_BINARY_DIR",
      "PROJECT_NAME",
      "PROJECT_SOURCE_DIR",
      "PROJECT_VERSION",
    ].map(
      (word) =>
        Promise.resolve({
          menu: "configure_file",
          word: `${word}@`,
          abbr: word,
        }),
    ));
  }

  params(): Params {
    return {};
  }
}
