if exists('current_compiler') | finish | endif
let current_compiler = 'zizmor'

let s:cpo_save = &cpo
set cpo&vim

CompilerSet makeprg=zizmor\ --format=github\ %
CompilerSet errorformat=
      \::\%trror\ file=%f\\,line=%l\\,title=%m,
      \::\%tarning\ file=%f\\,line=%l\\,title=%m,
      \::\%totice\ file=%f\\,line=%l\\,title=%m

let &cpo = s:cpo_save
unlet s:cpo_save
