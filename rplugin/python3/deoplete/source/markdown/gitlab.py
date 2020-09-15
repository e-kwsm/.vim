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
            "bash",
            "c",
            "cmake",
            "cpp",
            "diff",
            "fortran",
            "ini",
            "latex",
            "make",
            "python",
            "sh",
            "shell",
            "tex",
            "toml",
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
