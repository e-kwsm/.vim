if exists('loaded_svgz') || exists('#BufReadPre#*.svgz')
  finish
endif
let loaded_svgz = v:true
augroup svgz
  au!
  autocmd BufReadPre,FileReadPre     *.svgz setlocal bin
  autocmd BufReadPost,FileReadPost   *.svgz call gzip#read('gzip -dn -S.svgz')
  autocmd BufReadPost,FileReadPost   *.svgz setf svg
  autocmd BufWritePost,FileWritePost *.svgz call gzip#write('gzip -S.svgz')
  autocmd FileAppendPre              *.svgz call gzip#appre('gzip -dn -S.svgz')
  autocmd FileAppendPost             *.svgz call gzip#write('gzip -S.svgz')
augroup END
