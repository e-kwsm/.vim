augroup myvimrc
  au!
augroup END

filetype plugin indent on
syntax enable

if has('nvim') " {{{
  let g:loaded_python_provider = v:false
  for s:m in range(10, 6, -1)
    let g:python3_host_prog = exepath('python3.' . string(s:m))
    if len(g:python3_host_prog) | break | endif
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
  if has('nvim')
    call dein#add('neovim/nvim-lspconfig')
    call dein#add('ncm2/float-preview.nvim')
    call dein#add('Shougo/ddc-nvim-lsp')
  endif

  call dein#add('bronson/vim-trailing-whitespace')
  call dein#add('cespare/vim-toml')
  call dein#add('cocopon/iceberg.vim')
  call dein#add('hrsh7th/vim-vsnip')
  call dein#add('hrsh7th/vim-vsnip-integ')
  call dein#add('itchyny/lightline.vim')
  call dein#add('lambdalisue/vim-unified-diff')
  call dein#add('rhysd/vim-clang-format')
  call dein#add('Shougo/ddc-around')
  call dein#add('Shougo/ddc-matcher_head')
  call dein#add('Shougo/ddc-sorter_rank')
  call dein#add('Shougo/ddc.vim')
  call dein#add('Shougo/neco-syntax')
  call dein#add('Shougo/neoinclude.vim')
  call dein#add('tpope/vim-endwise')
  call dein#add('tpope/vim-surround')
  call dein#add('ujihisa/neco-look')
  call dein#add('vim-denops/denops.vim')
  " }}}2
  call dein#end()

  filetype plugin indent on
  syntax enable

  let g:dein#types#git#clone_depth = 1
  if dein#check_install()
    call dein#install()
  endif

  " plugin config {{{2
  " cocopon/iceberg.vim {{{3
  try | colorscheme iceberg | let g:lightline = {'colorscheme': 'iceberg'} | catch | colorscheme desert | endtry

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

  " ncm2/float-preview.nvim {{{3
  let g:float_preview#docked = 1

  " neovim/nvim-lspconfig {{{3
  if has('nvim')
    lua << EOF
  local ok, nvim_lsp = pcall(require, 'lspconfig')
  if (not ok) then
    vim.api.nvim_command('echom "module lspconfig not found"')
    return nil
  end
  local on_attach = function(_, bufnr)
    local function buf_set_keymap(...)
      vim.api.nvim_buf_set_keymap(bufnr, ...)
    end
    local function buf_set_option(...)
      vim.api.nvim_buf_set_option(bufnr, ...)
    end

    buf_set_option('omnifunc', 'v:lua.vim.lsp.omnifunc')

    -- Mappings.
    local opts = { noremap = true, silent = true }
    buf_set_keymap('n', 'gD', '<Cmd>lua vim.lsp.buf.declaration()<CR>', opts)
    buf_set_keymap('n', 'gd', '<Cmd>lua vim.lsp.buf.definition()<CR>', opts)
    buf_set_keymap('n', 'K', '<Cmd>lua vim.lsp.buf.hover()<CR>', opts)
    buf_set_keymap('n', 'gi', '<cmd>lua vim.lsp.buf.implementation()<CR>', opts)
    buf_set_keymap('n', '<C-k>', '<cmd>lua vim.lsp.buf.signature_help()<CR>', opts)
    buf_set_keymap('n', '<space>wa', '<cmd>lua vim.lsp.buf.add_workspace_folder()<CR>', opts)
    buf_set_keymap('n', '<space>wr', '<cmd>lua vim.lsp.buf.remove_workspace_folder()<CR>', opts)
    buf_set_keymap('n', '<space>wl', '<cmd>lua print(vim.inspect(vim.lsp.buf.list_workspace_folders()))<CR>', opts)
    buf_set_keymap('n', '<space>D', '<cmd>lua vim.lsp.buf.type_definition()<CR>', opts)
    buf_set_keymap('n', '<space>rn', '<cmd>lua vim.lsp.buf.rename()<CR>', opts)
    buf_set_keymap('n', 'gr', '<cmd>lua vim.lsp.buf.references()<CR>', opts)
    buf_set_keymap('n', '<space>e', '<cmd>lua vim.lsp.diagnostic.show_line_diagnostics()<CR>', opts)
    buf_set_keymap('n', '[d', '<cmd>lua vim.lsp.diagnostic.goto_prev()<CR>', opts)
    buf_set_keymap('n', ']d', '<cmd>lua vim.lsp.diagnostic.goto_next()<CR>', opts)
    buf_set_keymap('n', '<space>q', '<cmd>lua vim.lsp.diagnostic.set_loclist()<CR>', opts)
    -- buf_set_keymap("n", "<space>f", "<cmd>lua vim.lsp.buf.formatting()<CR>", opts)

    buf_set_keymap('n', '<F2>', '<cmd>lua vim.lsp.buf.rename()<CR>', opts)

    -- buf_set_keymap('n', 'g0', '<cmd>lua vim.lsp.buf.document_symbol()<CR>', opts)
    -- buf_set_keymap('n', 'gW', '<cmd>lua vim.lsp.buf.workspace_symbol()<CR>', opts)
  end

  nvim_lsp["clangd"].setup{on_attach = on_attach}
  nvim_lsp["denols"].setup{on_attach = on_attach}
  nvim_lsp["pylsp"].setup{on_attach = on_attach}
EOF
  endif

  " Shougo/ddc.vim {{{3
  au myvimrc CompleteDone * pclose

  let s:sources = [
        \ 'nvim-lsp',
        \ 'vsnip',
        \ 'around',
        \ ]
  call ddc#custom#patch_global('sources', s:sources)

  call ddc#custom#patch_global('sourceOptions', {
        \ '_': {
        \   'matchers': ['matcher_head'],
        \   'sorters': ['sorter_rank'],
        \ },
        \ 'around': {'mark': 'A'},
        \ 'nvim-lsp': {
        \     'mark': 'lsp',
        \     'forceCompletionPattern': '(?:\.|->)\w*',
        \ },
        \ })

  call ddc#custom#patch_global('sourceParams', {
        \ 'around': {'maxSize': 500},
        \ })

  call ddc#custom#patch_filetype('bib', 'sources', [
        \ 'bib.field',
        \ 'bib.type',
        \ ] + s:sources)
  call ddc#custom#patch_filetype(['c', 'cpp'], 'sources', [
        \ 'c.doxygen',
        \ ] + s:sources)
  call ddc#custom#patch_filetype('cmake', 'sources', [
        \ 'cmake.FindBLAS',
        \ 'cmake.FindBoost',
        \ 'cmake.FindLAPACK',
        \ 'cmake.FindMPI',
        \ 'cmake.FindOpenMP',
        \ 'cmake.FindPython',
        \ 'cmake.FindPython3',
        \ 'cmake.GNUInstallDirs',
        \ 'cmake.configure_file',
        \ 'cmake.find_package',
        \ 'cmake.generator_expressions',
        \ 'cmake.include',
        \ 'cmake.list',
        \ 'cmake.message',
        \ 'cmake.string',
        \ 'cmake.variable',
        \ ] + s:sources)
  call ddc#custom#patch_filetype('gnuplot', 'sources', [
        \ 'gnuplot.colornames',
        \ ] + s:sources)
  call ddc#custom#patch_filetype('markdown', 'sources', [
        \ 'markdown.github',
        \ 'markdown.gitlab',
        \ ] + s:sources)
  call ddc#custom#patch_filetype('module', 'sources', [
        \ 'module.path',
        \ ] + s:sources)
  call ddc#custom#patch_filetype('rst', 'sources', [
        \ 'rst.directive',
        \ 'rst.pygments',
        \ 'rst.role',
        \ ] + s:sources)
  call ddc#custom#patch_filetype('sh', 'sources', [
        \ 'sh.pbs.environment',
        \ 'sh.pbs.qsub',
        \ 'sh.slurm.environment',
        \ 'sh.slurm.sbatch',
        \ ] + s:sources)
  call ddc#custom#patch_filetype('svg', 'sources', [
        \ 'svg.attr_name',
        \ 'svg.color',
        \ 'svg.element',
        \ 'svg.font',
        \ ] + s:sources)
  call ddc#custom#patch_filetype('tex', 'sources', [
        \ 'tex.beamercolor',
        \ 'tex.beamerfont',
        \ 'tex.beamersize',
        \ 'tex.beamertemplate',
        \ 'tex.class',
        \ 'tex.command',
        \ 'tex.environment',
        \ 'tex.font',
        \ 'tex.minted',
        \ 'tex.package',
        \ 'tex.usetikzlibrary',
        \ 'tex.xcolor',
        \ ] + s:sources)

  call ddc#enable()
  " }}}2
endif
" }}}1

" set {{{1
set autowrite
set cursorline
set expandtab
set fileencodings=ucs-bom,utf-8,cp932,euc-jp,default,latin1
set hidden
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
set suffixes+=.mod,.smod  " fortran
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
nnoremap m <Nop>
nnoremap mm :make<CR>
nnoremap Q gq
" }}}1

highlight LineNr ctermfg=darkred

let &titleold=getcwd()

augroup myvimrc " {{{1
  au FileType bib	setl spell
  au FileType c,cpp	setl tabstop=2 textwidth=100
  au FileType csv	setl noexpandtab
  au FileType fortran	setl ignorecase
  au FileType gitcommit	setl textwidth=0 spell
  au FileType gitconfig	setl noexpandtab shiftwidth=8
  au FileType gnuplot	setl
        \ keywordprg=gnuplot\ -e\ help\\
        \ shiftwidth=4 textwidth=100
  au FileType markdown	setl shiftwidth=4 spell textwidth=100
  au FileType python	setl textwidth=88
  au FileType rst	setl foldmethod=manual spell
  au FileType sh	setl
        \ makeprg=shellcheck\ -f\ gcc\ %
        \ tabstop=2 textwidth=100
  au FileType sshconfig	setl noexpandtab
  au FileType svg	setl iskeyword+=- tabstop=2 textwidth=100
  au FileType tcl	setl iskeyword+=-
  au FileType tex	setl colorcolumn=+1 foldmarker=[[[,]]] foldmethod=marker spell textwidth=100
  au FileType vim	setl foldmethod=marker
  au FileType xyz	setl cursorline

  " shebang
  au BufNewFile *.awk	put!='#!/usr/bin/env -S awk -f' | :2
  au BufNewFile *.bash	put!='#!/bin/bash' | :2
  au BufNewFile *.jl	put!='#!/usr/bin/env julia' | :2
  au BufNewFile *.plt	put!='#!/usr/bin/env -S gnuplot -p' | :2
  au BufNewFile *.py	put!='#!/usr/bin/env python3' | :2
  au BufNewFile *.sh	put!='#!/bin/sh' | :2
  au BufNewFile *.tlu	put!='#!/usr/bin/env texlua' | :2

  let g:c_gnu = v:true
  let g:is_posix = v:true
  let g:tex_flavor = 'latex'
  let g:tex_noindent_env = join([
        \ 'document',
        \ 'lstlisting',
        \ 'minted',
        \ 'refsection',
        \ 'refsegment',
        \ 'verbatim',
        \ ], '\|')

  au BufReadPost *
        \ if line("'\"") > 1 && line("'\"") <= line("$") |
        \   exe 'normal g`"' |
        \ endif
  au BufReadPost * if &diff | set foldmethod=diff | endif
  au QuickFixCmdPost *grep* cwindow

  " git
  au BufReadPost ADD_EDIT.patch		:3
  au BufReadPost COMMIT_EDITMSG		:1
  au BufReadPost addp-hunk-edit.diff	:3
  au BufReadPost git-rebase-todo	:1

  if has('nvim')
    if $TERM =~ '.\+256color$'
      au TermEnter * set notermguicolors
      au TermLeave * set termguicolors
    endif
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
