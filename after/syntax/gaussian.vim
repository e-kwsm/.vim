" Vim syntax file
" Language: Gaussian input file (chemical/x-gaussian-input)
" Last Change: 2016-05-11
" Maintainer: E Kawashima <e-kwsm@users.noreply.github.com>

if exists("b:current_syntax")
  finish
endif
let b:current_syntax = "gaussian"

syn case ignore

syn match gauComment	"!.*$"
syn match gauRoute	"^\s*#[^!]*"
syn match gauLink	"^\s*%[^!]*"

hi def link gauComment	Comment
hi def link gauRoute	Statement
hi def link gauLink	Statement
