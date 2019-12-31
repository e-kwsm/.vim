import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tikz key handlers"
        self.mark = "[tikz]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\w+/\.[a-z]*$"
        self._candidates = []
        for h in [
            "activate family",
            "add code=",
            "add style=",
            "add=",
            "append code=",
            "append style=",
            "append=",
            "belongs to family=",
            "cd",
            "code 2 args=",
            "code args=",
            "code n args=",
            "code=",
            "deactivate family",
            "default=",
            "ecode 2 args=",
            "ecode args=",
            "ecode n args=",
            "ecode=",
            "estore in=",
            "estyle 2 args=",
            "estyle args=",
            "estyle=",
            "expand once=",
            "expand twice=",
            "expanded=",
            "forward to=",
            "get=",
            "initial=",
            "install key filter handler=",
            "install key filter=",
            "is choice",
            "is family",
            "is if=",
            "lastretry=",
            "link=",
            "list=",
            "pic=",
            "prefix code=",
            "prefix style=",
            "prefix=",
            "retry=",
            "search also=",
            "show code",
            "show value",
            "store in=",
            "style 2 args=",
            "style args=",
            "style n args=",
            "style sheet=",
            "style=",
            "tip=",
            "try=",
            "value forbidden",
            "value required",
        ]:
            self._candidates += [{
                "word": h,
                "kind": "key handler",
                "abbr": "." + h,
            }]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
