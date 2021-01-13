import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tex.package"
        self.mark = "[sty]"
        self.filetypes = ["tex"]
        self.input_pattern = (
            r"\\(?:"
            + "|".join(["usepackage", "PassOptionsToPackage", "RequirePackage"])
            + r")(?:\[.*?\])?\{\w*$"
        )
        self.rank = 1000
        self._candidates = [
            "academicons",
            "accessibility",
            "accsupp",
            "acro",
            "adjustbox",
            "algxpar",
            "amsmath",
            "amssymb",
            "biblatex",
            "bookmark",
            "booktabs",
            "chemfig",
            "cloze",
            "colorist",
            "datetime2",
            "dirtree",
            "domitian",
            "endiagram",
            "enumitem",
            "epigraph-keys",
            "erewhon",
            "expl3",
            "filecontents",
            "float",
            "fontawesome5",
            "fontspec",
            "geometry",
            "gnuplot-lua-tikz",
            "graphicx",
            "grffile",
            "gridpapers",
            "hyperref",
            "luatexja",
            "mathtools",
            "mhchem",
            "microtype",
            "minted",
            "mleftright",
            "multirow",
            "nicematrix",
            "pdfpages",
            "pgfmath",
            "physics",
            "pmboxdraw",
            "pxpic",
            "ragged2e",
            "readablecv",
            "scrlayer-scrpage",
            "shellesc",
            "siunitx",
            "subcaption",
            "subdepth",
            "subfiles",
            "tcolorbox",
            "typicons",
            "unicode-math",
            "unitconv",
            "xcolor",
            "xparse",
            "xspace",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
