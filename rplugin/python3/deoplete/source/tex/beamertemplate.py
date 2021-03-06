import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tex.beamertemplate"
        self.mark = "[beamertemplate]"
        self.filetypes = ["tex"]
        self.input_pattern = (
            r"\\(?:"
            + "|".join(
                [
                    r"addtobeamertemplate",
                    r"defbeamertemplate(?:<.*?>)?\*?",
                    r"defbeamertemplatealias",
                    r"defbeamertemplateparent",
                    r"expandbeamertemplate",
                    r"ifbeamertemplateempty",
                    r"setbeamertemplate",
                    r"usebeamertemplate\*{,3}",
                ]
            )
            + r")\{\w*$"
        )
        self.rank = 800
        self._candidates = [
            "abstract begin",
            "abstract end",
            "abstract title",
            "alerted text begin",
            "alerted text end",
            "background",
            "background canvas",
            "bibliography entry author",
            "bibliography entry location",
            "bibliography entry note",
            "bibliography entry title",
            "bibliography item",
            "block alerted begin",
            "block alerted end",
            "block begin",
            "block end",
            "block example begin",
            "block example end",
            "button",
            "caption",
            "caption label separator",
            "description body begin",
            "description body end",
            "description item",
            "enumerate item",
            "enumerate mini template",
            "enumerate subitem",
            "enumerate subsubitem",
            "footline",
            "footnote",
            "frame begin",
            "frame end",
            "frametitle",
            "frametitle continuation",
            "headline",
            "itemize item",
            "itemize subitem",
            "itemize subsubitem",
            "itemize/enumerate body begin",
            "itemize/enumerate body end",
            "logo",
            "mini frame",
            "mini frame in current subsection",
            "mini frame in other subsection",
            "navigation symbols",
            "note page",
            "page number in head/foot",
            "part page",
            "qed symbol",
            "quotation begin",
            "quotation end",
            "quote begin",
            "quote end",
            "section in head/foot",
            "section in head/foot shaded",
            "section in sidebar",
            "section in sidebar shaded",
            "section in toc",
            "section in toc shaded",
            "section page",
            "sidebar canvas left",
            "sidebar canvas right",
            "sidebar left",
            "sidebar right",
            "structure begin",
            "structure end",
            "subsection in head/foot",
            "subsection in head/foot shaded",
            "subsection in sidebar",
            "subsection in sidebar shaded",
            "subsection in toc",
            "subsection in toc shaded",
            "subsection page",
            "subsubsection in head/foot",
            "subsubsection in head/foot shaded",
            "subsubsection in sidebar",
            "subsubsection in sidebar shaded",
            "subsubsection in toc",
            "subsubsection in toc shaded",
            "theorem begin",
            "theorem end",
            "title page",
            "verse begin",
            "verse end",
        ]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
