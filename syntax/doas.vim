if exists('b:current_syntax')
  finish
endif

syn match doasComment /#.*$/

hi def link doasComment Comment

let b:current_syntax = 'doas'
