import { useState, useEffect, useRef } from 'react';

/* =============================================
   ICONS
   ============================================= */
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
  </svg>
);
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M9 18l6-6-6-6" />
  </svg>
);
const LinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
);
const UserIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const HomeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const CompassIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);
const TrendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const BookmarkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
);
const ThunderIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

/* =============================================
   NAVBAR
   ============================================= */
function Navbar({ onNavigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      {/* Brand */}
      <div
        className="navbar-brand"
        onClick={() => onNavigate('home')}
        role="link"
        tabIndex={0}
        aria-label="SoruX Ana Sayfa"
        onKeyDown={(e) => e.key === 'Enter' && onNavigate('home')}
      >
        <div className="navbar-logo" aria-hidden="true">S</div>
        <span className="navbar-brand-name">SoruX</span>
        <span className="navbar-badge">V1.0 BETA</span>
      </div>

      {/* Center Nav */}
      <div className="navbar-center" role="navigation" aria-label="Ana Navigasyon">
        <button
          className={`navbar-nav-item ${currentPage === 'home' ? 'active' : ''}`}
          id="nav-anasayfa"
          onClick={() => onNavigate('home')}
          aria-current={currentPage === 'home' ? 'page' : undefined}
        >
          <HomeIcon /> Ana Sayfa
        </button>
        <button
          className={`navbar-nav-item ${currentPage === 'kesif' ? 'active' : ''}`}
          id="nav-kesif"
          onClick={() => onNavigate('kesif')}
          aria-current={currentPage === 'kesif' ? 'page' : undefined}
        >
          <CompassIcon /> Keşif
        </button>
        <button
          className={`navbar-nav-item ${currentPage === 'profil' ? 'active' : ''}`}
          id="nav-profil"
          onClick={() => onNavigate('profil')}
          aria-current={currentPage === 'profil' ? 'page' : undefined}
        >
          <UserIcon /> Profil
        </button>
      </div>

      {/* Actions */}
      <div className="navbar-actions">
        <button className="btn btn-black btn-sm" id="nav-giris" aria-label="Giriş yap">
          <UserIcon /> Giriş Yap
        </button>
      </div>
    </nav>
  );
}

/* =============================================
   SEARCH BOX COMPONENT
   ============================================= */
function SearchBox({ onSearch, initialValue = '', compact = false }) {
  const [query, setQuery] = useState(initialValue);
  const [mode, setMode] = useState('odakli');
  const textareaRef = useRef(null);

  const modes = [
    { id: 'odakli', label: '⚡ Odaklanmış' },
    { id: 'derin', label: '🔍 Derin' },
    { id: 'web', label: '🌐 Web' },
  ];

  const submit = () => { if (query.trim()) onSearch(query.trim()); };
  const onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); } };

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  }, [query]);

  useEffect(() => { setQuery(initialValue); }, [initialValue]);

  return (
    <div className="search-box">
      <div className="search-box-inner">
        <span className="search-box-icon" aria-hidden="true"><SearchIcon /></span>
        <textarea
          ref={textareaRef}
          className="search-box-textarea"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKey}
          placeholder="Herhangi bir şey sorun... SoruX cevaplar."
          aria-label="Arama sorgusu girin"
          id="main-search-input"
          rows={1}
        />
        <button className="search-box-send" onClick={submit} aria-label="Arama yap" id="search-send-btn">
          <SendIcon />
        </button>
      </div>
      <div className="search-box-footer">
        <div className="search-mode-group" role="toolbar" aria-label="Arama modu">
          {modes.map((m) => (
            <button
              key={m.id}
              className={`search-mode-btn ${mode === m.id ? 'active' : ''}`}
              onClick={() => setMode(m.id)}
              aria-pressed={mode === m.id}
              id={`mode-${m.id}`}
            >
              {m.label}
            </button>
          ))}
        </div>
        {!compact && <span className="search-hint">Enter ↵ gönder</span>}
      </div>
    </div>
  );
}

/* =============================================
   HOME PAGE
   ============================================= */
const trendingTopics = [
  { icon: '🚀', label: 'Yapay Zeka 2026' },
  { icon: '🇹🇷', label: "Türkiye'de Tech" },
  { icon: '📈', label: 'BIST Analizi' },
  { icon: '🔬', label: 'Kuantum Bilgisayar' },
  { icon: '🤖', label: 'Agentic AI' },
  { icon: '⚽', label: 'Güncel Spor' },
];

function HeroSection({ onSearch }) {
  return (
    <section className="hero-centered dotted-bg" aria-labelledby="hero-title">
      {/* Eyebrow */}
      <div className="hero-eyebrow anim-fade-up">
        <span className="hero-badge-pill">
          <span className="badge-dot" aria-hidden="true" />
          50+ Türkçe Kaynak
        </span>
        <span className="hero-version-badge">V1.0 BETA</span>
      </div>

      {/* Title */}
      <h1 className="hero-title anim-fade-up anim-d1" id="hero-title">
        Hemen Sor,
        <span className="hero-title-accent text-purple"> SoruX Bulsun.</span>
      </h1>

      <p className="hero-subtitle anim-fade-up anim-d2">
        Yapay zeka destekli, kaynaklı ve Türkçe öncelikli arama motoru.
        Güvenilir bilgiye saniyeler içinde ulaş.
      </p>

      {/* CTA Buttons */}
      <div className="hero-actions anim-fade-up anim-d2">
        <button className="btn btn-black btn-lg" id="hero-btn-kesfet"
          onClick={() => onSearch('Yapay zeka 2026 trendleri')} aria-label="Aramayı keşfet">
          <PlayIcon /> Aramayı Keşfet
        </button>
        <button className="btn btn-outline btn-lg" id="hero-btn-giris" aria-label="Giriş yap">
          <UserIcon /> Giriş Yap
        </button>
      </div>

      {/* Search */}
      <div className="hero-search-wrap anim-fade-up anim-d3">
        <SearchBox onSearch={onSearch} />
        <div className="trending-wrap" style={{ marginTop: 14 }}>
          <span className="trending-label">🔥 Gündem:</span>
          {trendingTopics.map((t, i) => (
            <button key={i} className="trend-pill" onClick={() => onSearch(t.label)}
              id={`trend-${i}`} aria-label={`${t.label} hakkında ara`}>
              <span aria-hidden="true">{t.icon}</span>{t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="hero-stats-row anim-fade-up anim-d4" aria-label="Platform istatistikleri">
        {[
          { icon: '⚡', value: '50+', label: 'Egzersiz' },
          { icon: '📚', value: '6', label: 'Kategori' },
          { icon: '📈', value: '%98', label: 'Gelişim' },
          { icon: '✅', value: 'Ücretsiz', label: 'Tamamen' },
        ].map((s, i) => (
          <div key={i} className="hero-stat">
            <span className="hero-stat-icon" aria-hidden="true">{s.icon}</span>
            <span className="hero-stat-value">{s.value}</span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const feats = [
    { icon: '⚡', cls: 'fi-purple', title: 'Anlık AI Yanıtı', desc: 'Sorularınıza milisaniyeler içinde kaynaklı, detaylı ve doğrulanmış cevaplar alın.' },
    { icon: '🇹🇷', cls: 'fi-yellow', title: 'Türkçe Öncelikli', desc: "TRT, Milliyet, TÜBİTAK gibi yerel kaynaklara özel erişim. Yerel bağlam anlayışı." },
    { icon: '📚', cls: 'fi-pink', title: 'Kaynaklı Cevaplar', desc: 'Her yanıtın altında tıklanabilir kaynaklar. Doğrulama ve derinleştirme kolaylaşıyor.' },
    { icon: '🤖', cls: 'fi-cyan', title: 'Agentic Arama', desc: 'Çok adımlı görevleri otomatik çözen, bağlamı anlayan akıllı ajan sistemi.' },
    { icon: '🔒', cls: 'fi-orange', title: 'KVKK Uyumlu', desc: "Verileriniz Türkiye'de saklanır. KVKK uyumlu altyapı ile tam gizlilik." },
    { icon: '📡', cls: 'fi-dark', title: 'Gerçek Zamanlı Web', desc: 'Anlık haber takibi, borsa verileri ve güncel bilgilere erişim.' },
  ];
  return (
    <section className="features-section" aria-labelledby="features-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow" aria-hidden="true">Özellikler</p>
          <h2 className="section-title" id="features-title">Neden SoruX?</h2>
          <p className="section-sub">Sadece arama değil — düşünen, anlayan ve Türkçe konuşan bir AI asistanı.</p>
        </div>
        <div className="features-grid" role="list">
          {feats.map((f, i) => (
            <article key={i} className="feature-card" role="listitem" aria-labelledby={`feat-${i}`}>
              <div className={`feature-icon-box ${f.cls}`} aria-hidden="true">{f.icon}</div>
              <h3 className="feature-card-title" id={`feat-${i}`}>{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowSection() {
  const steps = [
    { num: '1', emoji: '💬', title: 'Sorunuzu Sorun', desc: 'Herhangi bir konuda, Türkçe veya İngilizce doğal dilde soru sorun.' },
    { num: '2', emoji: '🔍', title: 'AI Araştırır', desc: 'SoruX güvenilir Türk kaynaklarından anlık bilgi toplar ve analiz eder.' },
    { num: '3', emoji: '✨', title: 'Kaynaklı Yanıt', desc: 'Referanslarla desteklenmiş kapsamlı bir yanıt saniyeler içinde önünüzde.' },
  ];
  return (
    <section className="how-section" aria-labelledby="how-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow" aria-hidden="true">Nasıl Çalışır?</p>
          <h2 className="section-title" id="how-title">3 Adımda Anlık Bilgi</h2>
          <p className="section-sub">Karmaşık araştırma süreçlerini SoruX'e bırakın. Siz sadece sorun.</p>
        </div>
        <div className="steps-row" role="list">
          {steps.map((s, i) => (
            <div key={i} className="step-card" role="listitem" aria-labelledby={`step-${i}`}>
              <div className="step-num-circle" aria-label={`Adım ${s.num}`}>{s.num}</div>
              <h3 className="step-card-title" id={`step-${i}`}>{s.emoji} {s.title}</h3>
              <p className="step-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalSection() {
  const cards = [
    { label: 'Yerel Haber Takibi', body: 'TRT, Hürriyet, Cumhuriyet ve 100+ Türk haber kaynağından anlık bilgi.' },
    { label: 'BIST & Finans', body: 'Borsa İstanbul, döviz kurları ve Türkiye ekonomi analizleri.' },
    { label: 'Akademik Türkçe', body: 'YÖK, TÜBİTAK ve Türk üniversitelerinden akademik içerik ve yayınlar.' },
  ];
  return (
    <section className="local-section" aria-labelledby="local-title">
      <div className="container">
        <div className="local-layout">
          <div className="local-text">
            <h2 className="local-text-title" id="local-title">
              Türkiye için<br /><span className="text-purple">Özel Tasarlandı</span>
            </h2>
            <p className="local-text-body">SoruX, global AI modellerine değil — Türkiye'ye özgü kaynaklara, kültürel bağlama ve yerel ihtiyaçlara göre optimize edilmiş bir sistemdir.</p>
            <p className="local-text-body">KVKK uyumlu altyapısı ve Türkçe NLP modelleriyle, yerel kullanıcıların ihtiyaçlarını küresel rakiplerden çok daha iyi anlayan bir araç.</p>
            <ul className="local-checks" aria-label="Yerel özellikler listesi">
              {['Türkçe kaynak önceliklendirmesi','KVKK uyumlu veri işleme','Gerçek zamanlı Türk medyası entegrasyonu','Coğrafi bağlam ve yerel bilgi anlayışı'].map((f, i) => (
                <li key={i} className="local-check">
                  <span className="check-icon" aria-hidden="true">✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="local-cards-col" aria-label="Yerel özellik örnekleri">
            {cards.map((c, i) => (
              <div key={i} className="local-info-card" id={`local-card-${i}`}>
                <div className="local-info-card-label">{c.label}</div>
                <div className="local-info-card-body">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ onSearch }) {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-inner">
          <h2 className="cta-title" id="cta-title">Aramayı<br />Yeniden Keşfedin</h2>
          <p className="cta-subtitle">Milyonlarca Türk kullanıcı SoruX ile araştırıyor. Siz de katılın.</p>
          <div className="cta-btns">
            <button className="btn-cta-main" id="cta-main-btn"
              onClick={() => onSearch('Yapay zeka nedir?')} aria-label="Hemen ücretsiz dene">
              🚀 Hemen Dene — Ücretsiz
            </button>
            <button className="btn-cta-ghost" id="cta-ghost-btn" aria-label="Demo izle">▶ Demo İzle</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   FOOTER
   ============================================= */
function Footer({ onNavigate }) {
  const cols = [
    { title: 'Ürün', links: ['Özellikler', 'Fiyatlandırma', 'API', 'Şirketler için'] },
    { title: 'Şirket', links: ['Hakkımızda', 'Blog', 'Kariyer', 'Basın'] },
    { title: 'Destek', links: ['Yardım Merkezi', 'Topluluk', 'Durum', 'İletişim'] },
  ];
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top container">
        <div>
          <div className="footer-logo-row">
            <div className="footer-logo" aria-hidden="true">S</div>
            <span className="footer-brand-name">SoruX</span>
          </div>
          <p className="footer-desc">Türkiye'nin yapay zeka destekli arama motoru. Güvenilir, hızlı ve yerel bağlamı anlayan bir AI deneyimi.</p>
        </div>
        {cols.map((col, i) => (
          <div key={i}>
            <h3 className="footer-col-head">{col.title}</h3>
            <ul className="footer-links-list">
              {col.links.map((link, j) => (
                <li key={j}><a role="button" tabIndex={0} id={`footer-${i}-${j}`} aria-label={link}>{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom container">
        <p className="footer-copy">© 2026 SoruX. Tüm hakları saklıdır. Türkiye'de geliştirildi 🇹🇷</p>
        <div className="footer-social-row" aria-label="Sosyal medya">
          {['𝕏', 'in', '▶', '📘'].map((s, i) => (
            <button key={i} className="footer-social-icon" aria-label={`Sosyal medya ${i + 1}`} id={`social-${i}`}>{s}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* =============================================
   HOME PAGE (container)
   ============================================= */
function HomePage({ onSearch }) {
  return (
    <main>
      <HeroSection onSearch={onSearch} />
      <FeaturesSection />
      <HowSection />
      <LocalSection />
      <CTASection onSearch={onSearch} />
    </main>
  );
}

/* =============================================
   KEŞİF PAGE
   ============================================= */
const kesfCategories = [
  { id: 'teknoloji', icon: '💻', label: 'Teknoloji', color: 'fi-purple', count: '1.2K soru' },
  { id: 'bilim', icon: '🔬', label: 'Bilim', color: 'fi-cyan', count: '890 soru' },
  { id: 'ekonomi', icon: '📈', label: 'Ekonomi', color: 'fi-yellow', count: '2.1K soru' },
  { id: 'saglik', icon: '🏥', label: 'Sağlık', color: 'fi-pink', count: '1.5K soru' },
  { id: 'spor', icon: '⚽', label: 'Spor', color: 'fi-orange', count: '3.4K soru' },
  { id: 'tarih', icon: '🏛️', label: 'Tarih', color: 'fi-dark', count: '670 soru' },
  { id: 'hukuk', icon: '⚖️', label: 'Hukuk', color: 'fi-purple', count: '430 soru' },
  { id: 'egitim', icon: '📚', label: 'Eğitim', color: 'fi-cyan', count: '980 soru' },
];

const trendingSearches = [
  { q: 'Yapay zeka iş piyasasını nasıl etkiliyor?', views: '12.4K', hot: true },
  { q: "Türkiye'nin teknoloji girişimleri 2026", views: '8.9K', hot: true },
  { q: 'Kuantum bilgisayar nasıl çalışır?', views: '7.2K', hot: false },
  { q: 'BIST 100 bugünkü durum analizi', views: '15.1K', hot: true },
  { q: 'ChatGPT vs SoruX karşılaştırması', views: '22.3K', hot: true },
  { q: 'Yenilenebilir enerji Türkiye yatırımları', views: '5.6K', hot: false },
  { q: 'TÜBİTAK bursu başvuru şartları 2026', views: '9.8K', hot: false },
  { q: 'Agentic AI sistemleri nasıl çalışır?', views: '4.3K', hot: false },
];

const featuredCollections = [
  { title: '🇹🇷 Türkiye Gündemine', desc: 'Güncel haberler, siyaset ve ekonomi analizleri', count: '24 soru', color: 'fi-yellow' },
  { title: '🤖 AI & Teknoloji', desc: 'Yapay zeka, agentic sistemler ve yazılım dünyası', count: '56 soru', color: 'fi-purple' },
  { title: '📊 Finans & Borsa', desc: 'BIST, döviz, kripto ve yatırım stratejileri', count: '38 soru', color: 'fi-cyan' },
  { title: '🎓 Akademik Araştırma', desc: 'TÜBİTAK, YÖK ve üniversite kaynakları', count: '19 soru', color: 'fi-pink' },
];

function KesifPage({ onSearch }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <main className="page-content" aria-labelledby="kesif-title">
      {/* Header */}
      <div className="page-hero dotted-bg">
        <div className="container">
          <div className="page-hero-inner">
            <span className="section-eyebrow">Keşif Merkezi</span>
            <h1 className="page-title" id="kesif-title">Neyi Araştırmak İstersin?</h1>
            <p className="page-subtitle">Trend konuları keşfet, kategorilere göz at ve ilham al.</p>
            <div style={{ maxWidth: 680, margin: '0 auto' }}>
              <SearchBox onSearch={onSearch} />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
        {/* Categories */}
        <div className="content-section">
          <div className="content-section-header">
            <h2 className="content-section-title">📂 Kategoriler</h2>
            <span className="content-section-count">{kesfCategories.length} kategori</span>
          </div>
          <div className="category-grid" role="list">
            {kesfCategories.map((cat) => (
              <button
                key={cat.id}
                className={`category-card ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat.id); onSearch(cat.label + ' hakkında son gelişmeler'); }}
                id={`cat-${cat.id}`}
                role="listitem"
                aria-label={`${cat.label} kategorisinde ara`}
              >
                <div className={`feature-icon-box ${cat.color}`} style={{ width: 44, height: 44, marginBottom: 10 }} aria-hidden="true">
                  {cat.icon}
                </div>
                <span className="category-label">{cat.label}</span>
                <span className="category-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Searches */}
        <div className="content-section">
          <div className="content-section-header">
            <h2 className="content-section-title"><TrendIcon /> Trend Aramalar</h2>
            <span className="content-section-count">Bugün</span>
          </div>
          <div className="trending-list" role="list">
            {trendingSearches.map((item, i) => (
              <button
                key={i}
                className="trending-list-item"
                onClick={() => onSearch(item.q)}
                id={`trending-search-${i}`}
                role="listitem"
                aria-label={`${item.q} - ${item.views} görüntülenme`}
              >
                <span className="trending-rank">{String(i + 1).padStart(2, '0')}</span>
                <span className="trending-q-text">{item.q}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
                  {item.hot && <span className="tag-pill tag-red" style={{ padding: '2px 8px', fontSize: 11 }}>🔥 HOT</span>}
                  <span className="trending-views">{item.views}</span>
                </div>
                <ChevronRightIcon />
              </button>
            ))}
          </div>
        </div>

        {/* Featured Collections */}
        <div className="content-section">
          <div className="content-section-header">
            <h2 className="content-section-title"><BookmarkIcon /> Öne Çıkan Koleksiyonlar</h2>
          </div>
          <div className="collection-grid" role="list">
            {featuredCollections.map((col, i) => (
              <div
                key={i}
                className="collection-card"
                role="listitem"
                id={`collection-${i}`}
                onClick={() => onSearch(col.title.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '').trim())}
              >
                <h3 className="collection-title">{col.title}</h3>
                <p className="collection-desc">{col.desc}</p>
                <span className="collection-count">{col.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

/* =============================================
   PROFİL PAGE
   ============================================= */
const recentSearches = [
  { q: 'Yapay zeka 2026 trendleri', time: '2 saat önce', icon: '🤖' },
  { q: "Türkiye'de Tech ekosistemi", time: '5 saat önce', icon: '🇹🇷' },
  { q: 'Kuantum bilgisayar nasıl çalışır?', time: 'Dün', icon: '🔬' },
  { q: 'BIST 100 analizi', time: 'Dün', icon: '📈' },
  { q: 'Agentic AI sistemleri', time: '3 gün önce', icon: '⚡' },
];

const achievements = [
  { icon: '🚀', title: 'İlk Arama', desc: 'İlk sorunu sordun!', done: true },
  { icon: '🔥', title: '7 Gün Seri', desc: '7 gün üst üste arama', done: true },
  { icon: '🎯', title: '50 Arama', desc: '50 soru sor', done: true },
  { icon: '🧠', title: 'Araştırmacı', desc: '100 soru sor', done: false },
  { icon: '🏆', title: 'Uzman', desc: '500 soru sor', done: false },
  { icon: '⭐', title: 'Pro Kullanıcı', desc: '30 gün üst üste', done: false },
];

function ProfilPage({ onSearch }) {
  return (
    <main className="page-content" aria-labelledby="profil-title">
      {/* Profile Header */}
      <div className="page-hero dotted-bg">
        <div className="container">
          <div className="profil-header">
            <div className="profil-avatar" aria-label="Kullanıcı avatarı">U</div>
            <div className="profil-info">
              <h1 className="profil-name" id="profil-title">Kullanıcı Adı</h1>
              <p className="profil-sub">Beta Kullanıcısı · Kasım 2025'ten beri</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <span className="tag-pill tag-purple"><StarIcon /> Pro Beta</span>
                <span className="tag-pill tag-green">✅ Doğrulanmış</span>
              </div>
            </div>
            <button className="btn btn-outline btn-sm" id="profil-edit-btn" aria-label="Profili düzenle" style={{ marginLeft: 'auto' }}>
              ✏️ Düzenle
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="profil-layout">
          {/* LEFT */}
          <div>
            {/* Stats */}
            <div className="content-section">
              <h2 className="content-section-title" style={{ marginBottom: 16 }}>📊 İstatistiklerim</h2>
              <div className="profil-stats-grid" role="list">
                {[
                  { icon: '🔍', value: '247', label: 'Toplam Arama' },
                  { icon: '🔥', value: '12', label: 'Günlük Seri' },
                  { icon: '⭐', value: '4.8', label: 'Kalite Skoru' },
                  { icon: '📚', value: '89', label: 'Kayıtlı Yanıt' },
                ].map((s, i) => (
                  <div key={i} className="profil-stat-card" role="listitem">
                    <span style={{ fontSize: 24 }} aria-hidden="true">{s.icon}</span>
                    <span className="profil-stat-val">{s.value}</span>
                    <span className="profil-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div className="content-section">
              <div className="content-section-header">
                <h2 className="content-section-title"><ClockIcon /> Son Aramalar</h2>
                <button className="search-mode-btn" id="clear-history-btn" aria-label="Geçmişi temizle">Temizle</button>
              </div>
              <div role="list" aria-label="Son aramalar listesi">
                {recentSearches.map((item, i) => (
                  <button
                    key={i}
                    className="recent-search-item"
                    onClick={() => onSearch(item.q)}
                    id={`recent-${i}`}
                    role="listitem"
                    aria-label={`${item.q} - ${item.time}`}
                  >
                    <span className="recent-icon" aria-hidden="true">{item.icon}</span>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <div className="recent-q">{item.q}</div>
                      <div className="recent-time">{item.time}</div>
                    </div>
                    <ChevronRightIcon />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {/* Achievements */}
            <div className="content-section">
              <h2 className="content-section-title" style={{ marginBottom: 16 }}>🏆 Başarımlar</h2>
              <div className="achievements-grid" role="list">
                {achievements.map((ach, i) => (
                  <div
                    key={i}
                    className={`achievement-card ${ach.done ? 'done' : 'locked'}`}
                    role="listitem"
                    id={`ach-${i}`}
                    aria-label={`${ach.title}: ${ach.desc} - ${ach.done ? 'Tamamlandı' : 'Kilitli'}`}
                  >
                    <span className="ach-icon" aria-hidden="true">{ach.done ? ach.icon : '🔒'}</span>
                    <span className="ach-title">{ach.title}</span>
                    <span className="ach-desc">{ach.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Topics */}
            <div className="content-section">
              <h2 className="content-section-title" style={{ marginBottom: 14 }}>❤️ Favori Konular</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Yapay Zeka', 'Türkiye Ekonomisi', 'Bilim', 'Spor', 'Teknoloji'].map((t, i) => (
                  <button
                    key={i}
                    className="trend-pill"
                    onClick={() => onSearch(t)}
                    id={`fav-topic-${i}`}
                    aria-label={`${t} konusunda ara`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Upgrade Card */}
            <div className="upgrade-card" aria-label="Pro plana geç">
              <div className="upgrade-icon" aria-hidden="true">⚡</div>
              <h3 className="upgrade-title">SoruX Pro'ya Geç</h3>
              <p className="upgrade-desc">Sınırsız arama, öncelikli erişim ve özel AI modelleri ile araştırmalarınızı hızlandırın.</p>
              <button className="btn btn-black" style={{ width: '100%', justifyContent: 'center' }} id="upgrade-btn" aria-label="Pro plana geç">
                <ThunderIcon /> Pro'ya Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =============================================
   RESULTS PAGE
   ============================================= */
const mockSources = [
  { title: 'TRT Haber - Güncel Haberler', domain: 'trthaber.com', num: 1 },
  { title: 'Milliyet Teknoloji', domain: 'milliyet.com.tr', num: 2 },
  { title: 'TÜBİTAK Araştırma Raporu', domain: 'tubitak.gov.tr', num: 3 },
  { title: 'Sabah Ekonomi Analizi', domain: 'sabah.com.tr', num: 4 },
  { title: 'Dünya Gazetesi', domain: 'dunya.com', num: 5 },
  { title: 'Hürriyet Teknoloji', domain: 'hurriyet.com.tr', num: 6 },
];

function TypingAnswer({ text }) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    setShown('');
    setDone(false);
    idx.current = 0;
    const timer = setInterval(() => {
      if (idx.current < text.length) {
        setShown((p) => p + text[idx.current]);
        idx.current++;
      } else { setDone(true); clearInterval(timer); }
    }, 10);
    return () => clearInterval(timer);
  }, [text]);

  const renderParagraphs = (t) =>
    t.split('\n\n').map((para, i) => (
      <p key={i}>
        {para.split(/(\*\*[^*]+\*\*)/).map((chunk, j) =>
          chunk.startsWith('**') && chunk.endsWith('**')
            ? <strong key={j}>{chunk.slice(2, -2)}</strong>
            : chunk
        )}
        {!done && i === t.split('\n\n').length - 1 && (
          <span style={{ display:'inline-block',width:2,height:'1em',background:'#6B4EFF',marginLeft:2,verticalAlign:'middle',animation:'typing-cursor 0.8s infinite' }} aria-hidden="true" />
        )}
      </p>
    ));

  return <div className="answer-body-text">{renderParagraphs(shown)}</div>;
}

function ResultsPage({ query, onNewSearch }) {
  const answerText = `**${query}** hakkında Türk kaynaklarından kapsamlı bir analiz yapıldı.

Bu konuda güncel bilgilere göre: 2026 yılı itibarıyla **Türkiye** bu alanda önemli gelişmeler yaşamaktadır. Yapılan araştırmalar, yerel dinamiklerin küresel trendlerle nasıl örtüştüğünü ortaya koymaktadır.

Uzman görüşlerine göre, önümüzdeki 12 ay içinde bu alanda ciddi dönüşümler beklenmektedir. Türkiye'nin bölgesel konumu ve teknoloji altyapısı göz önünde bulundurulduğunda, yerel oyuncuların rekabet avantajı kazanabileceği öngörülmektedir.

Sonuç olarak, **${query}** konusu hem bölgesel hem de küresel ölçekte büyük önem taşımaktadır. Daha fazla bilgi için yukarıdaki kaynaklara başvurabilirsiniz.`;

  const relatedQs = [
    `${query} Türkiye'yi nasıl etkiliyor?`,
    `${query} hakkında en güncel gelişmeler neler?`,
    `${query} gelecekte nasıl değişecek?`,
    `${query} ile ilgili uzman görüşleri neler?`,
  ];

  return (
    <main className="results-page" aria-label={`${query} için AI yanıtı`}>
      <div className="results-top-bar">
        <div className="results-search-wrap">
          <SearchBox onSearch={onNewSearch} initialValue={query} compact />
        </div>
      </div>
      <div className="results-layout">
        <div>
          <div className="answer-ai-label" aria-label="AI tarafından üretildi">✨ SoruX AI</div>
          <h1 className="answer-query-title">{query}</h1>
          <TypingAnswer text={answerText} />
          <section className="related-qs" aria-labelledby="related-title">
            <h2 className="related-qs-title" id="related-title">İlgili Sorular</h2>
            {relatedQs.map((q, i) => (
              <button key={i} className="related-q-btn" onClick={() => onNewSearch(q)}
                id={`related-${i}`} aria-label={`Soru sor: ${q}`}>
                <span>{q}</span><ChevronRightIcon />
              </button>
            ))}
          </section>
        </div>
        <aside className="sources-sticky" aria-label="Kaynaklar">
          <div className="sources-head"><LinkIcon /> Kaynaklar ({mockSources.length})</div>
          <div className="sources-grid" role="list">
            {mockSources.map((src) => (
              <div key={src.num} className="source-tile" role="listitem"
                id={`source-${src.num}`} aria-label={`Kaynak ${src.num}: ${src.title}`}>
                <div className="source-num">{src.num}</div>
                <div className="source-title">{src.title}</div>
                <div className="source-domain">{src.domain}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}

/* =============================================
   APP
   ============================================= */
export default function App() {
  const [page, setPage] = useState('home');
  const [query, setQuery] = useState('');

  const handleSearch = (q) => {
    setQuery(q);
    setPage('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'home':    return <HomePage onSearch={handleSearch} />;
      case 'kesif':   return <KesifPage onSearch={handleSearch} />;
      case 'profil':  return <ProfilPage onSearch={handleSearch} />;
      case 'results': return <ResultsPage query={query} onNewSearch={handleSearch} />;
      default:        return <HomePage onSearch={handleSearch} />;
    }
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} currentPage={page} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
