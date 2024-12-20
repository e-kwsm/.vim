local vimrc = vim.env.HOME .. "/.vim/vimrc"
if vim.uv.fs_stat(vimrc) then
  vim.cmd.source(vimrc)
end

vim.o.inccommand = "split"
vim.o.spellfile = os.getenv("XDG_CONFIG_HOME") .. "/nvim/spell/en.utf-8.add"

vim.api.nvim_create_autocmd("TermEnter", {
  group = "myvimrc",
  command = "set notermguicolors",
})
vim.api.nvim_create_autocmd("TermLeave", {
  group = "myvimrc",
  command = "if $COLORTERM == 'truecolor' | set termguicolors | endif",
})
vim.api.nvim_create_autocmd("TermOpen", {
  group = "myvimrc",
  pattern = "term://*",
  command = "startinsert",
})

vim.api.nvim_create_user_command("Exe", function(args)
  vim.cmd.update()
  local f = vim.api.nvim_buf_get_name(0)
  vim.system({ "chmod", "u+x", f }):wait()
  vim.cmd.terminal(vim.fn.shellescape(f) .. " " .. args.args)
end, { nargs = "*" })
