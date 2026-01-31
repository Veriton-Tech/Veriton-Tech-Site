import BannerCarousel from "./BannerCarousel";
import TeamCarousel from "../components/TeamCarousel";
import Link from "next/link";
import Image from "next/image";

function SectionHeading({
  title,
  subtitle,
  isDark = false,
}: {
  title: string;
  subtitle?: string;
  isDark?: boolean;
}) {
  return (
    <div className="text-center max-w-[800px] mx-auto mb-12">
      <h2
        className={`text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight ${
          isDark ? "text-white" : "text-slate-800"
        } mb-4`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`text-base sm:text-lg ${
            isDark ? "text-gray-300" : "text-slate-600"
          } mt-3 font-light`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      {/* Banner */}
      <BannerCarousel />

      {/* ===================== OUR SERVICES (DARK) ===================== */}
      <section className="py-12 sm:py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

        <div className="max-w-[1100px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8 relative z-10">
          <SectionHeading
            title="Our Services"
            subtitle="Explore cutting-edge solutions powered by next-gen technology"
            isDark={true}
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {[
              {
                name: "Android Development",
                icon: "🤖",
                desc: "Custom Android apps for business and consumers.",
                image:
                  "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=300&fit=crop",
              },
              {
                name: "Web Development",
                icon: "🌐",
                desc: "Modern, responsive websites and web apps.",
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
              },
              {
                name: "Shopify Development",
                icon: "🛒",
                desc: "E-commerce solutions built on Shopify.",
                image:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
              },
              {
                name: "Cloud Services",
                icon: "☁️",
                desc: "Scalable cloud infrastructure and support.",
                image:
                  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
              },
            ].map((s) => {
              const slug = s.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9\-]/g, "");

              return (
                <div
                  key={s.name}
                  className="group relative rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col min-h-[320px] sm:min-h-[340px]"
                >
                  {/* Image */}
                  <div className="relative h-40 xs:h-44 sm:h-48 w-full overflow-hidden bg-slate-700">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      unoptimized
                      className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 right-4 text-4xl">
                      {s.icon}
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 flex-grow">
                    <h3 className="text-lg xs:text-xl font-bold text-cyan-400 mb-3">
                      {s.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-grow">
                      {s.desc}
                    </p>
                    <Link
                      prefetch={false}
                      href={`/services/${slug}`}
                      className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-sm font-semibold hover:from-cyan-700 hover:to-cyan-600 transition-all hover:shadow-lg hover:shadow-cyan-500/40"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== HOW VERITON WORKS (LIGHT) ===================== */}
      <section className="py-12 sm:py-20 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white border-b border-cyan-500/10">
        <div className="max-w-[1100px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
          <SectionHeading title="How Veriton works" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {[
              {
                step: "1",
                title: "Tell us what you need",
                desc: "Search a service and share your location & preferences.",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Compare verified pros",
                desc: "View profiles, ratings, and quotes. Chat to clarify.",
                icon: "👥",
              },
              {
                step: "3",
                title: "Book with confidence",
                desc: "Schedule the job. Pay directly to the provider on completion.",
                icon: "✅",
              },
            ].map((s, idx) => (
              <div
                key={s.step}
                className="relative rounded-xl p-6 sm:p-8 flex flex-col items-center text-center bg-white border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/30 mb-6">
                  {s.step}
                </div>

                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OUR TEAM ===================== */}
      <section className="py-12 sm:py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-500/20">
      {/* Decorative glow circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-tl from-purple-500/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-4">
           <SectionHeading
            title="Meet The Experts"
            subtitle="Talented professionals dedicated to delivering excellence"
            isDark={true}
            />
        </div>

          <TeamCarousel animateOnView />
        </div>

      </section>
    </div>
  );
}
