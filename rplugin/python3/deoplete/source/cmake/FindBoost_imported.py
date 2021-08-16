from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindBoost_imported"
        self.mark = "[FindBoost]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\bboost::\w*"
        self.rank = 300

        self._candidates = [
            "boost",
            "headers",
        ]

        self._candidates += [
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
        ]

    def gather_candidates(self, context):
        return self._candidates
