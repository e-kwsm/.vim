if exists('b:did_ftplugin')
  finish
endif
compiler actionlint
let b:undo_ftplugin = 'compiler make'
