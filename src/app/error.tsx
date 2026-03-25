"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react";

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
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Icon */}
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>

          {/* Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We encountered an unexpected error. Don&apos;t worry, our team has been
            notified. You can try again or return to the homepage.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button onClick={reset} size="lg">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </a>
            </Button>
          </div>

          {/* Emergency CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-3">
              Need immediate assistance? Our dispatch team is available 24/7.
            </p>
            <Button variant="default" asChild>
              <a href="tel:+17808097860">
                <Phone className="mr-2 h-5 w-5" />
                Call +1 780-809-7860
              </a>
            </Button>
          </div>

          {/* Error ID for support */}
          {error.digest && (
            <p className="mt-6 text-xs text-gray-400">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
