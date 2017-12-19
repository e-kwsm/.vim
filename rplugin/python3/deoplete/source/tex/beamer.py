from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "beamer"
        self.mark = "[beamer]"
        self.filetypes = ["tex"]

    def gather_candidates(self, context):
        return [
            "defbeamertemplate",
            "setbeamercolor",
            "setbeamerfont",
            "setbeamersize",
            "setbeamertemplate",
            "usebackgroundtemplate",
            "usebeamercolor",
            "usebeamerfont",
            "usebeamertemplate",
            "usecolortheme",
            "usefonttheme",
            "useinnertheme",
            "useoutertheme",
        ]
