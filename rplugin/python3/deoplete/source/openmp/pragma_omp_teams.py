import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp teams"
        self.mark = "[omp teams]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+teams\s+(?!distribute)"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "default",
                "firstprivate",
                "num_teams",
                "private",
                "reduction",
                "shared",
                "thread_limit",
            ]
