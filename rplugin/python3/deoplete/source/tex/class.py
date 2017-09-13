from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cls"
        self.mark = "[cls]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\(documentclass|LoadClass|LoadClassWithOptions|PassOptionsToClass)(\[.*\])?\{\w*"

    def gather_candidates(self, context):
        return [
            "article",
            "beamer",
            "book",
            "minimal",
            "report",
            "scrartcl",
            "scrbook",
            "scrreprt",
            "standalone",
        ]
