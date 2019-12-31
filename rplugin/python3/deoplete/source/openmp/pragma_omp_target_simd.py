import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp target simd"
        self.mark = "[omp target simd]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+target\s+simd\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "aligned",
                "collapse",
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
                "private",
                "reduction",
                "safelen",
                "simdlen",
            ]
