from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "make"
        self.mark = "[make]"
        self.filetypes = ["make"]
        self.input_pattern = r"\b-l\w*"
        self._candidate = [{
            "word": "l" + l,
            "kind": "lib",
            "abbr": "-l" + l,
        } for l in [
            "boost_coroutine",
            "boost_date_time",
            "boost_graph",
            "boost_log",
            "boost_program_options",
            "boost_serialization",
            "boost_system",
            "boost_timer",
            "boost_unit_test_framework",
            "pthread",
            "tbb",
            "tbbmalloc",
            "tbbmalloc_proxy",
        ]]

    def gather_candidates(self, context):
        return self._candidate
