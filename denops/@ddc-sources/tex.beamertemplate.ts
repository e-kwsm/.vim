import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v3.4.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v3.4.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (
      !args.context.input.match(
        /\\(?:addtobeamertemplate|defbeamertemplate(?:<.*?>)?\*?|defbeamertemplatealias|defbeamertemplateparent|expandbeamertemplate|ifbeamertemplateempty|setbeamertemplate|usebeamertemplate\*{0,3})\{\w*$/,
      )
    ) {
      return [];
    }

    return await Promise.all([
      "abstract begin",
      "abstract end",
      "abstract title",
      "alerted text begin",
      "alerted text end",
      "background",
      "background canvas",
      "bibliography entry author",
      "bibliography entry location",
      "bibliography entry note",
      "bibliography entry title",
      "bibliography item",
      "block alerted begin",
      "block alerted end",
      "block begin",
      "block end",
      "block example begin",
      "block example end",
      "button",
      "caption",
      "caption label separator",
      "description body begin",
      "description body end",
      "description item",
      "enumerate item",
      "enumerate mini template",
      "enumerate subitem",
      "enumerate subsubitem",
      "footline",
      "footnote",
      "frame begin",
      "frame end",
      "frametitle",
      "frametitle continuation",
      "headline",
      "itemize item",
      "itemize subitem",
      "itemize subsubitem",
      "itemize/enumerate body begin",
      "itemize/enumerate body end",
      "logo",
      "mini frame",
      "mini frame in current subsection",
      "mini frame in other subsection",
      "navigation symbols",
      "note page",
      "page number in head/foot",
      "part page",
      "qed symbol",
      "quotation begin",
      "quotation end",
      "quote begin",
      "quote end",
      "section in head/foot",
      "section in head/foot shaded",
      "section in sidebar",
      "section in sidebar shaded",
      "section in toc",
      "section in toc shaded",
      "section page",
      "sidebar canvas left",
      "sidebar canvas right",
      "sidebar left",
      "sidebar right",
      "structure begin",
      "structure end",
      "subsection in head/foot",
      "subsection in head/foot shaded",
      "subsection in sidebar",
      "subsection in sidebar shaded",
      "subsection in toc",
      "subsection in toc shaded",
      "subsection page",
      "subsubsection in head/foot",
      "subsubsection in head/foot shaded",
      "subsubsection in sidebar",
      "subsubsection in sidebar shaded",
      "subsubsection in toc",
      "subsubsection in toc shaded",
      "theorem begin",
      "theorem end",
      "title page",
      "verse begin",
      "verse end",
    ].map(
      (word) => Promise.resolve({ menu: "beamertemplate", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
