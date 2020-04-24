if exists("b:current_syntax")
  finish
endif

let s:cpo_save = &cpo
set cpo&vim

syn match cmakeCacheComment +^\(//\|#\).*$+
syn match cmakeCacheVariable /^[A-Za-z0-9_.-]\+/
syn keyword cmakeCacheType BOOL
syn keyword cmakeCacheType FILEPATH
syn keyword cmakeCacheType INTERNAL
syn keyword cmakeCacheType PATH
syn keyword cmakeCacheType STATIC
syn keyword cmakeCacheType STRING
syn keyword cmakeCacheType UNINITIALIZED

syn keyword cmakeCacheBool ON Y YES TRUE
syn keyword cmakeCacheBool OFF N NO FALSE IGNORE NOTFOUND
syn match cmakeCacheBool /[A-Za-z0-9_.-]\+NOTFOUND$/

hi def link cmakeCacheComment Comment
hi def link cmakeCacheVariable Identifier
hi def link cmakeCacheBool Special
hi def link cmakeCacheType Type

let b:current_syntax = "cmakecache"
let &cpo = s:cpo_save
