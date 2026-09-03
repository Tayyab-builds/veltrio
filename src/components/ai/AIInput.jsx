import { useState, useRef, useEffect } from 'react';

export default function AIInput({ onSend, disabled }) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="border-t border-border-color p-3">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your CRM..."
          rows={1}
          className="max-h-28 flex-1 resize-none bg-slate-50 border border-border-color rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Type your message"
        />
        <button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className={`p-2 rounded-lg bg-primary text-white flex items-center justify-center ${
            disabled || !message.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'
          } transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
          aria-label="Send message"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
