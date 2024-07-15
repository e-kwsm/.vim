autocmd BufRead * if getline(1) =~ '^#%Module' | setf module | endif
