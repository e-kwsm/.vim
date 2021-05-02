if exists('b:current_syntax')
  finish
endif

"let s:cpo_save = &cpo
"set cpo&vim
"setl iskeyword+=-

syn match gitattributesComment /^#.*/
syn match gitattributesAttr /\s\zsbinary\>/
syn match gitattributesAttr /\s\zsconflict-marker-size=[0-9]\+\>/
syn match gitattributesAttr /\s\zsdelta\>/
syn match gitattributesAttr /\s\zsdiff\>/
syn match gitattributesAttr /\s\zsencoding=\%(UTF-8\)\>/
syn match gitattributesAttr /\s\zseol=\%(lf\|crlf\)\>/
syn match gitattributesAttr /\s\zsexport-ignore\>/
syn match gitattributesAttr /\s\zsexport-subst\>/
syn match gitattributesAttr /\s\zsfilter\>/
syn match gitattributesAttr /\s\zsident\>/
syn match gitattributesAttr /\s\zs-\?merge\>/
syn match gitattributesAttr /\s\zs-\?text\%(=auto\)\?\>/
syn match gitattributesAttr /\s\zs-\?whitespace\>/
syn match gitattributesAttr /\s\zsworking-tree-encoding=\%(UTF-8\)\>/

hi def link gitattributesAttr Keyword
hi def link gitattributesComment Comment

let b:current_syntax = "gitattributes"
"let &cpo = s:cpo_save
