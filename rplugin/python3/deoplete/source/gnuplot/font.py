import re
import subprocess
from shlex import split
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "gnuplot.font"
        self.mark = "[font]"
        self.filetypes = ["gnuplot"]
        self.input_pattern = r"""\bfont\s+['"]\S*"""
        self.rank = 200

        proc = subprocess.run(split("fc-list --format '%{family[0]}\n'"),
                              stdout=subprocess.PIPE, universal_newlines=True)
        self._candidates = sorted(set(proc.stdout.splitlines()))

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
