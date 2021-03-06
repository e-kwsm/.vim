import re
import subprocess
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.find_package"
        self.mark = "[find_package]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"^\s*{}\(\w*$".format(
            "".join(f"[{c}{c.upper()}]" for c in "find_package")
        )
        self.rank = 400

        try:
            proc = subprocess.run(
                ["cmake", "--help-module-list"],
                stdout=subprocess.PIPE,
                universal_newlines=True,
            )
        except Exception:
            self._candidates = []
        else:
            self._candidates = [
                re.sub("^Find", "", p)
                for p in proc.stdout.splitlines()
                if p.startswith("Find")
            ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
