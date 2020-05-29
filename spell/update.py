#!/usr/bin/env python3
import argparse
import re
import subprocess
from pathlib import Path
from tempfile import NamedTemporaryFile


def update(vim: str = "nvim", check: bool = False):
    add = "en.utf-8.add"
    ref = NamedTemporaryFile(delete=False)

    cmd = f"{vim} -u NONE".split()
    if Path(vim).name == "nvim":
        cmd.append("--headless")
    cmd.append("-c{}".format("|".join([
        "set spell",
        f"e {add}",
        "sort u",
        "up",
        "mkspell! %",
        "%bd",
        "spelldump",
        "0;2/^#/d",
        f"w! {ref.name}",
        "qa",
    ])))
    subprocess.run(cmd)

    if not check:
        Path(ref.name).unlink()
        return

    newwords = []
    with open(add) as f:
        for w in f:
            newwords.append(re.sub(r"(?:/.*)?\n$", "", w))
    newwords = "|".join(newwords)
    with open(ref.name) as f:
        for word in f:
            word = word.replace(".", r"\.")
            m = re.search(fr"^(?:{newwords})\b", word, flags=re.IGNORECASE)
            if m:
                print(word.replace("\n", ""), m, sep="\t")
    Path(ref.name).unlink()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("vim", nargs="?", default="nvim", help="vim/nvim")
    parser.add_argument("--check",
                        "-c",
                        action="store_true",
                        help="check duplicates")
    args = parser.parse_args()
    update(vim=args.vim, check=args.check)


if __name__ == "__main__":
    main()
