let s:extfname=expand('%:e')
if exists('g:tex_stylish')
  let b:tex_stylish= g:tex_stylish
elseif !exists('b:tex_stylish')
  if s:extfname == 'sty' || s:extfname == 'cls' || s:extfname == 'clo'
        \ || s:extfname == 'dtx' || s:extfname == 'ltx'
        \ || s:extfname == 'bbx' || s:extfname == 'cbx'
    let b:tex_stylish= 1
  else
    let b:tex_stylish= 0
  endif
endif
