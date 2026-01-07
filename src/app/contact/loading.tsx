import React from "react";
import Container from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ContactLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="bg-bg-light py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton variant="rounded" width={140} height={32} className="mx-auto mb-6" />
            <Skeleton variant="text" width="50%" height={48} className="mx-auto mb-4" />
            <Skeleton variant="text" lines={2} className="max-w-xl mx-auto" />
          </div>
        </Container>
      </section>

      {/* Contact Section Skeleton */}
      <section className="py-section bg-bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Skeleton variant="text" width="60%" height={32} className="mb-4" />
              <Skeleton variant="text" lines={2} className="mb-8" />
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton variant="rounded" width={48} height={48} />
                    <div className="flex-1">
                      <Skeleton variant="text" width="30%" className="mb-2" />
                      <Skeleton variant="text" width="70%" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-bg-light rounded-2xl p-6 lg:p-10">
                <Skeleton variant="text" width="50%" height={28} className="mb-2" />
                <Skeleton variant="text" width="80%" className="mb-8" />
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Skeleton variant="rounded" height={52} />
                    <Skeleton variant="rounded" height={52} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Skeleton variant="rounded" height={52} />
                    <Skeleton variant="rounded" height={52} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Skeleton variant="rounded" height={52} />
                    <Skeleton variant="rounded" height={52} />
                  </div>
                  <Skeleton variant="rounded" height={120} />
                  <Skeleton variant="rounded" height={52} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}