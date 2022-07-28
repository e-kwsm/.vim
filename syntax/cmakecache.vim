if exists('b:current_syntax')
  finish
endif

let s:cpo_save = &cpo
set cpo&vim

syn match cmakeCacheError /.*/

syn match cmakeCacheComment +^\%(//\|#\).*$+ contains=@Spell

syn match cmakeCacheVariable /^[A-Za-z0-9_-]\+:[A-Z]\+=.*$/
      \ contains=cmakeCacheKey,cmakeCacheType
syn match cmakeCacheVariable /^[A-Za-z0-9_-]\+:\%(FILEPATH\|PATH\)=[A-Za-z0-9_-]\+-NOTFOUND$/
      \ contains=cmakeCacheKey,cmakeCacheType,cmakeCacheNotFound
syn match cmakeCacheVariable /^[A-Za-z0-9_-]\+:\%(BOOL\|INTERNAL\|STATIC\)=[A-Z]\+$/
      \ contains=cmakeCacheKey,cmakeCacheType,cmakeCacheBool
syn match cmakeCacheKey /^[A-Za-z0-9_-]\+/ contained nextgroup=cmakeCacheType
syn match cmakeCacheType /:\zs\%(BOOL\|FILEPATH\|INTERNAL\|PATH\|STATIC\|STRING\|UNINITIALIZED\)\ze=/
      \ contained nextgroup=cmakeCacheBool,cmakeCacheNotFound

syn match cmakeCacheBool /=\zs\%(FALSE\|IGNORE\|NO\|NOTFOUND\|OFF\|ON\|TRUE\|YES\)$/ contained
syn match cmakeCacheNotFound /=\zs[A-Za-z0-9_-]\+-NOTFOUND$/ contained

hi def link cmakeCacheBool Boolean
hi def link cmakeCacheNotFound Boolean
hi def link cmakeCacheComment Comment
hi def link cmakeCacheError Error
hi def link cmakeCacheKey Identifier
hi def link cmakeCacheType Type

let b:current_syntax = 'cmakecache'
let &cpo = s:cpo_save
