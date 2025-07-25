syn match     poHeaderItem "X-Launchpad-Export-Date: " contained

syn region poStringID	start=+"+ skip=+\\\\\|\\"+ end=+"+ contained
                            \ contains=@Spell,poSpecial,poFormat,poCommentKDE,poPluralKDE,poKDEdesktopFile,poHtml,poAcceleratorId,poHtmlNot,poVariable
