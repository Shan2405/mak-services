import React from "react";
import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ServicesLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="bg-bg-light py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton variant="rounded" width={200} height={36} className="mx-auto mb-6" />
            <Skeleton variant="text" width="80%" className="mx-auto mb-4" height={48} />
            <Skeleton variant="text" lines={2} className="max-w-xl mx-auto" />
          </div>
        </Container>
      </section>

      {/* Services Grid Skeleton */}
      <section className="py-section bg-bg-white">
        <Container>
          <div className="space-y-16">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 0 ? "lg:grid-flow-dense" : ""
                  }`}
              >
                <div className={i % 2 === 0 ? "lg:col-start-2" : ""}>
                  <Skeleton variant="rounded" className="aspect-4/3" />
                </div>
                <div className={i % 2 === 0 ? "lg:col-start-1" : ""}>
                  <Skeleton variant="rounded" width={64} height={64} className="mb-6" />
                  <Skeleton variant="text" width="60%" height={32} className="mb-4" />
                  <Skeleton variant="text" lines={3} className="mb-6" />
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Skeleton key={j} variant="text" />
                    ))}
                  </div>
                  <Skeleton variant="rounded" width={140} height={44} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}