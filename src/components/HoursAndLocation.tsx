import { MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Monday", time: "11:00 AM \u2013 9:30 PM" },
  { day: "Tuesday", time: "11:00 AM \u2013 9:30 PM" },
  { day: "Wednesday", time: "11:00 AM \u2013 9:30 PM" },
  { day: "Thursday", time: "11:00 AM \u2013 9:30 PM" },
  { day: "Friday", time: "11:00 AM \u2013 10:00 PM" },
  { day: "Saturday", time: "11:00 AM \u2013 10:00 PM" },
  { day: "Sunday", time: "11:00 AM \u2013 9:00 PM" },
];

export default function HoursAndLocation() {
  return (
    <section
      id="hours-and-location"
      className="relative overflow-hidden bg-[#f4e9c8] text-[#3a2418]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(58, 36, 24, 0.04) 0 1px, transparent 1px 44px),
          repeating-linear-gradient(-45deg, rgba(58, 36, 24, 0.04) 0 1px, transparent 1px 44px)
        `,
      }}
    >
      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-serif text-4xl font-bold tracking-wide sm:text-5xl">
            Hours
          </h2>

          <ul className="mt-10 divide-y divide-[#3a2418]/15">
            {hours.map(({ day, time }) => (
              <li
                key={day}
                className="flex items-baseline justify-between py-3.5 text-base"
              >
                <span className="font-semibold tracking-wide">{day}</span>
                <span className="text-[#3a2418]/85">{time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-4xl font-bold tracking-wide sm:text-5xl">
            Find Us
          </h2>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 justify-center text-[#3a2418]/70">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#3a2418]/70">
                  ADDRESS
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=9001+Louetta+Rd%2C+Spring%2C+TX+77379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-medium not-italic transition-colors hover:text-amber-600"
                >
                  9001 Louetta Rd
                  <br />
                  Spring, TX 77379
                </a>
                <p className="mt-1 text-sm text-[#3a2418]/60">
                  Near Louetta &amp; Champion Dr
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 justify-center text-[#3a2418]/70">
                <Phone className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#3a2418]/70">
                  PHONE
                </p>
                <a
                  href="tel:+12818263807"
                  className="mt-1 block font-medium transition-colors hover:text-amber-600"
                >
                  (281) 826-3807
                </a>
              </div>
            </li>

          </ul>
          <figure className="mt-10 border-l-4 border-amber-500 bg-amber-500/15 px-5 py-4">
            <blockquote className="font-serif text-base italic leading-relaxed text-[#3a2418]/90">
              &ldquo;Wonderful family friendly place! The beef fajitas were great! We got the beef fajitas for 4 and we still had plenty for leftovers. Great spot for everyone. We will be coming back again and again!&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-sm not-italic text-[#3a2418]/70">
              &mdash; Happy customer
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
