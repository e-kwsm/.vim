// vi:foldmethod=marker
import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v0.18.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v0.18.0/base/source.ts#^";

async function _generate(pkg: string, envs: string[]): Promise<Candidate[]> {
  return await Promise.all(
    envs.map(
      (env) =>
        Promise.resolve({
          menu: "env",
          kind: pkg,
          word: env,
        }),
    ),
  );
}

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    if (
      !args.context.input.match(/\\(?:begin|end|renewenvironment)\{[A-Za-z]*$/)
    ) {
      return [];
    }

    let cs: Candidate[] = [];

    cs = cs.concat(
      await _generate("", [ // {{{1
        "description",
        "document",
        "enumerate",
        "figure",
        "itemize",
        "table",
        "tabular",
        "verbatim",
      ]),
    );

    cs = cs.concat(
      await _generate("adjustbox", [ // {{{1
        "adjustbox",
      ]),
    );

    cs = cs.concat(
      await _generate("amsmath", [ // {{{1
        "Bmatrix",
        "Pmatrix",
        "Vmatrix",
        "align",
        "align*",
        "alignat",
        "alignat*",
        "bmatrix",
        "cases",
        "equation",
        "equation*",
        "flalign",
        "flalign*",
        "gather",
        "gather*",
        "gathered",
        "aligned",
        "alignedat",
        "multline",
        "multline*",
        "pmatrix",
        "split",
        "vmatrix",
      ]),
    );

    cs = cs.concat(
      await _generate("beamer", [ // {{{1
        "Beweis",
        "Corollary",
        "Definition",
        "Example",
        "Examples",
        "Itemize",
        "Lemma",
        "Problem",
        "Proof",
        "Theorem",
        "abstract",
        "alertblock",
        "alertenv",
        "beamercolorbox",
        "block",
        "boldequation",
        "boldequation*",
        "column",
        "columns",
        "columnsonlytextwidth",
        "enumstep",
        "exampleblock",
        "figure",
        "frame",
        "invisibleenv",
        "itemstep",
        "notes",
        "onlyenv",
        "overlayarea",
        "overprint",
        "pauses",
        "quotation",
        "quote",
        "semiverbatim",
        "slide",
        "slide*",
        "structureenv",
        "table",
        "thebibliography",
        "uncoverenv",
        "verse",
        "visibleenv",
      ]),
    );

    cs = cs.concat(
      await _generate("biblatex", [ // {{{1
        "refcontext",
        "refsection",
        "refsegment",
      ]),
    );

    cs = cs.concat(
      await _generate("filecontents", [ // {{{1
        "filecontents",
      ]),
    );

    cs = cs.concat(
      await _generate("listings", [ // {{{1
        "lstlisting",
      ]),
    );

    cs = cs.concat(
      await _generate("mathtools", [ // {{{1
        "Bmatrix*",
        "Vmatrix*",
        "bmatrix*",
        "cases*",
        "dcases",
        "dcases*",
        "drcases",
        "drcases*",
        "lgathered",
        "matrix*",
        "pmatrix*",
        "rcases",
        "rcases*",
        "rgathered",
        "vmatrix*",
        // "Bsmallmatrix",
        // "Bsmallmatrix*",
        // "Vsmallmatrix",
        // "Vsmallmatrix*",
        // "bsmallmatrix",
        // "bsmallmatrix*",
        // "multilined",
        // "psmallmatrix",
        // "psmallmatrix*",
        // "smallmatrix*",
        // "spreadlines",
        // "vsmallmatrix",
        // "vsmallmatrix*",
      ]),
    );

    cs = cs.concat(
      await _generate("minted", [ // {{{1
        "listing",
        "minted",
      ]),
    );

    cs = cs.concat(
      await _generate("tcolorbox", [ // {{{1
        "tcolorbox",
      ]),
    );

    cs = cs.concat(
      await _generate("tikz", [ // {{{1
        "tikzpicture",
      ]),
    );
    // }}}1
    return cs;
  }

  params(): Params {
    return {};
  }
}
