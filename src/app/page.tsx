import BannerCarousel from "./BannerCarousel";

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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-blue-800/30">
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
                className="group rounded-3xl border-0 bg-white dark:bg-cyan-900/40 p-10 shadow-xl hover:shadow-2xl transition-all text-center hover:scale-105 relative overflow-hidden ring-2 ring-blue-100 dark:ring-cyan-800 hover:ring-cyan-400 dark:hover:ring-blue-400"
                type="button"
                style={{ position: 'relative' }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-t-3xl opacity-20"></div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-5xl mb-3 animate-bounce group-hover:animate-none text-blue-500 dark:text-cyan-400 drop-shadow-lg">{s.icon}</div>
                  <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform">{s.name}</div>
                  <div className="text-base text-black/70 dark:text-white/70 mb-4 max-w-[180px] mx-auto">{s.desc}</div>
                  <span className="inline-block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold shadow group-hover:from-blue-700 group-hover:to-cyan-700 transition">Learn More</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-b-3xl opacity-10"></div>
              </button>
            ))}
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
              <div key={s.step} className="rounded-3xl bg-white dark:bg-cyan-900/40 shadow-xl p-10 flex flex-col items-center text-center ring-2 ring-cyan-100 dark:ring-blue-900 hover:ring-cyan-400 dark:hover:ring-blue-400 transition-all hover:scale-105">
                <div className="text-4xl mb-3 drop-shadow-lg animate-bounce group-hover:animate-none">{s.icon}</div>
                <div className="size-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-sm font-bold mb-2 shadow">{s.step}</div>
                <h3 className="mt-2 font-extrabold text-lg text-blue-700 dark:text-cyan-400">{s.title}</h3>
                <p className="text-base text-black/70 dark:text-white/70 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* Testimonials Section - enhanced and interactive */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 dark:from-cyan-900/20 dark:via-blue-900/10 dark:to-cyan-800/20">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-cyan-400 mb-2">What Our Customers are Saying About Us</h2>
            <p className="text-base text-black/60 dark:text-white/60">Real feedback from businesses we&apos;ve helped grow and succeed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Ayesha K.",
                company: "Startup Founder",
                text: "Veriton Tech delivered our Android app on time and exceeded expectations. Their support is top-notch!",
                avatar: "🧑‍💻"
              },
              {
                name: "Michael S.",
                company: "E-Commerce Manager",
                text: "Our Shopify store runs smoother than ever. The team is responsive and truly understands business needs.",
                avatar: "🛒"
              },
              {
                name: "Priya D.",
                company: "CTO, SaaS Company",
                text: "Cloud migration was seamless. Veriton Tech's expertise saved us time and money.",
                avatar: "☁️"
              },
            ].map((t, idx) => (
              <div key={idx} className="rounded-3xl bg-white dark:bg-cyan-900/40 shadow-xl p-8 flex flex-col items-center text-center ring-2 ring-cyan-100 dark:ring-blue-900 hover:ring-cyan-400 dark:hover:ring-blue-400 transition-all hover:scale-105">
                <div className="text-5xl mb-3 animate-bounce group-hover:animate-none">{t.avatar}</div>
                <p className="text-lg text-black/80 dark:text-white/80 mb-4 italic">“{t.text}”</p>
                <div className="font-bold text-blue-700 dark:text-cyan-400">{t.name}</div>
                <div className="text-sm text-black/60 dark:text-white/60">{t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ...existing code... */}
    </div>
  );
}
