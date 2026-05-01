if exists('current_compiler') | finish | endif
let current_compiler = 'mandoc'

CompilerSet makeprg=mandoc\ -Tlint\ -Wall\ %
CompilerSet errorformat=mandoc:\ %f:%l:%c:\ %tRROR:\ %m,mandoc:\ %f:%l:%c:\ %tARNING:\ %m
