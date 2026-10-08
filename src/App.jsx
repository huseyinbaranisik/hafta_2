import { useState, useEffect, useRef } from 'react';

// Icons
const SearchIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>;
const SendIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
const HomeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const CompassIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
const UserIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;

/* =============================================
   NAVBAR
   ============================================= */
function Navbar({ onNavigate, currentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => onNavigate('home')}>
        <div className="logo-badge">S</div>
        <span className="brand-text">SORUX</span>
      </div>

      <div className="nav-center">
        <button 
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          <HomeIcon /> Ana Sayfa
        </button>
        <button 
          className={`nav-link ${currentPage === 'kesif' ? 'active' : ''}`}
          onClick={() => onNavigate('kesif')}
        >
          <CompassIcon /> Keşif
        </button>
        <button 
          className={`nav-link ${currentPage === 'profil' ? 'active' : ''}`}
          onClick={() => onNavigate('profil')}
        >
          <UserIcon /> Profil
        </button>
      </div>

      <div className="nav-right">
        <button className="btn-login" onClick={() => alert('Demo sürümündesiniz. Giriş yapma ekranı yakında eklenecektir.')}>
          Giriş Yap
        </button>
      </div>
    </nav>
  );
}

/* =============================================
   SEARCH COMPONENT
   ============================================= */
function SearchBox({ onSearch, initialValue = '', placeholder = "Herhangi bir şey sorun... SoruX araştırsın." }) {
  const [query, setQuery] = useState(initialValue);
  const [mode, setMode] = useState('odakli');

  // Dışarıdan query değiştiğinde (örn. sonuçlar sayfasına gidildiğinde) inputu güncelle
  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  const submit = () => { if (query.trim()) onSearch(query.trim()); };

  return (
    <div className="search-container">
      <div className="search-input-wrap">
        <span className="search-icon"><SearchIcon /></span>
        <input 
          className="search-input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
        />
        <button className="search-submit" onClick={submit}>
          <SendIcon />
        </button>
      </div>
      <div className="search-footer">
        <button 
          className={`search-mode ${mode === 'odakli' ? 'active' : ''}`}
          onClick={() => setMode('odakli')}
        >⚡ Odaklanmış</button>
        <button 
          className={`search-mode ${mode === 'derin' ? 'active' : ''}`}
          onClick={() => setMode('derin')}
        >🔍 Derin Araştırma</button>
      </div>
    </div>
  );
}

/* =============================================
   HOME PAGE
   ============================================= */
function HomePage({ onSearch, onNavigate }) {
  const trends = [
    { icon: '🚀', label: 'Yapay Zeka 2026' },
    { icon: '📈', label: 'BIST Yorumları' },
    { icon: '🔬', label: 'TÜBİTAK Projeleri' },
    { icon: '🇹🇷', label: 'Türkiye Gündemi' }
  ];

  return (
    <main className="hero container">
      <div className="hero-eyebrow">
        <div className="badge-dark">
          <span className="badge-dot"></span> %98 Doğruluk Payı
        </div>
        <div className="badge-outline">V1.0 BETA</div>
      </div>

      <h1 className="hero-title">
        Zihnini <span className="text-purple">Keskinleştir.</span><br />
        Anında Bilgiye Ulaş.
      </h1>

      <p className="hero-subtitle">
        Doğal dilde sor, yerel ve küresel kaynaklardan saniyeler içinde 
        derlenmiş, doğrulanmış yanıtlara ulaş.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary" onClick={() => onSearch('SoruX nasıl çalışır?')}>
          Aramayı Keşfet
        </button>
        <button className="btn-secondary" onClick={() => onNavigate('kesif')}>
          Trendleri İncele
        </button>
      </div>

      <SearchBox onSearch={onSearch} />

      <div className="trending-row">
        <span className="trend-label">Popüler:</span>
        {trends.map((t, i) => (
          <button key={i} className="trend-badge" onClick={() => onSearch(t.label)}>
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>
    </main>
  );
}

/* =============================================
   KEŞİF PAGE
   ============================================= */
function KesifPage({ onSearch }) {
  const cards = [
    { title: 'Teknoloji & AI', icon: '💻', desc: 'Yazılım, yapay zeka ve gelecek trendleri.' },
    { title: 'Ekonomi & Finans', icon: '📈', desc: 'Borsa, döviz ve piyasa analizleri.' },
    { title: 'Bilim & Sağlık', icon: '🔬', desc: 'Tıbbi gelişmeler ve bilimsel makaleler.' }
  ];

  return (
    <main className="section container" style={{ paddingTop: 140 }}>
      <div className="section-header">
        <h1 className="section-title">Konuları Keşfet</h1>
        <p className="hero-subtitle" style={{ marginTop: 16 }}>
          Kategorilere ayrılmış milyonlarca soruyu ve yanıtı incele.
        </p>
      </div>
      
      <div style={{ marginBottom: 60, maxWidth: 760, margin: '0 auto 60px' }}>
        <SearchBox onSearch={onSearch} placeholder="Keşif merkezinde ara..." />
      </div>

      <div className="grid-3">
        {cards.map((c, i) => (
          <div key={i} className="card" style={{ cursor: 'pointer' }} onClick={() => onSearch(c.title + ' hakkında son gelişmeler')}>
            <div className="card-icon">{c.icon}</div>
            <h3 className="card-title">{c.title}</h3>
            <p className="card-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

/* =============================================
   PROFIL PAGE
   ============================================= */
function ProfilPage({ onSearch }) {
  const history = ['Agentic AI', 'Türkiye 2026 vizyonu', 'BIST 100 analiz'];
  
  return (
    <main className="section container" style={{ paddingTop: 140 }}>
      <div className="section-header">
        <h1 className="section-title">Senin İstatistiklerin</h1>
        <p className="hero-subtitle" style={{ marginTop: 16 }}>
          Arama geçmişin, kaydettiğin yanıtlar ve başarımların.
        </p>
      </div>
      
      <div className="grid-3">
        <div className="card">
          <div className="card-icon">🔍</div>
          <h3 className="card-title">Toplam Arama</h3>
          <p className="card-desc" style={{ fontSize: 32, fontWeight: 900, color: '#111', marginTop: 10 }}>247</p>
        </div>
        <div className="card">
          <div className="card-icon">🔥</div>
          <h3 className="card-title">Günlük Seri</h3>
          <p className="card-desc" style={{ fontSize: 32, fontWeight: 900, color: '#111', marginTop: 10 }}>12 Gün</p>
        </div>
        <div className="card">
          <div className="card-icon">📚</div>
          <h3 className="card-title">Kayıtlı Yanıt</h3>
          <p className="card-desc" style={{ fontSize: 32, fontWeight: 900, color: '#111', marginTop: 10 }}>89</p>
        </div>
      </div>
      
      <div style={{ marginTop: 60 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20 }}>Son Aramaların</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {history.map((h, i) => (
            <button 
              key={i} 
              style={{ padding: '12px 20px', borderRadius: 99, border: '1px solid #E2DFD2', background: '#fff', cursor: 'pointer', fontWeight: 600 }}
              onClick={() => onSearch(h)}
            >
              🕒 {h}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

/* =============================================
   RESULTS PAGE (With Typing Animation)
   ============================================= */

function TypingAnswer({ text }) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    // Yeni bir soru geldiğinde state'leri sıfırla
    setShown('');
    setDone(false);
    idx.current = 0;
    
    const timer = setInterval(() => {
      if (idx.current < text.length) {
        setShown((prev) => prev + text[idx.current]);
        idx.current++;
      } else { 
        setDone(true); 
        clearInterval(timer); 
      }
    }, 12); 

    return () => clearInterval(timer);
  }, [text]);

  const renderParagraphs = (t) => {
    return t.split('\n\n').map((para, i) => (
      <p key={i} style={{ marginBottom: 16 }}>
        {para.split(/(\*\*[^*]+\*\*)/).map((chunk, j) => {
          if (chunk.startsWith('**') && chunk.endsWith('**')) {
            return <strong key={j} style={{ color: '#6B4EFF' }}>{chunk.slice(2, -2)}</strong>;
          }
          return chunk;
        })}
        
        {/* Yanıp sönen imleç */}
        {!done && i === t.split('\n\n').length - 1 && (
          <span 
            style={{ 
              display: 'inline-block', 
              width: 4, 
              height: '1.2em', 
              background: '#111', 
              marginLeft: 4, 
              verticalAlign: 'middle', 
              animation: 'typing-blink 0.8s infinite' 
            }} 
            aria-hidden="true" 
          />
        )}
      </p>
    ));
  };

  return <div className="answer-text">{renderParagraphs(shown)}</div>;
}

function ResultsPage({ query, onSearch }) {
  const [longAnswer, setLongAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const sources = [
    { title: 'TRT Haber - Güncel Haberler', url: 'trthaber.com' },
    { title: 'TÜBİTAK BİLGEM Araştırmaları', url: 'tubitak.gov.tr' },
    { title: 'BIST Ekonomi Verileri', url: 'borsaistanbul.com' },
    { title: 'Milliyet Teknoloji', url: 'milliyet.com.tr' }
  ];

  useEffect(() => {
    if (!query) return;
    const fetchAI = async () => {
      setLoading(true);
      setLongAnswer('');
      try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              {
                role: "system",
                content: "Sen SoruX adlı Türkiye'nin yerli yapay zeka arama motorusun. Gelen sorulara profesyonel, net ve detaylı bir Türkçe ile, sanki bir arama motoru veritabanını analiz etmiş gibi (örn: 'TRT Haber ve yerel kaynaklara göre...') kaynak göstererek cevap ver. Metinde önemli kelimeleri ve kavramları **kalın** yaz. Çıktın her zaman 3-4 paragraf uzunluğunda olsun ve doğrudan cevap odaklı olsun."
              },
              {
                role: "user",
                content: query
              }
            ],
            temperature: 0.7
          })
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error?.message || "Sunucu hatası");
        }
        
        const answer = data.choices[0].message.content;
        setLongAnswer(answer);
      } catch (err) {
        console.error("SoruX API Error:", err);
        setLongAnswer("**Hata:** Üzgünüz, SoruX sunucularına şu an ulaşılamıyor. Hata detayı: " + (err.message || "Bilinmeyen hata"));
      }
      setLoading(false);
    };

    fetchAI();
  }, [query]);

  return (
    <main className="results-page container">
      <div className="results-header" style={{ maxWidth: 760, margin: '0 auto 40px' }}>
        <SearchBox onSearch={onSearch} initialValue={query} />
      </div>

      <div className="sources-row" style={{ marginBottom: 16 }}>
        {sources.map((s, i) => (
          <div key={i} className="source-pill" style={{ cursor: 'pointer' }} onClick={() => window.open(`https://${s.url}`, '_blank')}>
            <div className="source-num">{i + 1}</div>
            <div className="source-name">{s.title}</div>
          </div>
        ))}
      </div>

      <div className="answer-box">
        <h1 className="answer-query">{query}</h1>
        {loading ? (
          <div className="answer-text" style={{ padding: '20px 0' }}>
            <span style={{ 
              display: 'inline-block', 
              width: 12, height: 12, borderRadius: '50%', 
              background: '#6B4EFF', 
              animation: 'typing-blink 1s infinite'
            }}></span>
            <span style={{ marginLeft: 10, fontWeight: 600, color: '#666' }}>SoruX kaynakları tarıyor ve analiz ediyor...</span>
          </div>
        ) : (
          <TypingAnswer text={longAnswer} />
        )}
      </div>
    </main>
  );
}

/* =============================================
   APP ROOT
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

  return (
    <>
      <Navbar onNavigate={handleNavigate} currentPage={page} />
      
      {page === 'home' && <HomePage onSearch={handleSearch} onNavigate={handleNavigate} />}
      {page === 'kesif' && <KesifPage onSearch={handleSearch} />}
      {page === 'profil' && <ProfilPage onSearch={handleSearch} />}
      {page === 'results' && <ResultsPage query={query} onSearch={handleSearch} />}
    </>
  );
}
