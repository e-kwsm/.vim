local vimrc = vim.env.HOME .. "/.vim/vimrc"
local f = io.open(vimrc, "r")
if f ~= nil then
  f:close()
  vim.cmd("source " .. vimrc)
end
