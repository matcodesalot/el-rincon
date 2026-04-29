export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-[#f4e9c8] text-[#3a2418]"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at top, rgba(58, 36, 24, 0.08) 0%, transparent 60%),
          radial-gradient(ellipse at bottom, rgba(58, 36, 24, 0.08) 0%, transparent 60%),
          repeating-linear-gradient(45deg, rgba(58, 36, 24, 0.04) 0 1px, transparent 1px 44px),
          repeating-linear-gradient(-45deg, rgba(58, 36, 24, 0.04) 0 1px, transparent 1px 44px)
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-[#3a2418]/10 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-[#3a2418]/10 to-transparent" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#3a2418] bg-[#3a2418]">
          <span className="font-serif text-2xl italic">
            <span className="text-stone-100">E</span>
            <span className="text-amber-500">R</span>
          </span>
        </div>

        <h2 className="mt-8 font-serif text-5xl font-bold tracking-wide sm:text-6xl">
          ABOUT US
        </h2>

        <p className="mt-4 font-serif text-2xl italic text-[#3a2418]/80 sm:text-3xl">
          Taste Tradition, Celebrate Culture
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#3a2418]/90 sm:text-lg">
          Welcome to El Rincon Mexican Restaurant! Since 2003, El Rincon has been Spring's home for honest, hearty Tex-Mex food cooked with love and served with pride.
        </p>

        <a
          href="https://qrmenus.us/el-rincon-mexican-restaurant"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-[#3a2418] px-10 py-3 text-xs font-medium tracking-[0.35em] text-stone-100 transition-colors hover:bg-amber-500 hover:text-[#3a2418]"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
}
