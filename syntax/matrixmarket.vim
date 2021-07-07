" https://math.nist.gov/MatrixMarket/formats.html

if exists('b:current_syntax')
  finish
endif

let s:cpo_save = &cpo
set cpo&vim

syn case ignore

syn match mtxError '\S.*'
syn match mtxComment '^\s*%\%(%MatrixMarket \)\@!.*'

syn match mtxHeader '^%%MatrixMarket\s\+matrix\s\+\%(array\|coordinate\)\s\+\%(complex\|integer\|real\)\s\+\%(general\|skew-symmetric\|symmetric\)\s*$'
      \ contains=mtxObject,mtxFormat,mtxType,mtxQualifier nextgroup=mtxObject
syn match mtxHeader '^%%MatrixMarket\s\+matrix\s\+\%(array\|coordinate\)\s\+complex\s\+hermitian\s*$'
      \ contains=mtxObject,mtxFormat,mtxType,mtxQualifier nextgroup=mtxObject
syn match mtxHeader '^%%MatrixMarket\s\+matrix\s\+coordinate\s\+pattern\s\+\%(general\|symmetric\)\s*$'
      \ contains=mtxObject,mtxFormat,mtxType,mtxQualifier nextgroup=mtxObject
syn keyword mtxObject matrix contained nextgroup=mtxFormat
syn keyword mtxFormat array coordinate contained nextgroup=mtxType
syn keyword mtxType complex integer pattern real contained nextgroup=mtxQualifier
syn keyword mtxQualifier general hermitian symmetric contained
syn match mtxQualifier '\<skew-symmetric\>' contained

syn match mtxInteger '\%(^\|\s\)\zs[+-]\?\%(0\|[1-9][0-9]*\)\ze\%(\s\|$\)'
syn match mtxFloat '\s\zs[+-]\?\%(0\|[1-9][0-9]*\)\.\%([0-9]*\|[0-9]*E[+-]\?[0-9]\+\)\ze\%(\s\|$\)'

hi def link mtxError Error
hi def link mtxComment Comment
hi def link mtxHeader Keyword
hi def link mtxObject Keyword
hi def link mtxFormat Keyword
hi def link mtxType Type
hi def link mtxQualifier Keyword
hi def link mtxInteger Number
hi def link mtxFloat Float

let b:current_syntax = 'matrixmarket'
let &cpo = s:cpo_save
unlet s:cpo_save
