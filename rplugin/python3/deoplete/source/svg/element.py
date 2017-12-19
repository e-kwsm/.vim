from .base import Base

class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "elem"
        self.mark = "[elem]"
        self.filetypes = ["svg"]

    def gather_candidates(self, context):
        return [
                "animate",
                "circle",
                "ellipse",
                "image",
                "line",
                "polygon",
                "polyline",
                "rect",
                ]
