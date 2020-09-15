from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "svg.attr_value"
        self.mark = "[attr val]"
        self.filetypes = ["svg"]
        self._candidates = [
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
            "spacingAndGlyphs",
            "square",
            "translate",
        ]

    def gather_candidates(self, context):
        return self._candidates
