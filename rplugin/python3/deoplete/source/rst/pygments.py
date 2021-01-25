import re
from deoplete.base.source import Base


try:
    from pygments.lexers import get_all_lexers
except ImportError:

    def get_all_lexers():
        return []


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "rst.pygments"
        self.mark = "[rst.pygments]"
        self.input_pattern = r"^\.\. (?:code|code-block|highlight):: [A-Za-z]*$"
        self.rank = 500

        self._candidates = []
        for lexer in get_all_lexers():
            self._candidates += list(lexer[1])
        self._candidates.sort()

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
