import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  showHome = true,
  className = "",
}) => {
  const allItems = showHome
    ? [{ label: "Home", href: "/" }, ...items]
    : items;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`bg-bg-light py-4 border-b border-border ${className}`}
    >
      <Container>
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isHome = index === 0 && showHome;

            return (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-text-light shrink-0" />
                )}

                {isLast ? (
                  <span className="text-text-primary font-medium truncate max-w-[200px]">
                    {item.label}
                  </span>
                ) : item.href ? (
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {isHome && <Home className="w-4 h-4" />}
                    <span className={isHome ? "sr-only sm:not-sr-only" : ""}>
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <span className="text-text-muted">{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
};

export default Breadcrumb;