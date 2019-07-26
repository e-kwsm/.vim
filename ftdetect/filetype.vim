autocmd BufRead /usr/include/c++/* setf cpp

autocmd BufRead,BufNewFile *.aux     setl filetype=tex
autocmd BufRead,BufNewFile *.bbx     setl filetype=tex
autocmd BufRead,BufNewFile *.cif     setl filetype=cif
autocmd BufRead,BufNewFile *.cls     setl filetype=tex
autocmd BufRead,BufNewFile *.csv     setf csv
autocmd BufRead,BufNewFile *.gjf     setl filetype=gaussian
autocmd BufRead,BufNewFile *.gp      setl filetype=gnuplot
autocmd BufRead,BufNewFile *.gzmat   setl filetype=gaussian
autocmd BufRead,BufNewFile *.ipynb   setl filetype=json
autocmd BufRead,BufNewFile *.pdf_tex setl filetype=tex
autocmd BufRead,BufNewFile *.plt     setl filetype=gnuplot
autocmd BufRead,BufNewFile *.tlu     setf lua
autocmd BufRead,BufNewFile *.tsv     setf csv
autocmd BufRead,BufNewFile *.xyz     setf xyz

autocmd BufNewFile,BufRead * if getline(1) =~ '^#%Module' | setf module | endif
