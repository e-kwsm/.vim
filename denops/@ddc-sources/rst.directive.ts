import {
  BaseSource,
  DdcGatherItems,
  Item,
} from "https://deno.land/x/ddc_vim@v2.4.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v2.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/^\.\. (?:[A-Za-z]+:)?[A-Za-z]*$/)) {
      return [];
    }

    type Directive = {
      type: string;
      arg?: string;
    };

    return await Promise.all([
      // https://docutils.sourceforge.io/docs/ref/rst/directives.html
      { type: "attention" },
      { type: "caution" },
      { type: "danger" },
      { type: "error" },
      { type: "hint" },
      { type: "important" },
      { type: "note" },
      { type: "tip" },
      { type: "warning" },
      { type: "admonition", arg: "title" },
      { type: "image", arg: "image URI" },
      { type: "figure", arg: "image URI" },
      { type: "topic", arg: "title" },
      { type: "sidebar", arg: "[title]" },
      { type: "parsed-literal" },
      { type: "code", arg: "[language]" },
      { type: "math" },
      { type: "rubric", arg: "text" },
      { type: "epigraph" },
      { type: "highlights" },
      { type: "pull-quote" },
      { type: "compound" },
      { type: "container", arg: "[class names]" },
      { type: "table", arg: "[title]" },
      { type: "csv-table", arg: "[title]" },
      { type: "list-table", arg: "[title]" },
      { type: "contents", arg: "[title]" },
      // { type: "sectnum" },
      // { type: "section-numbering" },
      // { type: "header" },
      // { type: "footer" },
      { type: "target-notes" },
      { type: "meta" },
      { type: "include", arg: "file" },
      { type: "raw", arg: "output format types" },
      { type: "class", arg: "class names / attribute values" },
      { type: "role", arg: "new role name[(base role name)]." },
      { type: "default-role", arg: "[new default role name]" },
      { type: "title", arg: "text" },
      // https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html
      { type: "toctree" },
      { type: "versionadded", arg: "version" },
      { type: "versionchanged", arg: "version" },
      { type: "deprecated", arg: "version" },
      { type: "seealso" },
      { type: "hlist" },
      { type: "highlight", arg: "language" },
      { type: "code-block", arg: "[language]" },
      { type: "literalinclude", arg: "filename" },
      { type: "glossary" },
      { type: "sectionauthor", arg: "name <email>" },
      { type: "codeauthor", arg: "name <email>" },
      { type: "index", arg: "entries" },
      { type: "only", arg: "expression" },
      { type: "tabularcolumns", arg: "column spec" },
      { type: "productionlist", arg: "productionGroup" },
      // https://www.sphinx-doc.org/en/master/usage/extensions/todo.html
      { type: "todo" },
      { type: "todolist" },
      // https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html
      { type: "py:module", arg: "name" },
      { type: "py:function", arg: "name(parameters)" },
      { type: "py:data", arg: "name" },
      { type: "py:exception", arg: "name" },
      { type: "py:class", arg: "name[(parameters)]" },
      { type: "py:attribute", arg: "name" },
      { type: "py:method", arg: "name(parameters)" },
      { type: "py:staticmethod", arg: "name(parameters)" },
      { type: "py:classmethod", arg: "name(parameters)" },
      { type: "py:decorator", arg: "name[(parameters)]" },
      { type: "py:decoratormethod", arg: "name[(parameters)]" },
      { type: "c:member", arg: "declaration" },
      { type: "c:var", arg: "declaration" },
      { type: "c:function", arg: "function prototype" },
      { type: "c:macro", arg: "name[(arg list)]" },
      { type: "c:struct", arg: "name" },
      { type: "c:union", arg: "name" },
      { type: "c:enum", arg: "name" },
      { type: "c:enumerator", arg: "name" },
      { type: "c:type", arg: "typedef-like declaration|name" },
      { type: "c:alias", arg: "name" },
      { type: "c:namespace", arg: "scope specification" },
      { type: "cpp:class", arg: "class specifier" },
      { type: "cpp:struct", arg: "class specifier" },
      { type: "cpp:function", arg: "(member) function prototype" },
      { type: "cpp:member", arg: "(member) variable declaration" },
      { type: "cpp:var", arg: "(member) variable declaration" },
      {
        type: "cpp:type",
        arg: "typedef declaration|name|type alias declaration",
      },
      { type: "cpp:enum", arg: "unscoped enum declaration" },
      { type: "cpp:enum-struct", arg: "scoped enum declaration" },
      { type: "cpp:enum-class", arg: "scoped enum declaration" },
      { type: "cpp:enumerator", arg: "name|name = constant" },
      { type: "cpp:union", arg: "name" },
      { type: "cpp:concept", arg: "template-parameter-list name" },
      { type: "cpp:alias", arg: "name or function signature" },
      { type: "cpp:namespace", arg: "scope specification" },
      { type: "cpp:namespace-push", arg: "scope specification" },
      { type: "cpp:namespace-pop", arg: "scope specification" },
      { type: "option", arg: "name args, name args, ..." },
      { type: "envvar", arg: "name" },
      { type: "program", arg: "name" },
      { type: "describe", arg: "text" },
      { type: "object", arg: "text" },
      { type: "rst:directive", arg: "name" },
      { type: "rst:directive:option", arg: "name" },
      { type: "rst:role", arg: "name" },
    ].map(
      (d: Directive) => {
        const r: Item = {
          menu: "rst",
          abbr: d.type,
          word: `${d.type}::`,
          kind: "",
        };
        if (d.arg) {
          r.word += " ";
          r.kind = d.arg;
        }
        return Promise.resolve(r);
      },
    ));
  }

  params(): Params {
    return {};
  }
}
