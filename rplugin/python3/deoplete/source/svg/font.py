import subprocess
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "svg.font"
        self.mark = "[font]"
        self.filetypes = ["svg"]
        self.input_pattern = r"""font-family=['"]\S*"""
        self.rank = 200

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
        return self._candidates
