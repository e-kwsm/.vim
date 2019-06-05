import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "sty"
        self.mark = "[sty]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\(?:" + "|".join([
            "usepackage",
            "PassOptionsToPackage",
            "RequirePackage",
        ]) + r")(?:\[.*?\])?\{[\w.-]*$"
        self.rank = 1000

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "academicons",
                "adigraph",
                "adjustbox",
                "amsmath",
                "amssymb",
                "biblatex",
                "booktabs",
                "changes",
                "chemfig",
                "datetime2",
                "dirtree",
                "enumitem",
                "expl3",
                "fancypar",
                "filecontents",
                "float",
                "fontawesome",
                "fontspec",
                "fvextra",
                "geometry",
                "gnuplot-lua-tikz",
                "graphicx",
                "grffile",
                "hyperref",
                "inriafonts",
                "luamesh",
                "luatexja",
                "mathtools",
                "mhchem",
                "minted",
                "multirow",
                "nicematrix",
                "pdfpages",
                "pgfmath",
                "physics",
                "ragged2e",
                "shellesc",
                "scrlayer-scrpage",
                "siunitx",
                "spectralsequences",
                "subcaption",
                "subdepth",
                "subfiles",
                "tcolorbox",
                "tikz-imagelabels",
                "tikz-tab",
                "tikzsymbols"
                "tkz-tab",
                "todonotes",
                "typicons",
                "unicode-math",
                "xcolor",
                "xeCJK",
                "xltabular",
                "xparse",
                "xspace",
                #"latexcolors",
            ]
