import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp target"
        self.mark = "[omp target]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+target\s+(?!data|enter|exit|parallel|simd|teams|update)"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "defaultmap",
                "depend",
                "device",
                "firstprivate",
                "if",
                "is_device_ptr",
                "map",
                "nowait",
                "private",
            ]
