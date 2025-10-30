import BannerCarousel from "./BannerCarousel";
import TeamCarousel from "../components/TeamCarousel";

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
            ].map((s) => (
              <button
                key={s.name}
                className={`group rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900/50 p-10 shadow-sm hover:shadow-md transition-all text-center hover:scale-[1.02] relative overflow-hidden`}
                type="button"
                style={{ position: 'relative' }}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-black/10 dark:bg-white/10" />
                <div className="flex flex-col items-center justify-center">
                  <div className={`text-5xl mb-3`}>{s.icon}</div>
                  <div className={`font-extrabold text-neutral-900 dark:text-white text-2xl mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors`}>{s.name}</div>
                  <div className="text-base text-black/70 dark:text-white/70 mb-4 max-w-[180px] mx-auto">{s.desc}</div>
                  <span className={`inline-block mt-2 px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-bold shadow hover:bg-indigo-700 transition`}>Learn More</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black/10 dark:bg-white/10" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How Veriton Tech Works - Enhanced Theme */}
  <section className="py-16 sm:py-24 bg-white dark:bg-neutral-950 border-y border-black/10 dark:border-white/10">
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
