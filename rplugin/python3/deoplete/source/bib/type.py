from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "bib.type"
        self.mark = "[bib.type]"
        self.filetypes = ["bib"]
        self.input_pattern = r"^\s*@[a-zA-Z]*$"
        self.rank = 400
        self._candidates = [
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

    def gather_candidates(self, context):
        return self._candidates
