from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindLAPACK"
        self.mark = "[FindLAPACK]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300

    def gather_candidates(self, context):
        return [
            "LAPACK95_FOUND",
            "LAPACK95_LIBRARIES",
            "LAPACK_FOUND",
            "LAPACK_LIBRARIES",
            "LAPACK_LINKER_FLAGS",
        ]
