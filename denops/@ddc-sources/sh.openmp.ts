import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v4.2.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v4.2.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(_args: GatherArguments<Params>): Promise<DdcGatherItems> {
    return await Promise.all([
      "OMP_AFFINITY_FORMAT",
      "OMP_ALLOCATOR",
      "OMP_CANCELLATION",
      "OMP_DEBUG",
      "OMP_DEFAULT_DEVICE",
      "OMP_DISPLAY_AFFINITY",
      "OMP_DISPLAY_ENV",
      "OMP_DYNAMIC",
      "OMP_MAX_ACTIVE_LEVELS",
      "OMP_MAX_TASK_PRIORITY",
      "OMP_NESTED",
      "OMP_NUM_TEAMS",
      "OMP_NUM_THREADS",
      "OMP_PLACES",
      "OMP_PROC_BIND",
      "OMP_SCHEDULE",
      "OMP_STACKSIZE",
      "OMP_TARGET_OFFLOAD",
      "OMP_TEAMS_THREAD_LIMIT",
      "OMP_THREAD_LIMIT",
      "OMP_TOOL",
      "OMP_TOOL_LIBRARIES",
      "OMP_TOOL_VERBOSE_INIT",
      "OMP_WAIT_POLICY",
    ].map(
      (word) => Promise.resolve({ menu: "OpenMP", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
