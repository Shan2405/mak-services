"use client";

import React, { useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bg-light py-16">
      <Container size="sm">
        <div className="text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-error" />
          </div>

          {/* Content */}
          <h1 className="text-heading font-display font-bold text-text-primary mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error has occurred.
            Please try again or contact us if the problem persists.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={reset}
              icon={<RefreshCcw className="w-5 h-5" />}
              iconPosition="left"
            >
              Try Again
            </Button>
            <Button
              href="/"
              variant="outline"
              size="lg"
              icon={<Home className="w-5 h-5" />}
              iconPosition="left"
            >
              Back to Home
            </Button>
          </div>

          {/* Error Details (Development) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-8 p-4 bg-bg-muted rounded-lg text-left">
              <p className="text-sm font-mono text-error break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-text-muted mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}