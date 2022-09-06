import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v2.4.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v2.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    const libs = [
      "atomic",
      "chrono",
      "container",
      "context",
      "contract",
      "coroutine",
      "date_time",
      "exception",
      "fiber",
      "filesystem",
      "graph",
      "graph_parallel",
      "iostreams",
      "locale",
      "log",
      "log_setup",
      "math_c99",
      "math_c99f",
      "math_c99l",
      "math_tr1",
      "math_tr1f",
      "math_tr1l",
      "mpi",
      "mpi_python",
      "nowide",
      "numpy35",
      "numpy36",
      "numpy37",
      "numpy38",
      "numpy39",
      "prg_exec_monitor",
      "program_options",
      "python35",
      "python36",
      "python37",
      "python38",
      "python39",
      "random",
      "regex",
      "serialization",
      "stacktrace_addr2line",
      "stacktrace_backtrace",
      "stacktrace_basic",
      "stacktrace_noop",
      "system",
      "thread",
      "timer",
      "type_erasure",
      "unit_test_framework",
      "wave",
      "wserialization",
    ];

    const importedOnly = [
      "boost",
      "headers",
    ];

    if (args.context.input.match(/\bBoost::\w*$/)) {
      return await Promise.all([...libs, ...importedOnly].map(
        (word) => Promise.resolve({ menu: "FindBoost", word: word }),
      ));
    }

    let vars = [
      "Boost_FOUND",
      "Boost_INCLUDE_DIRS",
      "Boost_LIBRARY_DIRS",
      "Boost_LIBRARIES",
      "Boost_VERSION_MACRO",
      "Boost_VERSION_STRING",
      "Boost_VERSION",
      "Boost_LIB_VERSION",
      "Boost_VERSION_MAJOR",
      "Boost_VERSION_MINOR",
      "Boost_VERSION_PATCH",
      "Boost_VERSION_COUNT",
    ];

    for (const lib of libs) {
      const u = lib.toUpperCase();
      vars = vars.concat(
        `Boost_${u}_FOUND`,
        `Boost_${u}_LIBRARY`,
        `Boost::${lib}`,
      );
    }

    for (const lib of importedOnly) {
      vars = vars.concat(`Boost::${lib}`);
    }

    return Promise.all(
      vars.filter(
        (word) => {
          if (args.context.input.match(/\$\{\w*$/)) {
            return !word.includes("::");
          }
          return true;
        },
      ).map(
        (word) => Promise.resolve({ menu: "FindBoost", word: word }),
      ),
    );
  }

  params(): Params {
    return {};
  }
}
