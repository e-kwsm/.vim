filetype plugin indent on
syntax enable

if has('nvim') " {{{
  let g:loaded_python_provider = 0  " disabled
  for s:p in range(9, 5, -1)
    let g:python3_host_prog = trim(system('which python3.' . string(s:p)))
    if !v:shell_error | break | endif
    unlet g:python3_host_prog
  endfor
endif " }}}

" Shougo/dein.vim {{{1
let s:bundle_root = expand('~/.local/share/nvim/site/bundle')
let s:dein_dir = s:bundle_root . '/repos/github.com/Shougo/dein.vim'
if !isdirectory(s:dein_dir)
  echo 'git clone --depth 1 https://github.com/Shougo/dein.vim.git ' . s:dein_dir
else
  let &runtimepath .= ',' . s:dein_dir
  call dein#begin(s:bundle_root)
  call dein#add('Shougo/dein.vim')
  " plugins {{{2
  if has('python3')
    call dein#add('Shougo/deoplete.nvim')
  endif
  if has('nvim')
    call dein#add('neovim/nvim-lspconfig')
    call dein#add('ncm2/float-preview.nvim')
  endif
  if has('nvim') && has('python3')
    call dein#add('Shougo/deoplete-lsp')
    call dein#add('Shougo/deoppet.nvim')
  else
    call dein#add('Shougo/neosnippet.vim')
  endif

  call dein#add('Shougo/neco-syntax')
  call dein#add('Shougo/neoinclude.vim')
  call dein#add('Shougo/neosnippet-snippets')
  call dein#add('bronson/vim-trailing-whitespace')
  call dein#add('cespare/vim-toml')
  call dein#add('itchyny/lightline.vim')
  call dein#add('lambdalisue/vim-unified-diff')
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
  " neovim/nvim-lspconfig {{{3
  if has('nvim')
    lua << EOF
    local custom_lsp_attach = function(client)
      vim.api.nvim_buf_set_keymap(0, 'n', '1gD', '<cmd>lua vim.lsp.buf.type_definition()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', '<F2>', '<cmd>lua vim.lsp.buf.rename()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', '<c-]>', '<cmd>lua vim.lsp.buf.definition()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', '<c-k>', '<cmd>lua vim.lsp.buf.signature_help()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', 'K', '<cmd>lua vim.lsp.buf.hover()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', 'g0', '<cmd>lua vim.lsp.buf.document_symbol()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', 'gD', '<cmd>lua vim.lsp.buf.implementation()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', 'gW', '<cmd>lua vim.lsp.buf.workspace_symbol()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', 'gd', '<cmd>lua vim.lsp.buf.declaration()<CR>', {noremap = true})
      vim.api.nvim_buf_set_keymap(0, 'n', 'gr', '<cmd>lua vim.lsp.buf.references()<CR>', {noremap = true})

      vim.api.nvim_buf_set_option(0, 'omnifunc', 'v:lua.vim.lsp.omnifunc')
    end

    require'lspconfig'.clangd.setup{on_attach = custom_lsp_attach}
    require'lspconfig'.pyls.setup{on_attach = custom_lsp_attach}
EOF
  endif

  " Shougo/deoplete.nvim {{{3
  if has('nvim') && has('python3')
    let g:deoplete#enable_at_startup = 1
    autocmd InsertLeave,CompleteDone * if getcmdwintype() == '' && pumvisible() == 0 | pclose | endif
  endif

  " Shougo/deoppet.nvim {{{3
  if has('nvim') && has('python3')
    call deoppet#initialize()
    call deoppet#custom#option('snippets',
          \ map(globpath(&runtimepath, 'neosnippets', v:true, v:true)
          \ + globpath(&runtimepath, 'snippets', v:true, v:true),
          \ "{ 'path': v:val }"))

    imap <C-k>  <Plug>(deoppet_expand)
    imap <C-f>  <Plug>(deoppet_jump_forward)
    imap <C-b>  <Plug>(deoppet_jump_backward)
    smap <C-f>  <Plug>(deoppet_jump_forward)
    smap <C-b>  <Plug>(deoppet_jump_backward)
  endif

  " Shougo/neosnippet.vim {{{3
  if !(has('nvim') && has('python3'))
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
  endif

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
set cursorline
set expandtab
set fileencodings=ucs-bom,utf-8,cp932,euc-jp,default,latin1
set fileformats=unix,dos,mac
set hidden
set laststatus=2
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
set suffixes-=.h
set suffixes+=.aux,.bbl,.bcf,.blg,.nav,.out,.pdf,.snm,.toc,.run.xml,.vrb,.xdv  " tex
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
  au FileType c,cpp      setl shiftwidth=2 softtabstop=2 textwidth=100
  au FileType csv        setl cursorline noexpandtab
  au FileType diff       setl cursorline
  au FileType fortran    setl ignorecase
  au FileType gaussian   setl cursorline
  au FileType gitcommit  setl textwidth=0 spell
  au FileType gitconfig  setl noexpandtab
  au FileType gnuplot    setl shiftwidth=4 softtabstop=4 textwidth=100
  au FileType markdown   setl spell textwidth=100
  au FileType neosnippet setl noexpandtab
  au FileType python     setl shiftwidth=4 softtabstop=4 textwidth=100
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
  au BufNewFile *.awk  put!='#!/usr/bin/env -S awk -f'	| :2
  au BufNewFile *.bash put!='#!/bin/bash'	| :2
  au BufNewFile *.jl   put!='#!/usr/bin/env julia'	| :2
  au BufNewFile *.plt  put!='#!/usr/bin/env gnuplot'	| :2
  au BufNewFile *.py   put!='#!/usr/bin/env python3'	| :2
  au BufNewFile *.tlu  put!='#!/usr/bin/env texlua'	| :2
  au BufNewFile *.sh   put!='#!/bin/sh'	| :2

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
  au BufReadPost ADD_EDIT.patch      :7
  au BufReadPost COMMIT_EDITMSG      :1
  au BufReadPost addp-hunk-edit.diff :7
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
endif
" }}}1

if filereadable(expand('~/.vimrc_local'))
  source ~/.vimrc_local
endif

" vim:set et fdm=marker
