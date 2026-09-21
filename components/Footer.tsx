import Link from "next/link";
import { FOOTER_NAV, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "./icons/SocialIcons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-sand">
      <div className="mx-auto max-w-content px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="flex items-center"
              aria-label="Sefora home"
            >
              <Logo className="h-16" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
              Commercial tissue supply for manufacturers and distributors, based
              in Kisumu and serving Western Kenya.
            </p>
            <div className="mt-5 space-y-1 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="block font-medium text-ink hover:text-forest"
              >
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="block font-medium text-ink hover:text-forest"
              >
                {SITE.phone}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sefora on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest text-white transition-colors hover:bg-forest-dark"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sefora on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest text-white transition-colors hover:bg-forest-dark"
              >
                <FacebookIcon />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sefora on TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest text-white transition-colors hover:bg-forest-dark"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.heading} className="hidden sm:block">
              <h3 className="text-sm font-semibold text-ink">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Compact mobile nav: essentials only */}
          <div className="sm:hidden">
            <h3 className="text-sm font-semibold text-ink">Work with us</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/for-distributors"
                  className="text-sm text-stone hover:text-forest"
                >
                  For distributors
                </Link>
              </li>
              <li>
                <Link
                  href="/for-manufacturers"
                  className="text-sm text-stone hover:text-forest"
                >
                  For manufacturers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?intent=quote"
                  className="text-sm text-stone hover:text-forest"
                >
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-xs leading-relaxed text-stone">
          <p>
            Manufactured in Kenya by: <span className="font-medium text-ink">{SITE.manufacturerName}</span>
          </p>
          <p className="mt-1">{SITE.registeredAddress}</p>
        </div>

        <div className="mt-4 flex flex-col gap-4 border-t border-line pt-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-forest">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
