"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import navigationData from "@/data/navigation.json";
import siteData from "@/data/siteConfig.json";
import { X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSubmenu = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-secondary/60 backdrop-blur-sm z-100
          transition-opacity duration-300 
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-sm bg-bg-white z-100
          shadow-2xl transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b  border-border">
          <Link href="/" onClick={onClose} className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/icon-blue.png"
                alt="Mark Repair Services"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-left -ml-2">
              <span className="font-display font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
                Mark Repair
              </span>
              <span className="text-xs text-text-muted -mt-1">
                Services
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-primary transition-colors cursor-pointer rounded-lg  hover:bg-bg-muted"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 " />
          </button>
        </div>


        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-4 space-y-1">
            {navigationData.mainNav.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex items-center justify-between cursor-pointer w-full px-4 py-3 text-text-primary hover:text-primary hover:bg-bg-muted rounded-lg transition-colors font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5  transition-transform duration-200 ${expandedItem === item.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${expandedItem === item.label
                        ? "max-h-100 opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={onClose}
                            className="block px-4 py-2.5 text-text-secondary hover:text-primary hover:bg-bg-muted rounded-lg transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 text-text-primary hover:text-primary hover:bg-bg-muted rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="px-4 mt-6 pt-6 border-t border-border space-y-4">
            <a
              href={`tel:${siteData.contact.phone}`}
              className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-primary hover:bg-bg-muted rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              {siteData.contact.phone}
            </a>
            <a
              href={`mailto:${siteData.contact.email}`}
              className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-primary hover:bg-bg-muted rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              {siteData.contact.email}
            </a>
            <div className="flex items-start gap-3 px-4 py-3 text-text-secondary">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              {siteData.contact.address}
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-4 mt-6">
            <Button
              href={navigationData.ctaButton.href}
              variant="accent"
              className="w-full"
              onClick={onClose}
            >
              {navigationData.ctaButton.label}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;