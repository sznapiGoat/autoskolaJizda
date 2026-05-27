"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import { SITE } from "@/lib/data";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      role="banner"
      className="relative z-[60] bg-[#047857] text-white text-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
        <div className="flex-1" />

        {/* Centre: phone CTA */}
        <a
          href={`tel:${SITE.phonePlain}`}
          className="flex items-center gap-2 font-semibold tracking-wide hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-[#047857] rounded"
          aria-label={`Volejte kdykoliv na číslo ${SITE.phone}`}
        >
          <Phone size={13} aria-hidden="true" />
          <span className="hidden xs:inline">VOLEJTE KDYKOLIV:&nbsp;</span>
          <span>{SITE.phone}</span>
        </a>

        {/* Right: dismiss */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setDismissed(true)}
            className="p-1 rounded hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Skrýt oznámení"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
