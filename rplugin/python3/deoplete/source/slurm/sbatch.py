import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "SLURM.sbatch"
        self.mark = "[SLURM]"
        self.filetypes = ["sh"]
        self.input_pattern = r"^\s*#SBATCH\s+--[a-z]*$"
        self.rank = 400

        self._candidates = [
            {"abbr": f"--{d}", "word": f"{d}="}
            for d in [
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
            ]
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
