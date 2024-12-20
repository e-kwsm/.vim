local vimrc = vim.env.HOME .. "/.vim/vimrc"
local f = io.open(vimrc, "r")
if f ~= nil then
  f:close()
  vim.cmd("source " .. vimrc)
end

vim.o.inccommand = "split"

vim.api.nvim_create_autocmd("TermEnter", {
  group = "myvimrc",
  command = "set notermguicolors"
})
vim.api.nvim_create_autocmd("TermLeave", {
  group = "myvimrc",
  command = "if $COLORTERM == 'truecolor' | set termguicolors | endif"
})
vim.api.nvim_create_autocmd("TermOpen", {
  group = "myvimrc",
  pattern = "term://*",
  command = "startinsert",
})

vim.api.nvim_create_user_command("Exe", "up | te chmod u+x % && %:p <args>", { nargs = "*" })
