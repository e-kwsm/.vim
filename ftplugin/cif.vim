if exists('b:did_ftplugin')
  finish
endif

let b:did_ftplugin = v:true

setl iskeyword+=37,-,/
let b:undo_ftplugin = 'setl iskeyword<'
