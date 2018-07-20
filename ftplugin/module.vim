if exists("b:did_ftplugin")
  finish
endif

let b:did_ftplugin = 1

" Using line continuation here.
let s:cpo_save = &cpo
set cpo-=C

setl comments=:#
setl iskeyword+=-

let &cpo = s:cpo_save
unlet s:cpo_save
