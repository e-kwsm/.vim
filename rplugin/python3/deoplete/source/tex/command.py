from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "LaTeX cmd"
        self.mark = "[LaTeX]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\[a-zA-Z]*"
        self.rank = 1000
        pkgcmds = {
            "": [
                "Leftarrow",
                "LoadClassWithOptions",
                "NeedsTeXFormat",
                "ProvidesClass",
                "RequirePackage",
                "Rightarrow",
                "addtolength",
                "bigskip",
                "clearpage",
                "documentclass",
                "endinput",
                "figurename",
                "footnotesize",
                "framebox",
                "makebox",
                "medskip",
                "newcommand",
                "newenvironment",
                "newpage",
                "normalsize",
                "paperheight",
                "paperwidth",
                "parbox",
                "providecommand",
                "renewcommand",
                "renewenvironment",
                "savebox",
                "scriptsize",
                "setcounter",
                "smallskip",
                "suppressfloats",
                "tablename",
                "tableofcontents",
                "texorpdfstring",
                "textasciicircum",
                "textasciitilde",
                "textbigcircle",
                "textbullet",
                "textheight",
                "textsubscript",
                "textsuperscript",
                "textvisiblespace",
                "textwidth",
                "usepackage",
            ],
            "amsmath": [
                "DeclareMathOperator",
                "Longleftarrow",
                "Longleftrightarrow",
                "Longrightarrow",
                "boldsymbol",
                "intertext",
                "longleftarrow",
                "longleftrightarrow",
                "longmapsto",
                "longrightarrow",
                "mapsto",
                "operatorname",
            ],
            "beamer": [
                "defbeamertemplate",
                "insertsection",
                "insertsubsection",
                "insertsubsubsection",
                "setbeamercolor",
                "setbeamerfont",
                "setbeamersize",
                "setbeamertemplate",
                "usebackgroundtemplate",
                "usebeamercolor",
                "usebeamerfont",
                "usebeamertemplate",
                "usecolortheme",
                "usefonttheme",
                "useinnertheme",
                "useoutertheme",
            ],
            "BibLaTeX": [
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
            ],
        }
        self._candidates = []
        for pkg, cmds in pkgcmds.items():
            for cmd in cmds:
                self._candidates += [{
                    "word": cmd,
                    "kind": pkg,
                    "abbr": "\\" + cmd,
                }]

    def gather_candidates(self, context):
        return self._candidates
