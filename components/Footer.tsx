import Image from 'next/image';

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tripknot.in?igsh=Y2hxcXpnbW1hYjA0",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/company/tripknot/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
 
];

export default function Footer() {
  const cols: { h: string; links: { label: string; href: string }[] }[] = [
    {
      h: "Product",
      links: [
        { label: "Itineraries", href: "#" },
        { label: "Strangers Trip", href: "#" },
        { label: "Hidden gems", href: "#" },
        { label: "Mobile app", href: "#" },
      ],
    },
    
    {
      h: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Use", href: "/legal/terms-of-use" },
        { label: "Data Privacy Policy", href: "/legal/data-privacy" },
        { label: "Business Listing Terms", href: "/legal/business-listing-terms" },
        { label: "Terms and Conditions", href: "/legal/terms-and-conditions" },
        { label: "EULA", href: "/legal/eula" },
        { label: "Cookie and Tracking Policy", href: "/legal/cookie-policy" },
      ],
    },
    {
      h: "Contact",
      links: [
        { label: "hello@tripknot.in", href: "mailto:hello@tripknot.in" },
        { label: "Help center", href: "/help" },
        
      ],
    },
  ];
  return (
    <footer className="bg-charcoal pt-16 pb-10 text-[14px]" style={{ color: '#A8A99F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-2">
            <div className="mb-3.5"><Image src="/logo-dark.svg" alt="Tripknot" width={160} height={40} /></div>
            <p className="max-w-[280px] leading-[1.5]" style={{ color: '#8c8d83' }}>Smart itineraries, hidden gems, and travel that fits the way you actually move.</p>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <h5 className="text-white font-semibold text-[13px] tracking-[0.04em] uppercase m-0 mb-4">{c.h}</h5>
              <ul className="list-none p-0 m-0 grid gap-2.5">
                {c.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex justify-between items-center text-[12.5px] flex-wrap gap-4">
          <span>© 2026 Tripknot | Aneeras LLP.</span>
          <div className="flex items-center gap-4">
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-white transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
          <span>Built for the curious — made in India</span>
        </div>
      </div>
    </footer>
  );
}
