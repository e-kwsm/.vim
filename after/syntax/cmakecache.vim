" 3.12 {{{1
syn match cmakeCacheDeprecated /^FIND_PACKAGE_MESSAGE_DETAILS_PythonInterp:INTERNAL=.*/
syn match cmakeCacheDeprecated /^PYTHON_EXECUTABLE:[A-Z]\+=.*/

syn match cmakeCacheDeprecated /^FIND_PACKAGE_MESSAGE_DETAILS_PythonLibs:INTERNAL=.*/
syn match cmakeCacheDeprecated /^PYTHON_\%(INCLUDE_DIR\|LIBRARY\):[A-Z]\+=.*/

" 3.30 {{{1
syn match cmakeCacheDeprecated /^Boost_INCLUDE_DIR:[A-Z]\+=.*/
syn match cmakeCacheDeprecated /^Boost_[A-Z0-9_]\+_LIBRARY_\%(DEBUG\|RELEASE\):[A-Z]\+=.*/

" }}}1
hi def link cmakeCacheDeprecated ErrorMsg
