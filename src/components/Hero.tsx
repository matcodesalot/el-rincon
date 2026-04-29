import { ChevronDown, Dot } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#3a2418] text-white"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(217, 119, 6, 0.08) 0 1px, transparent 1px 44px),
          repeating-linear-gradient(-45deg, rgba(217, 119, 6, 0.08) 0 1px, transparent 1px 44px)
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#3a2418]/80" />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-8 text-xs font-medium tracking-[0.45em] text-amber-500">
        (281) 826-3807
        </p>

        <h1 className="font-serif text-7xl leading-none sm:text-8xl md:text-9xl">
          <span className="text-stone-100">El </span>
          <span className="italic text-amber-500">Rincon</span>
        </h1>

        <p className="mt-6 font-serif text-lg italic tracking-wide text-stone-300 sm:text-xl">
          Authentic Mexican Cuisine
        </p>

        <div className="mt-10 flex items-center text-amber-500">
          <span className="block h-px w-20 bg-stone-400/40" />
          <Dot className="h-10 w-10 text-amber-500" />
          <span className="block h-px w-20 bg-stone-400/40" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="https://qrmenus.us/el-rincon-mexican-restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-stone-300/50 px-10 py-3 text-xs font-medium tracking-[0.35em] text-stone-100 transition-colors hover:border-amber-500 hover:text-amber-500"
          >
            VIEW OUR MENU
          </a>

          <a
            href="https://www.doordash.com/store/el-rincon-spring-35507519/76635671/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-amber-500 bg-amber-500 px-10 py-3 text-xs font-medium tracking-[0.35em] text-[#3a2418] transition-colors hover:bg-transparent hover:text-amber-500"
          >
            ORDER ONLINE
          </a>
        </div>

        <a
          href="#about-us"
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400/70 transition-colors hover:text-amber-500"
        >
          <ChevronDown />
        </a>
      </div>
    </section>
  );
}
