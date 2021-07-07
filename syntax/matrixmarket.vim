" https://math.nist.gov/MatrixMarket/formats.html

if exists('b:current_syntax')
  finish
endif

" syn match mtxHeader '^%%MatrixMarket \+matrix \+coordinate \+\%(real\|complex\|integer\|pattern\) \+\%(general\|symmetric\|skew-symmetric\|hermitian\)\>'
syn match mtxHeader '^%%MatrixMarket \+matrix \+coordinate \+' contains=mtxType,mtxSymmetry
syn keyword mtxType real complex integer pattern
syn keyword mtxSymmetry general symmetric hermitian
syn match mtxSymmetry '\s\zsskew-symmetric\ze\s*$'
syn match mtxComment '^%[^%]*$'
syn match mtxInteger '\<[+-]\?[0-9]\+\>'
syn match mtxFloat '\s\zs[+-]\?[0-9]\+\.[0-9]\+\ze\s*$'
syn match mtxFloat '\s\zs[+-]\?[0-9]\+\.[0-9]\+[Ee][+-]\?[0-9]\+\ze\s*$'

hi def link mtxComment Comment
hi def link mtxType Type
hi def link mtxSymmetry Keyword
hi def link mtxInteger Number
hi def link mtxFloat Float

let b:current_syntax = 'matrixmarket'
