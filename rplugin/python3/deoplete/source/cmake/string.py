import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "cmake.string"
        self.mark = "[string]"
        self.filetypes = ["cmake"]
        self.input_pattern = r"^\s*{}\(\w*$".format("".join(
            f"[{c}{c.upper()}]" for c in "string"
        ))
        self.rank = 400

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
                "APPEND",
                "ASCII",
                "COMPARE",
                "CONCAT",
                "CONFIGURE",
                "FIND",
                "GENEX_STRIP",
                "JOIN",
                "LENGTH",
                "MAKE_C_IDENTIFIER",
                "MD5",
                "PREPEND",
                "RANDOM",
                "REGEX",
                "REPEAT",
                "REPLACE",
                "SHA1",
                "SHA224",
                "SHA256",
                "SHA384",
                "SHA3_224",
                "SHA3_256",
                "SHA3_384",
                "SHA3_512",
                "SHA512",
                "STRIP",
                "SUBSTRING",
                "TIMESTAMP",
                "TOLOWER",
                "TOUPPER",
                "UUID",
            ]
