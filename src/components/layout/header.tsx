"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./mobileMenu";
import navigationData from "@/data/navigation.json";
import siteData from "@/data/siteConfig.json";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-text-white py-2 hidden md:block relative z-50">
        <Container>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span>{siteData.businessHours.weekdays}</span>
              <span className="text-text-light">|</span>
              <span>{siteData.businessHours.saturday}</span>
            </div>
            <a
              href={`tel:${siteData.contact.phone}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteData.contact.phone}
            </a>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header
        className={`
          sticky top-0 z-50 w-full
          transition-all duration-300
          ${isScrolled
            ? "bg-bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-bg-white py-4"
          }
        `}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
                  Mark Repair
                </span>
                <span className="text-xs text-text-muted -mt-1 hidden sm:block">
                  Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationData.mainNav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-1 px-4 py-2 text-text-secondary
                      hover:text-primary transition-colors font-medium
                    `}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.label && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="bg-bg-white rounded-xl shadow-xl border border-border p-2 min-w-[220px]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-text-secondary hover:text-primary hover:bg-bg-muted rounded-lg transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{siteData.contact.phone}</span>
              </a>
              <Button href={navigationData.ctaButton.href} variant="accent">
                {navigationData.ctaButton.label}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;