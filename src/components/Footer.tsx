const FacebookIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="h-4 w-4"
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
    className="h-4 w-4"
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
    className="h-4 w-4"
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

export default function Footer() {
  return (
    <footer className="bg-[#3a2418] text-stone-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 py-4 sm:flex-row">
        <p className="text-xs font-medium tracking-[0.2em] text-stone-400">
          &copy; {new Date().getFullYear()} &middot; EL RINCON MEXICAN RESTAURANT
        </p>

        <ul className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`text-stone-300 transition-colors ${link.hoverColor}`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
