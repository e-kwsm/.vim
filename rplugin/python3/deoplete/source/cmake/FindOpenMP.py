from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindOpenMP"
        self.mark = "[FindOpenMP]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300

        self._candidates = [
            "OpenMP_FOUND",
            "OpenMP_VERSION",
            "OpenMP_Fortran_HAVE_OMPLIB_HEADER",
            "OpenMP_Fortran_HAVE_OMPLIB_MODULE",
        ]

        for lang in ["C", "CXX", "Fortran"]:
            self._candidates += [
                f"OpenMP_{lang}_FLAGS",
                f"OpenMP_{lang}_FOUND",
                f"OpenMP_{lang}_INCLUDE_DIRS",
                f"OpenMP_{lang}_LIBRARIES",
                f"OpenMP_{lang}_LIB_NAMES",
                f"OpenMP_{lang}_SPEC_DATE",
                f"OpenMP_{lang}_VERSION",
                f"OpenMP_{lang}_VERSION_MAJOR",
                f"OpenMP_{lang}_VERSION_MINOR",
            ]

        self._candidates.sort()

    def gather_candidates(self, context):
        return self._candidates
