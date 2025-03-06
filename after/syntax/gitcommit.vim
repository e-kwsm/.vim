syn match gitcommitFixup /\%^\%(amend\|fixup\|squash\)!\ze /
syn match gitcommitConventional /\%^\%(build\|chore\|ci\|docs\|feat\|fix\|perf\|refactor\|revert\|style\|test\)\%((.\{-1,})\)\?!\?:/
syn match gitcommitURI /^\%(https\?\):/

hi def link gitcommitFixup Special
hi def link gitcommitConventional Special
hi def link gitcommitURI Normal
