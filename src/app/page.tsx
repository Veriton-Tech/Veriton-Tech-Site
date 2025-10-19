import Image from "next/image";

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
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-black/10 dark:border-white/10">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-extrabold tracking-tight">Veriton Tech</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#">Home</a>
            <a className="hover:underline" href="#">Services</a>
            <a className="hover:underline" href="#">Company</a>
            <a className="hover:underline" href="#">Blog</a>
            <a className="hover:underline" href="#">Tracking</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90">
              Get Services
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/[.04] dark:hover:bg-white/[.06]">
              Login
            </button>
          </div>
        </div>
      </header>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/40" />
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-black/70 dark:text-white/70 border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm">
                <span>Innovative Tech Solutions for Your Business</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] mt-4 tracking-tight">
                <span className="block">Veriton Tech</span>
                <span className="block">Android, Shopify, Web & Cloud</span>
              </h1>
              <p className="text-[15px] sm:text-base text-black/60 dark:text-white/60 mt-4 max-w-[52ch]">
                Empowering startups and enterprises with expert Android app development, Shopify store setup, custom web solutions, and scalable cloud services. Partner with us to accelerate your digital transformation.
              </p>

              {/* Search + CTAs */}
              <form className="mt-6 flex w-full max-w-[560px] rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-white/10">
                <input
                  type="text"
                  placeholder="What service do you need? e.g., electrician, makeup artist"
                  className="flex-1 bg-transparent px-4 py-3 text-sm sm:text-base outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
                />
                <button
                  type="button"
                  className="shrink-0 m-1 rounded-lg px-4 py-2 text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                >
                  Search
                </button>
              </form>
              <div className="mt-3 flex gap-3">
                <button className="rounded-full px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700">Get a Quote</button>
                <button className="rounded-full px-5 py-2.5 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/[.04] dark:hover:bg-white/[.06]">Join as Pro</button>
              </div>

              {/* Trust row */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[560px]">
                {["Verified", "Secure", "Support", "Quality"]
                  .map((label) => (
                    <div key={label} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-3 flex items-center gap-3">
                      <div className="size-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-xs">✓</div>
                      <div className="text-xs font-medium">{label}</div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-gradient-to-tr from-blue-600/15 to-cyan-400/20 dark:from-blue-500/10 dark:to-cyan-300/10">
                <Image
                  src="/globe.svg"
                  alt="Network"
                  width={480}
                  height={360}
                  className="absolute inset-0 m-auto opacity-70 dark:invert"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <SectionHeading
            title="Popular categories"
            subtitle="Discover vetted professionals across everyday needs"
          />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Android Development", emoji: "🤖" },
              { name: "Shopify Development", emoji: "�" },
              { name: "Web Development", emoji: "�" },
              { name: "Cloud Services", emoji: "☁️" },
              { name: "UI/UX Design", emoji: "🎨" },
              { name: "E-Commerce Solutions", emoji: "🛍️" },
              { name: "API Integration", emoji: "�" },
              { name: "Maintenance & Support", emoji: "🛠️" },
            ].map((c) => (
              <button
                key={c.name}
                className="group text-left rounded-xl border border-black/10 dark:border-white/10 p-4 hover:border-transparent hover:bg-black/[.04] dark:hover:bg-white/[.06] transition-colors"
                type="button"
              >
                <div className="text-2xl">{c.emoji}</div>
                <div className="mt-2 font-medium">{c.name}</div>
                <div className="text-xs text-black/60 dark:text-white/60">Explore providers →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 sm:py-20 border-y border-black/10 dark:border-white/10">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <SectionHeading title="How Veriton Tech works" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Tell us what you need",
                desc: "Search a service and share your location & preferences.",
              },
              {
                step: "2",
                title: "Compare verified pros",
                desc: "View profiles, ratings, and quotes. Chat to clarify.",
              },
              {
                step: "3",
                title: "Book with confidence",
                desc: "Schedule the job. Pay directly to the provider on completion.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
                <div className="size-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  {s.step}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-black/60 dark:text-white/60 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <SectionHeading title="Loved by customers and professionals" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Booked an electrician within minutes. Transparent pricing and great work!",
                name: "Ayesha, Karachi",
              },
              {
                quote:
                  "Veriton Tech helped me scale my business with expert tech solutions.",
                name: "Neha, Lahore",
              },
              {
                quote:
                  "The chat made it easy to align expectations before I confirmed.",
                name: "Bilal, Islamabad",
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
                <p className="text-sm">“{t.quote}”</p>
                <div className="mt-3 text-xs text-black/60 dark:text-white/60">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 dark:from-blue-500/10 dark:to-cyan-400/10">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">Are you a service professional?</h3>
              <p className="text-sm text-black/60 dark:text-white/60 mt-1">
                Create your profile and get discovered by customers looking for your skills.
              </p>
            </div>
            <div className="flex gap-3">
              <button type="button" className="rounded-lg px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Join Veriton Tech
              </button>
              <button type="button" className="rounded-lg px-4 py-2 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/[.04] dark:hover:bg-white/[.06]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 py-10">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">Veriton Tech</div>
            <div className="text-xs text-black/60 dark:text-white/60 mt-1">Your partner for Android, Shopify, web, and cloud solutions. Accelerate your business with our expert tech services.</div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="hover:underline" href="#">About</a>
            <a className="hover:underline" href="#">Categories</a>
            <a className="hover:underline" href="#">How it works</a>
            <a className="hover:underline" href="#">For professionals</a>
            <a className="hover:underline" href="#">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
