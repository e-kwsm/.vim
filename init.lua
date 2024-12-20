local vimrc = vim.env.HOME .. "/.vim/vimrc"
if vim.uv.fs_stat(vimrc) then
  vim.cmd.source(vimrc)
end

vim.o.inccommand = "split"
vim.o.spellfile = os.getenv("XDG_CONFIG_HOME") .. "/nvim/spell/en.utf-8.add"
