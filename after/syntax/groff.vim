" man:groff_man(7)
syn match groffDeprecated /^\.\%(AT\|DT\|OP\|PD\|SB\|UC\)\>/

hi def link groffDeprecated ErrorMsg
