import re
from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "SGE directive"
        self.mark = "[SGE]"
        self.filetypes = ["sh"]
        prefix = re.escape("#$")
        self.input_pattern = "^" + prefix + r"\s+-\w*$"
        self.rank = 200

        directives = {
            "N": "jobname",
            "S": "shell",
            "cwd": "current working directory",
            "e": "stderr",
            "l": "resource",
            "o": "stdout",
            "pe": "parallel env",
            "q": "queue",
            "wd": "working dir",
        }
        self._candidates = [{
            "word": k,
            "abbr": "-" + k,
            "menu": v,
        } for k, v in directives.items()]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
