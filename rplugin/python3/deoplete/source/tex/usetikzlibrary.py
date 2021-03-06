# import subprocess
# from pathlib import Path
import re
from collections import OrderedDict
from deoplete.base.source import Base


class Source(Base):
    def __init__(self, vim):
        super().__init__(vim)
        self.name = "tex.usetikzlibrary"
        self.mark = "[tikzlib]"
        self.filetypes = ["tex"]
        self.input_pattern = r"\\usetikzlibrary\{[\w.-]*(?:,\s*[\w.-]*)*$"
        self.rank = 800

        self._candidates = []
        # try:
        #     proc = subprocess.run(
        #         ["kpsewhich", "-var-value=TEXMFDIST"],
        #         stdout=subprocess.PIPE,
        #         universal_newlines=True,
        #     )
        # except Exception:
        #     return
        # texmfdist = Path(proc.stdout.replace("\n", ""))

        libraries = OrderedDict()

        # libraries["tikz"] = list(
        #     l.name.replace("tikzlibrary", "").replace(".code.tex", "")
        #     for l in texmfdist.glob("**/tikzlibrary*.code.tex")
        # )
        # libraries["pgf"] = list(
        #     l.name.replace("pgflibrary", "").replace(".code.tex", "")
        #     for l in texmfdist.glob("**/pgflibrary*.code.tex")
        # )

        libraries["tikz"] = [
            "3d",
            "angles",
            "animations",
            "arrows",
            "automata",
            "babel",
            "backgrounds",
            "bayesnet",
            "bending",
            "braids",
            "calc",
            "calendar",
            "calligraphy",
            "cd",
            "celtic",
            "chains",
            "circuits",
            "circuits.ee",
            "circuits.ee.IEC",
            "circuits.ee.IEC.relay",
            "circuits.logic",
            "circuits.logic.CDH",
            "circuits.logic.IEC",
            "circuits.logic.US",
            "circuits.plc.ladder",
            "circuits.plc.sfc",
            "colorbrewer",
            "colortol",
            "datavisualization",
            "datavisualization.3d",
            "datavisualization.barcharts",
            "datavisualization.formats.functions",
            "datavisualization.polar",
            "datavisualization.sparklines",
            "dateplot",
            "decorations",
            "decorations.footprints",
            "decorations.fractals",
            "decorations.markings",
            "decorations.pathmorphing",
            "decorations.pathreplacing",
            "decorations.shapes",
            "decorations.softclip",
            "decorations.text",
            "ducks",
            "er",
            "external",
            "fadings",
            "feynhand",
            "feynman",
            "fillbetween",
            "fit",
            "fixedpointarithmetic",
            "folding",
            "fpu",
            "graphdrawing",
            "graphdrawing.evolving",
            "graphs",
            "graphs.standard",
            "hobby",
            "intersections",
            "karnaugh",
            "knots",
            "lindenmayersystems",
            "marmots",
            "math",
            "matrix",
            "matrix.skeleton",
            "mindmap",
            "nef",
            "ocgx",
            "optics",
            "overlay-beamer-styles",
            "patterns",
            "patterns.meta",
            "penrose",
            "perspective",
            "petri",
            "pgfplots.clickable",
            "pgfplots.colormaps",
            "pgfplots.dateplot",
            "pgfplots.decorations.softclip",
            "pgfplots.external",
            "pgfplots.fillbetween",
            "pgfplots.groupplots",
            "pgfplots.patchplots",
            "pgfplots.polar",
            "pgfplots.smithchart",
            "pgfplots.statistics",
            "pgfplots.ternary",
            "pgfplots.units",
            "pgfplotsclickable",
            "plothandlers",
            "plotmarks",
            "positioning",
            "quantikz",
            "quotes",
            "rdf",
            "rulercompass",
            "scopes",
            "shadings",
            "shadows",
            "shadows.blur",
            "shapes",
            "shapes.arrows",
            "shapes.callouts",
            "shapes.gates.logic.IEC",
            "shapes.gates.logic.US",
            "shapes.geometric",
            "shapes.misc",
            "shapes.multipart",
            "shapes.symbols",
            "snakes",
            "spy",
            "svg.path",
            "switching-architectures",
            "through",
            "tikzmark",
            "topaths",
            "tqft",
            "trackschematic",
            "trackschematic.constructions",
            "trackschematic.messures",
            "trackschematic.topology",
            "trackschematic.trafficcontrol",
            "trackschematic.vehicles",
            "trees",
            "turtle",
            "views",
        ]

        libraries["pgf"] = [
            "am",
            "arrows",
            "arrows.meta",
            "arrows.spaced",
            "bbox",
            "curvilinear",
            "datavisualization.barcharts",
            "datavisualization.formats.functions",
            "datavisualization.polar",
            "decorations.footprints",
            "decorations.fractals",
            "decorations.markings",
            "decorations.pathmorphing",
            "decorations.pathreplacing",
            "decorations.shapes",
            "decorations.text",
            "fadings",
            "fillbetween",
            "fixedpointarithmetic",
            "fpu",
            "graphdrawing",
            "graphdrawing.circular",
            "graphdrawing.examples",
            "graphdrawing.force",
            "graphdrawing.layered",
            "graphdrawing.trees",
            "hobby",
            "intersections",
            "lindenmayersystems",
            "luamath",
            "matrix.skeleton",
            "patterns",
            "patterns.meta",
            "pgfhan",
            "pgfplots.colorbrewer",
            "pgfplots.colortol",
            "pgfplots.surfshading",
            "plothandlers",
            "plotmarks",
            "profiler",
            "shadings",
            "shapes",
            "shapes.arrows",
            "shapes.callouts",
            "shapes.gates.ee",
            "shapes.gates.ee.IEC",
            "shapes.gates.logic",
            "shapes.gates.logic.IEC",
            "shapes.gates.logic.US",
            "shapes.geometric",
            "shapes.misc",
            "shapes.multipart",
            "shapes.symbols",
            "snakes",
            "svg.path",
            "timelines",
            "vectorian",
        ]

        for kind, libs in libraries.items():
            for lib in libs:
                self._candidates += [{"word": lib, "kind": kind}]

    def gather_candidates(self, context):
        if re.search(self.input_pattern, context["input"]):
            return self._candidates
