import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.4.0/types.ts#^";
import {
  GatherArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v3.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  candidates: string[] = [];

  async onInit(_args: OnInitArguments<Params>): Promise<void> {
    this.candidates = [
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.bapto.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.diorthono.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.ektropi.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.katharizo.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.koinos.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.mandyas.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.mitra.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.ozos.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.ramma.code.tex",
      "tex/generic/commutative-diagrams/tikzlibrarycommutative-diagrams.velos.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/circuits/tikzlibrarycircuits.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/circuits/tikzlibrarycircuits.ee.IEC.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/circuits/tikzlibrarycircuits.ee.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/circuits/tikzlibrarycircuits.logic.CDH.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/circuits/tikzlibrarycircuits.logic.IEC.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/circuits/tikzlibrarycircuits.logic.US.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/circuits/tikzlibrarycircuits.logic.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/datavisualization/tikzlibrarydatavisualization.3d.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/datavisualization/tikzlibrarydatavisualization.barcharts.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/datavisualization/tikzlibrarydatavisualization.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/datavisualization/tikzlibrarydatavisualization.formats.functions.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/datavisualization/tikzlibrarydatavisualization.polar.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/datavisualization/tikzlibrarydatavisualization.sparklines.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/graphs/tikzlibrarygraphs.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/graphs/tikzlibrarygraphs.standard.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrary3d.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryangles.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryanimations.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryarrows.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryautomata.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarybabel.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarybackgrounds.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarybending.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarycalc.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarycalendar.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarychains.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarydecorations.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarydecorations.footprints.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarydecorations.fractals.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarydecorations.markings.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarydecorations.pathmorphing.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarydecorations.pathreplacing.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarydecorations.shapes.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarydecorations.text.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryer.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryfadings.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryfit.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryfixedpointarithmetic.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryfolding.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryfpu.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryintersections.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarylindenmayersystems.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarymath.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarymatrix.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarymindmap.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarypatterns.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarypatterns.meta.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryperspective.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarypetri.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryplothandlers.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryplotmarks.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarypositioning.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryquotes.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryrdf.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryscopes.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshadings.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshadows.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.arrows.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.callouts.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.gates.logic.IEC.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.gates.logic.US.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.geometric.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.misc.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.multipart.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryshapes.symbols.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarysnakes.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryspy.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarysvg.path.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarythrough.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarytopaths.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibrarytrees.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryturtle.code.tex",
      "tex/generic/pgf/frontendlayer/tikz/libraries/tikzlibraryviews.code.tex",
      "tex/generic/pgf/graphdrawing/tex/experimental/tikzlibrarygraphdrawing.evolving.code.tex",
      "tex/generic/pgf/graphdrawing/tex/pgflibrarygraphdrawing.circular.code.tex",
      "tex/generic/pgf/graphdrawing/tex/pgflibrarygraphdrawing.code.tex",
      "tex/generic/pgf/graphdrawing/tex/pgflibrarygraphdrawing.examples.code.tex",
      "tex/generic/pgf/graphdrawing/tex/pgflibrarygraphdrawing.force.code.tex",
      "tex/generic/pgf/graphdrawing/tex/pgflibrarygraphdrawing.layered.code.tex",
      "tex/generic/pgf/graphdrawing/tex/pgflibrarygraphdrawing.trees.code.tex",
      "tex/generic/pgf/graphdrawing/tex/tikzlibrarygraphdrawing.code.tex",
      "tex/generic/pgf/libraries/datavisualization/pgflibrarydatavisualization.barcharts.code.tex",
      "tex/generic/pgf/libraries/datavisualization/pgflibrarydatavisualization.formats.functions.code.tex",
      "tex/generic/pgf/libraries/datavisualization/pgflibrarydatavisualization.polar.code.tex",
      "tex/generic/pgf/libraries/decorations/pgflibrarydecorations.footprints.code.tex",
      "tex/generic/pgf/libraries/decorations/pgflibrarydecorations.fractals.code.tex",
      "tex/generic/pgf/libraries/decorations/pgflibrarydecorations.markings.code.tex",
      "tex/generic/pgf/libraries/decorations/pgflibrarydecorations.pathmorphing.code.tex",
      "tex/generic/pgf/libraries/decorations/pgflibrarydecorations.pathreplacing.code.tex",
      "tex/generic/pgf/libraries/decorations/pgflibrarydecorations.shapes.code.tex",
      "tex/generic/pgf/libraries/decorations/pgflibrarydecorations.text.code.tex",
      "tex/generic/pgf/libraries/luamath/pgflibraryluamath.code.tex",
      "tex/generic/pgf/libraries/pgflibraryarrows.code.tex",
      "tex/generic/pgf/libraries/pgflibraryarrows.meta.code.tex",
      "tex/generic/pgf/libraries/pgflibraryarrows.spaced.code.tex",
      "tex/generic/pgf/libraries/pgflibrarycurvilinear.code.tex",
      "tex/generic/pgf/libraries/pgflibraryfadings.code.tex",
      "tex/generic/pgf/libraries/pgflibraryfixedpointarithmetic.code.tex",
      "tex/generic/pgf/libraries/pgflibraryfpu.code.tex",
      "tex/generic/pgf/libraries/pgflibraryintersections.code.tex",
      "tex/generic/pgf/libraries/pgflibrarylindenmayersystems.code.tex",
      "tex/generic/pgf/libraries/pgflibrarypatterns.code.tex",
      "tex/generic/pgf/libraries/pgflibrarypatterns.meta.code.tex",
      "tex/generic/pgf/libraries/pgflibraryplothandlers.code.tex",
      "tex/generic/pgf/libraries/pgflibraryplotmarks.code.tex",
      "tex/generic/pgf/libraries/pgflibraryprofiler.code.tex",
      "tex/generic/pgf/libraries/pgflibraryshadings.code.tex",
      "tex/generic/pgf/libraries/pgflibrarysnakes.code.tex",
      "tex/generic/pgf/libraries/pgflibrarysvg.path.code.tex",
      "tex/generic/pgf/libraries/pgflibrarytimelines.code.tex",
      "tex/generic/pgf/libraries/shapes/circuits/pgflibraryshapes.gates.ee.IEC.code.tex",
      "tex/generic/pgf/libraries/shapes/circuits/pgflibraryshapes.gates.ee.code.tex",
      "tex/generic/pgf/libraries/shapes/circuits/pgflibraryshapes.gates.logic.IEC.code.tex",
      "tex/generic/pgf/libraries/shapes/circuits/pgflibraryshapes.gates.logic.US.code.tex",
      "tex/generic/pgf/libraries/shapes/circuits/pgflibraryshapes.gates.logic.code.tex",
      "tex/generic/pgf/libraries/shapes/pgflibraryshapes.arrows.code.tex",
      "tex/generic/pgf/libraries/shapes/pgflibraryshapes.callouts.code.tex",
      "tex/generic/pgf/libraries/shapes/pgflibraryshapes.code.tex",
      "tex/generic/pgf/libraries/shapes/pgflibraryshapes.geometric.code.tex",
      "tex/generic/pgf/libraries/shapes/pgflibraryshapes.misc.code.tex",
      "tex/generic/pgf/libraries/shapes/pgflibraryshapes.multipart.code.tex",
      "tex/generic/pgf/libraries/shapes/pgflibraryshapes.symbols.code.tex",
      "tex/generic/pgfplots/libs/pgflibrarypgfplots.colorbrewer.code.tex",
      "tex/generic/pgfplots/libs/pgflibrarypgfplots.colortol.code.tex",
      "tex/generic/pgfplots/libs/pgflibrarypgfplots.surfshading.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarycolorbrewer.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarycolortol.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.colormaps.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.contourlua.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.dateplot.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.decorations.softclip.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.external.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.fillbetween.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.groupplots.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.patchplots.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.polar.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.smithchart.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.statistics.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.ternary.code.tex",
      "tex/generic/pgfplots/libs/tikzlibrarypgfplots.units.code.tex",
      "tex/generic/pgfplots/oldpgfplotscompatib/tikzlibrarydateplot.code.tex",
      "tex/generic/pgfplots/pgfcontrib/pgflibraryfillbetween.code.tex",
      "tex/generic/pgfplots/pgfcontrib/tikzlibrarydecorations.softclip.code.tex",
      "tex/generic/pgfplots/pgfcontrib/tikzlibraryfillbetween.code.tex",
      "tex/generic/tikz-cd/tikzlibrarycd.code.tex",
      "tex/generic/tikz-ext/pgflibraryext.arrows.code.tex",
      "tex/generic/tikz-ext/pgflibraryext.shapes.circlearrow.code.tex",
      "tex/generic/tikz-ext/pgflibraryext.shapes.circlecrosssplit.code.tex",
      "tex/generic/tikz-ext/pgflibraryext.shapes.heatmark.code.tex",
      "tex/generic/tikz-ext/pgflibraryext.shapes.rectangleroundedcorners.code.tex",
      "tex/generic/tikz-ext/pgflibraryext.shapes.superellipse.code.tex",
      "tex/generic/tikz-ext/pgflibraryext.shapes.uncenteredrectangle.code.tex",
      "tex/generic/tikz-ext/pgflibraryext.transformations.mirror.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.calendar-plus.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.layers.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.misc.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.node-families.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.node-families.shapes.geometric.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.nodes.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.paths.arcto.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.paths.ortho.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.paths.timer.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.patterns.images.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.positioning-plus.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.scalepicture.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.shapes.uncenteredrectangle.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.topaths.arcthrough.code.tex",
      "tex/generic/tikz-ext/tikzlibraryext.transformations.mirror.code.tex",
      "tex/generic/tikzducks/tikzlibraryducks.code.tex",
      "tex/latex/aobs-tikz/tikzlibraryoverlay-beamer-styles.code.tex",
      "tex/latex/braids/tikzlibrarybraids.code.tex",
      "tex/latex/celtic/tikzlibraryceltic.code.tex",
      "tex/latex/easing/pgflibraryeasing.code.tex",
      "tex/latex/hobby/pgflibraryhobby.code.tex",
      "tex/latex/hobby/tikzlibraryhobby.code.tex",
      "tex/latex/matrix-skeleton/pgflibrarymatrix.skeleton.code.tex",
      "tex/latex/matrix-skeleton/tikzlibrarymatrix.skeleton.code.tex",
      "tex/latex/ocgx/tikzlibraryocgx.code.tex",
      "tex/latex/penrose/tikzlibrarypenrose.code.tex",
      "tex/latex/pgf-blur/tikzlibraryshadows.blur.code.tex",
      "tex/latex/pgf-pie/tikzlibrarypie.code.tex",
      "tex/latex/pgf-umlcd/tikzlibraryumlcd.code.tex",
      "tex/latex/pgf/frontendlayer/libraries/tikzlibraryexternal.code.tex",
      "tex/latex/pgfornament/pgflibraryam.code.tex",
      "tex/latex/pgfornament/pgflibrarypgfhan.code.tex",
      "tex/latex/pgfornament/pgflibraryvectorian.code.tex",
      "tex/latex/pgfplots/libs/tikzlibrarypgfplots.clickable.code.tex",
      "tex/latex/pgfplots/libs/tikzlibrarypgfplotsclickable.code.tex",
      "tex/latex/quantikz/tikzlibraryquantikz.code.tex",
      "tex/latex/quantikz/tikzlibraryquantikz2.code.tex",
      "tex/latex/rulercompass/tikzlibraryrulercompass.code.tex",
      "tex/latex/sa-tikz/tikzlibraryswitching-architectures.code.tex",
      "tex/latex/sankey/tikzlibrarydubins.code.tex",
      "tex/latex/spath3/tikzlibrarycalligraphy.code.tex",
      "tex/latex/spath3/tikzlibraryknots.code.tex",
      "tex/latex/spath3/tikzlibraryspath3.code.tex",
      "tex/latex/tikz-bayesnet/tikzlibrarybayesnet.code.tex",
      "tex/latex/tikz-bbox/pgflibrarybbox.code.tex",
      "tex/latex/tikz-feynhand/tikzlibraryfeynhand.code.tex",
      "tex/latex/tikz-feynman/tikzlibraryfeynman.code.tex",
      "tex/latex/tikz-karnaugh/tikzlibrarykarnaugh.code.tex",
      "tex/latex/tikz-ladder/tikzlibrarycircuits.plc.ladder.code.tex",
      "tex/latex/tikz-nef/tikzlibrarynef.code.tex",
      "tex/latex/tikz-nfold/pgflibrarybezieroffset.code.tex",
      "tex/latex/tikz-nfold/tikzlibrarynfold.code.tex",
      "tex/latex/tikz-optics/tikzlibraryoptics.code.tex",
      "tex/latex/tikz-relay/tikzlibrarycircuits.ee.IEC.relay.code.tex",
      "tex/latex/tikz-sfc/tikzlibrarycircuits.plc.sfc.code.tex",
      "tex/latex/tikz-swigs/tikzlibraryswigs.code.tex",
      "tex/latex/tikz-trackschematic/tikzlibrarytrackschematic.code.tex",
      "tex/latex/tikz-trackschematic/tikzlibrarytrackschematic.constructions.code.tex",
      "tex/latex/tikz-trackschematic/tikzlibrarytrackschematic.electrics.code.tex",
      "tex/latex/tikz-trackschematic/tikzlibrarytrackschematic.measures.code.tex",
      "tex/latex/tikz-trackschematic/tikzlibrarytrackschematic.symbology.code.tex",
      "tex/latex/tikz-trackschematic/tikzlibrarytrackschematic.topology.code.tex",
      "tex/latex/tikz-trackschematic/tikzlibrarytrackschematic.trafficcontrol.code.tex",
      "tex/latex/tikz-trackschematic/tikzlibrarytrackschematic.vehicles.code.tex",
      "tex/latex/tikzfill/tikzlibraryfill.hexagon.code.tex",
      "tex/latex/tikzfill/tikzlibraryfill.image.code.tex",
      "tex/latex/tikzfill/tikzlibraryfill.rhombus.code.tex",
      "tex/latex/tikzlings/tikzlibrarytikzlings.code.tex",
      "tex/latex/tikzmark/tikzlibrarytikzmark.code.tex",
      "tex/latex/tikzmarmots/tikzlibrarymarmots.code.tex",
      "tex/latex/tqft/tikzlibrarytqft.code.tex",
      "tex/latex/zx-calculus/tikzlibraryzx-calculus.code.tex",
    ].map((word) => word.replace(/^.+\//, "").replace(".code.tex$", ""));

    return;

    const kpsewhich = Deno.run({
      cmd: ["kpsewhich", "-var-value=TEXMFDIST"],
      stdin: "null",
      stdout: "piped",
    });
    await kpsewhich.status();
    const texmfdist = new TextDecoder().decode(await kpsewhich.output())
      .replace(/\n/, "");
    const find = Deno.run({
      cmd: [
        "find",
        `${texmfdist}/tex/generic`,
        `${texmfdist}/tex/latex`,
        "-type",
        "f",
        "-regextype",
        "egrep",
        "-regex",
        ".*/(tikz|pgf)library\\S*\\.code\\.tex$",
      ],
      stdin: "null",
      stdout: "piped",
    });
    await find.status();
    const lines = new TextDecoder().decode(await find.output()).split(/\n/);
    this.candidates = lines
      .map((word) => word.replace(/^.+\//, "").replace(".code.tex$", ""));
  }

  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\\usetikzlibrary\b/)) {
      return [];
    }
    return await Promise.all(this.candidates
      .map((word) => {
        if (word.startsWith("tikzlibrary")) {
          return Promise.resolve({
            menu: "tikz",
            word: word.replace("tikzlibrary", ""),
          });
        }
        return Promise.resolve({
          menu: "pgf",
          word: word.replace("pgflibrary", ""),
        });
      }));
  }

  params(): Params {
    return {};
  }
}
