"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 xl:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <a
        href={`tel:${SITE.phone}`}
        className="flex flex-1 items-center justify-center border border-line py-3 text-sm font-semibold text-ink"
      >
        Call
      </a>
      <Link
        href="/contact?intent=quote"
        className="flex flex-1 items-center justify-center bg-gold py-3 text-sm font-semibold text-ink"
      >
        Request a Quote
      </Link>
    </div>
  );
}
