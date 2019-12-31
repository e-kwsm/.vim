import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "OpenMP directive"
        self.mark = "[omp]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+\w*$"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "atomic",
                "barrier",
                "cancel",
                "cancellation point",
                "critical",
                "declare reduction",
                "declare simd",
                "declare target",
                "distribute parallel for simd",
                "distribute parallel for",
                "distribute simd",
                "distribute",
                "end declare target",
                "flush",
                "for",
                "master",
                "ordered",
                "parallel for simd",
                "parallel for",
                "parallel sections",
                "parallel",
                "section",
                "sections",
                "simd"
                "single",
                "target data",
                "target enter data",
                "target exit data",
                "target parallel for simd",
                "target parallel for",
                "target parallel",
                "target simd",
                "target teams distribute parallel for simd",
                "target teams distribute parallel for",
                "target teams distribute simd",
                "target teams distribute",
                "target teams",
                "target update",
                "target",
                "task",
                "taskgroup",
                "taskloop simd",
                "taskloop",
                "taskwait",
                "taskyield",
                "teams distribute parallel for simd",
                "teams distribute parallel for",
                "teams distribute simd",
                "teams distribute",
                "teams",
                "threadprivate",
            ]
