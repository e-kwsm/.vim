import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "openmp.pragma_omp_for_simd"
        self.mark = "[omp for simd]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+for\s+simd\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "aligned",
                "collapse",
                "firstprivate",
                "lastprivate",
                "linear",
                "nowait",
                "ordered",
                "private",
                "reduction",
                "safelen",
                "schedule",
                "simdlen",
            ]
