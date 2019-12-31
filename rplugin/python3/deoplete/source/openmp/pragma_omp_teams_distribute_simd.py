import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp teams distribute simd"
        self.mark = "[omp teams distribute simd]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+teams\s+distribute\s+simd\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "aligned",
                "collapse",
                "default",
                "dist_schedule",
                "firstprivate",
                "lastprivate",
                "linear",
                "num_teams",
                "private",
                "reduction",
                "safelen",
                "shared",
                "simdlen",
                "thread_limit",
            ]
