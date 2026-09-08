"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV } from "@/lib/constants";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    function updateHeight() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-3 lg:px-10">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Sefora home">
            <Logo className="h-12 sm:h-14" priority />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
            {PRIMARY_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap border-b-2 py-1 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "border-forest text-forest"
                      : "border-transparent text-ink/80 hover:border-line hover:text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <Link
              href="/contact?intent=quote"
              className="inline-flex items-center justify-center bg-gold px-5 py-2.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-dark"
            >
              Request a Quote
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-line xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-ink transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 z-[100] overflow-y-auto bg-white xl:hidden"
          style={{ top: headerHeight }}
        >
          <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
            {PRIMARY_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b border-line/70 py-4 text-base font-medium ${
                    isActive ? "text-forest" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact?intent=quote"
              className="mt-6 inline-flex items-center justify-center bg-gold px-5 py-3.5 text-base font-semibold text-ink"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+254700000000"
              className="mt-3 inline-flex items-center justify-center border border-line px-5 py-3.5 text-base font-semibold text-ink"
            >
              Call sales
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
