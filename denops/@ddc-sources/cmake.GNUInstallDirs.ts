import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v1.3.0/types.ts#^";
import { GatherCandidatesArguments } from "https://deno.land/x/ddc_vim@v1.3.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gatherCandidates(
    _args: GatherCandidatesArguments<Params>,
  ): Promise<Candidate[]> {
    return await Promise.all(
      [
        "BINDIR",
        "SBINDIR",
        "LIBEXECDIR",
        "SYSCONFDIR",
        "SHAREDSTATEDIR",
        "LOCALSTATEDIR",
        "RUNSTATEDIR",
        "LIBDIR",
        "INCLUDEDIR",
        "DATAROOTDIR",
        "DATADIR",
        "INFODIR",
        "MANDIR",
      ].flatMap(
        (dir) => [`CMAKE_INSTALL_${dir}`, `CMAKE_INSTALL_FULL_${dir}`],
      ).map(
        (word) => Promise.resolve({ menu: "GNUInstallDirs", word: word }),
      ),
    );
  }

  params(): Params {
    return {};
  }
}
