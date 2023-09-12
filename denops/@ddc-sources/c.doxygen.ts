import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v4.0.5/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v4.0.5/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/(?:\\|@)\S*$/)) {
      return [];
    }

    return await Promise.all([
      "a",
      "addindex",
      "addtogroup",
      "anchor",
      "arg",
      "attention",
      "author",
      "authors",
      "b",
      "brief",
      "bug",
      "c",
      "callergraph",
      "callgraph",
      "category",
      "cite",
      "class",
      "code",
      "cond",
      "copybrief",
      "copydetails",
      "copydoc",
      "copyright",
      "date",
      "def",
      "defgroup",
      "deprecated",
      "details",
      "diafile",
      "dir",
      "docbookonly",
      "dontinclude",
      "dot",
      "dotfile",
      "e",
      "else",
      "elseif",
      "em",
      "endcode",
      "endcond",
      "enddocbookonly",
      "enddot",
      "endhtmlonly",
      "endif",
      "endinternal",
      "endlatexonly",
      "endlink",
      "endmanonly",
      "endmsc",
      "endparblock",
      "endrtfonly",
      "endsecreflist",
      "enduml",
      "endverbatim",
      "endxmlonly",
      "enum",
      "example",
      "exception",
      "extends",
      "f$",
      "f[",
      "f]",
      "file",
      "f{",
      "f}",
      "headerfile",
      "hidecallergraph",
      "hidecallgraph",
      "hideinitializer",
      "hiderefby",
      "hiderefs",
      "htmlinclude",
      "htmlonly",
      "idlexcept",
      "if",
      "ifnot",
      "image",
      "implements",
      "include",
      "includedoc",
      "includelineno",
      "ingroup",
      "interface",
      "internal",
      "invariant",
      "latexinclude",
      "latexonly",
      "li",
      "line",
      "link",
      "mainpage",
      "manonly",
      "memberof",
      "msc",
      "mscfile",
      "n",
      "name",
      "namespace",
      "nosubgrouping",
      "note",
      "overload",
      "p",
      "package",
      "page",
      "par",
      "paragraph",
      "param",
      "parblock",
      "post",
      "pre",
      "private",
      "privatesection",
      "property",
      "protected",
      "protectedsection",
      "protocol",
      "public",
      "publicsection",
      "pure",
      "ref",
      "refitem",
      "related",
      "relatedalso",
      "relates",
      "relatesalso",
      "remark",
      "remarks",
      "result",
      "return",
      "returns",
      "retval",
      "rtfonly",
      "sa",
      "secreflist",
      "section",
      "see",
      "short",
      "showinitializer",
      "showrefby",
      "showrefs",
      "since",
      "skip",
      "skipline",
      "snippet",
      "snippetdoc",
      "snippetlineno",
      "startuml",
      "struct",
      "subpage",
      "subsection",
      "subsubsection",
      "tableofcontents",
      "test",
      "throw",
      "throws",
      "todo",
      "tparam",
      "typedef",
      "union",
      "until",
      "var",
      "verbatim",
      "verbinclude",
      "version",
      "vhdlflow",
      "warning",
      "weakgroup",
      "xmlonly",
      "xrefitem",
      // "fn",
    ].map(
      (word) => Promise.resolve({ menu: "doxygen", word: word, abbr: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
