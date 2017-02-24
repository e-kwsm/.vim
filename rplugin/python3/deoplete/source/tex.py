from .base import Base

class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "TeX"
        self.mark = "[TeX]"
        self.filetypes = ["tex"]

    def gather_candidates(self, context):
        return [
                "bigskip",
                "clearpage",
                "endinput",
                "footnotesize",
                "medskip",
                "normalsize",
                "paperheight",
                "paperwidth",
                "scriptsize",
                "smallskip",
                "textheight",
                "textwidth",
                ]
