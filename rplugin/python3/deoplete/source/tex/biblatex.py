from .base import Base

class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "BibLaTeX"
        self.mark = "[BibLaTeX]"
        self.filetypes = ["tex"]

    def gather_candidates(self, context):
        return [
                "Parencite",
                "addbibresource",
                "autocite",
                "citeauthor",
                "citetitle",
                "footfullcite",
                "fullcite",
                "parencite",
                "printbibliography",
                "supercite",
                ]
