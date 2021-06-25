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
  endif

  call dein#add('Shougo/neco-syntax')
  call dein#add('Shougo/neoinclude.vim')
  call dein#add('bronson/vim-trailing-whitespace')
  call dein#add('cespare/vim-toml')
  call dein#add('cormacrelf/vim-colors-github')
  call dein#add('hrsh7th/vim-vsnip')
  call dein#add('hrsh7th/vim-vsnip-integ')
  call dein#add('itchyny/lightline.vim')
  call dein#add('jacoborus/tender.vim')
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
    local on_attach = function(client, bufnr)
      local function buf_set_keymap(...) vim.api.nvim_buf_set_keymap(bufnr, ...) end
      local function buf_set_option(...) vim.api.nvim_buf_set_option(bufnr, ...) end

      buf_set_option('omnifunc', 'v:lua.vim.lsp.omnifunc')

      local opts = {noremap=true, silent=true}

      buf_set_keymap('n', 'gD', '<cmd>lua vim.lsp.buf.declaration()<CR>', opts)
      -- buf_set_keymap('n', 'gd', '<Cmd>lua vim.lsp.buf.definition()<CR>', opts)
      buf_set_keymap('n', '<C-]>', '<cmd>lua vim.lsp.buf.definition()<CR>', opts)
      buf_set_keymap('n', 'K', '<cmd>lua vim.lsp.buf.hover()<CR>', opts)
      buf_set_keymap('n', 'gi', '<cmd>lua vim.lsp.buf.implementation()<CR>', opts)
      buf_set_keymap('n', '<C-k>', '<cmd>lua vim.lsp.buf.signature_help()<CR>', opts)
      -- buf_set_keymap('n', '<space>wa', '<cmd>lua vim.lsp.buf.add_workspace_folder()<CR>', opts)
      -- buf_set_keymap('n', '<space>wr', '<cmd>lua vim.lsp.buf.remove_workspace_folder()<CR>', opts)
      -- buf_set_keymap('n', '<space>wl', '<cmd>lua print(vim.inspect(vim.lsp.buf.list_workspace_folders()))<CR>', opts)
      buf_set_keymap('n', '<space>D', '<cmd>lua vim.lsp.buf.type_definition()<CR>', opts)
      -- buf_set_keymap('n', '<space>rn', '<cmd>lua vim.lsp.buf.rename()<CR>', opts)
      buf_set_keymap('n', '<F2>', '<cmd>lua vim.lsp.buf.rename()<CR>', opts)
      -- buf_set_keymap('n', '<space>ca', '<cmd>lua vim.lsp.buf.code_action()<CR>', opts)
      buf_set_keymap('n', 'gr', '<cmd>lua vim.lsp.buf.references()<CR>', opts)
      buf_set_keymap('n', '<space>e', '<cmd>lua vim.lsp.diagnostic.show_line_diagnostics()<CR>', opts)
      buf_set_keymap('n', '[d', '<cmd>lua vim.lsp.diagnostic.goto_prev()<CR>', opts)
      buf_set_keymap('n', ']d', '<cmd>lua vim.lsp.diagnostic.goto_next()<CR>', opts)
      -- buf_set_keymap('n', '<space>q', '<cmd>lua vim.lsp.diagnostic.set_loclist()<CR>', opts)
      -- buf_set_keymap("n", "<space>f", "<cmd>lua vim.lsp.buf.formatting()<CR>", opts)

      buf_set_keymap('n', 'g0', '<cmd>lua vim.lsp.buf.document_symbol()<CR>', opts)
      buf_set_keymap('n', 'gW', '<cmd>lua vim.lsp.buf.workspace_symbol()<CR>', opts)
    end

    require'lspconfig'.clangd.setup{on_attach = on_attach}
    require'lspconfig'.pylsp.setup{on_attach = on_attach}
EOF
  endif

  " Shougo/deoplete.nvim {{{3
  if has('nvim') && has('python3')
    let g:deoplete#enable_at_startup = 1
    autocmd InsertLeave,CompleteDone * if getcmdwintype() == '' && pumvisible() == 0 | pclose | endif
  endif

  " jacoborus/tender.vim {{{3
  colorscheme tender
  let g:lightline = { 'colorscheme': 'tender' }

  " ncm2/float-preview.nvim {{{3
  let g:float_preview#docked = 1

  "hrsh7th/vim-vsnip {{{3
  imap <expr> <C-j>   vsnip#expandable()  ? '<Plug>(vsnip-expand)'         : '<C-j>'
  smap <expr> <C-j>   vsnip#expandable()  ? '<Plug>(vsnip-expand)'         : '<C-j>'

  " Expand or jump
  imap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'
  smap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'

  " Jump forward or backward
  imap <expr> <Tab>   vsnip#jumpable(1)   ? '<Plug>(vsnip-jump-next)'      : '<Tab>'
  smap <expr> <Tab>   vsnip#jumpable(1)   ? '<Plug>(vsnip-jump-next)'      : '<Tab>'
  imap <expr> <S-Tab> vsnip#jumpable(-1)  ? '<Plug>(vsnip-jump-prev)'      : '<S-Tab>'
  smap <expr> <S-Tab> vsnip#jumpable(-1)  ? '<Plug>(vsnip-jump-prev)'      : '<S-Tab>'

  " Select or cut text to use as $TM_SELECTED_TEXT in the next snippet.
  " See https://github.com/hrsh7th/vim-vsnip/pull/50
  "nmap        s   <Plug>(vsnip-select-text)
  "xmap        s   <Plug>(vsnip-select-text)
  "nmap        S   <Plug>(vsnip-cut-text)
  "xmap        S   <Plug>(vsnip-cut-text)

  let g:vsnip_snippet_dir = expand('~/.vim/vsnip')

  " }}}2
endif
" }}}1

source $VIMRUNTIME/macros/matchit.vim

" set {{{1
set autowrite
set conceallevel=0
set cursorline
set expandtab
set fileencodings=ucs-bom,utf-8,cp932,euc-jp,default,latin1
set hidden
set modeline
set mouse=a
set nohlsearch
set number
set relativenumber
set ruler
set scrolloff=1
set shiftwidth=2
set softtabstop=-1
set spelllang+=cjk
set suffixes-=.h
set suffixes+=.aux,.bbl,.bcf,.blg,.nav,.out,.pdf,.snm,.toc,.run.xml,.vrb,.xdv  " tex
set title
set visualbell

if has('nvim')
  set inccommand=split
  if $TERM =~ '.\+256color$'
    set termguicolors
  endif
endif
" }}}1

" map {{{1
nnoremap mm :make<CR>
noremap Q gq
" }}}1

highlight LineNr ctermfg=darkred

let &titleold=getcwd()

augroup myFileTypeConfig " {{{1
  au!

  au FileType bib	setl spell
  au FileType c,cpp	setl tabstop=2 textwidth=100
  au FileType csv	setl noexpandtab
  au FileType fortran	setl ignorecase
  au FileType gitcommit	setl textwidth=0 spell
  au FileType gitconfig	setl noexpandtab shiftwidth=8
  au FileType gnuplot	setl tabstop=4 textwidth=100
  au FileType markdown	setl spell textwidth=100
  au FileType neosnippet	setl noexpandtab
  au FileType python	setl tabstop=4 textwidth=100
  au FileType rst	setl foldmethod=manual spell
  au FileType sh	setl tabstop=2 textwidth=100 | let g:is_posix = 1
  au FileType sshconfig	setl noexpandtab
  au FileType svg	setl iskeyword+=- tabstop=2 textwidth=100
  au FileType tcl	setl iskeyword+=-
  au FileType tex	setl colorcolumn=+1 foldmarker=[[[,]]] foldmethod=marker spell tabstop=2 textwidth=100
  au FileType vim	setl expandtab foldmethod=marker
  au FileType xyz	setl cursorline

  " shebang
  au BufNewFile *.awk	put!='#!/usr/bin/env -S awk -f' | :2
  au BufNewFile *.bash	put!='#!/bin/bash' | :2
  au BufNewFile *.jl	put!='#!/usr/bin/env julia' | :2
  au BufNewFile *.plt	put!='#!/usr/bin/env -S gnuplot -p' | :2
  au BufNewFile *.py	put!='#!/usr/bin/env python3' | :2
  au BufNewFile *.sh	put!='#!/bin/sh' | :2
  au BufNewFile *.tlu	put!='#!/usr/bin/env texlua' | :2

  set cinoptions+=g2,h2
  set cinoptions+=:2,=2
  set cinoptions+=N-s
  let &path .= ',' . substitute($CPLUS_INCLUDE_PATH, ':', ',', 'g')

  let g:c_gnu = 1
  let g:tex_flavor = 'latex'
  let g:tex_noindent_env = join([
        \ 'document',
        \ 'lstlisting',
        \ 'minted',
        \ 'refsection',
        \ 'refsegment',
        \ 'verbatim',
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
  au BufReadPost ADD_EDIT.patch      :3
  au BufReadPost COMMIT_EDITMSG      :1
  au BufReadPost addp-hunk-edit.diff :3
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
