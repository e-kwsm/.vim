import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp target teams distribute parallel for simd"
        self.mark = "[omp target teams distribute parallel for simd]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+target\s+teams\s+distribute\s+parallel\s+for\s+simd\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "aligned",
                "collapse",
                "copyin",
                "default",
                "defaultmap",
                "depend",
                "device",
                "dist_schedule",
                "firstprivate",
                "if",
                "is_device_ptr",
                "lastprivate",
                "linear",
                "map",
                "nowait",
                "num_teams",
                "num_threads",
                "ordered",
                "private",
                "proc_bind",
                "reduction",
                "safelen",
                "schedule",
                "shared",
                "simdlen",
                "thread_limit",
            ]
