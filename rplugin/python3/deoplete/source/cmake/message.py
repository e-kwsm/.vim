import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.message"
        self.mark = "[message]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"^\s*{}\(\w*$".format("".join(
            f"[{c}{c.upper()}]" for c in "message"
        ))
        self.rank = 400

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "AUTHOR_WARNING",
                "DEPRECATION",
                "FATAL_ERROR",
                "SEND_ERROR",
                "STATUS",
                "WARNING",
            ]
