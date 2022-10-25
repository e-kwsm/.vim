import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.0.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.0.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/(?:^|[^A-Za-z0-9:]):[A-Za-z]*$/)) {
      return [];
    }

    return await Promise.all([
      // https://docutils.sourceforge.io/docs/ref/rst/roles.html
      "math",
      "sub",
      "sup",
      "title",
      // https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html
      "any",
      "ref",
      "doc",
      "download",
      "numref",
      "envvar",
      "token",
      "keyword",
      "option",
      "term",
      "abbr",
      "command",
      "dfn",
      "file",
      "guilabel",
      "kbd",
      "mailheader",
      "makevar",
      "manpage",
      "menuselection",
      "mimetype",
      "newsgroup",
      "program",
      "regexp",
      "samp",
      // https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html
      "py:mod",
      "py:func",
      "py:const",
      "py:class",
      "py:meth",
      "py:attr",
      "py:exc",
      "py:obj",
      "c:member",
      "c:data",
      "c:var",
      "c:func",
      "c:macro",
      "c:struct",
      "c:union",
      "c:enum",
      "c:enumerator",
      "c:type",
      "c:expr",
      "c:texpr",
      "cpp:expr",
      "cpp:texpr",
      "cpp:any",
      "cpp:class",
      "cpp:struct",
      "cpp:func",
      "cpp:member",
      "cpp:var",
      "cpp:type",
      "cpp:concept",
      "cpp:enum",
      "cpp:enumerator",
      "rst:dir",
      "rst:role",
      "math:numref",
    ].map(
      (role) =>
        Promise.resolve({ menu: "rst", word: `${role}:\``, abbr: role }),
    ));
  }

  params(): Params {
    return {};
  }
}
