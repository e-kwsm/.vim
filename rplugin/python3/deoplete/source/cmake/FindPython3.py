from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindPython3"
        self.mark = "[FindPython3]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300

    def gather_candidates(self, context):
        return [
            "Python3_COMPILER",
            "Python3_COMPILER_ID",
            "Python3_Compiler_FOUND",
            "Python3_Development_FOUND",
            "Python3_EXECUTABLE",
            "Python3_FOUND",
            "Python3_INCLUDE_DIRS",
            "Python3_INTERPRETER_ID",
            "Python3_Interpreter_FOUND",
            "Python3_LIBRARIES",
            "Python3_LIBRARY_DIRS",
            "Python3_NumPy_FOUND",
            "Python3_NumPy_INCLUDE_DIRS",
            "Python3_NumPy_VERSION",
            "Python3_RUNTIME_LIBRARY_DIRS",
            "Python3_SITEARCH",
            "Python3_SITELIB",
            "Python3_STDARCH",
            "Python3_STDLIB",
            "Python3_VERSION",
            "Python3_VERSION_MAJOR",
            "Python3_VERSION_MINOR",
            "Python3_VERSION_PATCH",
        ]
