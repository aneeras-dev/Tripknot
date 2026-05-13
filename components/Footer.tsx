import Image from 'next/image';

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.2.3 4.2S1.3 19.5 2.2 20.3c1.1 1.2 2.6 1.1 3.3 1.2C7.6 21.7 12 21.7 12 21.7s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8.1 3.6-8.1 3.5z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const cols: { h: string; links: string[] }[] = [
    {
      h: "Product",
      links: ["Itineraries", "Strangers Trip", "Hidden gems", "Mobile app"],
    },
    { h: "Destinations", links: ["Pondicherry", "Ooty", "Manali", "Varkala"] },
    {
      h: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Use",
        "Data Privacy Policy",
        "Business Listing Terms",
        "Terms and Conditions",
        "EULA",
        "Cookie and Tracking Policy",
      ],
    },
    { h: "Contact", links: ["hello@tripknot.app", "Help center", "Partners"] },
  ];
  return (
    <footer className="bg-charcoal pt-16 pb-10 text-[14px]" style={{ color: '#A8A99F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-1">
            <div className="mb-3.5"><Image src="/logo-dark.svg" alt="Tripknot" width={160} height={40} /></div>
            <p className="max-w-[280px] leading-[1.5]" style={{ color: '#8c8d83' }}>Smart itineraries, hidden gems, and travel that fits the way you actually move.</p>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <h5 className="text-white font-semibold text-[13px] tracking-[0.04em] uppercase m-0 mb-4">{c.h}</h5>
              <ul className="list-none p-0 m-0 grid gap-2.5">
                {c.links.map(l => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}
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
