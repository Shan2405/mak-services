// Service Types
export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage: string;
  image: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  relatedServices: string[];
  ctaText: string;
  badge?: string;
}


export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Location Types
export interface Location {
  id: string;
  state: string;
  cities: City[];
  description: string;
  heroImage: string;
  serviceAreas: string[];
}

export interface City {
  name: string;
  slug: string;
  available: boolean;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  avatar: string;
  date: string;
}

// Property Area Types
export interface PropertyArea {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  commonIssues: string[];
  services: string[];
}

// Content Types
export interface HeroContent {
  headline: string;
  subheadline: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: Stat[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutContent {
  headline: string;
  description: string;
  mission: string;
  vision: string;
  values: Value[];
  teamImage: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: BusinessHours;
  socialLinks: SocialLink[];
}

export interface BusinessHours {
  weekdays: string;
  saturday: string;
  sunday: string;
  emergency: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Form Types
export interface ServiceRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyArea: string;
  workType: string;
  location: string;
  urgency: "low" | "medium" | "high" | "emergency";
  description: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Image Types
export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
}