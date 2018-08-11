filetype plugin indent on
syntax enable

" Shougo/dein.vim {{{1
let s:dein_bundle_root = expand('~/.vim/bundle')
let s:dein_dein = s:dein_bundle_root . '/repos/github.com/Shougo/dein.vim'
if isdirectory(s:dein_dein)
  let &runtimepath .= ',' . s:dein_dein
  call dein#begin(s:dein_bundle_root)
  call dein#add('Shougo/dein.vim')
  " plugins {{{2
  if has('python3')
    call dein#add('Shougo/deoplete.nvim')
    call dein#add('davidhalter/jedi-vim')
    call dein#add('nvie/vim-flake8')
  endif

  call dein#add('Shougo/neco-syntax')
  call dein#add('Shougo/neoinclude.vim')
  call dein#add('Shougo/neosnippet-snippets')
  call dein#add('Shougo/neosnippet.vim')
  call dein#add('bronson/vim-trailing-whitespace')
  call dein#add('majutsushi/tagbar')
  call dein#add('tpope/vim-endwise')
  call dein#add('tpope/vim-surround')
  call dein#add('ujihisa/neco-look')
  call dein#add('vim-airline/vim-airline')
  call dein#add('vim-airline/vim-airline-themes')
  " }}}2
  call dein#end()

  let g:dein#types#git#clone_depth = 1
  if dein#check_install()
    call dein#install()
  endif

  filetype plugin indent on

  " plugin config {{{2
  " Shougo/deoplete.nvim {{{3
  if has('nvim') && has('python3')
    let g:deoplete#enable_at_startup = 1
    let g:deoplete#auto_complete_delay = 100
    call deoplete#custom#source('_', 'sorters', ['sorter_word'])
  endif

  " Shougo/neosnippet.vim {{{3
  " Plugin key-mappings.
  imap <C-k>     <Plug>(neosnippet_expand_or_jump)
  smap <C-k>     <Plug>(neosnippet_expand_or_jump)
  xmap <C-k>     <Plug>(neosnippet_expand_target)

  " SuperTab like snippets behavior.
  "imap <expr><TAB>
  " \ pumvisible() ? "\<C-n>" :
  " \ neosnippet#expandable_or_jumpable() ?
  " \    "\<Plug>(neosnippet_expand_or_jump)" : "\<TAB>"
  smap <expr><TAB> neosnippet#expandable_or_jumpable() ?
        \ "\<Plug>(neosnippet_expand_or_jump)" : "\<TAB>"

  " For snippet_complete marker.
  if has('conceal')
    set conceallevel=2 concealcursor=niv
  endif

  let g:neosnippet#expand_word_boundary = 1
  let g:neosnippet#snippets_directory = '~/.vim/snippets/'

  " davidhalter/jedi-vim {{{3
  if has('python3')
    let g:jedi#force_py_version = 3
  endif

  " vim-airline/vim-airline {{{3
  let g:airline#extensions#tabline#enabled = 1
  if !exists('g:airline_symbols')
    let g:airline_symbols = {}
  endif

  " unicode symbols
  let g:airline_left_sep = '»'
  let g:airline_left_sep = '▶'
  let g:airline_right_sep = '«'
  let g:airline_right_sep = '◀'
  let g:airline_symbols.crypt = '🔒'
  let g:airline_symbols.linenr = '␊'
  let g:airline_symbols.linenr = '␤'
  let g:airline_symbols.linenr = '¶'
  let g:airline_symbols.branch = '⎇'
  let g:airline_symbols.paste = 'ρ'
  let g:airline_symbols.paste = 'Þ'
  let g:airline_symbols.paste = '∥'
  let g:airline_symbols.whitespace = 'Ξ'

  " majutsushi/tagbar {{{3
  let g:tagbar_autofocus=1
  nmap <F8> :TagbarToggle<CR>
  nmap <F9> :TagbarOpen fjc<CR>

  " nvie/vim-flake8 {{{3
  au BufWritePost *.py call Flake8()
  au QuitPre *.py cclose | let g:flake8_show_quickfix=0
  " }}}2
endif
" }}}1

source $VIMRUNTIME/macros/matchit.vim

" set {{{1
set autowrite
set cmdheight=1
set conceallevel=0
set expandtab
set fileencodings=ucs-bom,utf-8,cp932,euc-jp,default,latin1
set fileformats=unix,dos,mac
set hidden
set laststatus=2
set makeprg=make\ -j8
set modeline
set mouse=a
set nohlsearch
set number
set relativenumber
set ruler
set scrolloff=1
set shiftwidth=2
set showcmd
set spelllang=en,cjk
"set suffixes=.bak,~,.swp,.o,.info,.aux,.log,.dvi,.bbl,.blg,.brf,.cb,.ind,.idx,.ilg,.inx,.out,.toc
set suffixes=.bak,~,.o,.info,.swp,.obj
set suffixes+=.aux,.bbl,.bcf,.blg,.d,.dvi,.log,.nav,.out,.pdf,.snm,.toc,.run.xml,.vrb,.xdv
set title
set visualbell
set wildmenu
set wrap
if has('nvim')
  set inccommand=split
  if empty($SSH_CONNECTION)
    set termguicolors
  endif
endif
" }}}1

" let {{{1
let g:loaded_python_provider = 1 " disabled
let g:python3_host_prog = '/usr/bin/python3'
let g:python_host_skip_check = 1 " disabled
" }}}1

" map {{{1
nnoremap <F5> :source $MYVIMRC<CR>
nnoremap mm :make<CR>
noremap Q gq
" }}}1

colorscheme desert
highlight LineNr ctermfg=darkred

let &titleold=getcwd()

augroup myFileTypeConfig " {{{1
  au!
  au BufReadPost *
        \ if line("'\"") > 1 && line("'\"") <= line("$") |
        \   exe "normal g`\"" |
        \ endif

  au FileType c,cpp      setl shiftwidth=4 softtabstop=4 textwidth=100
  au FileType csv        setl cursorline noexpandtab
  au FileType diff       setl cursorline
  au FileType gaussian   setl cursorline
  au FileType gitcommit  setl spell textwidth=0
  au FileType gitconfig  setl noexpandtab
  au FileType gnuplot    setl shiftwidth=4 softtabstop=4 textwidth=100
  au FileType markdown   setl spell textwidth=100
  au FileType neosnippet setl noexpandtab
  au FileType python     setl shiftwidth=4 softtabstop=4 textwidth=100
  au FileType sh         setl shiftwidth=2 softtabstop=2 textwidth=100
                          \ | let g:is_posix = 1
  au FileType sshconfig  setl noexpandtab
  au FileType svg        setl iskeyword+=- nowrap shiftwidth=2 softtabstop=2 textwidth=100
  au FileType tcl        setl iskeyword+=-
  au FileType tex        setl colorcolumn=+1 foldmarker=[[[,]]] foldmethod=marker shiftwidth=2
                          \ spell textwidth=100
  au FileType vim        setl expandtab foldmethod=marker shiftwidth=2
  au FileType xyz        setl cursorline

  " shebang
  au BufNewFile *.bash put!='#!/bin/bash'            | exe 'normal! j'
  au BufNewFile *.jl   put!='#!/usr/bin/env julia'   | exe 'normal! j'
  au BufNewFile *.plt  put!='#!/usr/bin/env gnuplot' | exe 'normal! j'
  au BufNewFile *.py   put!='#!/usr/bin/env python3' | exe 'normal! j'
  au BufNewFile *.tlu  put!='#!/usr/bin/env texlua'  | exe 'normal! j'
  au BufNewFile *.sh   put!='#!/bin/sh'              | exe 'normal! j'

  " git
  au BufReadPost */.git/ADD_EDIT.patch      exe 'normal! 3G0'
  au BufReadPost */.git/COMMIT_EDITMSG      exe 'normal! gg'
  au BufReadPost */.git/addp-hunk-edit.diff exe 'normal! 3G0'
  au BufReadPost */.git/rebase-merge/git-rebase-todo exe 'normal! gg'

  if has('nvim')
    au TermOpen term://* startinsert
  endif

  set cinoptions+=g2,h2
  set cinoptions+=:2,=2
  set cinoptions+=N-s

  let g:c_gnu = 1
  let g:tex_flavor = 'latex'
augroup END " }}}1

" command {{{1
if !exists(':Remove')
  command Remove !rm -f %
endif

if !exists(':ShExe')
  command -nargs=* ShExe up | !chmod u+x % && %:p <args>
endif

if !exists(':WrapToNext')
  command WrapToNext execute 'normal! F<Space>r<CR>J'
endif

if has('nvim')
  if !exists(':Exe')
    command -nargs=* Exe up | te chmod u+x % && %:p <args>
  endif

  if !exists(':GitAddPatch')
    command GitAddPatch up | te git add -p %
  endif

  if !exists(':GitCommitChangesOfFile')
    command GitCommitChangesOfFile up | te git add % && git commit -m %
  endif

  if !exists(':GitCommitFilenameAsMsg')
    command GitCommitFilenameAsMsg te git commit -m %
  endif

  if !exists(':GitDiff')
    command -nargs=* GitDiff up | te git diff % <args>
  endif

  if !exists(':Gnuplot')
    command -nargs=* Gnuplot te gnuplot <args>
  endif

  if !exists(':Ipython')
    command -nargs=* Ipython te ipython <args>
  endif

  if !exists(':LuaLaTeX')
    command -nargs=* LuaLaTeX up | te lualatex -output-directory %:h <args> %
  endif

  if !exists(':SpTe')
    command -nargs=* SpTe sp | te <args>
  endif

  if !exists(':XeLaTeX')
    command -nargs=* XeLaTeX up | te xelatex -output-directory %:h <args> %
  endif
endif
" }}}1

if filereadable(expand("~/.vimrc_local"))
  source ~/.vimrc_local
endif

" vim:set et fdm=marker
