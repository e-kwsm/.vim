from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "module commands"
        self.mark = "[cmd]"
        self.filetypes = ["tcl"]

    def gather_candidates(self, context):
        return [
            "append-path",
            "chdir",
            "conflict",
            "exit",
            "is-loaded",
            "module-info",
            "module-version",
            "module-whatis",
            "prepend-path",
            "prereq",
            "remove-path",
            "set-alias",
            "setenv",
            "unsetenv",
        ]
