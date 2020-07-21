import re
import subprocess
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tex.font"
        self.mark = "[font]"
        self.filetypes = ["tex"]
        self.input_pattern = (
            r"\\(?:"
            + "|".join(["set(?:main|math|mono|sans)font", "IfFontExistsTF"])
            + r"){\w*$"
        )
        self.rank = 500

        try:
            proc = subprocess.run(
                ["fc-list", "--format", "%{family[0]}\n"],
                stdout=subprocess.PIPE,
                universal_newlines=True,
            )
        except Exception:
            self._candidates = []
        else:
            self._candidates = sorted(set(proc.stdout.splitlines()))

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
