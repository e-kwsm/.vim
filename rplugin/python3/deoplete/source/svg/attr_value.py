from .base import Base

class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "attr val"
        self.mark = "[attr val]"
        self.filetypes = ["svg"]

    def gather_candidates(self, context):
        return [
                "butt",
                "evenodd",
                "matrix",
                "miter",
                "none",
                "nonzero",
                "rotate",
                "scale",
                "skewX",
                "skewY",
                "spacing",
                "spacingAndGlyphs"
                "square",
                "translate",
                ]
