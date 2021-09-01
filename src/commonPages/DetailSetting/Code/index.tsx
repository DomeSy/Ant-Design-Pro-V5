import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight as SyntaxHighlighterStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';

const Code: React.FC<{lang?: string}> = ({lang = 'tsx', children}) => {
  return (
    <SyntaxHighlighter
      startingLineNumber = {0}
      language={lang}
      style={SyntaxHighlighterStyle}
      lineNumberStyle={{color: '#ddd', fontSize: 20}}
      wrapLines={true}
      >
        {children}
    </SyntaxHighlighter>
  )
}

export default Code;
