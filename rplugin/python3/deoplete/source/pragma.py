#!/usr/bin/env python3
import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma"
        self.mark = "[#pragma]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+\S*$"

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "omp",
                "once",
            ]
