import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "PBS.environment"
        self.mark = "[PBS]"
        self.filetypes = ["sh"]
        self.input_pattern = r"\$\{?PBS[A-Z_]*$"
        self._candidates = [
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
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
