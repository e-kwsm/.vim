if exists('b:current_syntax')
  finish
endif

syn match doasComment /#.*$/
syn match doasRule /^\s*\zs\%(permit\|deny\)\s\+.*/ contains=doasPermit,doasDeny,doasOptions
syn keyword doasPermit permit contained nextgroup=doasOptions
syn keyword doasDeny deny contained nextgroup=doasOptions
syn keyword doasOptions nopass nolog persist keepenv contained
syn region doasOptions start=/\<setenv\s*{/ end=/}/ contained

hi def link doasComment Comment
hi def link doasPermit Added
hi def link doasDeny Removed
hi def link doasOptions Special

let b:current_syntax = 'doas'
