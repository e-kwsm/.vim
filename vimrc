augroup myvimrc
  au!
augroup END

if !has('nvim')
  filetype plugin indent on
  syntax enable
endif

" Shougo/dein.vim {{{1
if exists('*stdpath')
  let s:data_dir = stdpath('data')
else
  let s:data_dir = get(environ(), 'XDG_DATA_HOME', expand('~/.local/share')) . '/nvim'
endif
let s:bundle_root = s:data_dir . '/site/bundle'
let s:dein_dir = s:bundle_root . '/repos/github.com/Shougo/dein.vim'
if !isdirectory(s:dein_dir)
  echo 'git clone --depth 1 https://github.com/Shougo/dein.vim.git ' . s:dein_dir
else
  let &runtimepath .= ',' . s:dein_dir
  call dein#begin(s:bundle_root)
  call dein#add('Shougo/dein.vim')
  " plugins {{{2
  let s:_denops_available = has('nvim') || v:version > 802

  if has('nvim')
    call dein#add('neovim/nvim-lspconfig')
    call dein#add('ncm2/float-preview.nvim')
  endif
  if s:_denops_available
    call dein#add('Shougo/ddc-matcher_head')
    call dein#add('Shougo/ddc-sorter_rank')
    call dein#add('Shougo/ddc-source-around')
    call dein#add('Shougo/ddc-source-lsp')
    call dein#add('Shougo/ddc-ui-native')
    call dein#add('Shougo/ddc.vim')
  endif

  call dein#add('bronson/vim-trailing-whitespace')
  call dein#add('cespare/vim-toml')
  call dein#add('cocopon/iceberg.vim')
  call dein#add('hrsh7th/vim-vsnip')
  call dein#add('itchyny/lightline.vim')
  call dein#add('lambdalisue/vim-unified-diff')
  call dein#add('rhysd/vim-clang-format')
  call dein#add('Shougo/neco-syntax')
  call dein#add('Shougo/neoinclude.vim')
  call dein#add('tpope/vim-endwise')
  call dein#add('tpope/vim-surround')
  call dein#add('uga-rosa/ddc-source-vsnip')
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
  try | colorscheme iceberg | let g:lightline = #{colorscheme: 'iceberg'} | catch | colorscheme desert | endtry

  "hrsh7th/vim-vsnip {{{3
  inoremap <expr> <C-j>   vsnip#expandable()  ? '<Plug>(vsnip-expand)'         : '<C-j>'
  snoremap <expr> <C-j>   vsnip#expandable()  ? '<Plug>(vsnip-expand)'         : '<C-j>'

  " Expand or jump
  inoremap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'
  snoremap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'

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
local ok, lspconfig = pcall(require, "lspconfig")
if not ok then
  vim.api.nvim_command('echom "module lspconfig not found"')
  return nil
end

lspconfig.clangd.setup {}
lspconfig.denols.setup {}
lspconfig.pylsp.setup {}
EOF
  endif

  " Shougo/ddc.vim {{{3
  if s:_denops_available
    if has('nvim')
      lua << EOF
local capabilities = require("ddc_source_lsp").make_client_capabilities()
require("lspconfig").denols.setup({
  capabilities = capabilities,
})
EOF
    endif
    au myvimrc CompleteDone * silent! pclose!

    call ddc#custom#patch_global('ui', 'native')

    let s:sources = [
          \ 'lsp',
          \ 'vsnip',
          \ 'around',
          \ ]
    call ddc#custom#patch_global('sources', s:sources)

    call ddc#custom#patch_global('sourceOptions', #{
          \ _: #{
          \   matchers: ['matcher_head'],
          \   sorters: ['sorter_rank'],
          \ },
          \ around: #{mark: 'A'},
          \ lsp: #{
          \   mark: 'lsp',
          \   forceCompletionPattern: '(?:\.|->)\w*',
          \ },
          \ })

    call ddc#custom#patch_global('sourceParams', #{
          \ around: #{maxSize: 500},
          \ lsp: #{
          \   snippetEngine: denops#callback#register({body -> vsnip#anonymous(body)}),
          \   enableResolveItem: v:true,
          \   enableAdditionalTextEdit: v:true,
          \ },
          \ })

    call ddc#custom#patch_filetype('bib', 'sources', [
          \ 'bib.field',
          \ 'bib.type',
          \ ] + s:sources)
    call ddc#custom#patch_filetype(['c', 'cpp'], 'sources', [
          \ 'c.doxygen',
          \ ] + s:sources)
    call ddc#custom#patch_filetype('cmake', 'sources', [
          \ 'cmake.Doxygen',
          \ 'cmake.FindBLAS',
          \ 'cmake.FindBoost',
          \ 'cmake.FindLAPACK',
          \ 'cmake.FindMPI',
          \ 'cmake.FindOpenMP',
          \ 'cmake.FindPython',
          \ 'cmake.FindPython3',
          \ 'cmake.GNUInstallDirs',
          \ 'cmake.configure_file',
          \ 'cmake.file',
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
    call ddc#custom#patch_filetype('python', 'sources', [
          \ 'python.doctest',
          \ ] + s:sources)
    call ddc#custom#patch_filetype('rst', 'sources', [
          \ 'rst.directive',
          \ 'rst.pygments',
          \ 'rst.role',
          \ ] + s:sources)
    call ddc#custom#patch_filetype('sh', 'sources', [
          \ 'sh.openmp',
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
  endif
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
nnoremap [S [s
nnoremap [s [S
nnoremap ]S ]s
nnoremap ]s ]S
nnoremap m <Nop>
nnoremap mm :make<CR>
nnoremap Q gq
" }}}1

highlight LineNr ctermfg=darkred

let &titleold=getcwd()

augroup myvimrc " {{{1
  au FileType asciidoc	setl spell
  au FileType awk	setl noexpandtab shiftwidth=0
  au FileType bib	setl spell
  au FileType c,cpp	setl shiftwidth=2 textwidth=100
  au FileType csv	setl noexpandtab
  au FileType fortran	setl ignorecase
  au FileType gitcommit	setl keywordprg=git\ show spell
  au FileType gitconfig	setl noexpandtab shiftwidth=8
  au FileType gitrebase	setl keywordprg=git\ show
  au FileType gnuplot	setl
        \ keywordprg=gnuplot\ -e\ help\\
        \ shiftwidth=4 textwidth=100
  au FileType help	setl spell
  au FileType markdown	setl shiftwidth=4 spell textwidth=100
  au FileType nroff	setl spell textwidth=80
  au FileType pod	setl spell
  au FileType python	setl textwidth=88
  au FileType rst	setl foldmethod=manual spell
  au FileType sh	setl
        \ makeprg=shellcheck\ -f\ gcc\ %
        \ shiftwidth=2 textwidth=100
  au FileType sshconfig	setl noexpandtab
  au FileType svg	setl iskeyword+=- shiftwidth=2 textwidth=100
  au FileType tcl	setl iskeyword+=-
  au FileType tex	setl colorcolumn=+1 foldmarker=[[[,]]] foldmethod=marker spell textwidth=100
  au FileType text	setl spell
  au FileType vim	setl foldmethod=marker
  au FileType xyz	setl cursorline

  au BufReadPost git-rebase-todo setl nowrap

  " shebang
  au BufNewFile *.awk	put!='#!/usr/bin/env -S awk -f' | :2
  au BufNewFile *.bash	call setline(1, ['#!/bin/bash', 'set -eux', 'set -o pipefail']) | :3
  au BufNewFile *.dash	call setline(1, ['#!/usr/bin/env dash', 'set -eux']) | :2
  au BufNewFile *.jl	put!='#!/usr/bin/env julia' | :2
  au BufNewFile *.lua	put!='#!/usr/bin/env lua' | :2
  au BufNewFile *.plt	put!='#!/usr/bin/env -S gnuplot -p' | :2
  au BufNewFile *.py	call setline(1, [
        \ '#!/usr/bin/env python3',
        \ 'def main():',
        \ '    ...',
        \ '',
        \ '',
        \ 'if __name__ == "__main__":',
        \ '    main()'
        \ ]) | :3
  au BufNewFile *.sed	put!='#!/usr/bin/env -S sed -f' | :2
  au BufNewFile *.sh	call setline(1, ['#!/bin/sh', 'set -eux']) | :2
  au BufNewFile *.tlu	put!='#!/usr/bin/env texlua' | :2
  au BufNewFile *.zsh	call setline(1, ['#!/bin/bin/env zsh', 'set -eux', 'set -o pipefail']) | :3

  au BufNewFile .editorconfig	call setline(1, [
        \ 'root = true',
        \ '',
        \ '[*]',
        \ 'insert_final_newline = true',
        \ 'trim_trailing_whitespace = true',
        \ '#indent_style = space',
        \ '#indent_size = 4',
        \ '#max_line_length = 100',
        \ '',
        \ '[*.md]',
        \ 'trim_trailing_whitespace = false',
        \ '',
        \ '[Makefile,makefile,GNUmakefile]',
        \ 'indent_style = tab',
        \ ])
  au BufNewFile .gitattributes	call setline(1, [
        \ '* text=auto',
        \ '.gitattributes export-ignore',
        \ '.gitignore export-ignore',
        \ ])
  au BufNewFile CMake{,User}Presets.json	call setline(1, [
        \ '{',
        \ '  "version": 3,',
        \ '  "configurePresets": [',
        \ '    {',
        \ '      "name": "",',
        \ '      "displayName": "",',
        \ '      "description": "",',
        \ '      "cacheVariables": {},',
        \ '      "environment": {}',
        \ '    }',
        \ '  ]',
        \ '}',
        \ ])

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
  au BufReadPost git-rebase-todo exe 'normal! 0gg'
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
    au TermOpen term://* set nonumber norelativenumber | startinsert
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
