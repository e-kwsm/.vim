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
                "figurename",
                "footnotesize",
                "insertsection",
                "insertsubsection",
                "insertsubsubsection",
                "medskip",
                "newpage",
                "normalsize",
                "operatorname",
                "paperheight",
                "paperwidth",
                "scriptsize",
                "smallskip",
                "tablename",
                "textasciitilde",
                "textbigcircle",
                "textbullet",
                "textheight",
                "textsubscript",
                "textsuperscript",
                "textwidth",
                ]
