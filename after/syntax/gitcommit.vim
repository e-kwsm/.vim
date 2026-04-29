syn match gitcommitFixup /\%^\%(amend\|fixup\|squash\)!\ze /
" https://github.com/conventional-changelog/commitlint/blob/v20.5.1/%40commitlint/config-conventional/README.md
" https://github.com/angular/angular/blob/zone.js-0.16.1/contributing-docs/commit-message-guidelines.md
syn match gitcommitConventional /\%^\%(build\|chore\|ci\|docs\|feat\|fix\|perf\|refactor\|revert\|style\|test\)\%((.\{-1,})\)\?!\?:/
syn match gitcommitURI /^\%(https\?\):/

syn match gitcommitSkip /\[\%(skip ci\|ci skip\|no ci\|skip actions\|actions skip\)\]\|\<skip-checks: \?true\>/

syn match gitcommitClose /\<\%(fix\%(es\)\?\|closes\?\|resolves\?\)\s\+#\d\+\>/

hi def link gitcommitFixup Special
hi def link gitcommitConventional Special
hi def link gitcommitURI Normal
hi def link gitcommitClose Special
hi def link gitcommitSkip Special
