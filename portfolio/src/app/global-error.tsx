"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-3">
              Critical Error
            </h1>
            
            <p className="text-zinc-400 mb-8">
              The application encountered a critical error. Please try refreshing the page.
            </p>

            {process.env.NODE_ENV === "development" && error.message && (
              <div className="mb-6 p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
                <p className="text-sm text-red-400 font-mono break-words">
                  {error.message}
                </p>
              </div>
            )}

            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Try again
            </button>

            <div className="mt-6">
              <Link
                href="/"
                className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Return to homepage
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
