"use client";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-linear-to-b from-white to-gray-50 py-24">
      {/* Animated glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 opacity-20 blur-3xl animate-pulse" />

      <div className="container relative mx-auto px-6 text-center">
        <h2 className="group text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl cursor-default">
          <span className="relative inline-block transition-all duration-700">
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Invoisend
            </span>

            {/* Subtle underline animation */}
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-blue-600 to-blue-300 transition-all duration-700 group-hover:w-full" />
          </span>
        </h2>

        <p className="mt-6 text-sm text-muted-foreground animate-fade-in">
          © 2025
        </p>
      </div>
    </footer>
  );
}
