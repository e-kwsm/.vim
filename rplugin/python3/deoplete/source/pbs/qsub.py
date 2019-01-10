import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "PBS directive"
        self.mark = "[PBS]"
        self.filetypes = ["sh"]
        self.input_pattern = r"^\s*#PBS\s+-\w?$"

        directive = {
            "e": "stderr path",
            "l": "resource list",
            "m": "mail events",
            "N": "job name",
            "o": "stdout path",
            "q": "destination queue",
            "S": "interpreter",
        }
        self._candidates = [{
            "word": k,
            "abbr": "-" + k,
            "menu": v,
        } for k, v in directive.items()]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
