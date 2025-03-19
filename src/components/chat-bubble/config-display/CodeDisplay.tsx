
import { Highlight, themes } from "prism-react-renderer";

interface CodeDisplayProps {
  code: string;
  language?: string;
}

const CodeDisplay = ({ code, language = "javascript" }: CodeDisplayProps) => {
  return (
    <Highlight
      theme={themes.palenight}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto font-mono text-sm leading-relaxed" style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeDisplay;
