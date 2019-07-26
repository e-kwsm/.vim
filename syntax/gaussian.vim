" Language: Gaussian input file (chemical/x-gaussian-input)

if exists('b:current_syntax')
  finish
endif

syn case ignore

syn match gauComment	/!.*$/
syn match gauRoute	/^\s*#[^!]*/

" link {{{1
syn match gauLink	/^\s*\zs%Chk\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%CPU\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%D2E\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%DebugLinda\>/
syn match gauLink	/^\s*\zs%ErrorSave\>/
syn match gauLink	/^\s*\zs%GPUCPU\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%Int\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%KJob\ze\s\+L\d\{1,4}\>\%(\s\+\d\+\)\?/
syn match gauLink	/^\s*\zs%LindaWorkers\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%Mem\ze\s*=\s*\d\+\%([KMGT][BW]\)\?\>/
syn match gauLink	/^\s*\zs%NoSave\>/
syn match gauLink	/^\s*\zs%OldChk\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%OldMatrix\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%OldRaw\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%OldRawMatrix\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%RWF\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%Save\>/
syn match gauLink	/^\s*\zs%SChk\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%SSH\ze\s*=\s*\S\+/
syn match gauLink	/^\s*\zs%Subst\ze\s\+L\d\{1,4}\>\s*\S\+/
syn match gauLink	/^\s*\zs%UseRSH\>/
syn match gauLink	/^\s*\zs%UseSSH\>/
" }}}1

syn match gauLabel	/^\s*\zsConstants:/
syn match gauLabel	/^\s*\zsVariables:/
syn match gauFloat	/\(\s\|=\)\zs[-+]\?\d\+\.\d*\ze\(\s\|$\)/

hi def link gauComment	Comment
hi def link gauFloat	Float
hi def link gauLabel	Label
hi def link gauLink	Statement
hi def link gauRoute	Statement

let b:current_syntax = 'gaussian'
