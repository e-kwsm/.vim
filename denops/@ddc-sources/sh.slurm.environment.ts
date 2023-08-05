import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.9.2/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.9.2/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(_args: GatherArguments<Params>): Promise<DdcGatherItems> {
    return await Promise.all([
      "SLURMD_NODENAME",
      "SLURM_CLUSTER_NAME",
      "SLURM_CPUS_ON_NODE",
      "SLURM_CPUS_PER_TASK",
      "SLURM_JOB_ACCOUNT",
      "SLURM_JOB_CPUS_PER_NODE",
      "SLURM_JOB_ID",
      "SLURM_JOB_NAME",
      "SLURM_JOB_NUM_NODES",
      "SLURM_JOB_PARTITION",
      "SLURM_NODELIST",
      "SLURM_NPROCS",
      "SLURM_NTASKS",
      "SLURM_NTASKS_PER_CORE",
      "SLURM_NTASKS_PER_NODE",
      "SLURM_NTASKS_PER_SOCKET",
      "SLURM_PROCID",
      "SLURM_SUBMIT_DIR",
      "SLURM_TASKS_PER_NODE",
      "SLURM_THREADS_PER_CORE",
    ].map(
      (word) => Promise.resolve({ menu: "slurm", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
