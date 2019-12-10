from .base import Base


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
        ]:
            self._candidates += [
                f"Boost_{c.upper()}_FOUND",
                f"Boost_{c.upper()}_LIBRARY",
            ]

    def gather_candidates(self, context):
        return self._candidates
