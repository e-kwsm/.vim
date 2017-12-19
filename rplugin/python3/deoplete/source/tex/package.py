from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "sty"
        self.mark = "[sty]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\(usepackage|PassOptionsToPackage|RequirePackage)(\[.*\])?\{\w*"
        self.rank = 1000

    def gather_candidates(self, context):
        return [
            "FiraSans",
            "adjustbox",
            "amsmath",
            "amssymb",
            "biblatex",
            "chemfig",
            "enumitem",
            "filecontents",
            "float",
            "fontawesome",
            "geometry",
            "graphicx",
            "grffile",
            "hyperref",
            "luatex85",
            "luatexja",
            "mathtools",
            "mhchem",
            "multirow",
            "noto",
            "physics",
            "siunitx",
            "sourcecodepro",
            "sourcesanspro",
            "sourceserifspro",
            "subcaption",
            "subdepth",
            "tcolorbox",
            "typicons",
            "unicode-math",
            "xcolor",
            "xeCJK",
        ]
