import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "rst.directive"
        self.mark = "[rst.directive]"
        self.input_pattern = r"^\.\. (?:[A-Za-z]+:)?[A-Za-z]*$"
        self.rank = 500

        def d(directive, arguments):
            if arguments:
                return {"abbr": directive, "word": f"{directive}:: ", "menu": arguments}
            else:
                return {"abbr": directive, "word": f"{directive}::"}

        directives = {
            # https://docutils.sourceforge.io/docs/ref/rst/directives.html
            "attention": None,
            "caution": None,
            "danger": None,
            "error": None,
            "hint": None,
            "important": None,
            "note": None,
            "tip": None,
            "warning": None,
            "admonition": "title",
            "image": "image URI",
            "figure": "image URI",
            "topic": "title",
            "sidebar": "[title]",
            "parsed-literal": None,
            "code": "[language]",
            "math": None,
            "rubric": "text",
            "epigraph": None,
            "highlights": None,
            "pull-quote": None,
            "compound": None,
            "container": "[class names]",
            "table": "[title]",
            "csv-table": "[title]",
            "list-table": "[title]",
            "contents": "[title]",
            # "sectnum": None,
            # "section-numbering": None,
            # "header": None,
            # "footer": None,
            "target-notes": None,
            "meta": None,
            "include": "file",
            "raw": "output format types",
            "class": "class names / attribute values",
            "role": "new role name[(base role name)].",
            "default-role": "[new default role name]",
            "title": "text",
            # https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html
            "toctree": None,
            "versionadded": "version",
            "versionchanged": "version",
            "deprecated": "version",
            "seealso": None,
            "hlist": None,
            "highlight": "language",
            "code-block": "[language]",
            "literalinclude": "filename",
            "glossary": None,
            "sectionauthor": "name <email>",
            "codeauthor": "name <email>",
            "index": "entries",
            "only": "expression",
            "tabularcolumns": "column spec",
            "productionlist": "productionGroup",
            # https://www.sphinx-doc.org/en/master/usage/extensions/todo.html
            "todo": None,
            "todolist": None,
            # https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html
            "py:module": "name",
            "py:function": "name(parameters)",
            "py:data": "name",
            "py:exception": "name",
            "py:class": "name[(parameters)]",
            "py:attribute": "name",
            "py:method": "name(parameters)",
            "py:staticmethod": "name(parameters)",
            "py:classmethod": "name(parameters)",
            "py:decorator": "name[(parameters)]",
            "py:decoratormethod": "name[(parameters)]",
            "c:member": "declaration",
            "c:var": "declaration",
            "c:function": "function prototype",
            "c:macro": "name[(arg list)]",
            "c:struct": "name",
            "c:union": "name",
            "c:enum": "name",
            "c:enumerator": "name",
            "c:type": "typedef-like declaration|name",
            "c:alias": "name",
            "c:namespace": "scope specification",
            "cpp:class": "class specifier",
            "cpp:struct": "class specifier",
            "cpp:function": "(member) function prototype",
            "cpp:member": "(member) variable declaration",
            "cpp:var": "(member) variable declaration",
            "cpp:type": "typedef declaration|name|type alias declaration",
            "cpp:enum": "unscoped enum declaration",
            "cpp:enum-struct": "scoped enum declaration",
            "cpp:enum-class": "scoped enum declaration",
            "cpp:enumerator": "name|name = constant",
            "cpp:union": "name",
            "cpp:concept": "template-parameter-list name",
            "cpp:alias": "name or function signature",
            "cpp:namespace": "scope specification",
            "cpp:namespace-push": "scope specification",
            "cpp:namespace-pop": "scope specification",
            "option": "name args, name args, ...",
            "envvar": "name",
            "program": "name",
            "describe": "text",
            "object": "text",
            "rst:directive": "name",
            "rst:directive:option": "name",
            "rst:role": "name",
        }

        self._candidates = []
        for directive, arguments in directives.items():
            self._candidates += [d(directive, arguments)]

        self._candidates.sort(key=lambda x: x["abbr"])

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
