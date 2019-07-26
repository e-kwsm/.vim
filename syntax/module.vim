if exists('b:current_syntax')
  finish
endif

runtime! syntax/tcl.vim
unlet b:current_syntax

syn keyword moduleCommand append-path
syn keyword moduleCommand break
syn keyword moduleCommand chdir
syn keyword moduleCommand conflict
syn keyword moduleCommand continue
syn keyword moduleCommand exit
syn keyword moduleCommand is-loaded
syn keyword moduleCommand module nextgroup=moduleSubCommand skipwhite
syn keyword moduleCommand module-alias
syn keyword moduleCommand module-info
syn keyword moduleCommand module-log
syn keyword moduleCommand module-trace
syn keyword moduleCommand module-user
syn keyword moduleCommand module-verbosity
syn keyword moduleCommand module-version
syn keyword moduleCommand module-whatis
syn keyword moduleCommand prepend-path
syn keyword moduleCommand prereq
syn keyword moduleCommand remove-path
syn keyword moduleCommand set-alias
syn keyword moduleCommand setenv
syn keyword moduleCommand system
syn keyword moduleCommand uname
syn keyword moduleCommand unset-alias
syn keyword moduleCommand unsetenv
syn keyword moduleCommand x-resource

syn keyword moduleSubCommand add contained
syn keyword moduleSubCommand apropos contained
syn keyword moduleSubCommand avail contained
syn keyword moduleSubCommand clear contained
syn keyword moduleSubCommand display contained
syn keyword moduleSubCommand help contained
syn keyword moduleSubCommand initadd contained
syn keyword moduleSubCommand initclear contained
syn keyword moduleSubCommand initlist contained
syn keyword moduleSubCommand initprepend contained
syn keyword moduleSubCommand initrm contained
syn keyword moduleSubCommand initswitch contained
syn keyword moduleSubCommand keyword contained
syn keyword moduleSubCommand list contained
syn keyword moduleSubCommand load contained
syn keyword moduleSubCommand purge contained
syn keyword moduleSubCommand refresh contained
syn keyword moduleSubCommand rm contained
syn keyword moduleSubCommand show contained
syn keyword moduleSubCommand swap contained
syn keyword moduleSubCommand switch contained
syn keyword moduleSubCommand unload contained
syn keyword moduleSubCommand unuse contained
syn keyword moduleSubCommand update contained
syn keyword moduleSubCommand use contained
syn keyword moduleSubCommand whatis contained

syn keyword moduleVariable ModulesCurrentModulefile
syn keyword moduleVariable ModulesVersion

syn keyword moduleSubroutine ModulesDisplay
syn keyword moduleSubroutine ModulesHelp

hi def link moduleCommand Statement
hi def link moduleSubCommand Statement
hi def link moduleVariable Identifier
hi def link moduleSubroutine Function

let b:current_syntax = 'module'
