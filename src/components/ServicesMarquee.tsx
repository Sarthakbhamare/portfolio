const services = [
  {
    title: "Payment System Architecture",
    description: "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience.",
  },
  {
    title: "Monitoring & Analytics",
    description: "Provides real-time insights into user behavior, system performance, and key business metrics.",
  },
  {
    title: "Design System & UI",
    description: "Unified design assets, including logos and themes, ensuring consistent branding across the platform.",
  },
  {
    title: "API Gateway & Documentation",
    description: "Guides developers to integrate with the platform efficiently, offering examples and best practices.",
  },
  {
    title: "User Onboarding Flow",
    description: "Step-by-step guides and interactive tutorials to help users get started and maximize benefits.",
  },
];

export const ServicesMarquee = () => {
  const duplicatedServices = [...services, ...services];

  return (
    <section className="py-12 overflow-hidden">
      <div className="flex gap-4 animate-marquee" style={{ animationDuration: "35s" }}>
        {duplicatedServices.map((service, index) => (
          <div
            key={`${service.title}-${index}`}
            className="flex-shrink-0 w-80 glass-card p-6"
          >
            <h4 className="font-semibold mb-2">{service.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
