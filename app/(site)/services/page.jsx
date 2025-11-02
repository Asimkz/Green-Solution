import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";
import servicesData from "../../data/ServicesData.json";
import { FaLightbulb, FaUsers, FaCogs, FaRocket } from "react-icons/fa";

export const metadata = {
  title: "Software Development Company | Green Solution",
  description:
    "GreenSolution is a process-driven web development company specializing in custom solutions for SMEs and international clients. Build scalable digital products with experts.",
  keywords: [
    "GreenSolution",
    "web development company Pakistan",
    "custom web development",
    "SME digital solutions",
  ],
  alternates: {
    canonical: "",
  },
};

const Services = async () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          loading="lazy"
          className="absolute top-0 left-0 object-cover inset-0 size-full"
              width={600}
             height={400}
          src="/services-back2.jpg"
          alt="Services"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollAnimation className="text-center">
            <div className="lg:mb-16 mb-10 flex flex-col items-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFFFFF] lg:mb-6 mb-3 leading-tight text-center flex items-center gap-3">
                Our
                <span className="block text-[#10b981] relative mt-2">
                  Services
                </span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed font-light text-center">
                  <span className="text-[#10b981] font-semibold">
                    GreenSolution
                  </span>{" "}
                  delivers professional, process-driven web development solutions 
                  designed for conversion and long-term scalability, serving both 
                  international clients and local Pakistani SMEs.
                </p>
              </div>
            </div>

            {/* Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mt-20 mt-4">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#10b981]/80 rounded-2xl transform transition-all duration-300 opacity-10"></div>
                <div className="relative p-8 rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 backdrop-blur-sm transition-all duration-300">
                  <div className="w-16 h-16 bg-[#10b981] rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#FFFFFF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                    Custom Development
                  </h3>
                  <p className="text-[#FFFFFF]/80 leading-relaxed">
                    Scalable web applications using modern stacks (MERN/MEVN, WordPress) 
                    with focus on UI/UX best practices and conversion optimization
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#10b981]/80 rounded-2xl transform transition-all duration-300 opacity-10"></div>
                <div className="relative p-8 rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 backdrop-blur-sm transition-all duration-300">
                  <div className="w-16 h-16 bg-[#10b981] rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#FFFFFF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                    Niche Solutions
                  </h3>
                  <p className="text-[#FFFFFF]/80 leading-relaxed">
                    Industry-specific solutions for Medical Clinics & Educational 
                    Institutes with booking systems, payment gateways, and custom portals
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#10b981]/80 rounded-2xl transform  transition-all duration-300 opacity-10"></div>
                <div className="relative p-8 h-full rounded-2xl border border-[#FFFFFF]/20 bg-[#FFFFFF]/10 backdrop-blur-sm transition-all duration-300">
                  <div className="w-16 h-16 bg-[#10b981] rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-[#FFFFFF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                    Recurring Services
                  </h3>
                  <p className="text-[#FFFFFF]/80 leading-relaxed">
                    Managed hosting, security monitoring, performance optimization, 
                    and SEO retainer packages for sustainable growth
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Digital Partner Section */}
      <ScrollAnimation>
        <section className="relative w-full py-20 lg:py-32 bg-[#FFFFFF] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:mb-20 mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight lg:mb-8 mb-3">
                Your Strategic Partner For
                <span className="block text-[#10b981] relative lg:mt-2">
                  Digital Transformation
                  <svg
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-4"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M10 6C50 2, 150 2, 190 6C150 10, 50 10, 10 6Z"
                      fill="#10b981"
                      opacity="0.3"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="text-center space-y-8 max-w-5xl mx-auto">
              <p className="text-xl lg:text-2xl text-[#000000] leading-relaxed font-medium">
                Bridging the{" "}
                <span className="text-[#10b981] font-bold">
                  local digitization gap
                </span>{" "}
                while maintaining global competitiveness through process-driven 
                development and transparent project delivery.
              </p>

              <p className="text-lg text-[#000000]/70 leading-relaxed max-w-4xl mx-auto">
                We specialize in helping Pakistani SMEs establish professional, 
                mobile-optimized web presences that generate leads and reduce 
                reliance on outdated systems or high-commission third-party platforms.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Trust & Success Section */}
      <ScrollAnimation>
        <section className="relative w-full py-4 lg:py-32 bg-gradient-to-br from-[#FFFFFF] to-gray-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-32 right-1/4 w-48 h-48 bg-[#10b981] rounded-full opacity-5 blur-2xl animate-pulse"></div>
            <div className="absolute top-1/4 left-16 w-20 h-20 border-2 border-[#10b981] opacity-15 rotate-12"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] leading-tight">
                  Process-Driven Approach For
                  <span className="block text-[#10b981] lg:mt-4 mt-2 relative">
                    Reliable Delivery
                    <svg
                      className="absolute -bottom-4 left-0 w-80 h-4"
                      viewBox="0 0 200 12"
                      fill="none"
                    >
                      <path
                        d="M0 6C40 2, 160 2, 200 6C160 10, 40 10, 0 6Z"
                        fill="#10b981"
                        opacity="0.3"
                      />
                    </svg>
                  </span>
                </h2>

                <div className="space-y-6">
                  <p className="text-xl lg:text-2xl text-[#000000] leading-relaxed">
                    <span className="text-[#10b981] font-bold">GreenSolution</span>{" "}
                    operates on a robust hybrid model, securing foundational revenue 
                    through international markets while capturing high-margin local SME sector.
                  </p>

                  <p className="text-lg text-[#000000]/70 leading-relaxed">
                    Our transparent, milestone-based development workflow ensures 
                    projects are delivered on time and budget, distinguishing us 
                    from low-cost, low-structure alternatives in both local and 
                    international markets.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                    <Image
                      src="/success-image2.png"
                      alt="Process-Driven Development"
                      width={600}
                      height={600}
                      loading="lazy"
                      className="w-full max-w-[600px] mx-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Technology Expertise Section */}
      <ScrollAnimation>
        <section className="relative w-full py-20 lg:py-32 bg-[#000000] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6">
                Modern Technology{" "}
                <span className="text-[#10b981]">Stacks</span>
              </h2>
              <p className="text-xl text-[#FFFFFF]/80 max-w-4xl mx-auto leading-relaxed">
                Leveraging cutting-edge frameworks and platforms to build scalable, 
                high-performance solutions for today&apos;s digital landscape
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Node.js", icon: "🟢" },
                { name: "Next.js", icon: "▲" },
                { name: "WordPress", icon: "🔗" },
                { name: "Shopify", icon: "🛒" },
                { name: "MongoDB", icon: "🍃" },
                { name: "TypeScript", icon: "📘" },
                { name: "WooCommerce", icon: "🛍️" },
                { name: "MySQL", icon: "🐬" },
                { name: "PHP", icon: "🐘" },
                { name: "AWS", icon: "☁️" },
                { name: "Docker", icon: "🐳" },
              ].map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#10b981]/60 rounded-xl transform group-hover:scale-110 transition-all duration-300 opacity-10 group-hover:opacity-20"></div>
                  <div className="relative bg-[#FFFFFF]/5 backdrop-blur-sm border border-[#FFFFFF]/10 rounded-xl p-6 text-center group-hover:bg-[#FFFFFF]/10 transition-all duration-300">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-[#FFFFFF] font-semibold text-sm">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Growth Cards Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-[#FFFFFF] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-1/3 w-72 h-72 bg-[#10b981] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-[#10b981] opacity-5 blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-6">
                Why Choose <span className="text-[#10b981]">GreenSolution</span>
              </h2>
              <p className="text-lg text-[#000000]/70 max-w-3xl mx-auto">
                Discover our unique value proposition for SMEs and international clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {servicesData.growthCards.map((card, index) => {
                const iconMap = {
                  FaLightbulb: FaLightbulb,
                  FaUsers: FaUsers,
                  FaCogs: FaCogs,
                  FaRocket: FaRocket,
                };

                const IconComponent = iconMap[card.icon];

                return (
                  <div key={card.id} className="group relative">
                    <div className="relative bg-[#FFFFFF] rounded-2xl p-6 shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="absolute -top-6 right-6 z-10">
                        <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center shadow-lg">
                          {IconComponent && (
                            <IconComponent className="w-8 h-8 text-[#FFFFFF]" />
                          )}
                        </div>
                      </div>

                      <div className="pt-6">
                        <h3 className="text-xl font-bold text-[#000000] mb-4 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm text-[#000000]/70 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="relative bg-gradient-to-br from-[#FFFFFF] to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight mb-6">
                Our Milestone-Based{" "}
                <span className="text-[#10b981]">Workflow</span>
              </h2>
              <p className="text-xl text-[#000000]/70 max-w-4xl mx-auto leading-relaxed">
                Transparent, process-driven development ensuring on-time delivery 
                and budget adherence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {servicesData.processSteps.map((step, index) => (
                <div key={step.id} className="group relative">
                  <div className="relative bg-[#FFFFFF] rounded-2xl p-6 h-full shadow-lg border border-gray-100 lg:min-h-[280px] min-h-[200px] flex flex-col">
                    <div className="absolute -top-4 right-4 z-10">
                      <div className="w-12 h-12 bg-[#10b981] text-[#FFFFFF] rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                        {step.stepNumber}
                      </div>
                    </div>

                    <div className="pt-6 lg:flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-[#000000] mb-4 leading-tight lg:min-h-[3rem] min-h-[1.5rem]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#000000]/70 leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < servicesData.processSteps.length - 1 && (
                    <div className="hidden xl:block absolute top-6 -right-4 w-8 h-0.5 bg-[#10b981]/20 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;