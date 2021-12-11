import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.1.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.1.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    _args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    return await Promise.all([
      "SLURMD_NODENAME",
      "SLURM_CLUSTER_NAME",
      "SLURM_CPUS_ON_NODE",
      "SLURM_CPUS_PER_TASK",
      "SLURM_JOB_ID",
      "SLURM_JOB_NAME",
      "SLURM_JOB_NUM_NODES",
      "SLURM_NTASKS",
      "SLURM_NTASKS_PER_NODE",
      "SLURM_SUBMIT_DIR",
    ].map(
      (word) => Promise.resolve({ menu: "slurm", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
