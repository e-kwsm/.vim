import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "SLURM environment variables"
        self.mark = "[SLURM]"
        self.filetypes = ["sh"]
        self.input_pattern = r"\$\w*$"

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "SLURMD_NODENAME",
                "SLURM_CLUSTER_NAME",
                "SLURM_CPUS_ON_NODE",
                "SLURM_JOB_CPUS_PER_NODE",
                "SLURM_JOB_ID",
                "SLURM_JOB_NAME",
                "SLURM_JOB_NODELIST",
                "SLURM_JOB_NUM_NODES",
                "SLURM_SUBMIT_DIR",
                "SLURM_TASKS_PER_NODE",
            ]
