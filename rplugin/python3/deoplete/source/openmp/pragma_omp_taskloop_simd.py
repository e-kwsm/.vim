import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "openmp.pragma_omp_taskloop_simd"
        self.mark = "[omp taskloop simd]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+taskloop\s+simd\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "aligned",
                "collapse",
                "default",
                "final",
                "firstprivate",
                "grainsize",
                "if",
                "lastprivate",
                "linear",
                "mergeable",
                "nogroup",
                "num_tasks",
                "priority",
                "private",
                "reduction",
                "safelen",
                "shared",
                "simdlen",
                "untied",
            ]
