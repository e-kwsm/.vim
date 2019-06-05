import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cls"
        self.mark = "[cls]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\(?:" + "|".join([
            "documentclass",
            "LoadClass",
            "LoadClassWithOptions",
            "PassOptionsToClass",
        ]) + r")(?:\[.*?\])?\{[\w-]*$"
        self.rank = 800

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "article",
                "beamer",
                "book",
                "europasscv",
                "europecv",
                "jlreq",
                "lltxdoc",
                "ltxguidex",
                "minimal",
                "report",
                "scrartcl",
                "scrbook",
                "scrreprt",
                "standalone",
                "subfiles",
            ]
