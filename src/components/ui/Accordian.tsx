"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = "",
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-bg-white rounded-xl border border-border overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="flex items-center justify-between w-full p-5 text-left font-semibold text-text-primary hover:text-primary transition-colors"
            aria-expanded={isOpen(item.id)}
            aria-controls={`accordion-content-${item.id}`}
          >
            <span>{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                isOpen(item.id) ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id={`accordion-content-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ${
              isOpen(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 pb-5 text-text-secondary leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;