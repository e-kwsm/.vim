from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindMPI_imported"
        self.mark = "[FindMPI]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\bMPI::\w*"
        self.rank = 300

        self._candidates = [
            "MPI_C",
            "MPI_CXX",
            "MPI_Fortran",
        ]

    def gather_candidates(self, context):
        return self._candidates
