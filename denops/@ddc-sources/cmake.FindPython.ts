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

    if (args.context.input.match(/\bPython::\w*$/)) {
      return await Promise.all(imported.map(
        (word) => Promise.resolve({ menu: "FindPython", word: word }),
      ));
    }

    imported = imported.map((word) => "Python::" + word);

    const vars = [
      "Python_COMPILER",
      "Python_COMPILER_ID",
      "Python_Compiler_FOUND",
      "Python_Development_FOUND",
      "Python_EXECUTABLE",
      "Python_FOUND",
      "Python_INCLUDE_DIRS",
      "Python_INTERPRETER_ID",
      "Python_Interpreter_FOUND",
      "Python_LIBRARIES",
      "Python_LIBRARY_DIRS",
      "Python_NumPy_FOUND",
      "Python_NumPy_INCLUDE_DIRS",
      "Python_NumPy_VERSION",
      "Python_RUNTIME_LIBRARY_DIRS",
      "Python_SITEARCH",
      "Python_SITELIB",
      "Python_STDARCH",
      "Python_STDLIB",
      "Python_VERSION",
      "Python_VERSION_MAJOR",
      "Python_VERSION_MINOR",
      "Python_VERSION_PATCH",
    ];

    return await Promise.all(
      [...vars, ...imported].filter(
        (word) => {
          if (args.context.input.match(/\$\{\w*$/)) return !word.includes("::");
          return !args.context.input.match(/::\w*$/);
        },
      ).map(
        (word) => Promise.resolve({ menu: "FindPython", word: word }),
      ),
    );
  }

  params(): Params {
    return {};
  }
}
