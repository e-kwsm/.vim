import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "rst.role"
        self.mark = "[rst.role]"
        self.input_pattern = r"(?:^|[^A-Za-z0-9]):[A-Za-z]*$"
        self.rank = 500

        roles = {
            # https://docutils.sourceforge.io/docs/ref/rst/roles.html
            "math",
            "sub",
            "sup",
            "title",
            # https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html
            "any",
            "ref",
            "doc",
            "download",
            "numref",
            "envvar",
            "token",
            "keyword",
            "option",
            "term",
            "abbr",
            "command",
            "dfn",
            "file",
            "guilabel",
            "kbd",
            "mailheader",
            "makevar",
            "manpage",
            "menuselection",
            "mimetype",
            "newsgroup",
            "program",
            "regexp",
            "samp",
            # https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html
            "py:mod",
            "py:func",
            "py:const",
            "py:class",
            "py:meth",
            "py:attr",
            "py:exc",
            "py:obj",
            "c:member",
            "c:data",
            "c:var",
            "c:func",
            "c:macro",
            "c:struct",
            "c:union",
            "c:enum",
            "c:enumerator",
            "c:type",
            "c:expr",
            "c:texpr",
            "cpp:expr",
            "cpp:texpr",
            "cpp:any",
            "cpp:class",
            "cpp:struct",
            "cpp:func",
            "cpp:member",
            "cpp:var",
            "cpp:type",
            "cpp:concept",
            "cpp:enum",
            "cpp:enumerator",
            "rst:dir",
            "rst:role",
            "math:numref",
        }

        self._candidates = [{"abbr": r, "word": f"{r}:`"} for r in sorted(roles)]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
