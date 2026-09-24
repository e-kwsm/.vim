if exists('current_compiler') | finish | endif
let current_compiler = 'hadolint'

CompilerSet makeprg=hadolint\ --format=gnu\ %
CompilerSet errorformat=hadolint:%f:%l:\ DL%n\ %tnfo:\ %m,hadolint:%f:%l:\ DL%n\ %tarning:\ %m,hadolint:%f:%l:\ SC%n\ %tarning:\ %m
