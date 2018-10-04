from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "bib.type"
        self.mark = "[bib.type]"
        self.filetypes = ["bib"]
        self.input_pattern = r"^@[a-z]*$"

    def gather_candidates(self, context):
        return [
            "article",
            "artwork",
            "audio",
            "bibnote",
            "book",
            "bookinbook",
            "booklet",
            "collection",
            "commentary",
            "customa",
            "customb",
            "customc",
            "customd",
            "custome",
            "customf",
            "image",
            "inbook",
            "incollection",
            "inproceedings",
            "inreference",
            "jurisdiction",
            "legal",
            "legislation",
            "letter",
            "manual",
            "misc",
            "movie",
            "music",
            "mvbook",
            "mvcollection",
            "mvproceedings",
            "mvreference",
            "online",
            "patent",
            "performance",
            "periodical",
            "proceedings",
            "reference",
            "report",
            "review",
            "set",
            "software",
            "standard",
            "suppbook",
            "suppcollection",
            "suppperiodical",
            "thesis",
            "unpublished",
            "video",
        ]
