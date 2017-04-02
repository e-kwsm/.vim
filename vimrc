filetype plugin indent on
syntax enable

autocmd BufReadPost *
      \ if line("'\"") > 1 && line("'\"") <= line("$") |
      \   exe "normal g`\"" |
      \ endif

" Shougo/dein.vim {{{
if filereadable(expand("~/.vim/bundle/repos/github.com/Shougo/dein.vim/README.md"))
  set runtimepath+=~/.vim/bundle/repos/github.com/Shougo/dein.vim

  call dein#begin(expand('~/.vim/bundle'))
  call dein#add('Shougo/dein.vim')
  " plugins {{{
  if has('nvim') && has('python3')
    call dein#add('Shougo/deoplete.nvim')
  else
    call dein#add('Shougo/neocomplete.vim')
  endif

  call dein#add('Shougo/neoinclude.vim')
  call dein#add('Shougo/neosnippet.vim')
  call dein#add('Shougo/neosnippet-snippets')
  call dein#add('tpope/vim-endwise')
  call dein#add('tpope/vim-surround')
  call dein#add('vim-airline/vim-airline')
  call dein#add('vim-airline/vim-airline-themes')
  call dein#add('majutsushi/tagbar')
  call dein#add('bronson/vim-trailing-whitespace')
  call dein#add('davidhalter/jedi-vim')
  call dein#add('ujihisa/neco-look')
  " }}}
  call dein#end()

  let g:dein#types#git#clone_depth = 1
  if dein#check_install()
    call dein#install()
  endif

  filetype plugin indent on

  " plugin config {{{
  " Shougo/deoplete.nvim {{{
  if has('nvim') && has('python3')
    let g:deoplete#enable_at_startup = 1
    let g:deoplete#auto_complete_delay = 100
    call deoplete#custom#set('_', 'sorters', ['sorter_word'])
  endif
  " }}}

  " Shougo/neosnippet.vim {{{
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
  " }}}

  " davidhalter/jedi-vim {{{
  let g:jedi#force_py_version = 3
  " }}}

  " vim-airline/vim-airline {{{
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
  " }}}

  " majutsushi/tagbar {{{
  let g:tagbar_autofocus=1
  nmap <F8> :TagbarToggle<CR>
  nmap <F9> :TagbarOpen fjc<CR>
  " }}}

  " }}}
endif
" }}}

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
set suffixes=.bak,~,.swp,.o,.info,.aux,.log,.dvi,.bbl,.blg,.brf,.cb,.ind,.idx,.ilg,.inx,.out,.toc
set tabstop=4
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
let $NVIM_TUI_ENABLE_CURSOR_SHAPE=2
" }}}1

" map {{{1
nnoremap <F5> :source $MYVIMRC<CR>
nnoremap mm :make<CR>
" }}}1

colorscheme desert
highlight LineNr ctermfg=darkred

let &titleold=getcwd()

augroup myFileTypeConfig " {{{1
  autocmd!
  autocmd FileType c,cpp      setl shiftwidth=4 tabstop=4 textwidth=100
  autocmd FileType cpp        setl path+=/usr/include/c++/4.9,/usr/local/boost/current/include
  autocmd FileType csv        setl cursorline noexpandtab tabstop=8
  autocmd FileType gaussian   setl cursorline
  autocmd FileType gitcommit  setl textwidth=0 spell | exe "normal! gg"
  autocmd FileType gitconfig  setl noexpandtab
  autocmd FileType gnuplot    setl shiftwidth=4 tabstop=4 textwidth=100
  autocmd FileType markdown   setl spell spelllang+=cjk textwidth=100
  autocmd FileType neosnippet setl noexpandtab
  autocmd FileType python     setl shiftwidth=4 tabstop=4 textwidth=100
  autocmd FileType sh         setl shiftwidth=2 tabstop=2 textwidth=100
  autocmd FileType tex        setl textwidth=100 softtabstop=4 colorcolumn=+1
        \ foldmethod=marker foldmarker=[[[,]]]
        \ spell spelllang+=cjk
  autocmd FileType vim        setl noexpandtab tabstop=8 foldmethod=marker
  autocmd FileType xyz        setl cursorline

  set cinoptions+=g2,h2
  set cinoptions+=:2,=2

  let g:tex_flavor = "latex"
augroup END " }}}1

au BufWinEnter,WinEnter * if &textwidth > 0
      \ | let w:m=matchadd('ErrorMsg', printf('\%%>%dv.\+', &textwidth), -1)
      \ | endif

" command {{{1
if !exists(":WrapToNext")
  command WrapToNext execute "normal! F<Space>r<CR>J"
endif
" }}}1

if filereadable(expand("~/.vimrc_local"))
  source ~/.vimrc_local
endif

" vim:set et fdm=marker:
