from pathlib import Path
import os
import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "lib"
        self.mark = "[lib]"
        self.filetypes = ["make"]
        self.input_pattern = r"\B-l"

        libpaths = set()
        for envvar in [
            "LD_LIBRARY_PATH",
            "LD_RUN_PATH",
            "LIBRARY_PATH",
        ]:
            libpaths.update(os.environ.get(envvar, "").split(":"))
        libs = set()
        for libpath in libpaths:
            for lib in Path(libpath).glob("lib*.so*"):
                lib = re.sub(r"^lib(\S+?)\.so(?:\.\d+)*$", r"\1", lib.name)
                libs.add(lib)

        self._candidates = [{"word": "l" + l, "abbr": "-l" + l} for l in sorted(libs)]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
