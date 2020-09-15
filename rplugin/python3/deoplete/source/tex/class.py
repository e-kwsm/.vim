import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tex.class"
        self.mark = "[cls]"
        self.filetypes = ["tex"]
        self.input_pattern = (
            r"\\(?:"
            + "|".join(
                [
                    "documentclass",
                    "LoadClass",
                    "LoadClassWithOptions",
                    "PassOptionsToClass",
                ]
            )
            + r")(?:\[.*?\])?\{[\w-]*$"
        )
        self.rank = 800
        self._candidates = [
            "article",
            "beamer",
            "book",
            "jlreq",
            "minimal",
            "report",
            "scrartcl",
            "scrbook",
            "scrreprt",
            "standalone",
            "subfiles",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
