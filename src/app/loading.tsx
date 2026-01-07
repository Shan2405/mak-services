import React from "react";
import Container from "@/components/ui/Container";
import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-bg-light">
      <Container size="sm">
        <div className="text-center">
          <Spinner size="lg" className="mx-auto mb-4" />
          <p className="text-text-muted font-medium">Loading...</p>
        </div>
      </Container>
    </div>
  );
}