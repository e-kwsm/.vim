from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindBLAS"
        self.mark = "[FindBLAS]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300

    def gather_candidates(self, context):
        return [
            "BLAS95_FOUND",
            "BLAS95_LIBRARIES",
            "BLAS_FOUND",
            "BLAS_LIBRARIES",
            "BLAS_LINKER_FLAGS",
        ]
