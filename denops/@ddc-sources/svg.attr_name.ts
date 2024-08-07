import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v6.0.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v6.0.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(_args: GatherArguments<Params>): Promise<DdcGatherItems> {
    return await Promise.all([
      "accumulate",
      "additive",
      "alignment-baseline",
      "amplitude",
      "aria-activedescendant",
      "aria-atomic",
      "aria-autocomplete",
      "aria-busy",
      "aria-checked",
      "aria-colcount",
      "aria-colindex",
      "aria-colspan",
      "aria-controls",
      "aria-current",
      "aria-describedby",
      "aria-details",
      "aria-disabled",
      "aria-dropeffect",
      "aria-errormessage",
      "aria-expanded",
      "aria-flowto",
      "aria-grabbed",
      "aria-haspopup",
      "aria-hidden",
      "aria-invalid",
      "aria-keyshortcuts",
      "aria-label",
      "aria-labelledby",
      "aria-level",
      "aria-live",
      "aria-modal",
      "aria-multiline",
      "aria-multiselectable",
      "aria-orientation",
      "aria-owns",
      "aria-placeholder",
      "aria-posinset",
      "aria-pressed",
      "aria-readonly",
      "aria-relevant",
      "aria-required",
      "aria-roledescription",
      "aria-rowcount",
      "aria-rowindex",
      "aria-rowspan",
      "aria-selected",
      "aria-setsize",
      "aria-sort",
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow",
      "aria-valuetext",
      "attributeName",
      "azimuth",
      "baseFrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "calcMode",
      "class",
      "clip",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-rendering",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "elevation",
      "end",
      "exponent",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fr",
      "from",
      "fx",
      "fy",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "gradientTransform",
      "gradientUnits",
      "height",
      "href",
      "hreflang",
      "id",
      "image-rendering",
      "in",
      "in2",
      "intercept",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lang",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "max",
      "media",
      "method",
      "min",
      "mode",
      "numOctaves",
      "offset",
      "onabort",
      "onafterprint",
      "onbeforeprint",
      "onbegin",
      "oncancel",
      "oncanplay",
      "oncanplaythrough",
      "onchange",
      "onclick",
      "onclose",
      "oncopy",
      "oncuechange",
      "oncut",
      "ondblclick",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragexit",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "ondurationchange",
      "onemptied",
      "onend",
      "onended",
      "onerror",
      "onfocus",
      "onfocusin",
      "onfocusout",
      "onhashchange",
      "oninput",
      "oninvalid",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onload",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onmessage",
      "onmousedown",
      "onmouseenter",
      "onmouseleave",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onmousewheel",
      "onoffline",
      "ononline",
      "onpagehide",
      "onpageshow",
      "onpaste",
      "onpause",
      "onplay",
      "onplaying",
      "onpopstate",
      "onprogress",
      "onratechange",
      "onrepeat",
      "onreset",
      "onresize",
      "onscroll",
      "onseeked",
      "onseeking",
      "onselect",
      "onshow",
      "onstalled",
      "onstorage",
      "onsubmit",
      "onsuspend",
      "ontimeupdate",
      "ontoggle",
      "onunload",
      "onvolumechange",
      "onwaiting",
      "opacity",
      "operator",
      "order",
      "orient",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "ping",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "r",
      "radius",
      "refX",
      "refY",
      "referrerpolicy",
      "rel",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "restart",
      "result",
      "role",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "systemLanguage",
      "tabindex",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "type",
      "unicode-bidi",
      "values",
      "vector-effect",
      "viewBox",
      "visibility",
      "width",
      "word-spacing",
      "writing-mode",
      "x",
      "x1",
      "x2",
      "xChannelSelector",
      "xlink:href",
      "xlink:title",
      "xml:space",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan",
    ].map(
      (word) => Promise.resolve({ menu: "attr", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
