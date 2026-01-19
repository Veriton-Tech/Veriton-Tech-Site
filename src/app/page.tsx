import BannerCarousel from "./BannerCarousel";
import TeamCarousel from "../components/TeamCarousel";
import Link from "next/link";
import Image from "next/image";

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-[800px] mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight holographic-text mb-4 relative">
        {title}
        <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-20"></span>
      </h2>
      {subtitle ? (
        <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      {/* Banner Section - Always show before Our Services */}
      <BannerCarousel />

      {/* Our Services - Futuristic Cyber Theme */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 relative z-10">
          <SectionHeading
            title="Our Services"
            subtitle="Explore cutting-edge solutions powered by next-gen technology"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Android Development", icon: "🤖", desc: "Custom Android apps for business and consumers.", image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=300&fit=crop" },
              { name: "Web Development", icon: "🌐", desc: "Modern, responsive websites and web apps.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" },
              { name: "Shopify Development", icon: "🛒", desc: "E-commerce solutions built on Shopify.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
              { name: "Cloud Services", icon: "☁️", desc: "Scalable cloud infrastructure and support.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop" },
            ].map((s) => {
              const slug = s.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
              return (
                <div
                  key={s.name}
                  className="group relative rounded-2xl glassmorphism hover:scale-105 transition-all duration-500 cyber-border scan-line overflow-hidden"
                >
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={s.image} 
                      alt={s.name} 
                      fill 
                      className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 text-4xl filter drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-float">{s.icon}</div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center p-8">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3">{s.name}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                    <Link 
                      href={`/services/${slug}`} 
                      className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold overflow-hidden group/btn transition-all hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      <span className="relative z-10">Learn More</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                    </Link>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Veriton Works - Futuristic Process */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 relative z-10">
          <SectionHeading title="How Veriton works" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell us what you need",
                desc: "Search a service and share your location & preferences.",
                icon: "🔍"
              },
              {
                step: "2",
                title: "Compare verified pros",
                desc: "View profiles, ratings, and quotes. Chat to clarify.",
                icon: "👥"
              },
              {
                step: "3",
                title: "Book with confidence",
                desc: "Schedule the job. Pay directly to the provider on completion.",
                icon: "✅"
              },
            ].map((s, idx) => (
              <div 
                key={s.step} 
                className="relative rounded-2xl glassmorphism p-8 flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 scan-line"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Step connector line */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
                
                {/* Glowing step number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/50 relative z-10">
                    {s.step}
                  </div>
                  <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                </div>
                
                <div className="text-5xl mb-4 filter drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">{s.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Interactive and Futuristic */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center mb-1">
            <h2 className="text-4xl sm:text-5xl font-bold holographic-text mb-4 relative">
              Our Team
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-20"></span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light">Meet the visionaries building the future at Veriton</p>
          </div>

          <div>
            {/* Team carousel (interactive) */}
            <TeamCarousel />
          </div>
        </div>
      </section>


      {/* ...existing code... */}
    </div>
  );
}
