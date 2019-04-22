import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "SGE environment variables"
        self.mark = "[SGE]"
        self.filetypes = ["sh"]
        self.input_pattern = r"\$[A-Z_]*$"

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "JOB_ID",
                "JOB_NAME",
                "NHOSTS",
                "NQUEUES",
                "NSLOTS",
                "QUEUE",
                "REQUEST",
                "RESTARTED",
                "SGE_CELL",
                "SGE_CLUSTER_NAME",
                "SGE_CWD_PATH",
                "SGE_O_HOST",
                "SGE_O_WORKDIR",
                "SGE_STDERR_PATH",
                "SGE_STDOUT_PATH",
            ]
