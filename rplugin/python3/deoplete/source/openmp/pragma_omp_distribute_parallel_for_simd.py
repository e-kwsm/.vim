import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp distribute parallel for simd"
        self.mark = "[omp distribute parallel for simd]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+distribute\s+parallel\s+for\s+simd\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "aligned",
                "collapse",
                "copyin",
                "default",
                "dist_schedule",
                "firstprivate",
                "if",
                "lastprivate",
                "linear",
                "num_threads",
                "ordered",
                "private",
                "proc_bind",
                "reduction",
                "safelen",
                "schedule",
                "shared",
                "simdlen",
            ]
