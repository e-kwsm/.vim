import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "GFM"
        self.mark = "[GFM]"
        self.filetypes = ["markdown"]
        self.input_pattern = r"^\s*```"
        self._candidate = []
        for lang in [
            "C",
            "C++",
            "CMake",
            "CSV",
            "Diff",
            "Gnuplot",
            "INI",
            "JSON",
            "Makefile",
            "Markdown",
            "Pep8",
            "Public Key",
            "Python console",
            "Python",
            "SQL",
            "SVG",
            "Shell",
            "ShellSession",
            "TOML",
            "TeX",
            "Text",
            "Vim script",
            "XML",
            "YAML",
            "bash session",
            "bash",
            "console",
            "cpp",
            "latex",
            "make",
            "nvim",
            "pycon",
            "python3",
            "sh",
            "vim",
            "viml",
            "yml",
            "zsh",
        ]:
            self._candidate += [lang]
            if not lang.islower():
                self._candidate += [lang.lower()]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidate
