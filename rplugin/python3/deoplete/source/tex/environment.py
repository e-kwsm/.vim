from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "env"
        self.mark = "[env]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\(begin|end|renewenvironment)\{\w*"
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
                "bmatrix",
                "cases",
                "pmatrix",
                "vmatrix",
            ],
            "beamer": [
                "alertblock",
                "block",
                "column",
                "columns",
                "exampleblock",
                "frame",
                "overlayarea",
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
