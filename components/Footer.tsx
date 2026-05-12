import Brand from './Brand';

export default function Footer() {
  const cols: { h: string; links: string[] }[] = [
    { h: 'Product', links: ['Itineraries', 'Strangers Trip', 'Hidden gems', 'Mobile app'] },
    { h: 'Destinations', links: ['Pondicherry', 'Ooty', 'Manali', 'Varkala'] },
    { h: 'Contact', links: ['hello@tripknot.app', 'Help center', 'Partners'] },
    { h: 'Social', links: ['Instagram', 'YouTube', 'X / Twitter', 'Privacy'] }
  ];
  return (
    <footer className="bg-charcoal pt-16 pb-10 text-[14px]" style={{ color: '#A8A99F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="mb-3.5"><Brand color="#fff" size={24} /></div>
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
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex justify-between text-[12.5px] flex-wrap gap-2">
          <span>© 2026 Tripknot Travel Co.</span>
          <span>Built for the curious — made in India</span>
        </div>
      </div>
    </footer>
  );
}
