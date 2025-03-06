syn match gitcommitFixup /\%^\%(amend\|fixup\|squash\)!\ze /
syn match gitcommitURI /^\%(https\?\):/

hi def link gitcommitFixup Special
hi def link gitcommitURI Normal
