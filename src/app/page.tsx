import BannerCarousel from "./BannerCarousel";
import TeamCarousel from "../components/TeamCarousel";
import Link from "next/link";

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-[800px] mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="text-[15px] sm:text-base text-black/60 dark:text-white/60 mt-2">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      {/* Banner Section - Always show before Our Services */}
      <BannerCarousel />

      {/* Our Services - Enhanced Theme */}
      <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Explore our expert solutions for your business growth"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Android Development", icon: "🤖", desc: "Custom Android apps for business and consumers." },
              { name: "Web Development", icon: "🌐", desc: "Modern, responsive websites and web apps." },
              { name: "Shopify Development", icon: "🛒", desc: "E-commerce solutions built on Shopify." },
              { name: "Cloud Services", icon: "☁️", desc: "Scalable cloud infrastructure and support." },
            ].map((s) => {
              const slug = s.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
              return (
                <div
                  key={s.name}
                  className="group rounded-3xl border-0 bg-white dark:bg-cyan-900/40 p-10 shadow-xl hover:shadow-2xl transition-all text-center hover:scale-105 relative overflow-hidden ring-2 ring-blue-100 dark:ring-cyan-800 hover:ring-cyan-400 dark:hover:ring-blue-400"
                  style={{ position: 'relative' }}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-t-3xl opacity-20"></div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl mb-3 animate-bounce group-hover:animate-none text-blue-500 dark:text-cyan-400 drop-shadow-lg">{s.icon}</div>
                    <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform">{s.name}</div>
                    <div className="text-base text-black/70 dark:text-white/70 mb-4 max-w-[180px] mx-auto">{s.desc}</div>
                    <Link href={`/services/${slug}`} className="inline-block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold shadow hover:from-blue-700 hover:to-cyan-700 transition">Learn More</Link>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-b-3xl opacity-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Veriton Tech Works - Enhanced Theme */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 dark:from-cyan-900/20 dark:via-blue-900/10 dark:to-cyan-800/20 border-y border-blue-100 dark:border-cyan-800">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <SectionHeading title="How Veriton Tech works" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
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
            ].map((s) => (
              <div key={s.step} className="rounded-3xl bg-white dark:bg-neutral-900/50 shadow-sm p-10 flex flex-col items-center text-center border border-black/5 dark:border-white/10 hover:shadow-md transition-all hover:scale-[1.02]">
                <div className="text-4xl mb-3 drop-shadow-lg animate-bounce group-hover:animate-none">{s.icon}</div>
                <div className="size-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold mb-2 shadow">{s.step}</div>
                <h3 className="mt-2 font-extrabold text-lg text-neutral-900 dark:text-white">{s.title}</h3>
                <p className="text-base text-black/70 dark:text-white/70 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Interactive and Elegant */}
  <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mb-2">Our Team</h2>
            <p className="text-base text-black/60 dark:text-white/60">Meet the experts building products and services at Veriton Tech.</p>
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
