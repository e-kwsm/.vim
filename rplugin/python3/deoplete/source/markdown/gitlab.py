import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "markdown.gitlab"
        self.mark = "[GitLab]"
        self.filetypes = ["markdown"]
        self.input_pattern = r"^\s*```"

        # rouge
        self._candidate = [
            "awk",
            "bibtex",
            "c",
            "cmake",
            "console",
            "cpp",
            "diff",
            "fortran",
            "html",
            "make",
            "markdown",
            "python",
            "shell",
            "tex",
            "toml",
            "viml",
            "xml",
            "yaml",
        ]
        self._candidate += [
            "math",
            "mermaid",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidate
