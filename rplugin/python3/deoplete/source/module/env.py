import os
import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "module.env"
        self.mark = "[env]"
        self.filetypes = ["module"]
        self.input_pattern = r"\$::env\(\w*$"
        self.rank = 300

        self._candidates = sorted(os.environ.keys())

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
