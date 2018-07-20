from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "module env var"
        self.mark = "[env var]"
        self.filetypes = ["module"]
        self.input_pattern = r"((prepend|append|remove)-path|(un)?setenv)\s"

    def gather_candidates(self, context):
        return [
            "CPATH",
            "CPLUS_INCLUDE_PATH",
            "LD_LIBRARY_PATH",
            "LD_RUN_PATH",
            "LIBRARY_PATH",
            "MANPATH",
            "PATH",
            "PKG_CONFIG_PATH",
        ]
