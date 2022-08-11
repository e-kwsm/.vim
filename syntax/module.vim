if exists('b:current_syntax')
  finish
endif

runtime! syntax/tcl.vim

" https://modules.readthedocs.io/en/v5.1.1/modulefile.html {{{1
syn keyword moduleCommand always-load
syn keyword moduleCommand append-path
syn keyword moduleCommand break
syn keyword moduleCommand chdir
syn keyword moduleCommand complete
syn keyword moduleCommand conflict
syn keyword moduleCommand continue
syn keyword moduleCommand depends-on
syn keyword moduleCommand exit
syn keyword moduleCommand family
syn keyword moduleCommand getenv
syn keyword moduleCommand getvariant
syn keyword moduleCommand is-avail
syn keyword moduleCommand is-loaded
syn keyword moduleCommand is-saved
syn keyword moduleCommand is-used
syn keyword moduleCommand module nextgroup=moduleSubCommand skipwhite
syn keyword moduleCommand module-alias
syn keyword moduleCommand module-forbid
syn keyword moduleCommand module-hide
syn keyword moduleCommand module-info
syn keyword moduleCommand module-tag
syn keyword moduleCommand module-version
syn keyword moduleCommand module-virtual
syn keyword moduleCommand module-whatis
syn keyword moduleCommand prepend-path
syn keyword moduleCommand prereq
syn keyword moduleCommand prereq-all
syn keyword moduleCommand prereq-any
syn keyword moduleCommand pushenv
syn keyword moduleCommand puts
syn keyword moduleCommand remove-path
syn keyword moduleCommand reportError
syn keyword moduleCommand reportWarning
syn keyword moduleCommand require-fullname
syn keyword moduleCommand set-alias
syn keyword moduleCommand set-function
syn keyword moduleCommand setenv
syn keyword moduleCommand source-sh
syn keyword moduleCommand system
syn keyword moduleCommand uname
syn keyword moduleCommand uncomplete
syn keyword moduleCommand unset-alias
syn keyword moduleCommand unset-function
syn keyword moduleCommand unsetenv
syn keyword moduleCommand variant
syn keyword moduleCommand versioncmp
syn keyword moduleCommand x-resource

" https://modules.readthedocs.io/en/v5.1.1/design/lmod-tcl-modulefile-compat.html {{{2
syn keyword moduleCommand add-property
syn keyword moduleCommand always-load
syn keyword moduleCommand depends-on
syn keyword moduleCommand extensions
syn keyword moduleCommand family
syn keyword moduleCommand prereq-any
syn keyword moduleCommand pushenv
syn keyword moduleCommand remove-property
syn keyword moduleCommand require-fullname

" https://modules.readthedocs.io/en/v5.1.1/module.html#module-sub-commands-1 {{{1
syn keyword moduleSubCommand add contained
syn keyword moduleSubCommand add-any contained
syn keyword moduleSubCommand aliases contained
syn keyword moduleSubCommand append-path contained
syn keyword moduleSubCommand apropos contained
syn keyword moduleSubCommand avail contained
syn keyword moduleSubCommand clear contained
syn keyword moduleSubCommand config contained
syn keyword moduleSubCommand display contained
syn keyword moduleSubCommand edit contained
syn keyword moduleSubCommand help contained
syn keyword moduleSubCommand info-loaded contained
syn keyword moduleSubCommand initadd contained
syn keyword moduleSubCommand initclear contained
syn keyword moduleSubCommand initlist contained
syn keyword moduleSubCommand initprepend contained
syn keyword moduleSubCommand initrm contained
syn keyword moduleSubCommand initswitch contained
syn keyword moduleSubCommand is-avail contained
syn keyword moduleSubCommand is-loaded contained
syn keyword moduleSubCommand is-saved contained
syn keyword moduleSubCommand is-used contained
syn keyword moduleSubCommand keyword contained
syn keyword moduleSubCommand list contained
syn keyword moduleSubCommand load contained
syn keyword moduleSubCommand load-any contained
syn keyword moduleSubCommand path contained
syn keyword moduleSubCommand paths contained
syn keyword moduleSubCommand prepend-path contained
syn keyword moduleSubCommand purge contained
syn keyword moduleSubCommand refresh contained
syn keyword moduleSubCommand reload contained
syn keyword moduleSubCommand remove-path contained
syn keyword moduleSubCommand restore contained
syn keyword moduleSubCommand rm contained
syn keyword moduleSubCommand save contained
syn keyword moduleSubCommand savelist contained
syn keyword moduleSubCommand saverm contained
syn keyword moduleSubCommand saveshow contained
syn keyword moduleSubCommand search contained
syn keyword moduleSubCommand sh-to-mod contained
syn keyword moduleSubCommand show contained
syn keyword moduleSubCommand source contained
syn keyword moduleSubCommand state contained
syn keyword moduleSubCommand swap contained
syn keyword moduleSubCommand switch contained
syn keyword moduleSubCommand test contained
syn keyword moduleSubCommand try-add contained
syn keyword moduleSubCommand try-load contained
syn keyword moduleSubCommand unload contained
syn keyword moduleSubCommand unuse contained
syn keyword moduleSubCommand use contained
syn keyword moduleSubCommand whatis contained

" https://modules.readthedocs.io/en/v5.1.1/design/lmod-tcl-modulefile-compat.html {{{1
syn keyword moduleSubCommand load-any contained
syn keyword moduleSubCommand try-load contained

" https://modules.readthedocs.io/en/v5.1.1/modulefile.html#modules-variables {{{1
syn keyword moduleVariable ModuleTool
syn keyword moduleVariable ModuleToolVersion
syn keyword moduleVariable ModuleVariant
syn keyword moduleVariable ModulesCurrentModulefile
syn keyword moduleVariable ModulesVersion

syn keyword moduleSubroutine ModulesDisplay
syn keyword moduleSubroutine ModulesHelp
" }}}1

hi def link moduleCommand Statement
hi def link moduleSubCommand Statement
hi def link moduleVariable Identifier
hi def link moduleSubroutine Function

let b:current_syntax = 'module'
