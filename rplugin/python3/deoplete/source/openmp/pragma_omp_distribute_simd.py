import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "openmp.pragma_omp_distribute_simd"
        self.mark = "[omp distribute simd]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+distribute\s+simd\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "aligned",
                "collapse",
                "dist_schedule",
                "firstprivate",
                "lastprivate",
                "linear",
                "private",
                "reduction",
                "safelen",
                "simdlen",
            ]
