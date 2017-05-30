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
                "operatorname",
                "paperheight",
                "paperwidth",
                "printbibliography",
                "scriptsize",
                "setbeamercolor",
                "setbeamerfont",
                "setbeamersize",
                "setbeamertemplate",
                "smallskip",
                "supercite",
                "tablename",
                "textasciitilde",
                "textbigcircle",
                "textbullet",
                "textheight",
                "textsubscript",
                "textsuperscript",
                "textwidth",
                "usebeamercolor",
                "usebeamerfont",
                "usebeamertemplate",
                ]
