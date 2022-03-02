import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v2.2.0/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v2.2.0/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(
    args: GatherArguments<Params>,
  ): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\$<\w*/)) {
      return [];
    }

    return await Promise.all([
      "AND:",
      "ANGLE-R>",
      "BOOL:",
      "BUILD_INTERFACE:",
      "COMMA>",
      "COMPILE_FEATURES:",
      "COMPILE_LANGUAGE:",
      "COMPILE_LANGUAGE>",
      "COMPILE_LANG_AND_ID:",
      "CONFIG:",
      "CONFIG>",
      "CUDA_COMPILER_ID:",
      "CUDA_COMPILER_ID>",
      "CUDA_COMPILER_VERSION:",
      "CUDA_COMPILER_VERSION>",
      "CXX_COMPILER_ID:",
      "CXX_COMPILER_ID>",
      "CXX_COMPILER_VERSION:",
      "CXX_COMPILER_VERSION>",
      "C_COMPILER_ID:",
      "C_COMPILER_ID>",
      "C_COMPILER_VERSION:",
      "C_COMPILER_VERSION>",
      "EQUAL:",
      "FILTER:",
      "Fortran_COMPILER_ID:",
      "Fortran_COMPILER_ID>",
      "Fortran_COMPILER_VERSION:",
      "Fortran_COMPILER_VERSION>",
      "GENEX_EVAL:",
      "IF:",
      "INSTALL_INTERFACE:",
      "INSTALL_PREFIX>",
      "IN_LIST:",
      "JOIN:",
      "LINK_ONLY:",
      "LOWER_CASE:",
      "MAKE_C_IDENTIFIER:",
      "NOT:",
      "OBJCXX_COMPILER_ID:",
      "OBJCXX_COMPILER_ID>",
      "OBJCXX_COMPILER_VERSION:",
      "OBJCXX_COMPILER_VERSION>",
      "OBJC_COMPILER_ID:",
      "OBJC_COMPILER_ID>",
      "OBJC_COMPILER_VERSION:",
      "OBJC_COMPILER_VERSION>",
      "OR:",
      "PLATFORM_ID:",
      "PLATFORM_ID>",
      "REMOVE_DUPLICATES:",
      "SEMICOLON>",
      "SHELL_PATH:",
      "STREQUAL:",
      "TARGET_BUNDLE_CONTENT_DIR:",
      "TARGET_BUNDLE_DIR:",
      "TARGET_EXISTS:",
      "TARGET_FILE:",
      "TARGET_FILE_BASE_NAME:",
      "TARGET_FILE_DIR:",
      "TARGET_FILE_NAME:",
      "TARGET_FILE_PREFIX:",
      "TARGET_FILE_SUFFIX:",
      "TARGET_GENEX_EVAL:",
      "TARGET_LINKER_FILE:",
      "TARGET_LINKER_FILE_BASE_NAME:",
      "TARGET_LINKER_FILE_DIR:",
      "TARGET_LINKER_FILE_NAME:",
      "TARGET_LINKER_FILE_PREFIX:",
      "TARGET_LINKER_FILE_SUFFIX:",
      "TARGET_NAME:",
      "TARGET_NAME_IF_EXISTS:",
      "TARGET_OBJECTS:",
      "TARGET_PDB_FILE:",
      "TARGET_PDB_FILE_BASE_NAME:",
      "TARGET_PDB_FILE_DIR:",
      "TARGET_PDB_FILE_NAME:",
      "TARGET_POLICY:",
      "TARGET_PROPERTY:",
      "TARGET_SONAME_FILE:",
      "TARGET_SONAME_FILE_DIR:",
      "TARGET_SONAME_FILE_NAME:",
      "UPPER_CASE:",
      "VERSION_EQUAL:",
      "VERSION_GREATER:",
      "VERSION_GREATER_EQUAL:",
      "VERSION_LESS:",
      "VERSION_LESS_EQUAL:",
    ].map(
      (word) => Promise.resolve({ menu: "generator_expression", word: word }),
    ));
  }

  params(): Params {
    return {};
  }
}
