import { Copy } from "lucide-react";
import { Highlight } from "prism-react-renderer";

import {
  BlockContainer,
  BlockContent,
  BlockHeader,
  InlineBlockContainer,
} from "./styles";
import { theme } from "./theme";

type CodeProps = {
  children: string;
  className?: string;
  showHeader?: boolean;
};

function CodeBlock({ children, className, showHeader = true }: CodeProps) {
  const language = className?.replace(/language-/, "");

  if (!language) {
    return <InlineBlockContainer>{children.trim()}</InlineBlockContainer>;
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(children.trim());
  }

  return (
    <BlockContainer>
      {showHeader && (
        <BlockHeader>
          <p>{language}</p>
          <button onClick={handleCopyToClipboard}>
            <Copy />
          </button>
        </BlockHeader>
      )}
      <BlockContent>
        <Highlight theme={theme} code={children.trim()} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className}`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({ token })}
                      style={{
                        lineHeight: "140%",
                        ...getTokenProps({ token }).style,
                      }}
                    />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </BlockContent>
    </BlockContainer>
  );
}

export { CodeBlock };
