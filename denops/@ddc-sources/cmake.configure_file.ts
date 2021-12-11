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
