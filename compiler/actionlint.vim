if exists('current_compiler') | finish | endif
let current_compiler = 'actionlint'

CompilerSet makeprg=actionlint\ %
