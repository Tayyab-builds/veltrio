import { useState, useEffect, useRef } from 'react';
import AIChatHeader from './AIChatHeader';
import AISuggestion from './AISuggestion';
import AIMessage from './AIMessage';
import AITypingIndicator from './AITypingIndicator';
import AIInput from './AIInput';
import { getAIResponse } from '../../services/aiService';

const initialSuggestions = [
  'Summarize my sales activity',
  'Which deals need attention?',
  'Show me my pipeline insights',
  'What should I follow up on?',
  'What are my top customers?',
];

export default function AIChatPanel({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    setShowSuggestions(false);
    setMessages(prev => [...prev, { id: Date.now(), content: text, isUser: true }]);
    setIsTyping(true);
    try {
      const response = await getAIResponse(text);
      setMessages(prev => [...prev, { id: Date.now() + 1, content: response, isUser: false }]);
    } catch (error) {
      // Log error for debugging – this uses the variable and avoids lint warning
      console.error('AI response error:', error);
      setMessages(prev => [...prev, { id: Date.now() + 1, content: 'Something went wrong. Please try again.', isUser: false }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setShowSuggestions(true);
  };

  return (
    <div
      className="ai-panel-animate fixed bottom-0 right-0 z-50 flex max-h-[min(82vh,44rem)] w-full flex-col overflow-hidden rounded-t-2xl border border-border-color bg-white shadow-2xl sm:bottom-6 sm:right-6 sm:w-[calc(100vw-2rem)] sm:max-w-[420px] sm:rounded-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Veltrio AI assistant"
    >
      <AIChatHeader onClear={handleClear} onClose={onClose} />
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
        {showSuggestions && messages.length === 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-dark mb-2">How can I help?</h3>
            <p className="text-xs text-muted-text mb-3">
              Ask Veltrio AI about your customers, deals, pipeline, tasks, or sales performance.
            </p>
            <div className="flex flex-wrap gap-2">
              {initialSuggestions.map(sug => (
                <AISuggestion key={sug} text={sug} onClick={() => sendMessage(sug)} />
              ))}
            </div>
          </div>
        )}
        {messages.map(msg => (
          <AIMessage key={msg.id} message={msg} isUser={msg.isUser} />
        ))}
        {isTyping && <AITypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <AIInput onSend={sendMessage} disabled={isTyping} />
    </div>
  );
}
