if exists('current_compiler') | finish | endif
let current_compiler = 'visudo-rs'

CompilerSet makeprg=visudo-rs\ --check\ --file=%
