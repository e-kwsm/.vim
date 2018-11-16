function! mypy#MyPy()
  if exists('g:mypy_option')
    let l:mypy_option = g:mypy_option
  else
    let l:mypy_option = ''
  endif

  let l:oldgp = &grepprg
  let &grepprg = 'mypy ' . l:mypy_option

  silent! grep! '%'

  let &grepprg = l:oldgp

  if getqflist() == []
    echon 'mypy: OK'
  else
    echon 'mypy: error found'
  endif
endfunction
