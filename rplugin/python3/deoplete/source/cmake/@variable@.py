from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.@variable@"
        self.mark = "[cmake.variable]"
        self.input_pattern = r"@[A-Za-z0-9_]*$"
        self._candidates = [
            {"abbr": v, "word": f"{v}@"}
            for v in [
                "CMAKE_BINARY_DIR",
                "CMAKE_CURRENT_BINARY_DIR",
                "CMAKE_CURRENT_SOURCE_DIR",
                "CMAKE_INSTALL_PREFIX",
                "CMAKE_MODULE_PATH",
                "CMAKE_PROJECT_NAME",
                "CMAKE_PROJECT_VERSION",
                "CMAKE_SOURCE_DIR",
                "CMAKE_TOOLCHAIN_FILE",
                "CMAKE_VERSION",
                "PROJECT_BINARY_DIR",
                "PROJECT_NAME",
                "PROJECT_SOURCE_DIR",
                "PROJECT_VERSION",
            ]
        ]

    def gather_candidates(self, context):
        return self._candidates
