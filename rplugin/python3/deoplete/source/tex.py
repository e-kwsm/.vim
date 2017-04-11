from .base import Base

class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "TeX"
        self.mark = "[TeX]"
        self.filetypes = ["tex"]

    def gather_candidates(self, context):
        return [
                "addbibresource",
                "autocite",
                "bigskip",
                "clearpage",
                "endinput",
                "figurename",
                "footfullcite",
                "footnotesize",
                "insertsection",
                "insertsubsection",
                "insertsubsubsection",
                "medskip",
                "newpage",
                "normalsize",
                "paperheight",
                "paperwidth",
                "printbibliography",
                "scriptsize",
                "smallskip",
                "supercite",
                "tablename",
                "textheight",
                "textsubscript",
                "textsuperscript",
                "textwidth",
                ]
