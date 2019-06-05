#!/usr/bin/env python3
import re
import subprocess
from shlex import split


def check(vim: str = "nvim"):
    add = "en.utf-8.add"
    ref = "_en.utf-8"

    cmd = split(("{vim} -u NONE -c'" + " | ".join([
        "set spell",
        "e {add}",
        "sort u",
        "up",
        "mkspell! %",
        "%bd",
        "spelldump",
        'exe "normal! gg2d/^#\ndd"',
        "w! {ref}",
        "qa"
    ]) + "'").format(**locals()))
    subprocess.run(cmd)

    newwords = [re.sub(r"(?:/.*)?\n$", "", w) for w in open(add)]
    newwords = "|".join(newwords)
    for word in open(ref):
        #word = word.replace("\n", "")
        m = re.search(r"^(?:{})\b".format(newwords), word)  # , flags=re.IGNORECASE)
        if m:
            print(word.replace("\n", ""), m, sep="\t")


def main():
    check()


if __name__ == "__main__":
    main()
