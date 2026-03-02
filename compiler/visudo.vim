if exists('current_compiler') | finish | endif
let current_compiler = 'visudo'

CompilerSet makeprg=visudo-rs\ -c\ %
