filetype plugin indent on
syntax enable

if has('nvim') " {{{
  let g:loaded_python_provider = 1 " disabled
  for s:p in range(8, 5, -1)
    let g:python3_host_prog = trim(system('which python3.' . string(s:p)))
    if !v:shell_error | break | endif
    unlet g:python3_host_prog
  endfor
endif " }}}

" Shougo/dein.vim {{{1
let s:bundle_root = expand('~/.vim/bundle')
let s:dein_dir = s:bundle_root . '/repos/github.com/Shougo/dein.vim'
if !isdirectory(s:dein_dir)
  echo 'git clone --depth 1 https://github.com/Shougo/dein.vim ' . s:dein_dir
else
  let &runtimepath .= ',' . s:dein_dir
  call dein#begin(s:bundle_root)
  call dein#add('Shougo/dein.vim')
  " plugins {{{2
  if has('python3')
    call dein#add('Shougo/deoplete.nvim')
  endif
  if has('nvim')
    call dein#add('neovim/nvim-lsp')
    call dein#add('ncm2/float-preview.nvim')
  endif
  if has('nvim') && has('python3')
    call dein#add('Shougo/deoplete-lsp')
  endif

  call dein#add('Shougo/neco-syntax')
  call dein#add('Shougo/neoinclude.vim')
  call dein#add('Shougo/neosnippet-snippets')
  call dein#add('Shougo/neosnippet.vim')
  call dein#add('Vimjas/vim-python-pep8-indent')
  call dein#add('bronson/vim-trailing-whitespace')
  call dein#add('cespare/vim-toml')
  call dein#add('itchyny/lightline.vim')
  call dein#add('lambdalisue/vim-unified-diff')
  call dein#add('majutsushi/tagbar')
  call dein#add('rhysd/vim-clang-format')
  call dein#add('tpope/vim-endwise')
  call dein#add('tpope/vim-surround')
  call dein#add('ujihisa/neco-look')
  " }}}2
  call dein#end()

  let g:dein#types#git#clone_depth = 1
  if dein#check_install()
    call dein#install()
  endif

  filetype plugin indent on

  " plugin config {{{2
  " neovim/nvim-lsp {{{3
  lua << EOF
  require'nvim_lsp'.clangd.setup{}
  require'nvim_lsp'.pyls.setup{}
EOF

  augroup MyLSP
    autocmd!
    autocmd Filetype c,cpp,python setl omnifunc=v:lua.vim.lsp.omnifunc
  augroup END

  nnoremap <silent> ;dc <cmd>lua vim.lsp.buf.declaration()<CR>
  nnoremap <silent> ;df <cmd>lua vim.lsp.buf.definition()<CR>
  nnoremap <silent> ;h  <cmd>lua vim.lsp.buf.hover()<CR>
  nnoremap <silent> ;i  <cmd>lua vim.lsp.buf.implementation()<CR>
  nnoremap <silent> ;s  <cmd>lua vim.lsp.buf.signature_help()<CR>
  nnoremap <silent> ;td <cmd>lua vim.lsp.buf.type_definition()<CR>

  " Shougo/deoplete.nvim {{{3
  if has('nvim') && has('python3')
    let g:deoplete#enable_at_startup = 1
    autocmd InsertLeave,CompleteDone * if pumvisible() == 0 | pclose | endif
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

  " majutsushi/tagbar {{{3
  let g:tagbar_autofocus=1
  nmap <F8> :TagbarToggle<CR>
  nmap <F9> :TagbarOpen fjc<CR>

  " ncm2/float-preview.nvim {{{3
  let g:float_preview#docked = 1

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
  set wildoptions+=pum
  if empty($SSH_CONNECTION)
    set termguicolors
  endif
endif
" }}}1

" map {{{1
nnoremap mm :make<CR>
noremap Q gq
" }}}1

colorscheme desert
highlight LineNr ctermfg=darkred

let &titleold=getcwd()

augroup myFileTypeConfig " {{{1
  au!

  au FileType bib        setl spell
  au FileType c,cpp      setl shiftwidth=4 softtabstop=4 textwidth=100
  au FileType csv        setl cursorline noexpandtab
  au FileType diff       setl cursorline
  au FileType fortran    setl ignorecase
  au FileType gaussian   setl cursorline
  au FileType gitcommit  setl textwidth=0 spell
  au FileType gitconfig  setl noexpandtab
  au FileType gnuplot    setl shiftwidth=4 softtabstop=4 textwidth=100
  au FileType hgcommit   setl spell
  au FileType markdown   setl spell textwidth=100
  au FileType neosnippet setl noexpandtab
  au FileType python     setl keywordprg=pydoc3 shiftwidth=4 softtabstop=4 textwidth=100
  au FileType rst        setl foldmethod=manual spell
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
  au BufNewFile *.bash put!='#!/bin/bash'            | :2
  au BufNewFile *.jl   put!='#!/usr/bin/env julia'   | :2
  au BufNewFile *.plt  put!='#!/usr/bin/env gnuplot' | :2
  au BufNewFile *.py   put!='#!/usr/bin/env python3' | :2
  au BufNewFile *.tlu  put!='#!/usr/bin/env texlua'  | :2
  au BufNewFile *.sh   put!='#!/bin/sh'              | :2

  set cinoptions+=g2,h2
  set cinoptions+=:2,=2
  set cinoptions+=N-s
  let &path .= ',' . substitute($CPLUS_INCLUDE_PATH, ':', ',', 'g')

  let g:c_gnu = 1
  let g:tex_flavor = 'latex'
  let g:tex_noindent_env = join([
        \ 'document',
        \ 'verbatim',
        \ 'lstlisting',
        \ 'minted',
        \ 'refsection',
        \ 'refsegment',
        \ ], '\|')
augroup END " }}}1

augroup myHooks " {{{1
  au!
  au BufReadPost *
        \ if line("'\"") > 1 && line("'\"") <= line("$") |
        \   exe 'normal g`"' |
        \ endif
  au BufReadPost * if &diff | set foldmethod=diff | endif
  au QuickFixCmdPost *grep* cwindow

  " git
  au BufReadPost ADD_EDIT.patch      :6
  au BufReadPost COMMIT_EDITMSG      :1
  au BufReadPost addp-hunk-edit.diff :6
  au BufReadPost git-rebase-todo     :1

  if has('nvim')
    au TermOpen term://* startinsert
  endif
augroup END " }}}1

" command {{{1
if !exists(':ShowSyntaxGroup')
  command ShowSyntaxGroup echo synIDattr(synID(line('.'), col('.'), 1), 'name')
endif

if !exists(':Remove')
  command Remove execute('!rm -f ' .. shellescape(expand('%')))
endif

if !exists(':ShExe')
  command -nargs=* ShExe up | !chmod u+x % && %:p <args>
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

if filereadable(expand('~/.vimrc_local'))
  source ~/.vimrc_local
endif

" vim:set et fdm=marker
