import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "module.variable"
        self.mark = "[variable]"
        self.filetypes = ["module"]
        self.input_pattern = (
            r"^\s*(?:"
            + "|".join(
                ["append-path", "prepend-path", "remove-path"]
            )
            + r")\s+\w*$"
        )
        self.rank = 600
        self._candidates = [
            "CPATH",
            "CPLUS_INCLUDE_PATH",
            "C_INCLUDE_PATH",
            "LD_LIBRARY_PATH",
            "LD_RUN_PATH",
            "LIBRARY_PATH",
            "MANPATH",
            "PATH",
            "PKG_CONFIG_PATH",
            "PYTHONPATH",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
