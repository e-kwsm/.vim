if exists('b:current_syntax')
  finish
endif

let s:cpo_save = &cpo
set cpo&vim

syn match cmakeCacheError /.*/

syn match cmakeCacheComment +^\%(//\|#\).*$+ contains=@Spell

syn match cmakeCacheVariable /^[A-Za-z0-9._-]\+:[A-Z]\+=.*$/
      \ contains=cmakeCacheKey,cmakeCacheType
syn match cmakeCacheVariable /^[A-Za-z0-9._-]\+:\%(FILEPATH\|PATH\)=[A-Za-z0-9_-]\+-NOTFOUND$/
      \ contains=cmakeCacheKey,cmakeCacheType,cmakeCacheNotFound
syn match cmakeCacheVariable /^[A-Za-z0-9._-]\+:\%(BOOL\|INTERNAL\|STATIC\)=[A-Za-z]\+$/
      \ contains=cmakeCacheKey,cmakeCacheType,cmakeCacheBool
syn match cmakeCacheKey /^[A-Za-z0-9._-]\+/ contained nextgroup=cmakeCacheType
syn match cmakeCacheType /:\zs\%(BOOL\|FILEPATH\|INTERNAL\|PATH\|STATIC\|STRING\|UNINITIALIZED\)\ze=/
      \ contained nextgroup=cmakeCacheBool,cmakeCacheNotFound

syn match cmakeCacheBool /=\zs\%(FALSE\|IGNORE\|NO\|NOTFOUND\|OFF\|ON\|TRUE\|YES\)\c$/ contained
syn match cmakeCacheNotFound /=\zs[A-Za-z0-9._-]\+-NOTFOUND$/ contained

hi def link cmakeCacheBool Boolean
hi def link cmakeCacheNotFound Boolean
hi def link cmakeCacheComment Comment
hi def link cmakeCacheError Error
hi def link cmakeCacheKey Identifier
hi def link cmakeCacheType Type

let b:current_syntax = 'cmakecache'
let &cpo = s:cpo_save
