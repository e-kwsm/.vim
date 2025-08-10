if exists('b:did_ftplugin')
  finish
endif
let b:did_ftplugin = v:true

setl comments=:#
setl commentstring=#\ %s
let b:undo_ftplugin = 'setl com< cms<'

let b:doas_available = executable('doas')

augroup doas
  autocmd!
  autocmd BufWritePost * if b:doas_available | exe '!doas -C %' | endif
augroup END
