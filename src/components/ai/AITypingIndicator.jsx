export default function AITypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="bg-white border border-border-color rounded-lg px-4 py-3 text-sm text-dark">
        <div className="flex space-x-1">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </div>
  );
}