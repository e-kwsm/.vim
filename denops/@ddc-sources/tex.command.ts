// vi:foldmethod=marker
import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.2.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.2.0/base/source.ts#^";

async function _generate(pkg: string, cmds: string[]): Promise<Candidate[]> {
  return await Promise.all(
    cmds.map(
      (cmd) =>
        Promise.resolve({
          menu: "cmd",
          kind: pkg,
          word: cmd,
          abbr: `\\${cmd}`,
        }),
    ),
  );
}

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (!args.context.input.match(/\\[A-Za-z]*$/)) {
      return [];
    }

    let cs: Candidate[] = [];

    cs = cs.concat(
      await _generate("", [ // {{{1
        "Alph",
        "AtBeginDocument",
        "AtEndDocument",
        "AtEndOfClass",
        "AtEndOfPackage",
        "CheckCommand",
        "ClassError",
        "ClassInfo",
        "ClassWarning",
        "ClassWarningNoLine",
        "CurrentOption",
        "DeclareOption",
        "DeclareRobustCommand",
        "Delta",
        "Downarrow",
        "ExecuteOptions",
        "Gamma",
        "IfFileExists",
        "Lambda",
        "Leftarrow",
        "Leftrightarrow",
        "LoadClass",
        "LoadClassWithOptions",
        "Longleftarrow",
        "Longleftrightarrow",
        "Longrightarrow",
        "NeedsTeXFormat",
        "Omega",
        "OptionNotUsed",
        "PackageError",
        "PackageInfo",
        "PackageWarning",
        "PackageWarningNoLine",
        "PassOptionsToClass",
        "PassOptionsToPackage",
        "Phi",
        "Pi",
        "Pr",
        "ProcessOptions",
        "ProvideTextCommand",
        "ProvideTextCommandDefault",
        "ProvidesClass",
        "ProvidesFile",
        "ProvidesPackage",
        "Psi",
        "RequirePackage",
        "RequirePackageWithOptions",
        "Rightarrow",
        "Roman",
        "Sigma",
        "Theta",
        "Uparrow",
        "Updownarrow",
        "Upsilon",
        "Vert",
        "Xi",
        "Zeta",
        "abovecaptionskip",
        "abovedisplayshortskip",
        "abovedisplayskip",
        "addtocounter",
        "addtolength",
        "aftergroup",
        "alph",
        "alpha",
        "approx",
        "arabic",
        "arccos",
        "arcsin",
        "arctan",
        "arg",
        "author",
        "baselineskip",
        "baselinestretch",
        "belowdisplayshortskip",
        "belowdisplayskip",
        "beta",
        "bfseries",
        "bigbreak",
        "bigcap",
        "bigcup",
        "bigodot",
        "bigoplus",
        "bigotimes",
        "bigskip",
        "bigsqcup",
        "bigtriangledown",
        "bigtriangleup",
        "biguplus",
        "bigvee",
        "bigwedge",
        "bmod",
        "bot",
        "bowtie",
        "breve",
        "bullet",
        "cap",
        "cdot",
        "cdotp",
        "cdots",
        "centering",
        "chi",
        "clearpage",
        "cos",
        "cosh",
        "cot",
        "coth",
        "csc",
        "csname",
        "dagger",
        "ddagger",
        "deg",
        "delta",
        "det",
        "dim",
        "displaymath",
        "displaystyle",
        "documentclass",
        "else",
        "emptyset",
        "endcsname",
        "endinput",
        "enskip",
        "enspace",
        "ensuremath",
        "epsilon",
        "equiv",
        "eta",
        "everymath",
        "exists",
        "exp",
        "fbox",
        "fboxrule",
        "fboxsep",
        "fi",
        "fill",
        "floatsep",
        "footnotesize",
        "forall",
        "framebox",
        "gamma",
        "gcd",
        "geq",
        "gg",
        "hbar",
        "hfill",
        "hline",
        "hom",
        "hphantom",
        "hrule",
        "hrulefill",
        "hspace",
        "if",
        "iffalse",
        "ifhmode",
        "in",
        "inf",
        "infty",
        "input",
        "intextsep",
        "iota",
        "itemindent",
        "itemsep",
        "itshape",
        "jobname",
        "kappa",
        "ker",
        "label",
        "labelsep",
        "lambda",
        "lceil",
        "leavevmode",
        "leftarrow",
        "leftharpoondown",
        "leftharpoonup",
        "leftrightarrow",
        "leq",
        "let",
        "lfloor",
        "lg",
        "lim",
        "liminf",
        "limsup",
        "lineskip",
        "linewidth",
        "listfiles",
        "ll",
        "llap",
        "ln",
        "log",
        "makeatletter",
        "makeatother",
        "makebox",
        "mathbb",
        "mathbin",
        "mathclose",
        "mathopen",
        "mathord",
        "mathrel",
        "mathstrut",
        "mathsurround",
        "max",
        "mbox",
        "mdseries",
        "medbreak",
        "medmuskip",
        "medskip",
        "medspace",
        "mid",
        "min",
        "mp",
        "mu",
        "muskip",
        "nabla",
        "nearrow",
        "neg",
        "negmedspace",
        "negthickspace",
        "negthinspace",
        "newcommand",
        "newenvironment",
        "newlength",
        "newline",
        "newpage",
        "ni",
        "nobreak",
        "nobreakdashes",
        "nobreakspace",
        "noindent",
        "nopagebreak",
        "normalbaselines",
        "normalbaselineskip",
        "normalfont",
        "normallineskip",
        "normalsize",
        "nu",
        "nwarrow",
        "odot",
        "oldstylenums",
        "omega",
        "ominus",
        "onecolumn",
        "oplus",
        "oslash",
        "otimes",
        "overfullrule",
        "pagebreak",
        "pagenumbering",
        "pageref",
        "paperheight",
        "paperwidth",
        "par",
        "parallel",
        "parbox",
        "parfillskip",
        "parindent",
        "parskip",
        "partial",
        "perp",
        "phantom",
        "phi",
        "pi",
        "pm",
        "pmod",
        "prime",
        "prod",
        "propto",
        "providecommand",
        "psi",
        "qquad",
        "quad",
        "raisebox",
        "rceil",
        "ref",
        "relax",
        "renewcommand",
        "renewenvironment",
        "rfloor",
        "rho",
        "right",
        "rightarrow",
        "rightharpoondown",
        "rightharpoonup",
        "rlap",
        "rmfamily",
        "roman",
        "savebox",
        "scriptscriptstyle",
        "scriptsize",
        "scriptstyle",
        "scshape",
        "searrow",
        "sec",
        "setcounter",
        "setlength",
        "setminus",
        "sffamily",
        "show",
        "sigma",
        "sim",
        "simeq",
        "sin",
        "sinh",
        "slshape",
        "smallskip",
        "smash",
        "stackrel",
        "stepcounter",
        "subset",
        "subseteq",
        "sum",
        "sup",
        "suppressfloats",
        "supset",
        "supseteq",
        "swarrow",
        "tan",
        "tanh",
        "tau",
        "texorpdfstring",
        "textasciicircum",
        "textasciitilde",
        "textasteriskcentered",
        "textbackslash",
        "textbf",
        "textbigcircle",
        "textbullet",
        "textcircled",
        "textdagger",
        "textheight",
        "textit",
        "textmd",
        "textnormal",
        "textperiodcentered",
        "textrm",
        "textsc",
        "textsf",
        "textsl",
        "textstyle",
        "textsubscript",
        "textsuperscript",
        "texttt",
        "textup",
        "textvisiblespace",
        "textwidth",
        "the",
        "theequation",
        "thefootnote",
        "thepage",
        "therefore",
        "theta",
        "thicklines",
        "thickmuskip",
        "thickspace",
        "thinlines",
        "thinmuskip",
        "thinspace",
        "times",
        "title",
        "ttfamily",
        "twocolumn",
        "upshape",
        "upsilon",
        "usepackage",
        "varDelta",
        "varGamma",
        "varLambda",
        "varOmega",
        "varPhi",
        "varPi",
        "varPsi",
        "varSigma",
        "varXi",
        "varepsilon",
        "varphi",
        "varrho",
        "varsigma",
        "vartheta",
        "vphantom",
        "vrule",
        "vspace",
        "xi",
        "zeta",
      ]),
    );

    cs = cs.concat(
      await _generate("adjustbox", [ // {{{1
        "adjustbox",
        "adjustimage",
        "adjincludegraphics",
      ]),
    );

    cs = cs.concat(
      await _generate("amsmath", [ // {{{1
        "Big",
        "Bigg",
        "DeclareMathOperator",
        "DeclarePairedDelimiter",
        "Longleftarrow",
        "Longleftrightarrow",
        "Longrightarrow",
        "allowdisplaybreaks",
        "bar",
        "big",
        "bigg",
        "binom",
        "boldsymbol",
        "ddot",
        "displaybreak",
        "displaystyle",
        "dot",
        "dots",
        "dotsb",
        "dotsc",
        "dotsm",
        "dotso",
        "genfrac",
        "gtrless",
        "hat",
        "hookleftarrow",
        "hookrightarrow",
        "iff",
        "iiiint",
        "iiint",
        "iint",
        "impliedby",
        "implies",
        "intertext",
        "lVert",
        "lessgtr",
        "longleftarrow",
        "longleftrightarrow",
        "longmapsto",
        "longrightarrow",
        "lvert",
        "mapsto",
        "mspace",
        "nLeftarrow",
        "nLeftrightarrow",
        "nRightarrow",
        "nexists",
        "nonumber",
        "notag",
        "oint",
        "operatorname",
        "operatorname*",
        "rVert",
        "rvert",
        "scriptstyle",
        "substack",
        "tilde",
        "tmspace",
        "varnothing",
      ]),
    );

    cs = cs.concat(
      await _generate("array", [ // {{{1
        "multicolumn",
        "newcolomntype",
      ]),
    );

    cs = cs.concat(
      await _generate("article", [ // {{{1
        "abovecaptionskip",
        "appendixname",
        "belowcaptionskip",
        "figurename",
        "maketitle",
        "paragraph",
        "section",
        "subparagraph",
        "subsection",
        "subsubsection",
        "tablename",
        "tableofcontents",
        "thefigure",
        "thepart",
        "thesection",
        "thesubsection",
        "thesubsubsection",
        "thetable",
      ]),
    );

    cs = cs.concat(
      await _generate("beamer", [ // {{{1
        "AtBeginDocument",
        "AtBeginLecture",
        "AtBeginNote",
        "AtBeginPart",
        "AtBeginSection",
        "AtBeginSubsection",
        "AtBeginSubsubsection",
        "AtEndNote",
        "addtobeamertemplate",
        "alt",
        "defbeamertemplate",
        "hypertarget",
        "insertappendixendpage",
        "insertappendixframenumber",
        "insertappendixstartpage",
        "insertauthor",
        "insertbackfindforwardnavigationsymbol",
        "insertbiblabel",
        "insertblocktitle",
        "insertbuttontext",
        "insertcaption",
        "insertcaptionname",
        "insertcaptionnumber",
        "insertcontinuationcount",
        "insertcontinuationcountroman",
        "insertcontinuationtext",
        "insertdate",
        "insertdescriptionitem",
        "insertdocnavigationsymbol",
        "insertdocumentendpage",
        "insertdocumentstartpage",
        "insertenumlabel",
        "insertfootnotemark",
        "insertfootnotetext",
        "insertframeendpage",
        "insertframenavigationsymbol",
        "insertframenumber",
        "insertframestartpage",
        "insertframesubtitle",
        "insertframetitle",
        "insertgotosymbol",
        "insertinstitute",
        "insertlogo",
        "insertmainframenumber",
        "insertnavigation",
        "insertnote",
        "insertoverlaynumber",
        "insertpagenumber",
        "insertpart",
        "insertpartendpage",
        "insertpartheadnumber",
        "insertpartnumber",
        "insertpartstartpage",
        "insertpresentationendpage",
        "insertpresentationstartpage",
        "insertreturnsymbol",
        "insertromanpartnumber",
        "insertsection",
        "insertsectionendpage",
        "insertsectionhead",
        "insertsectionheadnumber",
        "insertsectionnavigation",
        "insertsectionnavigationhorizontal",
        "insertsectionnavigationsymbol",
        "insertsectionnumber",
        "insertsectionstartpage",
        "insertshortauthor",
        "insertshortdate",
        "insertshortinstitute",
        "insertshortpart",
        "insertshortsubtitle",
        "insertshorttitle",
        "insertskipsymbol",
        "insertslideintonotes",
        "insertslidenavigationsymbol",
        "insertslidenumber",
        "insertsubenumlabel",
        "insertsubsection",
        "insertsubsectionendpage",
        "insertsubsectionhead",
        "insertsubsectionheadnumber",
        "insertsubsectionnavigation",
        "insertsubsectionnavigationhorizontal",
        "insertsubsectionnavigationsymbol",
        "insertsubsectionnumber",
        "insertsubsectionstartpage",
        "insertsubsubenumlabel",
        "insertsubsubsection",
        "insertsubsubsectionhead",
        "insertsubsubsectionheadnumber",
        "insertsubtitle",
        "inserttheoremaddition",
        "inserttheoremblockenv",
        "inserttheoremheadfont",
        "inserttheoremname",
        "inserttheoremnumber",
        "inserttheorempunctuation",
        "inserttitle",
        "inserttitlegraphic",
        "inserttocsection",
        "inserttocsectionnumber",
        "inserttocsubsection",
        "inserttocsubsectionnumber",
        "inserttocsubsubsection",
        "inserttocsubsubsectionnumber",
        "inserttotalframenumber",
        "insertverticalnavigation",
        "invisible",
        "only",
        "onslide",
        "setbeamercolor",
        "setbeamerfont",
        "setbeamersize",
        "setbeamertemplate",
        "temporal",
        "uncover",
        "usebackgroundtemplate",
        "usebeamercolor",
        "usebeamerfont",
        "usebeamertemplate",
        "usecolortheme",
        "usefonttheme",
        "useinnertheme",
        "useoutertheme",
        "usetheme",
        "visible",
      ]),
    );

    cs = cs.concat(
      await _generate("biblatex", [ // {{{1
        "AtBeginBibliography",
        "AtBeginBiblist",
        "AtDataInput",
        "AtEachCitekey",
        "AtEveryBibitem",
        "AtEveryBiblistitem",
        "AtEveryCite",
        "AtEveryCitekey",
        "AtEveryMultiCite",
        "Autocite",
        "Autocite*",
        "Cite",
        "Citeauthor",
        "Citeauthor*",
        "Parencite",
        "Textcite",
        "addbibresource",
        "addglobalbib",
        "autocite",
        "autocite",
        "autocite*",
        "bibbysection",
        "bibbysegment",
        "brackettext",
        "cite",
        "cite*",
        "citeauthor",
        "citeauthor*",
        "citedate",
        "citedate*",
        "citetitle",
        "citetitle*",
        "citeurl",
        "citeyear",
        "citeyear*",
        "clearfield",
        "endrefsection",
        "footfullcite",
        "fullcite",
        "newrefsection",
        "newrefsegment",
        "nocite",
        "parencite",
        "parencite",
        "parencite*",
        "parentext",
        "printbibliography",
        "supercite",
        "textcite",
      ]),
    );

    cs = cs.concat(
      await _generate("booktabs", [ // {{{1
        "addlinespace",
        "bottomrule",
        "cmidrule",
        "midrule",
        "morecmidrule",
        "specialrule",
        "toprule",
      ]),
    );

    cs = cs.concat(
      await _generate("chemfig", [ // {{{1
        "Chemabove",
        "Chembelow",
        "arrow",
        "chemabove",
        "chembelow",
        "chemdown",
        "chemfig",
        "chemleft",
        "chemmove",
        "chemname",
        "chemnameinit",
        "chemright",
        "chemskipalign",
        "chemup",
        "definearrow",
        "definesubmol",
        "hflipnext",
        "polymerdelim",
        "printatom",
        "redefinesubmol",
        "resetchemfig",
        "schemestart",
        "schemestop",
        "setchemfig",
        "subscheme",
        "vflipnext",
      ]),
    );

    cs = cs.concat(
      await _generate("expl3", [ // {{{1
        "ExplSyntaxOff",
        "ExplSyntaxOn",
        "GetIdInfo",
        "ProvideExplClass",
        "ProvideExplFile",
        "ProvideExplPackage",
      ]),
    );

    cs = cs.concat(
      await _generate("fontawesome5", [ // {{{1
        "faIcon",
      ]),
    );

    cs = cs.concat(
      await _generate("fontspec", [ // {{{1
        "addfontfeature",
        "defaultfontfeatures",
        "defaultfontfeatures+",
        "fontspec",
        "newfontface",
        "newfontfamily",
        "renewfontfamily",
        "setfontfamily",
        "setmainfont",
        "setmonofont",
        "setsansfont",
      ]),
    );

    cs = cs.concat(
      await _generate("graphicx", [ // {{{1
        "includegraphics",
        "resizebox",
        "scalebox",
      ]),
    );

    cs = cs.concat(
      await _generate("hyperref", [ // {{{1
        "autopageref",
        "autoref",
        "belowpdfbookmark",
        "currentpdfbookmark",
        "href",
        "hyperimage",
        "hyperlink",
        "hyperpage",
        "hypersetup",
        "hypertarget",
        "nolinkurl",
        "pageref",
        "pdfbookmark",
        "phantomsection",
        "subpdfbookmark",
        "texorpdfstring",
        "thispdfpagelabel",
        "url",
        // "IfHyperBooleanExists",
        // "IfHyperBooleanExists",
        // "hyperbaseurl",
        // "hypercalcbp",
        // "hyperdef",
        // "hyperref",
        // "pdfstringdef",
      ]),
    );

    cs = cs.concat(
      await _generate("KOMA-Script", [ // {{{1
        "CloneTOCEntryStyle",
        "RedeclareSectionCommand",
        "TOCEntryStyleInitCode",
        "TOCEntryStyleStartInitCode",
        "abstractname",
        "addchap",
        "addchap*",
        "addchapmark",
        "addchaptertocentry",
        "addcontentsline",
        "addpart",
        "addpart*",
        "addparttocentry",
        "addsec",
        "addsec*",
        "addsectiontocentry",
        "addtokomafont",
        "appendix",
        "appendixname",
        "backmatter",
        "caption",
        "cehead",
        "chapter",
        "chapter*",
        "chapterformat",
        "chaptername",
        "chead",
        "cohead",
        "figurename",
        "frontmatter",
        "ihead",
        "lehead",
        "lohead",
        "newcaptionname*",
        "newkomafont",
        "ohead",
        "othersectionlevelsformat",
        "paragraphformat",
        "part",
        "part*",
        "partformat",
        "partname",
        "rehead",
        "rohead",
        "section",
        "section*",
        "sectionformat",
        "setcapindent",
        "setkomafont",
        "subparagraphformat",
        "subsection",
        "subsection*",
        "subsectionformat",
        "subsubsection",
        "subsubsection*",
        "subsubsectionformat",
        "subtitle",
        "tablename",
        "title",
      ]),
    );

    cs = cs.concat(
      await _generate("minted", [ // {{{1
        "inputminted",
        "listingscaption",
        "listoflistingscaption",
        "newminted",
        "mint",
        "mintinline",
        "usemintedstyle",
      ]),
    );

    cs = cs.concat(
      await _generate("mleftright", [ // {{{1
        "mleft",
        "mright",
        "mleftrightrestore",
        "mleftright",
      ]),
    );

    cs = cs.concat(
      await _generate("pdfpages", [ // {{{1
        "includepdf",
      ]),
    );

    cs = cs.concat(
      await _generate("physics", [ // {{{1
        "Bqty",
        "PV",
        "Res",
        "Tr",
        "Trace",
        "abs",
        "abs*",
        "absolutevalue",
        "absolutevalue*",
        "acomm",
        "anticommutator",
        "bqty",
        "bra",
        "bra*",
        "braket",
        "braket*",
        "comm",
        "comm*",
        "commutator",
        "commutator*",
        "dd",
        "derivative",
        "derivative*",
        "differential",
        "dv",
        "dv*",
        "dyad",
        "dyad*",
        "erf",
        "ev",
        "ev*",
        "ev**",
        "eval",
        "eval*",
        "evaluated",
        "evaluated*",
        "expectationvalue",
        "expectationvalue*",
        "expectationvalue**",
        "expval",
        "expval*",
        "expval**",
        "fdv",
        "fdv*",
        "functionalderivative",
        "functionalderivative*",
        "innerproduct",
        "innerproduct*",
        "ip",
        "ip*",
        "ket",
        "ket*",
        "ketbra",
        "ketbra*",
        "matrixel",
        "matrixel*",
        "matrixel**",
        "matrixelement",
        "matrixelement*",
        "matrixelement**",
        "mel",
        "mel*",
        "mel**",
        "norm",
        "norm*",
        "op",
        "op*",
        "order",
        "order*",
        "outerproduct",
        "outerproduct*",
        "partialderivative",
        "partialderivative*",
        "pb",
        "pderivative",
        "pderivative*",
        "poissonbracket",
        "pqty",
        "principalvalue",
        "pv",
        "qty",
        "quantity",
        "rank",
        "tr",
        "trace",
        "var",
        "variation",
        "vqty",
      ]),
    );

    cs = cs.concat(
      await _generate("siunitx", [ // {{{1
        "DeclareSIQualifier",
        "DeclareSIUnit",
        "SI",
        "ang",
        "num",
        "si",
        "sisetup",
        "tablenum",
      ]),
    );

    cs = cs.concat(
      await _generate("tikz", [ // {{{1
        "clip",
        "coordinate",
        "draw",
        "fill",
        "filldraw",
        "node",
        "nodepart",
        "path",
        "pattern",
        "shade",
        "shadedraw",
        "tikz",
        "tikzset",
        "useasboundingbox",
        "usetikzlibrary",
      ]),
    );

    cs = cs.concat(
      await _generate("tikz/external", [ // {{{1
        "image",
        "pgfactualjobname",
        "texsource",
        "tikzappendtofigurename",
        "tikzexternaldisable",
        "tikzexternalenable",
        "tikzexternalfiledependsonfile",
        "tikzexternalize",
        "tikzexternalrealjob",
        "tikzifexternalizing",
        "tikzifexternalizingnext",
        "tikzpicturedependsonfile",
        "tikzsetexternalprefix",
        "tikzsetfigurename",
        "tikzsetnextfilename",
      ]),
    );

    cs = cs.concat(
      await _generate("unicode-math", [ // {{{1
        "QED",
        "benzener",
        "checkmark",
        "coloneq",
        "diameter",
        "dicei",
        "diceii",
        "diceiii",
        "diceiv",
        "dicev",
        "dicevi",
        "downwhitearrow",
        "dprime",
        "equcolon",
        "errorbarblackcircle",
        "errorbarblackdiamond",
        "errorbarblacksquare",
        "errorbarcircle",
        "errorbardiamond",
        "errorbarsquare",
        "hermitmatrix",
        "hexagon",
        "increment",
        "lAngle",
        "leftwhitearrow",
        "mapsfrom",
        "mathbb",
        "mathbbit",
        "mathbffrac",
        "mathbfit",
        "mathbfscr",
        "mathbfsfit",
        "mathbfsfup",
        "mathbfup",
        "mathfrak",
        "mathit",
        "mathscr",
        "mathsfit",
        "mathsfup",
        "mathtt",
        "mathup",
        "mitAlpha",
        "mitBeta",
        "mitChi",
        "mitDelta",
        "mitEpsilon",
        "mitEta",
        "mitGamma",
        "mitIota",
        "mitKappa",
        "mitLambda",
        "mitMu",
        "mitNu",
        "mitOmega",
        "mitOmicron",
        "mitPhi",
        "mitPi",
        "mitPsi",
        "mitRho",
        "mitSigma",
        "mitTau",
        "mitTheta",
        "mitUpsilon",
        "mitXi",
        "mitZeta",
        "mitalpha",
        "mitbeta",
        "mitchi",
        "mitdelta",
        "mitepsilon",
        "miteta",
        "mitgamma",
        "mitiota",
        "mitkappa",
        "mitlambda",
        "mitmu",
        "mitnu",
        "mitomega",
        "mitomicron",
        "mitphi",
        "mitpi",
        "mitpsi",
        "mitrho",
        "mitsigma",
        "mittau",
        "mittheta",
        "mitupsilon",
        "mitvarepsilon",
        "mitvarkappa",
        "mitvarphi",
        "mitvarpi",
        "mitvarrho",
        "mitvarsigma",
        "mitvartheta",
        "mitxi",
        "mitzeta",
        "mupAlpha",
        "mupBeta",
        "mupChi",
        "mupDelta",
        "mupEpsilon",
        "mupEta",
        "mupGamma",
        "mupIota",
        "mupKappa",
        "mupLambda",
        "mupMu",
        "mupNu",
        "mupOmega",
        "mupOmicron",
        "mupPhi",
        "mupPi",
        "mupPsi",
        "mupRho",
        "mupSigma",
        "mupTau",
        "mupTheta",
        "mupUpsilon",
        "mupXi",
        "mupZeta",
        "mupalpha",
        "mupbeta",
        "mupchi",
        "mupdelta",
        "mupepsilon",
        "mupeta",
        "mupgamma",
        "mupiota",
        "mupkappa",
        "muplambda",
        "mupmu",
        "mupnu",
        "mupomega",
        "mupomicron",
        "mupphi",
        "muppi",
        "muppsi",
        "muprho",
        "mupsigma",
        "muptau",
        "muptheta",
        "mupupsilon",
        "mupvarphi",
        "mupvarpi",
        "mupvarsigma",
        "mupvartheta",
        "mupxi",
        "mupzeta",
        "napprox",
        "nequiv",
        "nsime",
        "nsubset",
        "nsupset",
        "ocirc",
        "oiiint",
        "oiint",
        "rAngle",
        "rightwhitearrow",
        "setmathfont",
        "setmathfontface",
        "sime",
        "symbb",
        "symbbit",
        "symbf",
        "symbfcal",
        "symbffrak",
        "symbfit",
        "symbfscr",
        "symbfsf",
        "symbfsfit",
        "symbfsfup",
        "symbfup",
        "symcal",
        "symfrak",
        "symit",
        "symliteral",
        "symnormal",
        "symscr",
        "symsf",
        "symsfit",
        "symsfup",
        "symtt",
        "symup",
        "thermod",
        "unimathsetup",
        "updownarrows",
        "upwhitearrow",
        "varhexagonlrbonds",
      ]),
    );

    cs = cs.concat(
      await _generate("xcolor", [ // {{{1
        "DefineNamedColor",
        "blendcolors",
        "blendcolors*",
        "boxframe",
        "color",
        "colorbox",
        "colorlet",
        "colormask",
        "colorseriescycle",
        "definecolor",
        "definecolors",
        "definecolorseries",
        "definecolorset",
        "fcolorbox",
        "hiderowcolors",
        "ifdefinecolors",
        "ifglobalcolors",
        "ifmaskcolors",
        "maskcolors",
        "nopagecolor",
        "pagecolor",
        "preparecolor",
        "preparecolorset",
        "providecolor",
        "providecolors",
        "providecolorset",
        "resetcolorseries",
        "rowcolors",
        "rowcolors*",
        "rownum",
        "showrowcolors",
        "testcolor",
        "textcolor",
        "xglobal",
      ]),
    );

    cs = cs.concat(
      await _generate("xparse", [ // {{{1
        "ArgumentSpecification",
        "DeclareDocumentCommand",
        "DeclareDocumentEnvironment",
        "DeclareExpandableDocumentCommand",
        "IfBooleanF",
        "IfBooleanT",
        "IfBooleanTF",
        "IfNoValueF",
        "IfNoValueT",
        "IfNoValueTF",
        "IfValueF",
        "IfValueT",
        "IfValueTF",
        "NewDocumentCommand",
        "NewDocumentEnvironment",
        "NewExpandableDocumentCommand",
        "ProvideDocumentCommand",
        "ProvideDocumentEnvironment",
        "ProvideExpandableDocumentCommand",
        "RenewDocumentCommand",
        "RenewDocumentEnvironment",
        "RenewExpandableDocumentCommand",
      ]),
    );

    // }}}1
    return cs;
  }

  params(): Params {
    return {};
  }
}
