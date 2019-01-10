import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "SLURM directive"
        self.mark = "[SLURM]"
        self.filetypes = ["sh"]
        self.input_pattern = r"^\s*#SBATCH\s+--[^\s=-]*$"
        self.rank = 200

        self._candidates = [{
            "word": d + "=",
            "abbr": "--" + d,
        } for d in [
            "begin",
            "cpus-per-task",
            "error",
            "job-name",
            "nodes",
            "output",
            "partition",
            "time",
        ]]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
