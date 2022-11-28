import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.3.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.3.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    const options = [
      "begin",
      "chdir",
      "comment",
      "cpus-per-task",
      "dependency",
      "error",
      "export",
      "job-name",
      "mail-type",
      "nodes",
      "ntasks-per-node",
      "output",
      "partition",
      "time",
    ];

    if (args.context.input.match(/^\s*#\w*$/)) {
      return await Promise.all(options.map(
        (word) => {
          return Promise.resolve({
            menu: "slurm",
            abbr: `SBATCH --${word}`,
            word: `SBATCH --${word}=`,
          });
        },
      ));
    }

    if (args.context.input.match(/^\s*#SBATCH\s+--\w*$/)) {
      return await Promise.all(options.map(
        (word) =>
          Promise.resolve({
            menu: "slurm",
            abbr: word,
            word: `${word}=`,
          }),
      ));
    }

    return [];
  }

  params(): Params {
    return {};
  }
}
