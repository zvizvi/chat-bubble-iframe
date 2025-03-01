
import { Highlight, themes } from "prism-react-renderer";

interface ConfigDisplayProps {
  frameUrl: string;
  frameTitle: string;
  buttonColor: string;
  buttonPosition: string;
  frameWidth: string;
  frameHeight: string;
}

const ConfigDisplay = ({
  frameUrl,
  frameTitle,
  buttonColor,
  buttonPosition,
  frameWidth,
  frameHeight
}: ConfigDisplayProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm">
      <h4 className="font-semibold mb-2">Current Configuration:</h4>
      <Highlight
        theme={themes.palenight}
        code={`window.chatBubbleConfig = {
  frameUrl: '${frameUrl}',
  frameTitle: '${frameTitle}',
  buttonColor: '${buttonColor}',
  buttonPosition: '${buttonPosition}',
  buttonSize: '60px',
  frameWidth: '${frameWidth}px',
  frameHeight: '${frameHeight}px',
};`}
        language="javascript"
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
    </div>
  );
};

export default ConfigDisplay;
