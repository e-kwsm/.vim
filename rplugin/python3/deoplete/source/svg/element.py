from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "elem"
        self.mark = "[elem]"
        self.filetypes = ["svg"]
        self.rank = 500
        self.pattern = r"</?\w*$"

    def gather_candidates(self, context):
        return [
            "a"
            "animate",
            "animateMotion",
            "animateTransform",
            "audio",
            "canvas",
            "circle",
            "clipPath",
            "defs",
            "desc",
            "discard",
            "ellipse",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feDropShadow",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "filter",
            "foreignObject",
            "g",
            "iframe",
            "image",
            "line",
            "linearGradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "script",
            "set",
            "stop",
            "style",
            "svg",
            "switch",
            "symbol",
            "text",
            "textPath",
            "title",
            "tspan",
            "unknown",
            "use",
            "video",
            "view",
        ]
