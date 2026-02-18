if exists('b:did_ftplugin')
  finish
endif

let b:did_ftplugin = v:true

setl comments=:#
setl iskeyword+=-
let b:undo_ftplugin = 'setl com< isk<'
