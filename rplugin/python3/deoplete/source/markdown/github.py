import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "markdown.github"
        self.mark = "[GitHub]"
        self.filetypes = ["markdown"]
        self.input_pattern = r"^\s*```"
        self._candidate = [
            "C",
            "C++",
            "CMake",
            "CSV",
            "Diff",
            "Fortran",
            "Gnuplot",
            "INI",
            "Makefile",
            "Markdown",
            "Python console",
            "Python",
            "SVG",
            "Shell",
            "ShellSession",
            "TOML",
            "TSV",
            "TeX",
            "Vim Snippet",
            "Vim script",
            "XML",
            "YAML",
            "bash",
            "latex",
            "reStructuredText",
            "rst",
            "sh",
            "vim",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidate
