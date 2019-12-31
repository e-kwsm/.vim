import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp ordered"
        self.mark = "[omp ordered]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+ordered\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "depend",
                "simd",
                "threads",
            ]
