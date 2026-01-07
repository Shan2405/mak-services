import React from "react";
import Container from "@/components/ui/Container";
import { Skeleton, SkeletonAvatar } from "@/components/ui/Skeleton";

export default function AboutLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="bg-bg-light py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Skeleton variant="rounded" width={120} height={32} className="mb-6" />
              <Skeleton variant="text" height={48} className="mb-4" />
              <Skeleton variant="text" lines={3} className="mb-10" />
              <div className="grid grid-cols-4 gap-6 pt-10 border-t border-border">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i}>
                    <Skeleton variant="text" width="60%" height={32} className="mb-2" />
                    <Skeleton variant="text" width="80%" />
                  </div>
                ))}
              </div>
            </div>
            <Skeleton variant="rounded" className="aspect-4/3" />
          </div>
        </Container>
      </section>

      {/* Values Skeleton */}
      <section className="py-section bg-bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Skeleton variant="text" width="40%" height={36} className="mx-auto mb-4" />
            <Skeleton variant="text" lines={2} className="max-w-xl mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 bg-bg-light rounded-xl text-center">
                <Skeleton variant="circular" width={64} height={64} className="mx-auto mb-5" />
                <Skeleton variant="text" width="70%" className="mx-auto mb-3" />
                <Skeleton variant="text" lines={2} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Skeleton */}
      <section className="py-section bg-bg-muted">
        <Container>
          <div className="text-center mb-12">
            <Skeleton variant="text" width={200} height={32} className="mx-auto mb-4" />
            <Skeleton variant="text" width={300} className="mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <SkeletonAvatar size={160} className="mx-auto mb-5" />
                <Skeleton variant="text" width="60%" className="mx-auto mb-2" />
                <Skeleton variant="text" width="40%" className="mx-auto mb-3" />
                <Skeleton variant="text" lines={2} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}