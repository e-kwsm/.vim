-- Bootstrap lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
  local lazyrepo = "https://github.com/folke/lazy.nvim.git"
  local out = vim.fn.system({ "git", "clone", "--filter=blob:none", "--branch=stable", lazyrepo, lazypath })
  if vim.v.shell_error ~= 0 then
    vim.api.nvim_echo({
      { "Failed to clone lazy.nvim:\n", "ErrorMsg" },
      { out, "WarningMsg" },
      { "\nPress any key to exit..." },
    }, true, {})
    vim.fn.getchar()
    os.exit(1)
  end
end
vim.opt.rtp:prepend(lazypath)

-- Make sure to setup `mapleader` and `maplocalleader` before
-- loading lazy.nvim so that mappings are correct.
-- This is also a good place to setup other settings (vim.opt)
vim.g.mapleader = " "
vim.g.maplocalleader = "\\"

-- Setup lazy.nvim
require("lazy").setup({
  -- spec = {
  --   -- import your plugins
  --   { import = "plugins" },
  -- },
  -- -- Configure any other settings here. See the documentation for more details.
  -- -- colorscheme that will be used when installing plugins.
  -- install = { colorscheme = { "habamax" } },
  -- -- automatically check for plugin updates
  -- checker = { enabled = true },

  "https://github.com/bronson/vim-trailing-whitespace",
  "https://github.com/hrsh7th/vim-vsnip",
  "https://github.com/itchyny/lightline.vim",
  -- "https://github.com/ncm2/float-preview.nvim",
  "https://github.com/neovim/nvim-lspconfig",
  "https://github.com/Shougo/ddc-matcher_head",
  "https://github.com/Shougo/ddc-sorter_rank",
  "https://github.com/Shougo/ddc-source-around",
  "https://github.com/Shougo/ddc-source-lsp",
  "https://github.com/Shougo/ddc-ui-native",
  "https://github.com/Shougo/ddc.vim",
  -- "https://github.com/Shougo/neco-syntax",
  -- "https://github.com/Shougo/neoinclude.vim",
  "https://github.com/tpope/vim-endwise",
  "https://github.com/tpope/vim-surround",
  "https://github.com/uga-rosa/ddc-source-vsnip",
  -- "https://github.com/ujihisa/neco-look",
  "https://github.com/vim-denops/denops.vim",
})

-- hrsh7th/vim-vsnip {{{1
vim.cmd([[
  inoremap <expr> <C-j>   vsnip#expandable()  ? '<Plug>(vsnip-expand)'         : '<C-j>'
  snoremap <expr> <C-j>   vsnip#expandable()  ? '<Plug>(vsnip-expand)'         : '<C-j>'

  " Expand or jump
  inoremap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'
  snoremap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'

  " Jump forward or backward
  inoremap <expr> <Tab>   vsnip#jumpable(1)   ? '<Plug>(vsnip-jump-next)'      : '<Tab>'
  snoremap <expr> <Tab>   vsnip#jumpable(1)   ? '<Plug>(vsnip-jump-next)'      : '<Tab>'
  inoremap <expr> <S-Tab> vsnip#jumpable(-1)  ? '<Plug>(vsnip-jump-prev)'      : '<S-Tab>'
  snoremap <expr> <S-Tab> vsnip#jumpable(-1)  ? '<Plug>(vsnip-jump-prev)'      : '<S-Tab>'

  " Select or cut text to use as $TM_SELECTED_TEXT in the next snippet.
  " See https://github.com/hrsh7th/vim-vsnip/pull/50
  "nmap        s   <Plug>(vsnip-select-text)
  "xmap        s   <Plug>(vsnip-select-text)
  "nmap        S   <Plug>(vsnip-cut-text)
  "xmap        S   <Plug>(vsnip-cut-text)

  let g:vsnip_snippet_dir = expand('~/.vim/vsnip')
]])

-- ncm2/float-preview.nvim {{{1
vim.cmd([[
  "let g:float_preview#docked = 1
]])

-- neovim/nvim-lspconfig {{{1
vim.lsp.enable("clangd")
vim.lsp.enable("denols")
vim.lsp.enable("pylsp")

-- Shougo/ddc.vim {{{1
local capabilities = require("ddc_source_lsp").make_client_capabilities()
vim.lsp.config("denols", {
  capabilities = capabilities,
})

vim.cmd([[
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
        \ 'c.clang',
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
]])
-- }}}1

-- vi: fdm=marker
