from deoplete.base.source import Base
import re

try:
    from pygments.lexers import get_all_lexers
except ImportError:

    def get_all_lexers():
        return []


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tex.minted"
        self.mark = "[pygments.lexer]"
        self.filetypes = ["tex"]
        self.input_pattern = (
            r"\\(?:"
            + "|".join(
                ["begin{minted}", r"inputminted(?:\[.*?\])?", "mint", "mintinline"]
            )
            + "){[^}]*$"
        )
        self.rank = 800

        self._candidates = []
        for lexer in get_all_lexers():
            self._candidates += list(lexer[1])
        self._candidates.sort()

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
