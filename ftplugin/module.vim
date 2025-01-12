if exists('b:did_ftplugin')
  finish
endif

let b:did_ftplugin = 1

setl comments=:#
setl iskeyword+=-
let b:undo_ftplugin = 'setl com< isk<'
