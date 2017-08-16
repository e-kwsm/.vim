from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "TeX"
        self.mark = "[TeX]"
        self.filetypes = ["tex"]

    def gather_candidates(self, context):
        return [
            "DeclareMathOperator",
            "bigskip",
            "boldsymbol",
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
            "tableofcontents",
            "textasciitilde",
            "textbigcircle",
            "textbullet",
            "textheight",
            "textsubscript",
            "textsuperscript",
            "textwidth",
        ]
