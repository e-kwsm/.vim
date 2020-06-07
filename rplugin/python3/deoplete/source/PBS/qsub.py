import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "PBS directive"
        self.mark = "[PBS]"
        self.filetypes = ["sh"]
        self.input_pattern = r"^\s*#PBS\s+-\w?$"

        directives = {
            "e": "stderr path",
            "l": "resource list",
            "m": "mail events",
            "N": "job name",
            "o": "stdout path",
            "q": "destination queue",
            "S": "interpreter",
        }
        self._candidates = [
            {"abbr": "-" + k, "menu": v, "word": k}
            for k, v in sorted(directives.items())
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
