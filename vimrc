filetype plugin indent on
syntax enable

autocmd BufReadPost *
      \ if line("'\"") > 1 && line("'\"") <= line("$") |
      \   exe "normal g`\"" |
      \ endif

" Shougo/NeoBundle {{{
if filereadable(expand("~/.vim/bundle/neobundle.vim/README.md"))
  " NeoBundle
  " Required:
  set runtimepath+=~/.vim/bundle/neobundle.vim/

  " Required:
  call neobundle#begin(expand('~/.vim/bundle/'))

  " Let NeoBundle manage NeoBundle
  " Required:
  NeoBundleFetch 'Shougo/neobundle.vim'

  " My Bundles here: {{{
  if has('nvim') && has('python3')
    NeoBundle 'Shougo/deoplete.nvim'
  else
    if has('lua') && (v:version > 703 || (v:version == 703 && has('patch885')))
      NeoBundle 'Shougo/neocomplete.vim'
      NeoBundleFetch 'Shougo/neocomplcache.vim'
    else
      NeoBundleFetch 'Shougo/neocomplete.vim'
      NeoBundle 'Shougo/neocomplcache.vim'
    endif
  endif

  NeoBundle 'Shougo/neosnippet.vim'
  NeoBundle 'Shougo/neosnippet-snippets'
  NeoBundle 'Shougo/unite.vim'
  NeoBundle 'Shougo/vimproc.vim', {
        \ 'build' : {
        \     'windows' : 'tools\\update-dll-mingw',
        \     'cygwin' : 'make -f make_cygwin.mak',
        \     'mac' : 'make -f make_mac.mak',
        \     'unix' : 'make -f make_unix.mak',
        \    },
        \ }
  NeoBundle 'tpope/vim-endwise'
  NeoBundle 'tpope/vim-surround'
  NeoBundle 'vim-airline/vim-airline'
  NeoBundle 'vim-airline/vim-airline-themes'
  NeoBundle 'majutsushi/tagbar'
  NeoBundle 'bronson/vim-trailing-whitespace'
  NeoBundle 'davidhalter/jedi-vim'
  NeoBundle 'ujihisa/neco-look'
  " }}}

  call neobundle#end()

  " Required:
  filetype plugin indent on

  let g:neobundle#types#git#clone_depth = 1

  " If there are uninstalled bundles found on startup,
  " this will conveniently prompt you to install them.
  NeoBundleCheck

  if filereadable(expand("~/.vim/plugins.vim"))
    source ~/.vim/plugins.vim
  endif
endif
" }}}

source $VIMRUNTIME/macros/matchit.vim
if filereadable(expand("~/.vimrc_local"))
  source ~/.vimrc_local
endif

" set {{{1
set autowrite
set cmdheight=1
set conceallevel=0
set expandtab
set fileencodings=ucs-bom,utf-8,cp932,euc-jp,default,latin1
set fileformats=unix,dos,mac
set hidden
set laststatus=2
set modeline
set mouse=a
set nohlsearch
set visualbell
set relativenumber
set ruler
set scrolloff=2
set shiftwidth=2
set showcmd
set suffixes=.bak,~,.swp,.o,.info,.aux,.log,.dvi,.bbl,.blg,.brf,.cb,.ind,.idx,.ilg,.inx,.out,.toc
set tabstop=4
set title
set wildmenu
set wrap
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
  autocmd FileType c,cpp      setl shiftwidth=4 tabstop=4 textwidth=100 colorcolumn=+1
  autocmd FileType cpp        setl path+=/usr/include/c++/4.9,/usr/local/boost/include
  autocmd FileType csv        setl noexpandtab
  autocmd FileType gitcommit  setl textwidth=0 | exe "normal! gg"
  autocmd FileType gitconfig  setl noexpandtab
  autocmd FileType gnuplot    setl shiftwidth=4 tabstop=4
  autocmd FileType neosnippet setl noexpandtab
  autocmd FileType python     setl shiftwidth=4 tabstop=4
  autocmd FileType sh         setl shiftwidth=4 tabstop=4
  autocmd FileType tex        setl textwidth=100 softtabstop=4 colorcolumn=+1
        \ foldmethod=marker foldmarker=[[[,]]]
        \ spell spelllang+=cjk
  autocmd FileType vim        setl noexpandtab tabstop=8 foldmethod=marker

  set cinoptions+=g2,h2
  set cinoptions+=:2,=2

  let g:tex_flavor = "latex"
augroup END " }}}1

" command {{{1
if !exists(":WrapToNext")
  command WrapToNext execute "normal! F<Space>r<CR>J"
endif
" }}}1

" vim:set et fdm=marker:
