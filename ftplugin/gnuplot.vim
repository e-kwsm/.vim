if exists('b:did_ftplugin')
  finish
endif
let b:did_ftplugin = v:true

setl comments=b:#
setl commentstring=#\ %s
let b:undo_ftplugin = 'setl comments< commentstring<'
