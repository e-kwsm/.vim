# vi: fdm=marker fmr=[,]
import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tex.environment"
        self.mark = "[env]"
        self.filetypes = ["tex"]
        self.input_pattern = (
            r"\\(?:" + "|".join(["begin", "end", "renewenvironment"]) + r")\{[A-Za-z]*$"
        )
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
            "adjustbox": [
                "adjustbox",
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
            "biblatex": [
                "refcontext",
                "refsection",
                "refsegment",
            ],
            "filecontents": [
                "filecontents",
            ],
            "listings": [
                "lstlisting",
            ],
            "mathtools": [
                "Bmatrix*",
                "Vmatrix*",
                "bmatrix*",
                "cases*",
                "dcases",
                "dcases*",
                "drcases",
                "drcases*",
                "lgathered",
                "matrix*",
                "pmatrix*",
                "rcases",
                "rcases*",
                "rgathered",
                "vmatrix*",
                #"Bsmallmatrix",
                #"Bsmallmatrix*",
                #"Vsmallmatrix",
                #"Vsmallmatrix*",
                #"bsmallmatrix",
                #"bsmallmatrix*",
                #"multilined",
                #"psmallmatrix",
                #"psmallmatrix*",
                #"smallmatrix*",
                #"spreadlines",
                #"vsmallmatrix",
                #"vsmallmatrix*",
            ],
            "minted": [
                "listing",
                "minted",
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
                self._candidates += [{"word": env, "kind": pkg}]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
