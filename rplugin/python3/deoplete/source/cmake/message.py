import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.message"
        self.mark = "[message]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"^\s*{}\(\w*$".format(
            "".join(f"[{c}{c.upper()}]" for c in "message")
        )
        self.rank = 400
        self._candidates = [
            "AUTHOR_WARNING",
            "CHECK_FAIL",
            "CHECK_PASS",
            "CHECK_START",
            "DEBUG",
            "DEPRECATION",
            "FATAL_ERROR",
            "NOTICE",
            "SEND_ERROR",
            "STATUS",
            "TRACE",
            "VERBOSE",
            "WARNING",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
