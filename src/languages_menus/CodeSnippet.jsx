import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


function CodeSnippet(props) {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <SyntaxHighlighter language={props.language} style={theme == "dark"? okaidia : coy} wrapLongLines={true}>
      {props.codeString}
    </SyntaxHighlighter>
  );
}

export default CodeSnippet;
