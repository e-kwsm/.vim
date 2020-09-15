import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "SGE.environment"
        self.mark = "[SGE]"
        self.filetypes = ["sh"]
        self.input_pattern = r"\$\{?[A-Z_]*$"
        self._candidates = [
            "JOB_ID",
            "JOB_NAME",
            "NHOSTS",
            "NQUEUES",
            "NSLOTS",
            "PE",
            "PE_HOSTFILE",
            "QUEUE",
            "REQUEST",
            "SGE_CWD_PATH",
            "SGE_O_HOME",
            "SGE_O_HOST",
            "SGE_O_WORKDIR",
            "SGE_STDERR_PATH",
            "SGE_STDOUT_PATH",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
