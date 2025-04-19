" man:groff_man(7)
syn match groffDeprecated /^\.\%(AT\|DT\|HP\|OP\|PD\|UC\)\>/

hi def link groffDeprecated Error
