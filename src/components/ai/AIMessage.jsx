import { useState } from 'react';

export default function AIMessage({ message, isUser }) {
  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error('Unable to copy AI response:', error);
    }
  };

  return (
    <div className={`mb-3 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`group max-w-[88%] rounded-xl px-3.5 py-2.5 text-sm leading-6 ${
        isUser ? 'bg-primary text-white' : 'border border-border-color bg-white text-dark'
      }`}>
        <p className="whitespace-pre-wrap">{message.content}</p>
        {!isUser && (
          <button
            type="button"
            onClick={copyMessage}
            className="mt-1.5 text-xs font-medium text-muted-text transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Copy AI response"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
    </div>
  );
}
