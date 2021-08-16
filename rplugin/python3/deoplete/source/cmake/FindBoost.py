from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindBoost"
        self.mark = "[FindBoost]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300

        self._candidates = [
            "Boost_FOUND",
            "Boost_INCLUDE_DIRS",
            "Boost_LIBRARY_DIRS",
            "Boost_LIBRARIES",
            "Boost_VERSION_MACRO",
            "Boost_VERSION_STRING",
            "Boost_VERSION",
            "Boost_LIB_VERSION",
            "Boost_VERSION_MAJOR",
            "Boost_VERSION_MINOR",
            "Boost_VERSION_PATCH",
            "Boost_VERSION_COUNT",
        ]

        for c in [
            "atomic",
            "chrono",
            "container",
            "context",
            "contract",
            "coroutine",
            "date_time",
            "exception",
            "fiber",
            "filesystem",
            "graph",
            "graph_parallel",
            "iostreams",
            "locale",
            "log",
            "log_setup",
            "math_c99",
            "math_c99f",
            "math_c99l",
            "math_tr1",
            "math_tr1f",
            "math_tr1l",
            "mpi",
            "mpi_python",
            "nowide",
            "numpy35",
            "numpy36",
            "numpy37",
            "numpy38",
            "numpy39",
            "prg_exec_monitor",
            "program_options",
            "python35",
            "python36",
            "python37",
            "python38",
            "python39",
            "random",
            "regex",
            "serialization",
            "stacktrace_addr2line",
            "stacktrace_backtrace",
            "stacktrace_basic",
            "stacktrace_noop",
            "system",
            "thread",
            "timer",
            "type_erasure",
            "unit_test_framework",
            "wave",
            "wserialization",
        ]:
            self._candidates += [
                f"Boost_{c.upper()}_FOUND",
                f"Boost_{c.upper()}_LIBRARY",
            ]

    def gather_candidates(self, context):
        return self._candidates
