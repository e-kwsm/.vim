if exists('b:did_ftplugin')
  finish
endif

let b:did_ftplugin = 1

let s:cpo_save = &cpo

setl iskeyword+=-,/

let &cpo = s:cpo_save
unlet s:cpo_save
