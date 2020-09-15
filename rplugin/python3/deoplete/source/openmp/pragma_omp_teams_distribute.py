import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "openmp.pragma_omp_teams_distribute"
        self.mark = "[omp teams distribute]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+teams\s+distribute\s+(?!parallel|simd)"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "collapse",
                "default",
                "dist_schedule",
                "firstprivate",
                "lastprivate",
                "num_teams",
                "private",
                "reduction",
                "shared",
                "thread_limit",
            ]
