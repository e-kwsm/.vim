" bare repository
autocmd BufRead config if getline(1) == '[core]' | setf gitconfig | endif
