syn match gitcommitFixup /\%^\%(amend\|fixup\|squash\)!\ze /
syn match gitcommitConventional /\%^\%(build\|chore\|ci\|docs\|feat\|fix\|perf\|refactor\|revert\|style\|test\)\%((.\{-1,})\)\?!\?:/
syn match gitcommitURI /^\%(https\?\):/

syn match gitcommitSkip /\[\%(skip ci\|ci skip\|no ci\|skip actions\|actions skip\)\]\|\<skip-checks: \?true\>/

hi def link gitcommitFixup Special
hi def link gitcommitConventional Special
hi def link gitcommitURI Normal
hi def link gitcommitSkip Special
