if exists('b:did_ftplugin')
  finish
endif
let b:did_ftplugin = v:true

setl comments=:#
setl commentstring=#\ %s
let b:undo_ftplugin = 'setl com< cms< | unlet! b:doas_available'

let b:doas_available = executable('doas')

if b:doas_available
  augroup doas
    autocmd!
    autocmd BufWritePost <buffer> exe '!doas -C %'
  augroup END
endif
