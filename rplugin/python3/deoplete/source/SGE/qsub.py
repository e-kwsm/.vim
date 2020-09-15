import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "SGE.qsub"
        self.mark = "[SGE]"
        self.filetypes = ["sh"]
        prefix = re.escape("#$")
        self.input_pattern = "^" + prefix + r"\s+-\w*$"

        directives = {
            "N": "jobname",
            "S": "shell",
            "cwd": "current working directory",
            "e": "stderr",
            "l": "resource",
            "o": "stdout",
            "pe": "parallel env",
            "q": "queue",
            "v": "environment variable",
            "wd": "working dir",
        }
        self._candidates = [
            {"abbr": f"-{k}", "menu": v, "word": k} for k, v in directives.items()
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
