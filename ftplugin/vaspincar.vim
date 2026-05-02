if exists('b:did_ftplugin')
  finish
endif
let b:did_ftplugin = v:true

setl comments=:!
setl commentstring=!\ %s
if has('nvim')
  command! -buffer -nargs=1 VaspincarKeywordPrg exe 'lua vim.system({"xdg-open", "https://vasp.at/wiki/Special%253ASearch?search=<args>&title=Special%3ASearch"})'
  setl keywordprg=:VaspincarKeywordPrg
endif
let b:undo_ftplugin = 'setl comments< commentstring< keywordprg<'
