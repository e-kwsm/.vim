# vi: fdm=marker fmr=[,]
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "env"
        self.mark = "[env]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\(begin|end|renewenvironment)\{"
        self.rank = 800
        pkgenvs = {
            "": [
                "description",
                "document",
                "enumerate",
                "figure",
                "itemize",
                "table",
                "tabular",
                "verbatim",
            ],
            "amsmath": [
                "Bmatrix",
                "Pmatrix",
                "Vmatrix",
                "align",
                "align*",
                "alignat",
                "alignat*",
                "bmatrix",
                "cases",
                "equation",
                "equation*",
                "flalign",
                "flalign*",
                "gather",
                "gather*",
                "gathered",
                "aligned",
                "alignedat",
                "multline",
                "multline*",
                "pmatrix",
                "split",
                "vmatrix",
            ],
            "beamer": [
                "Beweis",
                "Corollary",
                "Definition",
                "Example",
                "Examples",
                "Itemize",
                "Lemma",
                "Problem",
                "Proof",
                "Theorem",
                "abstract",
                "alertblock",
                "alertenv",
                "beamercolorbox",
                "block",
                "boldequation",
                "boldequation*",
                "column",
                "columns",
                "columnsonlytextwidth",
                "enumstep",
                "exampleblock",
                "figure",
                "frame",
                "invisibleenv",
                "itemstep",
                "notes",
                "onlyenv",
                "overlayarea",
                "overprint",
                "pauses",
                "quotation",
                "quote",
                "semiverbatim",
                "slide",
                "slide*",
                "structureenv",
                "table",
                "thebibliography",
                "uncoverenv",
                "verse",
                "visibleenv",
            ],
            "filecontents": [
                "filecontents",
            ],
            "listings": [
                "lstlisting",
            ],
            "tcolorbox": [
                "tcolorbox",
            ],
            "tikz": [
                "tikzpicture",
            ],
        }
        self._candidates = []
        for pkg, envs in pkgenvs.items():
            for env in envs:
                self._candidates += [{
                    "word": env,
                    "kind": pkg,
                }]

    def gather_candidates(self, context):
        return self._candidates
