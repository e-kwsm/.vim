autocmd BufRead,BufNewFile /usr/include/c++/* setf cpp

autocmd BufRead,BufNewFile *.gp  setl filetype=gnuplot
autocmd BufRead,BufNewFile *.plt setl filetype=gnuplot

autocmd BufRead,BufNewFile *.aux,*.cls setl filetype=tex
autocmd BufRead,BufNewFile *.pdf_tex   setl filetype=tex
autocmd BufRead,BufNewFile *.bbx       setl filetype=tex
