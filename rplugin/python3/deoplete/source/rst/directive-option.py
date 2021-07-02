import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "rst.directive-option"
        self.mark = "[rst.directive-option]"
        self.input_pattern = r"^\s+:\w*"
        self.rank = 500

        specs = {
            "highlight": {
                "force": None,
                "linenothreshold": "int",
            },
            "code-block": {
                "force": None,
                "linenos": None,
                "dedent": "[int]",
                "lineno-start": "int",
                "emphasize-lines": "ints",
                "caption": "str",
                "class": "str",
                "name": "str",
            },
            "literalinclude": {
                "dedent": "[int]",
                "linenos": None,
                "lineno-start": "int",
                "lineno-match": None,
                "tab-width": "int",
                "language": "str",
                "force": None,
                "encoding": "str",
                "pyobject": "object",
                "lines": "ints",
                "start-after": "str",
                "end-before": "str",
                "start-at": "str",
                "end-at": "str",
                "prepend": "str",
                "append": "str",
                "emphasize-lines": "ints",
                "caption": "str",
                "class": "class",
                "name": "str",
                "diff": "file",
            },
        }

        def d(option, arg, directive):
            r = {"abbr": option, "word": f"{option}:", "menu": directive}
            if arg:
                r["word"] += " "
                r["kind"] = arg
            return r

        self._candidates = []
        for directive, options in specs.items():
            for option, arg in options.items():
                self._candidates += [d(option, arg, directive)]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
