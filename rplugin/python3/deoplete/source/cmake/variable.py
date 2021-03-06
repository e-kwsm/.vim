from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.variable"
        self.mark = "[variable]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\b(?:\$\{)?[A-Za-z0-9_]*$"
        self.rank = 400
        self._candidates = [
            "BUILD_SHARED_LIBS",
            "CMAKE_BINARY_DIR",
            "CMAKE_BUILD_TOOL",
            "CMAKE_BUILD_TYPE",
            "CMAKE_COMMAND",
            "CMAKE_CONFIGURATION_TYPES",
            "CMAKE_CURRENT_BINARY_DIR",
            "CMAKE_CURRENT_FUNCTION",
            "CMAKE_CURRENT_FUNCTION_LIST_DIR",
            "CMAKE_CURRENT_FUNCTION_LIST_FILE",
            "CMAKE_CURRENT_FUNCTION_LIST_LINE",
            "CMAKE_CURRENT_SOURCE_DIR",
            "CMAKE_CXX_CLANG_TIDY",
            "CMAKE_CXX_COMPILER",
            "CMAKE_CXX_COMPILER_ID",
            "CMAKE_CXX_COMPILER_LOADED",
            "CMAKE_CXX_COMPILE_FEATURES",
            "CMAKE_CXX_EXTENSIONS",
            "CMAKE_CXX_FLAGS",
            "CMAKE_CXX_LINKER_WRAPPER_FLAG",
            "CMAKE_CXX_LINKER_WRAPPER_FLAG_SEP",
            "CMAKE_CXX_STANDARD",
            "CMAKE_CXX_STANDARD_REQUIRED",
            "CMAKE_C_CLANG_TIDY",
            "CMAKE_C_COMPILER",
            "CMAKE_C_COMPILER_ID",
            "CMAKE_C_COMPILER_LOADED",
            "CMAKE_C_COMPILE_FEATURES",
            "CMAKE_C_EXTENSIONS",
            "CMAKE_C_FLAGS",
            "CMAKE_C_LINKER_WRAPPER_FLAG",
            "CMAKE_C_LINKER_WRAPPER_FLAG_SEP",
            "CMAKE_C_STANDARD",
            "CMAKE_C_STANDARD_REQUIRED",
            "CMAKE_EXECUTABLE_SUFFIX",
            "CMAKE_EXECUTE_PROCESS_COMMAND_ECHO",
            "CMAKE_EXE_LINKER_FLAGS",
            "CMAKE_EXPORT_COMPILE_COMMANDS",
            "CMAKE_Fortran_COMPILER",
            "CMAKE_Fortran_COMPILER_ID",
            "CMAKE_Fortran_COMPILER_LOADED",
            "CMAKE_Fortran_FLAGS",
            "CMAKE_Fortran_LINKER_WRAPPER_FLAG",
            "CMAKE_Fortran_LINKER_WRAPPER_FLAG_SEP",
            "CMAKE_INSTALL_PREFIX",
            "CMAKE_INSTALL_PREFIX_INITIALIZED_TO_DEFAULT",
            "CMAKE_INTERPROCEDURAL_OPTIMIZATION",
            "CMAKE_LINK_SEARCH_END_STATIC",
            "CMAKE_LINK_SEARCH_START_STATIC",
            "CMAKE_MINIMUM_REQUIRED_VERSION",
            "CMAKE_MODULE_PATH",
            "CMAKE_PROJECT_NAME",
            "CMAKE_PROJECT_VERSION",
            "CMAKE_SOURCE_DIR",
            "CMAKE_TOOLCHAIN_FILE",
            "CMAKE_VERSION",
            "PROJECT_BINARY_DIR",
            "PROJECT_NAME",
            "PROJECT_SOURCE_DIR",
            "PROJECT_VERSION",
        ]

    def gather_candidates(self, context):
        return self._candidates
