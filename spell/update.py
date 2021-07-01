#!/usr/bin/env python3
import argparse
import re
import subprocess
from pathlib import Path
from tempfile import NamedTemporaryFile


def update(vim: str = "nvim", check: bool = False, casesensitive: bool = True):
    add = "en.utf-8.add"
    ref = NamedTemporaryFile(delete=False)

    cmd = [vim, "-u", "NONE"]
    if Path(vim).name == "nvim":
        cmd.append("--headless")
    cmd.append("-c{}".format("|".join([
        "set spell",
        f"e {add}",
        "sort u",
        "sort i",
        "up",
        "mkspell! %",
        "%bw",
        "spelldump",
        "keepp 0;2/^#/d",
        f"w! {ref.name}",
        "qa",
    ])))
    subprocess.run(cmd)

    if not check:
        Path(ref.name).unlink()
        return

    pat = re.compile("/[^/]+$")

    newwords = set()
    with open(add) as f:
        for w in f:
            if not w.startswith("#") and not w.startswith("/"):
                w = pat.sub("", w.strip())
                newwords.add(w if casesensitive else w.lower())

    with open(ref.name) as f:
        for w in f:
            w = pat.sub("", w.strip())
            if not casesensitive:
                w = w.lower()
            if w in newwords:
                print(w)

    Path(ref.name).unlink()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("vim", nargs="?", default="nvim", help="vim/nvim")
    parser.add_argument("-c",
                        "--check",
                        action="store_true",
                        help="check duplicates")
    args = parser.parse_args()
    update(vim=args.vim, check=args.check)


if __name__ == "__main__":
    main()
