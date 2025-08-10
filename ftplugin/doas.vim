if exists('b:did_ftplugin') | finish | endif
let b:did_ftplugin = v:true

setl comments=:#
setl commentstring=#\ %s
compiler doas
let b:undo_ftplugin = 'setl comments< commentstring< | compiler make'
