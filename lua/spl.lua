local M = {}

function M.spl(file, nodup)
  local f = io.open(file, "r")
  if not f then
    io.stderr:write("ERROR: cannot read " .. file)
    return nil
  end
  f:close()

  local set = {}

  -- local pretty = require 'pl.pretty'
  local n = 0
  for line in io.lines(file) do
    n = n + 1
    local tmp = vim.spell.check(line)
    if next(tmp) ~= nil then
      -- print(file .. ":" .. n)
      -- pretty.dump(tmp)
      for _, v in pairs(tmp) do
        if set[v[1]] == nil then
          if nodup then
            set[v[1]] = 0
          end
          print(file .. ":" .. n .. ":" .. v[3] .. ": " .. v[1] .. " " .. v[2])
        end
      end
    end
  end
end

return M
