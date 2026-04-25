import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Track Record", href: "/#track-record" },
  { label: "Benefits", href: "/#benefits" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Book a Call", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-jet-black border-t border-brand-dim-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <Link
            href="/"
            className="font-playfair text-brand-alabaster text-xl font-bold hover:text-brand-red transition-colors duration-200"
            aria-label="Homepage"
          >
            [Owner Name]
          </Link>
          <p className="font-barlow text-brand-dim-grey text-label max-w-xs text-center md:text-left leading-relaxed">
            Retail placement consulting for Amazon & DTC brands.
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-barlow font-semibold text-brand-silver hover:text-brand-alabaster transition-colors duration-200 text-label"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-dim-grey">
        <p className="max-w-7xl mx-auto px-6 lg:px-12 py-4 font-barlow text-brand-dim-grey text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} [Owner Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
