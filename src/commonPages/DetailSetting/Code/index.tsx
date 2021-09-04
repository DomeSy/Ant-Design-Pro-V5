import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight as SyntaxHighlighterStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import './index.less'

const Code: React.FC<{lang?: string, width?: number}> = ({lang = 'tsx', width, children}) => {
  return (
    <div className={'DetailSetting-Code'} style={{width}}>
      <SyntaxHighlighter
        startingLineNumber = {0}
        language={lang}
        style={SyntaxHighlighterStyle}
        lineNumberStyle={{color: '#ddd', fontSize: 20}}
        wrapLines={true}
      >
          {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code;
