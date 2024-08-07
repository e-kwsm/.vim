import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v6.0.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v6.0.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/^\s*\w*$/)) {
      return [];
    }

    return await Promise.all([
      "abstract",
      "addendum",
      "afterword",
      "annotation",
      "annotator",
      "author",
      "authortype",
      "bookauthor",
      "bookpagination",
      "booksubtitle",
      "booktitle",
      "booktitleaddon",
      "chapter",
      "commentator",
      "crossref",
      "date",
      "doi",
      "edition",
      "editor",
      "editora",
      "editoratype",
      "editorb",
      "editorbtype",
      "editorc",
      "editorctype",
      "editortype",
      "eid",
      "entryset",
      "entrysubtype",
      "eprint",
      "eprintclass",
      "eprinttype",
      "eventdate",
      "eventtitle",
      "eventtitleaddon",
      "execute",
      "file",
      "foreword",
      "gender",
      "holder",
      "howpublished",
      "ids",
      "indexsorttitle",
      "indextitle",
      "institution",
      "introduction",
      "isan",
      "isbn",
      "ismn",
      "isrn",
      "issn",
      "issue",
      "issuesubtitle",
      "issuetitle",
      "iswc",
      "journalsubtitle",
      "journaltitle",
      "keywords",
      "label",
      "langid",
      "langidopts",
      "language",
      "library",
      "lista",
      "listb",
      "listc",
      "listd",
      "liste",
      "listf",
      "location",
      "mainsubtitle",
      "maintitle",
      "maintitleaddon",
      "namea",
      "nameaddon",
      "nameatype",
      "nameb",
      "namebtype",
      "namec",
      "namectype",
      "note",
      "number",
      "options",
      "organization",
      "origdate",
      "origlanguage",
      "origlocation",
      "origpublisher",
      "origtitle",
      "pages",
      "pagetotal",
      "pagination",
      "part",
      "presort",
      "publisher",
      "pubstate",
      "related",
      "relatedoptions",
      "relatedstring",
      "relatedtype",
      "reprinttitle",
      "series",
      "shortauthor",
      "shorteditor",
      "shorthand",
      "shorthandintro",
      "shortjournal",
      "shortseries",
      "shorttitle",
      "sortkey",
      "sortname",
      "sortshorthand",
      "sorttitle",
      "sortyear",
      "subtitle",
      "title",
      "titleaddon",
      "translator",
      "type",
      "url",
      "urldate",
      "usera",
      "userb",
      "userc",
      "userd",
      "usere",
      "userf",
      "venue",
      "verba",
      "verbb",
      "verbc",
      "version",
      "volume",
      "volumes",
      "xdata",
      "xref",
    ].map(
      (word) =>
        Promise.resolve({ menu: "field", word: `${word} = {`, abbr: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
