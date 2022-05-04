import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v2.3.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v2.3.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    _args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    type Color = {
      name: string;
      rgb: number[];
    };

    return await Promise.all([
      { name: "antiquewhite", rgb: [205, 192, 176] },
      { name: "aquamarine", rgb: [127, 255, 212] },
      { name: "beige", rgb: [245, 245, 220] },
      { name: "bisque", rgb: [205, 183, 158] },
      { name: "black", rgb: [0, 0, 0] },
      { name: "blue", rgb: [0, 0, 255] },
      { name: "brown", rgb: [165, 42, 42] },
      { name: "brown4", rgb: [128, 20, 20] },
      { name: "chartreuse", rgb: [124, 255, 64] },
      { name: "coral", rgb: [255, 127, 80] },
      { name: "cyan", rgb: [0, 255, 255] },
      { name: "dark-blue", rgb: [0, 0, 139] },
      { name: "dark-chartreuse", rgb: [64, 128, 0] },
      { name: "dark-cyan", rgb: [0, 238, 238] },
      { name: "dark-goldenrod", rgb: [184, 134, 11] },
      { name: "dark-gray", rgb: [160, 160, 160] },
      { name: "dark-green", rgb: [0, 100, 0] },
      { name: "dark-grey", rgb: [160, 160, 160] },
      { name: "dark-khaki", rgb: [189, 183, 107] },
      { name: "dark-magenta", rgb: [192, 0, 255] },
      { name: "dark-olivegreen", rgb: [85, 107, 47] },
      { name: "dark-orange", rgb: [192, 64, 0] },
      { name: "dark-pink", rgb: [255, 20, 147] },
      { name: "dark-plum", rgb: [144, 80, 64] },
      { name: "dark-red", rgb: [139, 0, 0] },
      { name: "dark-salmon", rgb: [233, 150, 122] },
      { name: "dark-spring-green", rgb: [0, 128, 64] },
      { name: "dark-turquoise", rgb: [0, 206, 209] },
      { name: "dark-violet", rgb: [148, 0, 211] },
      { name: "dark-yellow", rgb: [200, 200, 0] },
      { name: "forest-green", rgb: [34, 139, 34] },
      { name: "gold", rgb: [255, 215, 0] },
      { name: "goldenrod", rgb: [255, 192, 32] },
      { name: "gray", rgb: [190, 190, 190] },
      { name: "gray0", rgb: [0, 0, 0] },
      { name: "gray10", rgb: [26, 26, 26] },
      { name: "gray100", rgb: [255, 255, 255] },
      { name: "gray20", rgb: [51, 51, 51] },
      { name: "gray30", rgb: [77, 77, 77] },
      { name: "gray40", rgb: [102, 102, 102] },
      { name: "gray50", rgb: [127, 127, 127] },
      { name: "gray60", rgb: [153, 153, 153] },
      { name: "gray70", rgb: [179, 179, 179] },
      { name: "gray80", rgb: [204, 204, 204] },
      { name: "gray90", rgb: [229, 229, 229] },
      { name: "green", rgb: [0, 255, 0] },
      { name: "greenyellow", rgb: [160, 255, 32] },
      { name: "grey", rgb: [192, 192, 192] },
      { name: "grey0", rgb: [0, 0, 0] },
      { name: "grey10", rgb: [26, 26, 26] },
      { name: "grey100", rgb: [255, 255, 255] },
      { name: "grey20", rgb: [51, 51, 51] },
      { name: "grey30", rgb: [77, 77, 77] },
      { name: "grey40", rgb: [102, 102, 102] },
      { name: "grey50", rgb: [127, 127, 127] },
      { name: "grey60", rgb: [153, 153, 153] },
      { name: "grey70", rgb: [179, 179, 179] },
      { name: "grey80", rgb: [204, 204, 204] },
      { name: "grey90", rgb: [229, 229, 229] },
      { name: "honeydew", rgb: [240, 255, 240] },
      { name: "khaki", rgb: [240, 230, 140] },
      { name: "khaki1", rgb: [255, 255, 128] },
      { name: "lemonchiffon", rgb: [255, 255, 192] },
      { name: "light-blue", rgb: [173, 216, 230] },
      { name: "light-coral", rgb: [240, 128, 128] },
      { name: "light-cyan", rgb: [224, 255, 255] },
      { name: "light-goldenrod", rgb: [238, 221, 130] },
      { name: "light-gray", rgb: [211, 211, 211] },
      { name: "light-green", rgb: [144, 238, 144] },
      { name: "light-grey", rgb: [211, 211, 211] },
      { name: "light-magenta", rgb: [240, 85, 240] },
      { name: "light-pink", rgb: [255, 182, 193] },
      { name: "light-red", rgb: [240, 50, 50] },
      { name: "light-salmon", rgb: [255, 160, 112] },
      { name: "light-turquoise", rgb: [175, 238, 238] },
      { name: "magenta", rgb: [255, 0, 255] },
      { name: "medium-blue", rgb: [0, 0, 205] },
      { name: "mediumpurple3", rgb: [128, 96, 192] },
      { name: "midnight-blue", rgb: [25, 25, 112] },
      { name: "navy", rgb: [0, 0, 128] },
      { name: "olive", rgb: [160, 128, 32] },
      { name: "orange", rgb: [255, 165, 0] },
      { name: "orange-red", rgb: [255, 69, 0] },
      { name: "orangered4", rgb: [128, 20, 0] },
      { name: "orchid", rgb: [255, 128, 255] },
      { name: "orchid4", rgb: [128, 64, 128] },
      { name: "pink", rgb: [255, 192, 192] },
      { name: "plum", rgb: [221, 160, 221] },
      { name: "purple", rgb: [192, 128, 255] },
      { name: "red", rgb: [255, 0, 0] },
      { name: "royalblue", rgb: [65, 105, 225] },
      { name: "salmon", rgb: [250, 128, 114] },
      { name: "sandybrown", rgb: [255, 160, 96] },
      { name: "sea-green", rgb: [46, 139, 87] },
      { name: "seagreen", rgb: [193, 255, 193] },
      { name: "sienna1", rgb: [255, 128, 64] },
      { name: "sienna4", rgb: [128, 64, 20] },
      { name: "skyblue", rgb: [135, 206, 235] },
      { name: "slateblue1", rgb: [128, 96, 255] },
      { name: "slategray", rgb: [160, 182, 205] },
      { name: "slategrey", rgb: [160, 182, 205] },
      { name: "spring-green", rgb: [0, 255, 127] },
      { name: "steelblue", rgb: [48, 96, 128] },
      { name: "tan1", rgb: [255, 160, 64] },
      { name: "turquoise", rgb: [64, 224, 208] },
      { name: "violet", rgb: [238, 130, 238] },
      { name: "web-blue", rgb: [0, 128, 255] },
      { name: "web-green", rgb: [0, 192, 0] },
      { name: "white", rgb: [255, 255, 255] },
      { name: "yellow", rgb: [255, 255, 0] },
      { name: "yellow4", rgb: [128, 128, 0] },
    ].map(
      (c: Color) => {
        const rgb = c.rgb.map((x) =>
          x.toString(16).toUpperCase().padStart(2, "0")
        ).join("");
        return Promise.resolve({
          menu: "gnuplot",
          kind: `#${rgb}`,
          word: c.name,
        });
      },
    ));
  }

  params(): Params {
    return {};
  }
}
