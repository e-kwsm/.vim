import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp cancellation point"
        self.mark = "[omp cancellation point]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+cancellation\s+point\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "for",
                "parallel",
                "sections",
                "taskgroup",
            ]
