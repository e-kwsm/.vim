import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.1.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.1.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (
      !args.context.input.match(
        /\\(?:usepackage|PassOptionsToPackage|RequirePackage)(?:\[.*?\])?\{\w*$/,
      )
    ) {
      return [];
    }

    return await Promise.all([
      "academicons",
      "accessibility",
      "accsupp",
      "acro",
      "adjustbox",
      "algxpar",
      "amsmath",
      "amssymb",
      "biblatex",
      "bookmark",
      "booktabs",
      "chemfig",
      "cloze",
      "colorist",
      "datetime2",
      "dirtree",
      "domitian",
      "endiagram",
      "enumitem",
      "epigraph-keys",
      "erewhon",
      "expl3",
      "filecontents",
      "float",
      "fontawesome5",
      "fontspec",
      "geometry",
      "gnuplot-lua-tikz",
      "graphicx",
      "grffile",
      "gridpapers",
      "hyperref",
      "luatexja",
      "mathtools",
      "mhchem",
      "microtype",
      "minted",
      "mleftright",
      "multirow",
      "nicematrix",
      "pdfpages",
      "pgfmath",
      "physics",
      "pmboxdraw",
      "pxpic",
      "ragged2e",
      "readablecv",
      "scrlayer-scrpage",
      "shellesc",
      "siunitx",
      "subcaption",
      "subdepth",
      "subfiles",
      "tcolorbox",
      "tikz",
      "typicons",
      "unicode-math",
      "unitconv",
      "xcolor",
      "xparse",
      "xspace",
    ].map(
      (word) => Promise.resolve({ menu: "sty", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
