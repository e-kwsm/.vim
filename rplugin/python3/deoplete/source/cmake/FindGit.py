from .base import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.FindGit"
        self.mark = "[FindGit]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"\${\w*"
        self.rank = 300

    def gather_candidates(self, context):
        return [
            "GIT_EXECUTABLE",
            "GIT_FOUND",
            "GIT_VERSION_STRING",
        ]
