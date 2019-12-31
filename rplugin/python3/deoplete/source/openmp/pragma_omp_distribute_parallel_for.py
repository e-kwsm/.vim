import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp distribute parallel for"
        self.mark = "[omp distribute parallel for]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+distribute\s+parallel\s+for\s+(?!simd)"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
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
                "schedule",
                "shared",
            ]
