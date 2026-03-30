export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-75">
        <p className="text-primary font-mono mb-2">Loading...</p>
        <div className="w-full h-3 bg-accent rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-loading-bar"></div>
        </div>
      </div>

      <style>{`
        .animate-loading-bar {
          width: 0%;
          animation: loading 2s ease-in-out forwards;
        }

        @keyframes loading {
          0% { width: 0%; }
          30% { width: 40%; }
          60% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
