from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindPython"
        self.mark = "[FindPython]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300

    def gather_candidates(self, context):
        return [
            "Python_COMPILER",
            "Python_COMPILER_ID",
            "Python_Compiler_FOUND",
            "Python_Development_FOUND",
            "Python_EXECUTABLE",
            "Python_FOUND",
            "Python_INCLUDE_DIRS",
            "Python_INTERPRETER_ID",
            "Python_Interpreter_FOUND",
            "Python_LIBRARIES",
            "Python_LIBRARY_DIRS",
            "Python_NumPy_FOUND",
            "Python_NumPy_INCLUDE_DIRS",
            "Python_NumPy_VERSION",
            "Python_RUNTIME_LIBRARY_DIRS",
            "Python_SITEARCH",
            "Python_SITELIB",
            "Python_STDARCH",
            "Python_STDLIB",
            "Python_VERSION",
            "Python_VERSION_MAJOR",
            "Python_VERSION_MINOR",
            "Python_VERSION_PATCH",
        ]
