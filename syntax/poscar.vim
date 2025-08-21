" https://www.vasp.at/wiki/index.php/POSCAR

if exists('b:current_syntax')
  finish
endif

syn match poscarError		/\S\+/
syn match poscarTitle		/\%1l.*/
syn match poscarScale		/\%2l^\s*\zs\%([0-9]\+\%(\.[0-9]*\)\?\)\ze\s*$/
syn match poscarCoord		/\%3l[+-]\?\%([0-9]\+\%(\.[0-9]*\)\?\)/
syn match poscarCoord		/\%4l[+-]\?\%([0-9]\+\%(\.[0-9]*\)\?\)/
syn match poscarCoord		/\%5l[+-]\?\%([0-9]\+\%(\.[0-9]*\)\?\)/
syn match poscarElement		/\%6l\<[A-Z][a-z]\?\>/
syn match poscarStoich		/\%7l\<[1-9][0-9]*\>/
syn match poscarSelective	/\%8l^\s*\zsSelective\s*dynamics\ze\s*$\c/
syn match poscarCoordTyp	/\%8l^\s*\zs\<Direct\|Cartesian\>\ze\s*$\c/
syn match poscarCoordTyp	/\%9l^\s*\zs\<Direct\|Cartesian\>\ze\s*$\c/
syn match poscarCoord		/\%>8l[+-]\?\%([0-9]\+\%(\.[0-9]*\)\?\)/
syn match poscarEnableSelect	/\%>8l\<[TF]\>\c/

hi def link poscarError		Error
hi def link poscarTitle		String
hi def link poscarScale		Float
hi def link poscarCoord		Float
hi def link poscarElement	String
hi def link poscarStoich	Number
hi def link poscarSelective	Keyword
hi def link poscarCoordTyp	Label
hi def link poscarEnableSelect	Boolean

let b:current_syntax = 'poscar'
