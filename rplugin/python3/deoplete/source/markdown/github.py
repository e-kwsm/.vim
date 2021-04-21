import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "markdown.github"
        self.mark = "[GitHub]"
        self.filetypes = ["markdown"]
        self.input_pattern = r"^\s*```\w*$"
        self.rank *= 3

        # https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
        self._candidate = [
            "bash",
            "C",
            "C++",
            "CMake",
            "CSV",
            "Diff",
            "Fortran",
            "Gnuplot",
            "INI",
            "latex",
            "Makefile",
            "Markdown",
            "Python console",
            "Python",
            "reStructuredText",
            "rst",
            "sh",
            "Shell",
            "ShellSession",
            "SVG",
            "TeX",
            "TOML",
            "TSV",
            "Vim script",
            "Vim Snippet",
            "vim",
            "XML",
            "YAML",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidate
