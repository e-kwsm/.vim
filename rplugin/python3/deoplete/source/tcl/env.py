from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "environment variables modified by module file"
        self.mark = "[env]"
        self.filetypes = ["tcl"]

    def gather_candidates(self, context):
        return [
            "CPATH",
            "CPLUS_INCLUDE_PATH",
            "C_INCLUDE_PATH",
            "LD_LIBRARY_PATH",
            "LD_RUN_PATH",
            "LIBRARY_PATH",
            "MANPATH",
            "PATH",
        ]
