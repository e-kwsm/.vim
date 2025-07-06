augroup myvimrc
  au!
augroup END

if !has('nvim')
  filetype plugin indent on
  syntax enable
endif

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
" }}}1

colorscheme habamax

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
  au BufNewFile *.zsh	call setline(1, ['#!/usr/bin/env zsh', 'set -eux', 'set -o pipefail']) | :3

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
augroup END " }}}1

" command {{{1
if !exists(':ShowSyntaxGroup')
  command ShowSyntaxGroup echo synIDattr(synID(line('.'), col('.'), 1), 'name')
endif

if !exists(':Remove')
  command Remove execute('!rm -f ' .. shellescape(expand('%')))
endif
" }}}1

if filereadable(expand('~/.vimrc_local'))
  source ~/.vimrc_local
endif

" vim:set et fdm=marker
