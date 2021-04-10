#!/usr/bin/env python3
import json
import toml
from pathlib import Path


def main():
    for file in Path().glob("*.toml"):
        snip = toml.load(file)
        with open(file.name.replace(".toml", ".json"), "w") as f:
            json.dump(snip, f)


if __name__ == "__main__":
    main()
