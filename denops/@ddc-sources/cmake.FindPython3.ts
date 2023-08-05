import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.9.2/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.9.2/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    let imported = [
      "Compiler",
      "Interpreter",
      "Module",
      "NumPy",
      "Python",
    ];

    if (args.context.input.match(/\bPython3::\w*$/)) {
      return await Promise.all(imported.map(
        (word) => Promise.resolve({ menu: "FindPython3", word: word }),
      ));
    }

    imported = imported.map((word) => "Python3::" + word);

    const vars = [
      "Python3_COMPILER",
      "Python3_COMPILER_ID",
      "Python3_Compiler_FOUND",
      "Python3_Development_FOUND",
      "Python3_EXECUTABLE",
      "Python3_FOUND",
      "Python3_INCLUDE_DIRS",
      "Python3_INTERPRETER_ID",
      "Python3_Interpreter_FOUND",
      "Python3_LIBRARIES",
      "Python3_LIBRARY_DIRS",
      "Python3_NumPy_FOUND",
      "Python3_NumPy_INCLUDE_DIRS",
      "Python3_NumPy_VERSION",
      "Python3_RUNTIME_LIBRARY_DIRS",
      "Python3_SITEARCH",
      "Python3_SITELIB",
      "Python3_STDARCH",
      "Python3_STDLIB",
      "Python3_VERSION",
      "Python3_VERSION_MAJOR",
      "Python3_VERSION_MINOR",
      "Python3_VERSION_PATCH",
    ];

    return await Promise.all(
      [...vars, ...imported].filter(
        (word) => {
          if (args.context.input.match(/\$\{\w*$/)) return !word.includes("::");
          return !args.context.input.match(/::\w*$/);
        },
      ).map(
        (word) => Promise.resolve({ menu: "FindPython3", word: word }),
      ),
    );
  }

  params(): Params {
    return {};
  }
}
