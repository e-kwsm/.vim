import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tex.beamerfont"
        self.mark = "[beamerfont]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\(?:set|use)beamerfont\*?\{\w*$"
        self.rank = 800
        self._candidates = [
            "abstract",
            "abstract title",
            "alerted text",
            "background",
            "background canvas",
            "bibliography entry author",
            "bibliography entry location",
            "bibliography entry note",
            "bibliography entry title",
            "bibliography item",
            "block body",
            "block body alerted",
            "block body example",
            "block title",
            "block title alerted",
            "block title example",
            "button",
            "caption",
            "caption name",
            "description item",
            "enumerate item",
            "enumerate mini template",
            "enumerate subitem",
            "enumerate subsubitem",
            "example text",
            "footline",
            "footnote",
            "footnote mark",
            "framesubtitle",
            "frametitle",
            "frametitle continuation",
            "headline",
            "item",
            "item projected",
            "itemize item",
            "itemize subitem",
            "itemize subsubitem",
            "logo",
            "mini frame",
            "navigation symbols",
            "normal text",
            "note page",
            "page number in head/foot",
            "part name",
            "part title",
            "qed symbol",
            "quotation",
            "quote",
            "section in head/foot",
            "section in sidebar",
            "section in toc",
            "section in toc shaded",
            "section name",
            "section title",
            "sidebar left",
            "sidebar right",
            "structure",
            "subitem",
            "subitem projected",
            "subsection in head/foot",
            "subsection in sidebar",
            "subsection in toc",
            "subsection in toc shaded",
            "subsection name",
            "subsection title",
            "subsubitem",
            "subsubitem projected",
            "subsubsection in head/foot",
            "subsubsection in sidebar",
            "subsubsection in toc",
            "subsubsection in toc shaded",
            "tiny structure",
            "title page",
            "titlelike",
            "verse",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
