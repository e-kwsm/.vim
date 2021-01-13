if exists('b:current_syntax')
  finish
endif
runtime! syntax/xml.vim

syn keyword cmlTag atom
syn keyword cmlTag atomArray
syn keyword cmlTag bond
syn keyword cmlTag bondArray
syn keyword cmlTag cml
syn keyword cmlTag molecule

syn keyword cmlAttr atomRefs2
syn keyword cmlAttr atomRefs4
syn keyword cmlAttr elementType
syn keyword cmlAttr formalCharge
syn keyword cmlAttr hydrogenCount
syn keyword cmlAttr isotopeNumber
syn keyword cmlAttr order
syn keyword cmlAttr spinMultiplicity
syn keyword cmlAttr x3
syn keyword cmlAttr y3
syn keyword cmlAttr z3

let b:current_syntax = 'cml'
