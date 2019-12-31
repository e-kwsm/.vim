import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "beamer.size"
        self.mark = "[beamer.size]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\setbeamersize\{\w*$"
        self._candidate = [{
            "word": s + "=",
            "abbr": s,
        } for s in [
            "description width of",
            "description width",
            "mini frame offset",
            "mini frame size",
            "sidebar width left",
            "sidebar width right",
            "text margin left",
            "text margin right",
        ]]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidate
