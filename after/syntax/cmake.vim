syn keyword cmakeCommand cmake_dependent_option

syn keyword cmakeFindModuleDeprecated GLU
" 3.10
"syn keyword cmakeFindModuleDeprecated CUDA
" 3.12
syn keyword cmakeFindModuleDeprecated PythonInterp PythonLibs
"syn match cmakeFindModuleDeprecated /\<find_package\s*(\s*Python\%(Interp\|Libs\)\>/
syn keyword cmakeFindModuleDeprecated
      \ PYTHONINTERP_FOUND
      \ PYTHONLIBS_FOUND
      \ PYTHON_EXECUTABLE
      \ PYTHON_INCLUDE_DIR
      \ PYTHON_INCLUDE_DIRS
      \ PYTHON_INCLUDE_PATH
      \ PYTHON_LIBRARIES
      \ PYTHON_LIBRARY
      \ PYTHON_VERSION_MAJOR
      \ PYTHON_VERSION_MINOR
      \ PYTHON_VERSION_PATCH
      \ PYTHON_VERSION_STRING

" 3.14
"syn keyword cmakeFindModuleDeprecated Qt
"syn match cmakeFindModuleDeprecated /find_program\s*(\s*\zsQt\>/  " no
"syn region cmakeFindModuleDeprecated start=/\bfind_program\s*(/ end=/\bQt\b/
" 3.27
"syn keyword cmakeFindModuleDeprecated Dart
" 3.30
syn match cmakeFindModuleDeprecated /\<find_package\s*(\s*Boost\>/

hi def link cmakeFindModuleDeprecated WarningMsg
