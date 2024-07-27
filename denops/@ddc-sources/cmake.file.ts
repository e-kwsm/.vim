import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v6.0.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v6.0.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\bfile\(\w*$/i)) {
      return [];
    }

    return await Promise.all([
      "APPEND",
      "ARCHIVE_CREATE OUTPUT",
      "ARCHIVE_EXTRACT INPUT",
      "CHMOD",
      "CHMOD_RECURSE",
      "CONFIGURE OUTPUT",
      "COPY",
      "COPY_FILE",
      "CREATE_LINK",
      "DOWNLOAD",
      "GENERATE OUTPUT",
      "GET_RUNTIME_DEPENDENCIES",
      "GLOB",
      "GLOB_RECURSE",
      "INSTALL",
      "LOCK",
      "MAKE_DIRECTORY",
      "READ",
      "READ_SYMLINK",
      "REAL_PATH",
      "RELATIVE_PATH",
      "REMOVE",
      "REMOVE_RECURSE",
      "RENAME",
      "SIZE",
      "STRINGS",
      "TIMESTAMP",
      "TOUCH",
      "TOUCH_NOCREATE",
      "TO_CMAKE_PATH",
      "TO_NATIVE_PATH",
      "UPLOAD",
      "WRITE",
      // HASH
      "MD5",
      "SHA1",
      "SHA224",
      "SHA256",
      "SHA384",
      "SHA512",
      "SHA3_224",
      "SHA3_256",
      "SHA3_384",
      "SHA3_512",
    ].map(
      (word) => Promise.resolve({ menu: "file", word: word, abbr: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
