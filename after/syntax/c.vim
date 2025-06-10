" cmake
syn region	cPreCondit	start="^\s*\zs\(%:\|#\)\s*cmakedefine\%(01\)\?\>" skip="\\$" end="$" keepend contains=cComment,cCommentL,cCppString,cCharacter,cCppParen,cParenError,cNumbers,cCommentError,cSpaceError
