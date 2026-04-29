import { useState } from "react";

const navLinks = [
  { label: "ABOUT US", href: "#about-us", external: false },
  {
    label: "MENU",
    href: "https://qrmenus.us/el-rincon-mexican-restaurant",
    external: true,
  },
  {
    label: "FIND US",
    href: "https://www.google.com/maps/search/?api=1&query=9001+Louetta+Rd%2C+Spring%2C+TX+77379",
    external: true,
  },
];

const FacebookIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="h-5 w-5"
  >
    <title>Facebook</title>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

const DoorDashIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="h-5 w-5"
  >
    <title>DoorDash</title>
    <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413" />
  </svg>
);

const GoogleIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="h-5 w-5"
  >
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/El-Rincon-Mexican-Restaurant-100063453437894/",
    icon: <FacebookIcon />,
    hoverColor: "hover:text-[#0866FF]",
  },
  {
    label: "Google Reviews",
    href: "https://search.google.com/local/reviews?placeid=ChIJ6x6Y2nHNQIYRRSBOyIUer2Q",
    icon: <GoogleIcon />,
    hoverColor: "hover:text-[#4285F4]",
  },
  {
    label: "DoorDash",
    href: "https://www.doordash.com/store/el-rincon-spring-35507519/76635671/",
    icon: <DoorDashIcon />,
    hoverColor: "hover:text-[#FF3008]",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-[#3a2418] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <a href="#" className="font-serif text-3xl italic tracking-wide">
          <span className="text-white">El </span>
          <span className="text-amber-500">Rincon</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium tracking-[0.2em] text-white transition-colors hover:text-amber-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`text-white transition-colors ${link.hoverColor}`}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:text-amber-500 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={closeMenu}
                  className="block py-3 text-sm font-medium tracking-[0.2em] text-white transition-colors hover:text-amber-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-6 border-t border-white/10 px-6 py-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  onClick={closeMenu}
                  className={`text-white transition-colors ${link.hoverColor}`}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}