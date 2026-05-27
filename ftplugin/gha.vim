if exists('b:did_ftplugin')
  finish
endif
runtime! ftplugin/yaml.vim
compiler actionlint
let b:undo_ftplugin .= '| compiler make'
