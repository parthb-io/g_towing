"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en-CA">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9fafb",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          <div
            style={{
              maxWidth: "500px",
              padding: "40px 20px",
              textAlign: "center",
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#fee2e2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Guardium Towing
            </h1>

            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "16px",
              }}
            >
              Something went wrong
            </h2>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "24px",
                lineHeight: "1.5",
              }}
            >
              We&apos;re experiencing technical difficulties. Please try again or
              contact us directly for assistance.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <button
                onClick={reset}
                style={{
                  backgroundColor: "#ce0000",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "250px",
                }}
              >
                Try Again
              </button>

              <a
                href="tel:+17808097860"
                style={{
                  backgroundColor: "white",
                  color: "#111827",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "16px",
                  fontWeight: "500",
                  textDecoration: "none",
                  width: "100%",
                  maxWidth: "250px",
                  display: "block",
                }}
              >
                Call +1 780-809-7860
              </a>
            </div>

            {error.digest && (
              <p
                style={{
                  marginTop: "24px",
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
