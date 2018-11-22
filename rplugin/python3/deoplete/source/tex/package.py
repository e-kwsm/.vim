import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "sty"
        self.mark = "[sty]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\(?:usepackage|PassOptionsToPackage|RequirePackage)(?:\[.*?\])?" \
                r"\{[\w.-]*(?:,\s*[\w.-]*)*$"
        self.rank = 1000

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "academicons",
                "adjustbox",
                "amsmath",
                "amssymb",
                "biblatex",
                "booktabs",
                "chemfig",
                "enumitem",
                "expl3",
                "filecontents",
                "float",
                "fontawesome",
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
                "multirow",
                "nicematrix",
                "pdfpages",
                "physics",
                "shellesc",
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
