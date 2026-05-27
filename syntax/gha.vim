if exists('b:current_syntax')
  finish
endif
runtime! syntax/yaml.vim
let b:current_syntax = 'gha'
