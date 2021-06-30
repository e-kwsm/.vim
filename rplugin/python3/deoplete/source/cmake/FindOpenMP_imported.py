from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindOpenMP_imported"
        self.mark = "[FindOpenMP]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\bOpenMP::\w*"
        self.rank = 300

        self._candidates = [
            "OpenMP_C",
            "OpenMP_CXX",
            "OpenMP_Fortran",
        ]

    def gather_candidates(self, context):
        return self._candidates
