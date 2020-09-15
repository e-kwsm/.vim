from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindPkgConfig"
        self.mark = "[FindPkgConfig]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300
        self._candidates = [
            "PKG_CONFIG_EXECUTABLE",
            "PKG_CONFIG_FOUND",
            "PKG_CONFIG_VERSION_STRING",
        ]

    def gather_candidates(self, context):
        return self._candidates
