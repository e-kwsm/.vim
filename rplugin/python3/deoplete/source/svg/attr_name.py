from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "attr"
        self.mark = "[attr]"
        self.filetypes = ["svg"]

    def gather_candidates(self, context):
        return [
            "baseline-shift",
            "fill",
            "fill-opacity",
            "fill-rule",
            "font-family",
            "font-size",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "height",
            "lengthAdjust",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerHeight",
            "markerUnits",
            "markerWidth",
            "preserveAspectRatio",
            "repeatCount",
            "rotate",
            "stroke",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "style",
            "text-anchor",
            "textLength",
            "transform",
            "tref",
            "tspan",
            "viewBox",
            "width",
            "xlink",
            "xlink:href",
            "xml:space",
            "xmlns",
        ]
