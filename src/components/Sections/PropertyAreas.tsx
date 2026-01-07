import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import propertyAreasData from "@/data/propertyAreas.json";
import { Bath, UtensilsCrossed, Sofa, Bed, Warehouse, Car, Trees, Home, ArrowRight } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  bath: <Bath className="w-6 h-6" />,
  utensils: <UtensilsCrossed className="w-6 h-6" />,
  sofa: <Sofa className="w-6 h-6" />,
  bed: <Bed className="w-6 h-6" />,
  warehouse: <Warehouse className="w-6 h-6" />,
  car: <Car className="w-6 h-6" />,
  trees: <Trees className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
};

const PropertyAreas: React.FC = () => {
  const { badge, title, description, areas } = propertyAreasData;

  return (
    <section className="py-section bg-bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">{badge}</span>
          </div>
          <h2 className="text-display font-display font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary">
            {description}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Link
              key={area.id}
              href={`/services?area=${area.id}`}
              className="group relative rounded-xl overflow-hidden aspect-4/3 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                {/* Icon */}
                <div className="w-12 h-12 bg-text-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-text-white mb-3 group-hover:bg-primary transition-colors">
                  {iconMap[area.icon]}
                </div>

                {/* Text */}
                <h3 className="text-lg font-display font-bold text-text-white mb-1">
                  {area.name}
                </h3>
                <p className="text-text-light text-sm mb-3 line-clamp-2">
                  {area.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {area.services.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="text-xs bg-text-white/20 text-text-white px-2 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {area.services.length > 3 && (
                    <span className="text-xs bg-text-white/20 text-text-white px-2 py-1 rounded-full">
                      +{area.services.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-text-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PropertyAreas;