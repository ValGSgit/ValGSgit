"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 border border-red-500/30 rounded-full mb-6"
        >
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </motion.div>

        <h1 className="text-3xl font-bold text-white mb-3">
          Oops! Something went wrong
        </h1>
        
        <p className="text-zinc-400 mb-8">
          We encountered an unexpected error. Don&apos;t worry, we&apos;ve logged the issue.
        </p>

        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mb-6 p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-left">
            <p className="text-sm text-red-400 font-mono break-words">
              {error.message}
            </p>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          Try again
        </motion.button>

        <div className="mt-6">
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            Return to homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
