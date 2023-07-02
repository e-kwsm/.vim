import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.8.1/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.8.1/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
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
      "derivative",
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
      "physics2",
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
      "xstring",
    ].map(
      (word) => Promise.resolve({ menu: "sty", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
