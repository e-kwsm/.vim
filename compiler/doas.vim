if exists('current_compiler') | finish | endif
let current_compiler = 'doas'

CompilerSet makeprg=doas\ -C\ %
CompilerSet errorformat=doas:\ %m\ at\ line\ %l
