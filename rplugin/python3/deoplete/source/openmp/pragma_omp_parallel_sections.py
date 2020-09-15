import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "openmp.pragma_omp_parallel_sections"
        self.mark = "[omp parallel sections]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+parallel\s+sections\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "copyin",
                "default",
                "firstprivate",
                "if",
                "lastprivate",
                "num_threads",
                "private",
                "proc_bind",
                "reduction",
                "shared",
            ]
