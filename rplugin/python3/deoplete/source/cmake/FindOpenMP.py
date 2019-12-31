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

        for v in [
                "OpenMP_{lang}_FLAGS",
                "OpenMP_{lang}_FOUND",
                "OpenMP_{lang}_INCLUDE_DIRS",
                "OpenMP_{lang}_LIBRARIES",
                "OpenMP_{lang}_LIB_NAMES",
                "OpenMP_{lang}_SPEC_DATE",
                "OpenMP_{lang}_VERSION",
                "OpenMP_{lang}_VERSION_MAJOR",
                "OpenMP_{lang}_VERSION_MINOR",
        ]:
            for lang in ["C", "CXX", "Fortran"]:
                self._candidates += [v.format(lang=lang)]

        self._candidates.sort()

    def gather_candidates(self, context):
        return self._candidates
