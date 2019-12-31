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

        for v in [
                "MPI_{lang}_COMPILER",
                "MPI_{lang}_COMPILE_DEFINITIONS",
                "MPI_{lang}_COMPILE_OPTIONS",
                "MPI_{lang}_FOUND",
                "MPI_{lang}_INCLUDE_DIRS",
                "MPI_{lang}_LIBRARIES",
                "MPI_{lang}_LINK_FLAGS",
                "MPI_{lang}_VERSION",
                "MPI_{lang}_VERSION_MAJOR",
                "MPI_{lang}_VERSION_MINOR",
        ]:
            for lang in ["C", "CXX", "Fortran"]:
                self._candidates += [v.format(lang=lang)]

        self._candidates.sort()

    def gather_candidates(self, context):
        return self._candidates
