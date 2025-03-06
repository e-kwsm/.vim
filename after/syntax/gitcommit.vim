syn match gitcommitFixup /\%^\%(amend\|fixup\|squash\)!\ze /
syn match gitcommitConventional /\%^\%(build\|chore\|ci\|docs\|feat\|fix\|perf\|refactor\|revert\|style\|test\)\%((.\{-1,})\)\?!\?:/

hi def link gitcommitFixup Special
hi def link gitcommitConventional Special
