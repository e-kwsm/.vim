import re
import subprocess
from pathlib import Path
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "modulefile"
        self.mark = "[modulefile]"
        self.filetypes = ["module"]
        self.input_pattern = r"^\s*module\s+(?:" + "|".join([
            "add",
            "conflict",
            "display",
            "help",
            "initadd",
            "initprepend",
            "initrm",
            "initswitch",
            "is-loaded",
            "load",
            "prereq",
            "rm",
            "show",
            "swap",
            "switch",
            "unload",
        ]) + r")\s+"

        self._candidates = []
        try:
            p = subprocess.run("modulecmd python avail -t".split(),
                               stdout=subprocess.DEVNULL,
                               stderr=subprocess.PIPE, universal_newlines=True)
        except Exception:
            return

        d = None
        for m in p.stderr.splitlines():
            if m.endswith(":"):
                d = m[:-1]
                continue
            for p in list(Path(m).parents)[-2::-1]:
                self._candidates += [{
                    "word": str(p),
                    "kind": d or "",
                }]
            self._candidates += [{
                "word": m,
                "kind": d or "",
            }]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
