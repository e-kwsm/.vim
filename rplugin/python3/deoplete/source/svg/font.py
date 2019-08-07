import subprocess
from shlex import split
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "svg.font"
        self.mark = "[font]"
        self.filetypes = ["svg"]
        self.input_pattern = r"""font-family=['"]\S*"""
        self.rank = 200

        proc = subprocess.run(split("fc-list --format '%{family[0]}\n'"),
                              stdout=subprocess.PIPE, universal_newlines=True)
        self._candidates = sorted(set(proc.stdout.splitlines()))

    def gather_candidates(self, context):
        return self._candidates
