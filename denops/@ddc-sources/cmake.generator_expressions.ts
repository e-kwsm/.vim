import {
  BaseSource,
  DdcGatherItems,
} from "https://deno.land/x/ddc_vim@v4.3.1/types.ts#^";
import { GatherArguments } from "https://deno.land/x/ddc_vim@v4.3.1/base/source.ts#^";

type Params = Record<string, never>;

export class Source extends BaseSource<Params> {
  async gather(args: GatherArguments<Params>): Promise<DdcGatherItems> {
    if (!args.context.input.match(/\$<\w*/)) {
      return [];
    }

    return await Promise.all([
      "AND:",
      "ANGLE-R>",
      "BOOL:",
      "BUILD_INTERFACE:",
      "COMMA>",
      "COMMAND_CONFIG:",
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
      "DEVICE_LINK:",
      "EQUAL:",
      "FILTER:",
      "Fortran_COMPILER_ID:",
      "Fortran_COMPILER_ID>",
      "Fortran_COMPILER_VERSION:",
      "Fortran_COMPILER_VERSION>",
      "GENEX_EVAL:",
      "HIP_COMPILER_VERSION:",
      "HIP_COMPILER_VERSION>",
      "HOST_LINK:",
      "IF:",
      "INSTALL_INTERFACE:",
      "INSTALL_PREFIX>",
      "IN_LIST:",
      "ISPC_COMPILER_VERSION:",
      "ISPC_COMPILER_VERSION>",
      "JOIN:",
      "LINK_GROUP:RESCAN,",
      "LINK_LANGUAGE:",
      "LINK_LANGUAGE>",
      "LINK_LANG_AND_ID:",
      "LINK_LIBRARY:DEFAULT,",
      "LINK_LIBRARY:FRAMEWORK,",
      "LINK_LIBRARY:NEEDED_FRAMEWORK,",
      "LINK_LIBRARY:NEEDED_LIBRARY,",
      "LINK_LIBRARY:REEXPORT_FRAMEWORK,",
      "LINK_LIBRARY:REEXPORT_LIBRARY,",
      "LINK_LIBRARY:WEAK_FRAMEWORK,",
      "LINK_LIBRARY:WEAK_LIBRARY,",
      "LINK_LIBRARY:WHOLE_ARCHIVE,",
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
      "OUTPUT_CONFIG:",
      "PATH:ABSOLUTE_PATH,",
      "PATH:ABSOLUTE_PATH,NORMALIZE,",
      "PATH:APPEND,",
      "PATH:CMAKE_PATH,",
      "PATH:CMAKE_PATH,NORMALIZE,",
      "PATH:GET_EXTENSION,",
      "PATH:GET_EXTENSION,LAST_ONLY,",
      "PATH:GET_FILENAME,",
      "PATH:GET_PARENT_PATH,",
      "PATH:GET_RELATIVE_PART,",
      "PATH:GET_ROOT_DIRECTORY,",
      "PATH:GET_ROOT_NAME,",
      "PATH:GET_ROOT_PATH,",
      "PATH:GET_STEM,",
      "PATH:GET_STEM,LAST_ONLY,",
      "PATH:HAS_EXTENSION,",
      "PATH:HAS_FILENAME,",
      "PATH:HAS_PARENT_PATH,",
      "PATH:HAS_RELATIVE_PART,",
      "PATH:HAS_ROOT_DIRECTORY,",
      "PATH:HAS_ROOT_NAME,",
      "PATH:HAS_ROOT_PATH,",
      "PATH:HAS_STEM,",
      "PATH:IS_ABSOLUTE,",
      "PATH:IS_PREFIX,",
      "PATH:IS_PREFIX,NORMALIZE,",
      "PATH:IS_RELATIVE,",
      "PATH:NORMAL_PATH,",
      "PATH:RELATIVE_PATH,",
      "PATH:REMOVE_EXTENSION,",
      "PATH:REMOVE_EXTENSION,LAST_ONLY,",
      "PATH:REMOVE_FILENAME,",
      "PATH:REPLACE_EXTENSION,",
      "PATH:REPLACE_EXTENSION,LAST_ONLY,",
      "PATH:REPLACE_FILENAME,",
      "PATH_EQUAL:",
      "PLATFORM_ID:",
      "PLATFORM_ID>",
      "REMOVE_DUPLICATES:",
      "SEMICOLON>",
      "SHELL_PATH:",
      "STREQUAL:",
      "TARGET_BUNDLE_CONTENT_DIR:",
      "TARGET_BUNDLE_DIR:",
      "TARGET_BUNDLE_DIR_NAME:",
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
      "TARGET_RUNTIME_DLLS:",
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
