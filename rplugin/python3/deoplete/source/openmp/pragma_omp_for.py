import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp for"
        self.mark = "[omp for]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+for\s+(?!simd)"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "collapse",
                "firstprivate",
                "lastprivate",
                "linear",
                "nowait",
                "ordered",
                "private",
                "reduction",
                "schedule",
            ]
