from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "SLURM.environment"
        self.mark = "[SLURM]"
        self.filetypes = ["sh"]
        self.input_pattern = r"\$\{?SLURM[A-Z_]*$"
        self._candidates = [
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
        ]

    def gather_candidates(self, context):
        return self._candidates
