import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp task"
        self.mark = "[omp task]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+task\s+"
        self.rank = 500

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "default",
                "depend",
                "final",
                "firstprivate",
                "if",
                "mergeable",
                "priority",
                "private",
                "shared",
                "untied",
            ]
