import { useEffect, useRef, useState } from 'react'
import { PHASES, WEEKS, BERRIES, SUPPLEMENTS, AVOID, KETO_PRO, KETO_CON, SOURCES } from './data.js'

/* ---------- shopping links ---------- */
const iherb = (kw) => `https://www.iherb.com/search?kw=${encodeURIComponent(kw)}`
const amazon = (kw) => `https://www.amazon.com/s?k=${encodeURIComponent(kw)}`

/* ---------- SVG icons ---------- */
function Icon({ name, color = '#14e0c8' }) {
  const s = { width: '100%', height: '100%', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
  const paths = {
    sun: <g {...s}><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></g>,
    drop: <g {...s}><path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" /><path d="M10 14a2.5 2.5 0 0 0 2.5 2.5" /></g>,
    fish: <g {...s}><path d="M3 12c3-4 7-5 11-5 4 0 6 3 7 5-1 2-3 5-7 5-4 0-8-1-11-5Z" /><path d="M3 12l-1.5-3M3 12l-1.5 3" /><circle cx="16" cy="11" r="1" fill={color} stroke="none" /></g>,
    flask: <g {...s}><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" /><path d="M7.5 15h9" /></g>,
    berry: <g {...s}><circle cx="9" cy="14" r="3.4" /><circle cx="15" cy="14" r="3.4" /><circle cx="12" cy="9" r="3.4" /><path d="M12 5.5V3M12 3c1.5 0 2.5-1 2.5-1" /></g>,
    leaf: <g {...s}><path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16Z" /><path d="M4 20C8 16 12 12 18 7" /></g>,
    shield: <g {...s}><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z" /><path d="M9 12l2 2 4-4" /></g>,
    heart: <g {...s}><path d="M12 20s-7-4.5-9.2-9C1 7.5 3 4.5 6 4.5c2 0 3 1.2 4 2.5 1-1.3 2-2.5 4-2.5 3 0 5 3 3.2 6.5C19 15.5 12 20 12 20Z" /></g>,
    moon: <g {...s}><path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5Z" /></g>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.leaf}</svg>
}

/* ---------- scroll reveal ---------- */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ---------- floating particles ---------- */
function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return
    const cv = ref.current, ctx = cv.getContext('2d')
    let W, H, ps = [], raf
    const sz = () => { W = cv.width = innerWidth; H = cv.height = cv.parentElement.offsetHeight }
    const sp = () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2.4 + .5, vx: Math.random() * .4 - .2, vy: -Math.random() * .4 - .08, a: Math.random() * .5 + .12, c: Math.random() > .8 ? '255,91,138' : (Math.random() > .5 ? '70,180,255' : '20,224,200') })
    sz(); addEventListener('resize', sz)
    for (let i = 0; i < 70; i++) ps.push(sp())
    const dr = () => {
      ctx.clearRect(0, 0, W, H)
      ps.forEach((p) => { p.x += p.vx; p.y += p.vy; p.a -= .0015; if (p.a <= 0 || p.y < -10) { Object.assign(p, sp()); p.y = H + 5 } ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fillStyle = `rgba(${p.c},${p.a})`; ctx.fill() })
      raf = requestAnimationFrame(dr)
    }
    dr()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', sz) }
  }, [])
  return <canvas id="cells" ref={ref} />
}

/* ---------- ECG signature line ---------- */
function Ecg() {
  const trace = useRef(null), scan = useRef(null), grid = useRef(null)
  useEffect(() => {
    let g = ''
    for (let x = 0; x <= 1440; x += 48) g += `<line x1="${x}" y1="0" x2="${x}" y2="320"/>`
    for (let y = 0; y <= 320; y += 40) g += `<line x1="0" y1="${y}" x2="1440" y2="${y}"/>`
    grid.current.innerHTML = g
    const base = 220
    const beat = (x) => `L ${x + 10} ${base} L ${x + 18} ${base - 10} L ${x + 26} ${base + 18} L ${x + 34} ${base - 80} L ${x + 42} ${base + 34} L ${x + 50} ${base} L ${x + 120} ${base}`
    let d = `M 0 ${base}`; for (let x = 0; x < 1440; x += 150) d += ' ' + beat(x)
    const t = trace.current; t.setAttribute('d', d)
    const len = t.getTotalLength(); t.style.strokeDasharray = len; t.style.strokeDashoffset = len
    t.style.transition = 'stroke-dashoffset 3.4s linear'; requestAnimationFrame(() => (t.style.strokeDashoffset = 0))
    let p = 0, raf
    const ride = () => { p = (p + 1.6) % len; const pt = t.getPointAtLength(p); scan.current.setAttribute('cx', pt.x); scan.current.setAttribute('cy', pt.y); raf = requestAnimationFrame(ride) }
    ride()
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <svg className="ecg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <g className="grid" ref={grid} />
      <path className="trace" ref={trace} d="" />
      <circle className="scan" ref={scan} r="5" cx="0" cy="220" />
    </svg>
  )
}

/* ---------- buy buttons ---------- */
function BuyRow({ kw }) {
  return (
    <div className="buyrow">
      <a className="buy ih" href={iherb(kw)} target="_blank" rel="noopener noreferrer">iHerb <span className="ar">↗</span></a>
      <a className="buy az" href={amazon(kw)} target="_blank" rel="noopener noreferrer">Amazon <span className="ar">↗</span></a>
    </div>
  )
}

/* ---------- one week (accordion) ---------- */
function Week({ w, open, onToggle }) {
  const inner = useRef(null)
  const [h, setH] = useState(0)
  useEffect(() => { setH(open ? inner.current.scrollHeight : 0) }, [open])
  return (
    <div className={`week c-${w.color} ${open ? 'open' : ''}`}>
      <button className="week-h" onClick={onToggle} aria-expanded={open}>
        <span className="week-num">{w.n}<small>שבוע</small></span>
        <span className="week-meta">
          <span className="wt">{w.theme}</span>
          <span className="wf">{w.focus}</span>
        </span>
        <span className="week-chev">⌄</span>
      </button>
      <div className="week-body" style={{ maxHeight: h }}>
        <div className="week-inner" ref={inner}>
          <div className="deep why"><b>מדוע זה חשוב — לעומק:</b> {w.why}</div>
          <h4>משימות השבוע</h4>
          {w.tasks.map((t, i) => (
            <div className="task" key={i}><span className="ck">✓</span><span>{t}</span></div>
          ))}
          <span className="pill">{w.tip}</span>
        </div>
      </div>
    </div>
  )
}

/* ============================================================ */
export default function App() {
  useReveal()
  const [openWeek, setOpenWeek] = useState(1)
  const [prog, setProg] = useState(0)
  const [active, setActive] = useState('top')

  useEffect(() => {
    const onScroll = () => {
      const hd = document.getElementById('hd')
      if (hd) hd.classList.toggle('s', scrollY > 40)
      const max = document.body.scrollHeight - innerHeight
      setProg(max > 0 ? (scrollY / max) * 100 : 0)
      const ids = ['top', 'weeks', 'berries', 'supps', 'safety']
      let cur = 'top'
      for (const id of ids) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= innerHeight * 0.4) cur = id }
      setActive(cur)
    }
    addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  const TABS = [
    ['top', 'בית', 'heart'], ['weeks', 'שבועות', 'shield'], ['berries', 'פירות יער', 'berry'],
    ['supps', 'תוספים', 'flask'], ['safety', 'בטיחות', 'sun'],
  ]

  return (
    <>
      <div className="prog" style={{ width: prog + '%' }} />
      <div className="grain" />

      <header id="hd">
        <div className="nav">
          <a href="#top" className="brand">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M2 12h4l2-7 4 14 2-7h2l1.5 3H22" stroke="#14e0c8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            תוכנית<b>·עור</b>
          </a>
          <span className="brand"><span className="w">12 שבועות</span></span>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg" /><Particles /><Ecg />
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />תוכנית תומכת · DLE · זאבת עורית</span>
          <h1>
            <span className="ln"><span>12 שבועות</span></span>
            <span className="ln"><span className="stroke">לעור</span></span>
            <span className="ln"><span>רגוע יותר</span></span>
          </h1>
          <p className="lead">
            תוכנית מעשית שמלווה את הטיפול הרפואי בזאבת עורית — <span className="term">הגנה מהשמש</span>, תזונה אנטי-דלקתית, <span className="term">פירות יער</span> (אובלפיחה, חמוציות), ותוספים מבוססי-ראיות. כל שבוע מסביר לעומק <span className="term">מדוע</span>, ולא רק מה.
          </p>
          <div className="hero-cta">
            <a href="#weeks" className="btn">לתוכנית המלאה ↓</a>
            <a href="#safety" className="btn ghost">בטיחות תוספים</a>
          </div>
          <div className="stats">
            <div className="stat"><b>12</b><span>שבועות מובְנים</span></div>
            <div className="stat"><b>4</b><span>שלבים מצטברים</span></div>
            <div className="stat"><b>6</b><span>תוספים + קישורים</span></div>
          </div>
        </div>
      </section>

      {/* PHASES + WEEKS */}
      <section className="sec wrap" id="weeks">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">1</span>המסע</div>
          <h2 className="sec-title">תוכנית <em>12 השבועות</em></h2>
          <p className="sub">ארבעה שלבים שנבנים זה על זה — לוחצים על כל שבוע כדי לפתוח את ההסבר המעמיק ואת המשימות.</p>
          <div className="phasebar">
            {PHASES.map((p, i) => (
              <div className={`ph ${p.cls}`} key={i}><div className="pn">{p.n}</div><div className="pd">{p.d}</div></div>
            ))}
          </div>
        </div>
        <div className="reveal">
          {WEEKS.map((w) => (
            <Week key={w.n} w={w} open={openWeek === w.n} onToggle={() => setOpenWeek(openWeek === w.n ? 0 : w.n)} />
          ))}
        </div>
      </section>

      {/* BERRIES */}
      <section className="sec wrap" id="berries">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">2</span>פירות יער</div>
          <h2 className="sec-title">פירות <em>היער</em> — נוגדי חמצון</h2>
          <p className="sub">סטרס חמצוני מלבה את הנגעים אחרי חשיפת UV. פירות יער הם מהמקורות המרוכזים ביותר של אנתוציאנינים ופוליפנולים — והם נוגדי-חמצון, לא "מגרי-חיסון", ולכן בטוחים ומועילים בזאבת.</p>
        </div>
        <div className="grid2 reveal">
          {BERRIES.map((b, i) => (
            <div className="pcard berry" key={i}>
              <div className="top">
                <span className="picon"><Icon name={b.icon} color="#ff5b8a" /></span>
                <div><div className="nm">{b.name}</div><div className="lt ltr">{b.latin}</div></div>
              </div>
              <p className="body">{b.body}</p>
              <div className="tagrow">{b.tags.map((t, j) => <span className={`t ${t[0]}`} key={j}>{t[1]}</span>)}</div>
              <BuyRow kw={b.kw} />
            </div>
          ))}
        </div>
      </section>

      {/* SUPPLEMENTS */}
      <section className="sec wrap" id="supps">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">3</span>תוספים</div>
          <h2 className="sec-title">תוספים <em>מבוססי-ראיות</em></h2>
          <p className="sub">תוספים עם בסיס מחקרי בזאבת/עור — כולם "מרגיעי" או "מאזני" חיסון, ולא "מחזקי חיסון". כל כרטיס כולל קישור חיפוש ל-iHerb ול-Amazon. המינונים להמחשה — את המינון בפועל קובע/ת רופא/ה.</p>
        </div>
        <div className="grid2 reveal">
          {SUPPLEMENTS.map((s, i) => (
            <div className="pcard" key={i}>
              <div className="top">
                <span className="picon"><Icon name={s.icon} /></span>
                <div><div className="nm">{s.name}</div><div className="lt ltr">{s.latin}</div><div className="dose">{s.dose}</div></div>
              </div>
              <p className="body">{s.body}</p>
              <div className="tagrow">{s.tags.map((t, j) => <span className={`t ${t[0]}`} key={j}>{t[1]}</span>)}</div>
              <BuyRow kw={s.kw} />
            </div>
          ))}
        </div>
      </section>

      {/* KETO */}
      <section className="sec wrap">
        <div className="scard reveal">
          <div className="sec-tag"><span className="nb">4</span>תזונה</div>
          <h2 className="sec-title">דיאטת <em>קטו</em> — האם כדאי?</h2>
          <p className="sub">השאלה שביקשת לבדוק. התשובה הכנה: יש היגיון מנגנוני ועדויות מוקדמות, אבל הראיות בזאבת עדיין דלות וקיימים סיכונים אמיתיים. הגישה האחראית — גליקמי-נמוך כברירת מחדל, וקטו רק כניסוי מבוקר וקצוב בזמן תחת מעקב.</p>
          <div className="split">
            <div className="col pro"><h5>✓ בעד / היגיון</h5><ul>{KETO_PRO.map((x, i) => <li key={i}><span /><span>{x}</span></li>)}</ul></div>
            <div className="col con"><h5>✕ זהירות / נגד</h5><ul>{KETO_CON.map((x, i) => <li key={i}><span /><span>{x}</span></li>)}</ul></div>
          </div>
          <div className="deep"><b>השורה התחתונה:</b> התחילי בתזונה ים-תיכונית גליקמית-נמוכה (שבועות 5–9). אם רוצים לנסות קטו — כניסוי של 4–6 שבועות בלבד, עם שפע ירקות לא-עמילניים (לשמירת סיבים), שומנים בריאים, ובדיקת פרופיל שומנים לפני ואחרי, בליווי רופא.</div>
        </div>
      </section>

      {/* SAFETY / AVOID */}
      <section className="sec wrap" id="safety">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">5</span>בטיחות</div>
          <h2 className="sec-title">תוספים <em>שכדאי להימנע</em> מהם</h2>
          <p className="sub">החלק הכי חשוב בעמוד הזה. בזאבת המערכת החיסונית כבר תוקפת בטעות — ולכן תוספים "מחזקי חיסון" עלולים להצית התלקחות. אלה תוספים פופולריים שמחקרים קשרו לסיכון מוגבר להתלקחות עור באוטואימוניות.</p>
        </div>
        <div className="avoid reveal">
          <div className="ah">⚠ להימנע / להתייעץ לפני שימוש</div>
          <div className="as">"מחזק חיסון" = בדיוק מה שלא רוצים כשהחיסון כבר היפר-פעיל. תמיד להתייעץ עם הרופא/ה לפני כל תוסף חדש.</div>
          {AVOID.map((a, i) => (
            <div className="avoid-item" key={i}><span className="x">✕</span><span><b>{a.name}</b> — {a.why}</span></div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER + SOURCES */}
      <section className="sec wrap" style={{ paddingTop: 0 }}>
        <div className="disclaimer reveal">
          <div className="dh">⚠ חשוב לקרוא</div>
          מסמך זה הוא חומר עזר חינוכי בלבד — אינו אבחנה, אינו מרשם ואינו תחליף לייעוץ רפואי. זאבת עורית (DLE) מאובחנת ומטופלת על ידי רופא/ה בלבד, לרוב לאחר ביופסיה ובדיקות דם. הגנת שמש, תזונה ותוספים הם <b>שכבת תמיכה</b> סביב הטיפול התרופתי (כמו הידרוקסיכלורוקין וטיפול מקומי) — לא במקומו. חלק מהתוספים מקיימים אינטראקציות עם תרופות או דורשים ניטור — יש להתייעץ עם רופא/ה ורוקח/ת לפני כל שינוי.
          <div className="sources">
            <b>מקורות:</b><br />
            {SOURCES.map((s, i) => (
              <span key={i}><a href={s[1]} target="_blank" rel="noopener noreferrer">{s[0]}</a>{i < SOURCES.length - 1 ? ' · ' : ''}</span>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="brand"><span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M2 12h4l2-7 4 14 2-7h2l1.5 3H22" stroke="#14e0c8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>תוכנית<b>·עור</b></div>
          <p>הוכן כעזר אישי · להביא ולדון עם רופא/ת העור · אינו מהווה ייעוץ רפואי</p>
          <div className="cp">חומר חינוכי להמחשה בלבד · {new Date().getFullYear()}</div>
        </div>
      </footer>

      {/* BOTTOM TAB NAV */}
      <nav className="tabbar">
        {TABS.map(([id, label, ic]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>
            <Icon name={ic} color={active === id ? '#14e0c8' : '#7b8c8a'} />
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}
