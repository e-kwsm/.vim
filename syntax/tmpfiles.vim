" https://www.freedesktop.org/software/systemd/man/255/tmpfiles.d.html
if exists('b:current_syntax')
  finish
endif

syntax match tmpfilesError '\S.*'
syntax match tmpfilesComment '^\s*\zs#.*'

syntax match tmpfilesType '^\s*\%([fwpLcbaA]+\?\|[dDevqQCxXrRzZtThH]\)[!=~^-]*\ze\s'	skipwhite nextgroup=tmpfilesPath
syntax match tmpfilesTypeDeprecated '^\s*F[!=~^-]*\ze\s'				skipwhite nextgroup=tmpfilesPath
syntax match tmpfilesPath '\S\+\ze\_s' contained skipwhite nextgroup=tmpfilesMode,tmpfilesModeDef
syntax match tmpfilesMode '[~:]\?[0-7]\{3,4}\ze\_s'	contained skipwhite nextgroup=tmpfilesUser,tmpfilesUserDef
syntax match tmpfilesModeDef '-\ze\_s'			contained skipwhite nextgroup=tmpfilesUser,tmpfilesUserDef
syntax match tmpfilesUser ':\?[0-9A-Za-z_-]\+\ze\_s'	contained skipwhite nextgroup=tmpfilesGroup,tmpfilesGroupDef
syntax match tmpfilesUserDef '-\ze\_s'			contained skipwhite nextgroup=tmpfilesGroup,tmpfilesGroupDef
syntax match tmpfilesGroup ':\?[0-9A-Za-z_-]\+\ze\_s'	contained skipwhite nextgroup=tmpfilesAge,tmpfilesAgeDef
syntax match tmpfilesGroupDef '-\ze\_s'			contained skipwhite nextgroup=tmpfilesAge,tmpfilesAgeDef
syntax match tmpfilesAge '\%([aAbBcCmM]\+:\)\?\%(\d\+\%(min\|[mu]s\|[smhdw]\)\?\)\+\ze\_s'	contained skipwhite nextgroup=tmpfilesArg
syntax match tmpfilesAgeDef '-\ze\_s'					contained skipwhite nextgroup=tmpfilesArg
syntax match tmpfilesArg '\S.*$' contained

syntax match tmpfilesSpec '%[aAbBCgGhHlLmMoStTuUvVwW]'
syntax match tmpfilesSpec '%%'

hi def link tmpfilesError Error
hi def link tmpfilesComment Comment
hi def link tmpfilesType Type
hi def link tmpfilesTypeDeprecated Error
hi def link tmpfilesPath String
hi def link tmpfilesMode Number
hi def link tmpfilesModeDef Special
hi def link tmpfilesUser String
hi def link tmpfilesUserDef Special
hi def link tmpfilesGroup String
hi def link tmpfilesGroupDef Special
hi def link tmpfilesAge Number
hi def link tmpfilesAgeDef Special
hi def link tmpfilesArg String
hi def link tmpfilesSpec Special

let b:current_syntax = 'tmpfiles'
