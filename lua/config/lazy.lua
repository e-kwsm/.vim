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
