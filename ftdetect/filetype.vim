autocmd BufRead /usr/include/c++/* setf cpp
autocmd BufRead config.cache setf sh
autocmd BufRead mpif.h setl filetype=fortran
autocmd BufRead poetry.lock setf toml

autocmd BufNewFile,BufRead *.cjson setf json
autocmd BufNewFile,BufRead *.cuf setf fortran
autocmd BufNewFile,BufRead *.gp setl filetype=gnuplot
autocmd BufNewFile,BufRead *.plt setl filetype=gnuplot
autocmd BufNewFile,BufRead .flake8 setf dosini
autocmd BufNewFile,BufRead .style.yapf setf dosini
autocmd BufNewFile,BufRead mongodb.conf setf yaml

autocmd BufNewFile deno:/*.ts%23{%3C,%3D,%5E,\~} setf typescript
