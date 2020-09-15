import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "OpenMP.environment"
        self.mark = "[OpenMP]"
        self.filetypes = ["sh"]
        self.input_pattern = r"(?:\bexport\s+|\$\{?)?OMP[A-Z_]*$"
        self._candidates = [
            "OMP_CANCELLATION",
            "OMP_DEFAULT_DEVICE",
            "OMP_DISPLAY_ENV",
            "OMP_DYNAMIC",
            "OMP_MAX_ACTIVE_LEVELS",
            "OMP_MAX_TASK_PRIORITY",
            "OMP_NESTED",
            "OMP_NUM_THREADS",
            "OMP_PLACES",
            "OMP_PROC_BIND",
            "OMP_SCHEDULE",
            "OMP_STACKSIZE",
            "OMP_THREAD_LIMIT",
            "OMP_WAIT_POLICY",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
