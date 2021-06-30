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
            "diagnostic_definitions",
        ]

        self._candidates += [
            "atomic",
            "chrono",
            "container",
            "context",
            "contract",
            "coroutine",
            "time",
            "exception",
            "fiber",
            "filesystem",
            "graph",
            "iostreams",
            "locale",
            "log",
            "setup",
            "c99",
            "c99f",
            "c99l",
            "tr1",
            "tr1f",
            "tr1l",
            "monitor",
            "options",
            "python35",
            "python36",
            "python37",
            "python38",
            "random",
            "regex",
            "serialization",
            "stacktrace_addr2line",
            "stacktrace_backtrace",
            "stacktrace_basic",
            "stacktrace_noop",
            "system",
            "test_exec_monitor",
            "thread",
            "timer",
            "type_erasure",
            "unit_test_framework",
            "wave",
            "wserialization",
        ]

    def gather_candidates(self, context):
        return self._candidates
