import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp declare simd"
        self.mark = "[omp declare simd]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+declare\s+simd\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "aligned",
                "inbranch",
                "linear",
                "notinbranch",
                "simdlen",
                "uniform",
            ]
