from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindBLAS"
        self.mark = "[FindBLAS]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300
        self._candidates = [
            "BLAS95_FOUND",
            "BLAS95_LIBRARIES",
            "BLAS_FOUND",
            "BLAS_LIBRARIES",
            "BLAS_LINKER_FLAGS",
        ]

    def gather_candidates(self, context):
        return self._candidates
