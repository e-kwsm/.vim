import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "sty"
        self.mark = "[sty]"
        self.filetypes = ["tex"]
        self.input_pattern = (
            r"\\(?:"
            + "|".join(["usepackage", "PassOptionsToPackage", "RequirePackage"])
            + r")(?:\[.*?\])?\{[\w.-]*$"
        )
        self.rank = 1000

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "academicons",
                "acro",
                "adjustbox",
                "amsmath",
                "amssymb",
                "biblatex",
                "booktabs",
                "chemfig",
                "datetime2",
                "dirtree",
                "enumitem",
                "expl3",
                "filecontents",
                "float",
                "fontawesome5",
                "fontspec",
                "geometry",
                "gnuplot-lua-tikz",
                "graphicx",
                "grffile",
                "hyperref",
                "luatexja",
                "mathtools",
                "mhchem",
                "minted",
                "mleftright",
                "multirow",
                "nicematrix",
                "pdfpages",
                "pgfmath",
                "physics",
                "ragged2e",
                "scrlayer-scrpage",
                "siunitx",
                "subcaption",
                "subdepth",
                "subfiles",
                "tcolorbox",
                "typicons",
                "unicode-math",
                "xcolor",
                "xeCJK",
                "xparse",
                "xspace",
            ]
