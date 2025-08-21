" https://www.vasp.at/wiki/index.php/POSCAR

if exists('b:current_syntax')
  finish
endif

syn match vaspposcarError		/\S\+/
syn match vaspposcarTitle		/\%1l.*/
syn match vaspposcarScale		/\%2l^\s*\zs\%([0-9]\+\%(\.[0-9]*\)\?\)\ze\s*$/
syn match vaspposcarCoord		/\%3l[+-]\?\%([0-9]\+\%(\.[0-9]*\)\?\)/
syn match vaspposcarCoord		/\%4l[+-]\?\%([0-9]\+\%(\.[0-9]*\)\?\)/
syn match vaspposcarCoord		/\%5l[+-]\?\%([0-9]\+\%(\.[0-9]*\)\?\)/
syn match vaspposcarElement		/\%6l\<[A-Z][a-z]\?\>/
syn match vaspposcarStoich		/\%7l\<[1-9][0-9]*\>/
syn match vaspposcarSelective		/\%8l^\s*\zsSelective\s*dynamics\ze\s*$\c/
syn match vaspposcarCoordTyp		/\%8l^\s*\zs\<Direct\|Cartesian\>\ze\s*$\c/
syn match vaspposcarCoordTyp		/\%9l^\s*\zs\<Direct\|Cartesian\>\ze\s*$\c/
syn match vaspposcarCoord		/\%>8l[+-]\?\%([0-9]\+\%(\.[0-9]*\)\?\)/
syn match vaspposcarEnableSelect	/\%>8l\<[TF]\>\c/

hi def link vaspposcarError		Error
hi def link vaspposcarTitle		String
hi def link vaspposcarScale		Float
hi def link vaspposcarCoord		Float
hi def link vaspposcarElement		String
hi def link vaspposcarStoich		Number
hi def link vaspposcarSelective		Keyword
hi def link vaspposcarCoordTyp		Label
hi def link vaspposcarEnableSelect	Boolean

let b:current_syntax = 'vaspposcar'
