syn region texZone	start='\\begin{lstlisting}'	end='\\end{lstlisting}'	contains=@Spell
syn region texZone	start='\\begin{minted}{[^}]\+}'	end='\\end{minted}'
syn region texZone	start='\\begin{refsection}'	end='\\end{refsection}'	contains=@Spell
syn region texZone	start='\\mintinline{[^}]\+}{'	end='}'
