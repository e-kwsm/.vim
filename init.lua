local vimrc = vim.env.HOME .. "/.vim/vimrc"
if vim.uv.fs_stat(vimrc) then
  vim.cmd.source(vimrc)
end

vim.g.loaded_node_provider = 0
vim.g.loaded_perl_provider = 0
vim.g.loaded_python3_provider = 0
vim.g.loaded_ruby_provider = 0

vim.o.inccommand = "split"
vim.o.spellfile = os.getenv("XDG_CONFIG_HOME") .. "/nvim/spell/en.utf-8.add"
if vim.o.diff then
  vim.o.autoread = false
  vim.opt.diffopt:remove("linematch:40")
end

vim.api.nvim_create_autocmd("TermEnter", {
  group = "myvimrc",
  command = "setl nospell notermguicolors",
})
vim.api.nvim_create_autocmd("TermLeave", {
  group = "myvimrc",
  command = "if $COLORTERM == 'truecolor' | set termguicolors | endif",
})
vim.api.nvim_create_autocmd("TermOpen", {
  group = "myvimrc",
  pattern = "term://*/bin/[a-z]*sh",
  command = "startinsert",
})

vim.api.nvim_create_autocmd("BufNewFile", {
  group = "myvimrc",
  pattern = "PKGBUILD",
  callback = function(ev)
    vim.api.nvim_buf_set_lines(ev.buf, 0, 0, false, {
      "pkgname=''",
      "pkgdesc=''",
      "pkgver=''",
      'pkgrel=1',
      "url=''",
      '# install=$pkgname.install',
      'arch=(x86_64)',
      'license=()',
      'checkdepends=()',
      'makedepends=(',
      '# python-build python-installer python-wheel',
      ')',
      'depends=()',
      'optdepends=()',
      'options=()',
      '# provides=("${pkgname%-bin}")',
      '# conflicts=("${pkgname%-bin}")',
      'source=()',
      'source_x86_64=()',
      'b2sums=()',
      'b2sums_x86_64=()',
      '',
      '# prepare() { :; }',
      '',
      '# pkgver() {',
      '#   cd "${pkgname}"',
      '#   git describe --long --abbrev=7 | sed "s/\\([^-]*-g\\)/r\\1/;s/-/./g"',
      '# }',
      '',
      'build() {',
      '  cd "${pkgname}-${pkgver}"',
      '',
      '  local cmake_options=(',
      '    -DCMAKE_BUILD_TYPE=None',
      '    -DCMAKE_INSTALL_PREFIX=/usr',
      '  )',
      '  # cmake -S . -B build "${cmake_options[@]}"',
      '  # cmake --build build',
      '',
      '  # python -m build --wheel --no-isolation',
      '}',
      '',
      'check() {',
      '  cd "${pkgname}-${pkgver}"',
      '}',
      '',
      'package() {',
      '  cd "${pkgname}-${pkgver}"',
      '  # DESTDIR="$pkgdir" cmake --install build',
      '  # python -m installer --destdir="$pkgdir" dist/*.whl',
      '}',
    })
  end,
})

vim.api.nvim_create_user_command("Exe", function(args)
  vim.cmd.update()
  local f = vim.api.nvim_buf_get_name(0)
  vim.system({ "chmod", "u+x", f }):wait()
  vim.cmd.terminal(vim.fn.shellescape(f) .. " " .. args.args)
end, { nargs = "*" })

require("config.lazy")
