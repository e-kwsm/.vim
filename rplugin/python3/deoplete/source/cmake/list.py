import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.list"
        self.mark = "[list]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"^\s*{}\(\w*$".format("".join(
            f"[{c}{c.upper()}]" for c in "list"
        ))
        self.rank = 400

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "APPEND",
                "FILTER",
                "FIND",
                "GET",
                "INSERT",
                "JOIN",
                "LENGTH",
                "POP_BACK",
                "POP_FRONT",
                "PREPEND",
                "REMOVE_AT",
                "REMOVE_DUPLICATES",
                "REMOVE_ITEM",
                "REVERSE",
                "SORT",
                "SUBLIST",
                "TRANSFORM",
            ]
