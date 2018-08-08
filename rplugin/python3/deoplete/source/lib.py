import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "lib"
        self.mark = "[lib]"
        self.filetypes = ["make"]
        self.input_pattern = r"\B-l"
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
        if re.search(self.input_pattern, context["input"]):
            return self._candidate
