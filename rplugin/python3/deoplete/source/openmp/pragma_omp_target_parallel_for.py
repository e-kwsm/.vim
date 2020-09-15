import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "openmp.pragma_omp_target_parallel_for"
        self.mark = "[omp target parallel for]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+target\s+parallel\s+for\s+(?!simd)"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "collapse",
                "default",
                "defaultmap",
                "depend",
                "device",
                "firstprivate",
                "if",
                "is_device_ptr",
                "lastprivate",
                "linear",
                "map",
                "nowait",
                "num_threads",
                "ordered",
                "private",
                "proc_bind",
                "reduction",
                "schedule",
                "shared",
            ]
