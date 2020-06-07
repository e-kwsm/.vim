#!/usr/bin/env python3
import re
from itertools import combinations
from typing import Iterator


def main():
    tmpl = r"""import re
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "#pragma omp {directive}"
        self.mark = "[omp {directive}]"
        self.filetypes = ["c", "cpp"]
        self.input_pattern = r"^\s*#\s*pragma\s+omp\s+{pattern}"
        self.rank = {rank}

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return [
{clauses}
            ]
"""

    rank = 500

    omp_directives = {
        "parallel": [
            "copyin",
            "default",
            "firstprivate",
            "if",
            "num_threads",
            "private",
            "proc_bind",
            "reduction",
            "shared",
        ],
        "for": [
            "collapse",
            "firstprivate",
            "lastprivate",
            "linear",
            "nowait",
            "ordered",
            "private",
            "reduction",
            "schedule",
        ],
        "sections": [
            "firstprivate",
            "lastprivate",
            "nowait",
            "private",
            "reduction",
        ],
        "single": [
            "copyprivate",
            "firstprivate",
            "nowait",
            "private",
        ],
        "simd": [
            "aligned",
            "collapse",
            "lastprivate",
            "linear",
            "private",
            "reduction",
            "safelen",
            "simdlen",
        ],
        "declare simd": [
            "aligned",
            "inbranch",
            "linear",
            "notinbranch",
            "simdlen",
            "uniform",
        ],
        "task": [
            "default",
            "depend",
            "final",
            "firstprivate",
            "if",
            "mergeable",
            "priority",
            "private",
            "shared",
            "untied",
        ],
        "taskloop": [
            "collapse",
            "default",
            "final",
            "firstprivate",
            "grainsize",
            "if",
            "lastprivate",
            "mergeable",
            "nogroup",
            "num_tasks",
            "priority",
            "private",
            "shared",
            "untied",
        ],
        "target data": [
            "device",
            "if",
            "map",
            "use_device_ptr",
        ],
        "target enter data": [
            "depend",
            "device",
            "if",
            "map",
            "nowait",
        ],
        "target exit data": [
            "depend",
            "device",
            "if",
            "map",
            "nowait",
        ],
        "target": [
            "defaultmap",
            "depend",
            "device",
            "firstprivate",
            "if",
            "is_device_ptr",
            "map",
            "nowait",
            "private",
        ],
        "target update": [
            "depend",
            "device",
            "from",
            "if",
            "motion",
            "nowait",
            "to",
        ],
        "declare target": [
            "link",
            "to",
        ],
        "teams": [
            "default",
            "firstprivate",
            "num_teams",
            "private",
            "reduction",
            "shared",
            "thread_limit",
        ],
        "distribute": [
            "collapse",
            "dist_schedule",
            "firstprivate",
            "lastprivate",
            "private",
        ],
        "critical": [
            "hint",
        ],
        "atomic": [
            "capture",
            "read",
            "update",
            "write",
        ],
        "ordered": [
            "depend",
            "simd",
            "threads",
        ],
        "cancel": [
            "for",
            "if",
            "parallel",
            "sections",
            "taskgroup",
        ],
        "cancellation point": [
            "for",
            "parallel",
            "sections",
            "taskgroup",
        ],
        "declare reduction": [
            "initializer",
            "omp_priv",
        ],
    }

    def concat_caluses(sources: Iterator[str], exception: Iterator[str]) -> None:
        clauses = set()
        for s in sources:
            clauses.update(omp_directives[s])
        for e in exception:
            clauses.remove(e)
        omp_directives[" ".join(sources)] = sorted(clauses)

    concat_caluses(["for", "simd"], [])

    for d in ["for", "sections", "for simd"]:
        concat_caluses(["parallel", d], ["nowait"])

    concat_caluses(["taskloop", "simd"], [])
    concat_caluses(["distribute", "simd"], [])
    for d in ["parallel for", "parallel for simd"]:
        concat_caluses(["distribute", d], [])

    for d in ["distribute", "distribute simd", "distribute parallel for", "distribute parallel for simd"]:
        concat_caluses(["teams", d], [])

    for d in ["parallel", "parallel for", "parallel for simd"]:
        concat_caluses(["target", d], ["copyin"])
    for d in ["simd", "teams", "teams distribute parallel for", "teams distribute parallel for simd"]:
        concat_caluses(["target", d], [])

    exclusives = {}

    for d1, d2 in combinations(omp_directives, 2):
        if d1 > d2:
            d1, d2 = d2, d1
        m = re.search("^" + d1 + " ", d2)
        if m:
            exclusives.setdefault(d1, set())
            exclusives[d1].add(re.sub(" .*", "", d2[m.end():]))

    for directive, clauses in omp_directives.items():
        clauses = "\n".join([" " * 16 + '"' + c + '",' for c in clauses])
        pattern = directive.replace(" ", r"\s+")
        if directive in exclusives:
            pattern += r"\s+(?!" + "|".join(sorted(exclusives[directive])) + ")"
        else:
            pattern += r"\s+"
        with open("pragma_omp_" + directive.replace(" ", "_") + ".py", "w") as f:
            f.write(
                tmpl.format(
                    rank=rank, directive=directive, pattern=pattern, clauses=clauses,
                )
            )


if __name__ == "__main__":
    main()
