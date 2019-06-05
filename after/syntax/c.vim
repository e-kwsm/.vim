syn keyword cConstant __GNUC__ __GNUC_MINOR__ __GNUC_PATCHLEVEL__ __VERSION__

" binary integer
syn match cBinary	"\c0b[01]\+\(u\=l\{,2}\|l\{,2}u\)\>"
syn match cBinaryError	"\c0b[01]*[2-9a-f.][01]*"

hi def link cBinary	Constant
hi def link cBinaryError	Error
