export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.01] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#818cf8]/10 flex items-center justify-center">
                <span className="text-sm font-bold text-[#818cf8] font-mono">Y</span>
              </div>
              <span className="text-lg font-bold text-white font-mono tracking-tight">
                YiSA<span className="text-[#e94560]">-S</span>
              </span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Yapay zeka destekli spor okulu yönetim platformu.
              Teknolojiyi spora başlattık.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3 font-mono">Platform</h4>
            <ul className="space-y-2">
              <li><a href="/#features" className="text-xs text-white/40 hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="/#pricing" className="text-xs text-white/40 hover:text-white transition-colors">Fiyatlandırma</a></li>
              <li><a href="/#branches" className="text-xs text-white/40 hover:text-white transition-colors">Branşlar</a></li>
              <li><a href="/franchise" className="text-xs text-white/40 hover:text-white transition-colors">Franchise</a></li>
              <li><a href="/fuar" className="text-xs text-white/40 hover:text-white transition-colors">Fuar</a></li>
              <li><a href="/sablonlar" className="text-xs text-white/40 hover:text-white transition-colors">Şablonlar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3 font-mono">Kaynaklar</h4>
            <ul className="space-y-2">
              {["Blog", "Yardım Merkezi", "Kullanım Kılavuzu", "Video Eğitimler"].map((item) => (
                <li key={item}>
                  <span className="text-xs text-white/40 hover:text-white cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3 font-mono">Yasal</h4>
            <ul className="space-y-2">
              {["Gizlilik Politikası", "Kullanım Şartları", "KVKK Aydınlatma", "Çerez Politikası"].map((item) => (
                <li key={item}>
                  <span className="text-xs text-white/40 hover:text-white cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/30 font-mono">
            2024-2026 YİSA-S. Tüm hakları saklıdır. yisa-s.com
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-white/30 font-mono">Sistem Aktif</span>
            </div>
            <span className="text-[10px] text-white/30 font-mono">v2.2</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
