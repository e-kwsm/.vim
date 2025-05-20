if exists('loaded_mtree')
  finish
endif
let loaded_mtree = v:true

fun! mtree#read()
  let cpo_save = &cpo
  set cpo-=a cpo-=A
  let ma_save = &ma
  setlocal ma
  let write_save = &write
  set write

  let tmp = tempname()
  let cmd = 'zcat -n ' . fnameescape(expand('<afile>')) . ' > ' . tmp
  call system(cmd)

  let b:uncompressOk = filereadable(tmp)
  if !b:uncompressOk
    echoerr 'Error: Could not read uncompressed file'
  else
    %d
    setlocal nobin
    execute 'silent r ' . tmp
    silent 1g/^$/d
    1
  endif
  call delete(tmp)

  let &cpo = cpo_save
  let &l:ma = ma_save
  let &write = write_save
endfun

fun! mtree#write()
  if !get(b:, 'uncompressOk')
    echomsg 'Not compressing file because uncompress failed; reset b:uncompressOk to compress anyway'
    return
  endif
  let tmp = tempname()
  let afile = expand('<afile>')
  let cmd = 'gzip -n -c ' . fnameescape(afile) . ' > ' . tmp
  call system(cmd)
  call rename(tmp, afile)
endfun

augroup mtree
  au!
  autocmd BufReadPre,FileReadPre     .MTREE setlocal bin
  autocmd BufReadPost,FileReadPost   .MTREE call mtree#read()
  autocmd BufWritePost,FileWritePost .MTREE call mtree#write()
  autocmd FileAppendPre              .MTREE call mtree#write()
  autocmd FileAppendPost             .MTREE call mtree#write()
augroup END
