import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp taskloop"
        self.mark = "[omp taskloop]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+taskloop\s+(?!simd)"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "collapse",
                "default",
                "final",
                "firstprivate",
                "grainsize",
                "if",
                "lastprivate",
                "mergeable",
                "nogroup",
                "num_tasks",
                "priority",
                "private",
                "shared",
                "untied",
            ]
