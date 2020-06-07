from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindMPI"
        self.mark = "[FindMPI]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300

        self._candidates = [
            "MPIEXEC_EXECUTABLE",
            "MPIEXEC_MAX_NUMPROCS",
            "MPIEXEC_NUMPROC_FLAG",
            "MPIEXEC_POSTFLAGS",
            "MPIEXEC_PREFLAGS",
            "MPI_FOUND",
            "MPI_Fortran_HAVE_F08_MODULE",
            "MPI_Fortran_HAVE_F77_HEADER",
            "MPI_Fortran_HAVE_F90_MODULE",
            "MPI_MPICXX_FOUND",
            "MPI_VERSION",
        ]

        for lang in ["C", "CXX", "Fortran"]:
            self._candidates += [
                f"MPI_{lang}_COMPILER",
                f"MPI_{lang}_COMPILE_DEFINITIONS",
                f"MPI_{lang}_COMPILE_OPTIONS",
                f"MPI_{lang}_FOUND",
                f"MPI_{lang}_INCLUDE_DIRS",
                f"MPI_{lang}_LIBRARIES",
                f"MPI_{lang}_LINK_FLAGS",
                f"MPI_{lang}_VERSION",
                f"MPI_{lang}_VERSION_MAJOR",
                f"MPI_{lang}_VERSION_MINOR",
            ]

        self._candidates.sort()

    def gather_candidates(self, context):
        return self._candidates
