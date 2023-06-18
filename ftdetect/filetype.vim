autocmd BufRead /usr/include/c++/* setf cpp
autocmd BufRead CMakeCache.txt setl filetype=cmakecache
autocmd BufRead config.cache setf sh
autocmd BufRead mpif.h setl filetype=fortran
autocmd BufRead poetry.lock setf toml
autocmd BufRead * if getline(1) =~ '^#%Module' | setf module | endif

autocmd BufNewFile,BufRead *.bbx setf tex
autocmd BufNewFile,BufRead *.cbx setf tex
autocmd BufNewFile,BufRead *.cif setl filetype=cif
autocmd BufNewFile,BufRead *.cjson setf json
autocmd BufNewFile,BufRead *.cls setl filetype=tex
autocmd BufNewFile,BufRead *.cml setl filetype=cml
autocmd BufNewFile,BufRead *.csv setf csv
autocmd BufNewFile,BufRead *.cuf setf fortran
autocmd BufNewFile,BufRead *.gjf setl filetype=gaussian
autocmd BufNewFile,BufRead *.gp setl filetype=gnuplot
autocmd BufNewFile,BufRead *.gzmat setl filetype=gaussian
autocmd BufNewFile,BufRead *.ipynb setl filetype=json
autocmd BufNewFile,BufRead *.mtx setf matrixmarket
autocmd BufNewFile,BufRead *.plt setl filetype=gnuplot
autocmd BufNewFile,BufRead *.tlu setf lua
autocmd BufNewFile,BufRead *.tsv setf csv
autocmd BufNewFile,BufRead *.xyz setf xyz
autocmd BufNewFile,BufRead .clang-format setf yaml
autocmd BufNewFile,BufRead .clang-tidy setf yaml
autocmd BufNewFile,BufRead .clangd setf yaml
autocmd BufNewFile,BufRead .flake8 setf dosini
autocmd BufNewFile,BufRead .gitattributes setl filetype=gitattributes
autocmd BufNewFile,BufRead .pylintrc setf dosini
autocmd BufNewFile,BufRead .style.yapf setf dosini
autocmd BufNewFile,BufRead mongodb.conf setf yaml

autocmd BufNewFile deno:/*.ts%23{%3C,%3D,%5E,\~} setf typescript
