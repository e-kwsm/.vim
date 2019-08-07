import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "PJM environment variables"
        self.mark = "[PJM]"
        self.filetypes = ["sh"]
        self.input_pattern = r"\$\{?PJM[A-Z_]*$"
        self.rank = 400

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "PJM_BULKNUM",
                "PJM_JOBID",
                "PJM_JOBNAME",
                "PJM_NODE",
                "PJM_NODE_CORE",
                "PJM_O_LOGNAME",
                "PJM_O_WORKDIR",
                "PJM_STEPNUM",
                "PJM_SUBJOBID",
                "PJM_TOTAL_CORE",
            ]
