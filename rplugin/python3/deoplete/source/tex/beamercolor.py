import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "beamer.color"
        self.mark = "[beamer.color]"
        self.filetypes = ["tex"]
        self.input_pattern = (
            r"\\(?:"
            + "|".join(
                [
                    r"ifbeamercolorempty(?:\[[bf]g\])?",
                    r"setbeamercolor\*?",
                    r"usebeamercolor\*?(?:\[[bf]g\])?",
                ]
            )
            + r")\{\w*$"
        )
        self.rank = 800

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
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
                "button border",
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
                "local structure",
                "logo",
                "lower separation line foot",
                "lower separation line head",
                "math text",
                "math text displayed",
                "math text inlined",
                "middle separation line foot",
                "middle separation line head",
                "mini frame",
                "navigation symbols",
                "normal text",
                "normal text in math text",
                "note page",
                "page number in head/foot",
                "palette primary",
                "palette quaternary",
                "palette secondary",
                "palette sidebar primary",
                "palette sidebar quaternary",
                "palette sidebar secondary",
                "palette sidebar tertiary",
                "palette tertiary",
                "part name",
                "part title",
                "qed symbol",
                "quotation",
                "quote",
                "section in head/foot",
                "section in sidebar",
                "section in sidebar shaded",
                "section in toc",
                "section in toc shaded",
                "section name",
                "section title",
                "separation line",
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
                "title page",
                "titlelike",
                "upper separation line foot",
                "upper separation line head",
                "verse",
            ]
