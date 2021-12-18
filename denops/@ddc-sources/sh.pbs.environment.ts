import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.2.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.2.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    _args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    return await Promise.all([
      "PBS_JOBID",
      "PBS_JOBNAME",
      "PBS_NODEFILE",
      "PBS_NODENUM",
      "PBS_NP",
      "PBS_NUM_NODES",
      "PBS_NUM_PPN",
      "PBS_O_HOST",
      "PBS_O_WORKDIR",
      "PBS_SERVER",
      "PBS_TASKNUM",
    ].map(
      (word) => Promise.resolve({ menu: "PBS", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
