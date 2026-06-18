import { useEffect, useRef, useState } from 'react'
import { PHASES, WEEKS, BERRIES, SUPPLEMENTS, BIOHACK, AVOID, KETO_PRO, KETO_CON, SOURCES, UI } from './data.js'

/* ---------- i18n helper ---------- */
// Every translatable field is { he, en, ru }. pick() returns the active language,
// falling back to Hebrew, and passes plain strings/values through unchanged.
const pick = (o, lang) =>
  o && typeof o === 'object' && !Array.isArray(o) && ('he' in o || 'en' in o || 'ru' in o)
    ? (o[lang] ?? o.he)
    : o

const LANGS = [['he', 'עב'], ['en', 'EN'], ['ru', 'RU']]

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
    capsule: <g {...s}><path d="M4 14 L14 4a4 4 0 0 1 6 6L10 20a4 4 0 0 1-6-6Z" /><path d="M9 9l6 6" /></g>,
    sprout: <g {...s}><path d="M12 20v-8" /><path d="M12 12C12 9 9.8 6.8 6.5 6.8 6.5 10 8.8 12 12 12Z" /><path d="M12 12c0-3 2.2-5.2 5.5-5.2C17.5 10 15.2 12 12 12Z" /></g>,
    sparkle: <g {...s}><path d="M12 3l1.9 5.4L19 10l-5.1 1.6L12 17l-1.9-5.4L5 10l5.1-1.6L12 3Z" /></g>,
    mineral: <g {...s}><path d="M12 3l8 6-8 12L4 9l8-6Z" /><path d="M4 9h16M12 3v18" /></g>,
    dna: <g {...s}><path d="M7 3c0 5 10 5 10 10s-10 5-10 10" /><path d="M17 3c0 5-10 5-10 10s10 5 10 10" /><path d="M8.5 6h7M7 12h10M8.5 18h7" /></g>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.leaf}</svg>
}

/* ---------- scroll reveal ---------- */
function useReveal(dep) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
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
function Week({ w, open, onToggle, lang }) {
  const inner = useRef(null)
  const [h, setH] = useState(0)
  const t = (o) => pick(o, lang)
  useEffect(() => { setH(open ? inner.current.scrollHeight : 0) }, [open, lang])
  return (
    <div className={`week c-${w.color} ${open ? 'open' : ''}`}>
      <button className="week-h" onClick={onToggle} aria-expanded={open}>
        <span className="week-num">{w.n}<small>{t(UI.weekWord)}</small></span>
        <span className="week-meta">
          <span className="wt">{t(w.theme)}</span>
          <span className="wf">{t(w.focus)}</span>
        </span>
        <span className="week-chev">⌄</span>
      </button>
      <div className="week-body" style={{ maxHeight: h }}>
        <div className="week-inner" ref={inner}>
          <div className="deep why"><b>{t(UI.whyLabel)}</b> {t(w.why)}</div>
          <h4>{t(UI.tasksLabel)}</h4>
          {w.tasks.map((tk, i) => (
            <div className="task" key={i}><span className="ck">✓</span><span>{t(tk)}</span></div>
          ))}
          <span className="pill">{t(w.tip)}</span>
        </div>
      </div>
    </div>
  )
}

/* ============================================================ */
export default function App() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lealife_lang') || 'he' } catch { return 'he' }
  })
  const t = (o) => pick(o, lang)
  useReveal(lang)
  const [openWeek, setOpenWeek] = useState(1)
  const [prog, setProg] = useState(0)
  const [active, setActive] = useState('top')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr'
    try { localStorage.setItem('lealife_lang', lang) } catch {}
  }, [lang])

  useEffect(() => {
    const onScroll = () => {
      const hd = document.getElementById('hd')
      if (hd) hd.classList.toggle('s', scrollY > 40)
      const max = document.body.scrollHeight - innerHeight
      setProg(max > 0 ? (scrollY / max) * 100 : 0)
      const ids = ['top', 'weeks', 'berries', 'supps', 'biohack', 'safety']
      let cur = 'top'
      for (const id of ids) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= innerHeight * 0.4) cur = id }
      setActive(cur)
    }
    addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  const TABS = [
    ['top', UI.tabHome, 'heart'], ['weeks', UI.tabWeeks, 'shield'], ['berries', UI.tabBerries, 'berry'],
    ['supps', UI.tabSupps, 'flask'], ['biohack', UI.tabBiohack, 'dna'], ['safety', UI.tabSafety, 'sun'],
  ]

  return (
    <>
      <div className="prog" style={{ width: prog + '%' }} />
      <div className="grain" />

      <header id="hd">
        <div className="nav">
          <a href="#top" className="brand">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M2 12h4l2-7 4 14 2-7h2l1.5 3H22" stroke="#14e0c8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            {t(UI.brandMain)}<b>{t(UI.brandAccent)}</b>
          </a>
          <div className="langsw" role="group" aria-label="language">
            {LANGS.map(([code, label]) => (
              <button key={code} className={lang === code ? 'on' : ''} onClick={() => setLang(code)} aria-pressed={lang === code}>{label}</button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg" /><Particles /><Ecg />
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />{t(UI.eyebrow)}</span>
          <h1>
            <span className="ln"><span>{t(UI.heroL1)}</span></span>
            <span className="ln"><span className="stroke">{t(UI.heroL2)}</span></span>
            <span className="ln"><span>{t(UI.heroL3)}</span></span>
          </h1>
          <p className="lead">{t(UI.lead)}</p>
          <div className="hero-cta">
            <a href="#weeks" className="btn">{t(UI.ctaPrimary)}</a>
            <a href="#safety" className="btn ghost">{t(UI.ctaGhost)}</a>
          </div>
          <div className="stats">
            <div className="stat"><b>12</b><span>{t(UI.statWeeks)}</span></div>
            <div className="stat"><b>4</b><span>{t(UI.statPhases)}</span></div>
            <div className="stat"><b>40+</b><span>{t(UI.statItems)}</span></div>
          </div>
        </div>
      </section>

      {/* PHASES + WEEKS */}
      <section className="sec wrap" id="weeks">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">1</span>{t(UI.tagJourney)}</div>
          <h2 className="sec-title">{t(UI.titleWeeksA)}<em>{t(UI.titleWeeksEm)}</em>{t(UI.titleWeeksB)}</h2>
          <p className="sub">{t(UI.subWeeks)}</p>
          <div className="phasebar">
            {PHASES.map((p, i) => (
              <div className={`ph ${p.cls}`} key={i}><div className="pn">{t(p.n)}</div><div className="pd">{t(p.d)}</div></div>
            ))}
          </div>
        </div>
        <div className="reveal">
          {WEEKS.map((w) => (
            <Week key={w.n} w={w} lang={lang} open={openWeek === w.n} onToggle={() => setOpenWeek(openWeek === w.n ? 0 : w.n)} />
          ))}
        </div>
      </section>

      {/* BERRIES */}
      <section className="sec wrap" id="berries">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">2</span>{t(UI.tagBerries)}</div>
          <h2 className="sec-title">{t(UI.titleBerriesA)}<em>{t(UI.titleBerriesEm)}</em>{t(UI.titleBerriesB)}</h2>
          <p className="sub">{t(UI.subBerries)}</p>
        </div>
        <div className="grid2 reveal">
          {BERRIES.map((b, i) => (
            <div className="pcard berry" key={i}>
              <div className="top">
                <span className="picon"><Icon name={b.icon} color="#ff5b8a" /></span>
                <div><div className="nm">{t(b.name)}</div><div className="lt ltr">{b.latin}</div></div>
              </div>
              <p className="body">{t(b.body)}</p>
              <div className="tagrow">{b.tags.map((tg, j) => <span className={`t ${tg[0]}`} key={j}>{t(tg[1])}</span>)}</div>
              <BuyRow kw={b.kw} />
            </div>
          ))}
        </div>
      </section>

      {/* SUPPLEMENTS */}
      <section className="sec wrap" id="supps">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">3</span>{t(UI.tagSupps)}</div>
          <h2 className="sec-title">{t(UI.titleSuppsA)}<em>{t(UI.titleSuppsEm)}</em>{t(UI.titleSuppsB)}</h2>
          <p className="sub">{t(UI.subSupps)}</p>
        </div>
        <div className="grid2 reveal">
          {SUPPLEMENTS.map((s, i) => (
            <div className="pcard" key={i}>
              <div className="top">
                <span className="picon"><Icon name={s.icon} /></span>
                <div><div className="nm">{t(s.name)}</div><div className="lt ltr">{s.latin}</div><div className="dose">{t(s.dose)}</div></div>
              </div>
              <p className="body">{t(s.body)}</p>
              <div className="tagrow">{s.tags.map((tg, j) => <span className={`t ${tg[0]}`} key={j}>{t(tg[1])}</span>)}</div>
              <BuyRow kw={s.kw} />
            </div>
          ))}
        </div>
      </section>

      {/* BIOHACKING */}
      <section className="sec wrap" id="biohack">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">4</span>{t(UI.tagBiohack)}</div>
          <h2 className="sec-title">{t(UI.titleBiohackA)}<em>{t(UI.titleBiohackEm)}</em>{t(UI.titleBiohackB)}</h2>
          <p className="sub">{t(UI.subBiohack)}</p>
          <div className="deep">
            <b>{t(UI.biohackDeepA)}</b>{t(UI.biohackDeepBody)}<a href="#safety" style={{ color: 'var(--sky)', borderBottom: '1px solid rgba(70,180,255,.3)' }}>{t(UI.biohackDeepLink)}</a>.
          </div>
        </div>
        {BIOHACK.map((grp, gi) => (
          <div className="bgroup reveal" key={gi}>
            <div className="bgroup-h">
              <span className="bgi"><Icon name={grp.icon} /></span>
              <span className="bgt">{t(grp.group)}</span>
            </div>
            {grp.intro && <p className="bgroup-i">{t(grp.intro)}</p>}
            <div className="grid2">
              {grp.items.map((s, i) => (
                <div className="pcard" key={i}>
                  <div className="top">
                    <span className="picon"><Icon name={s.icon} /></span>
                    <div><div className="nm">{t(s.name)}</div><div className="lt ltr">{s.latin}</div><div className="dose">{t(s.dose)}</div></div>
                  </div>
                  <p className="body">{t(s.body)}</p>
                  <div className="tagrow">{s.tags.map((tg, j) => <span className={`t ${tg[0]}`} key={j}>{t(tg[1])}</span>)}</div>
                  <BuyRow kw={s.kw} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* KETO */}
      <section className="sec wrap">
        <div className="scard reveal">
          <div className="sec-tag"><span className="nb">5</span>{t(UI.tagDiet)}</div>
          <h2 className="sec-title">{t(UI.titleKetoA)}<em>{t(UI.titleKetoEm)}</em>{t(UI.titleKetoB)}</h2>
          <p className="sub">{t(UI.subKeto)}</p>
          <div className="split">
            <div className="col pro"><h5>{t(UI.ketoProH)}</h5><ul>{KETO_PRO.map((x, i) => <li key={i}><span /><span>{t(x)}</span></li>)}</ul></div>
            <div className="col con"><h5>{t(UI.ketoConH)}</h5><ul>{KETO_CON.map((x, i) => <li key={i}><span /><span>{t(x)}</span></li>)}</ul></div>
          </div>
          <div className="deep"><b>{t(UI.ketoBottomA)}</b>{t(UI.ketoBottomBody)}</div>
        </div>
      </section>

      {/* SAFETY / AVOID */}
      <section className="sec wrap" id="safety">
        <div className="reveal">
          <div className="sec-tag"><span className="nb">6</span>{t(UI.tagSafety)}</div>
          <h2 className="sec-title">{t(UI.titleSafetyA)}<em>{t(UI.titleSafetyEm)}</em>{t(UI.titleSafetyB)}</h2>
          <p className="sub">{t(UI.subSafety)}</p>
        </div>
        <div className="avoid reveal">
          <div className="ah">{t(UI.avoidHeader)}</div>
          <div className="as">{t(UI.avoidSub)}</div>
          {AVOID.map((a, i) => (
            <div className="avoid-item" key={i}><span className="x">✕</span><span><b>{t(a.name)}</b> — {t(a.why)}</span></div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER + SOURCES */}
      <section className="sec wrap" style={{ paddingTop: 0 }}>
        <div className="disclaimer reveal">
          <div className="dh">{t(UI.disclaimerH)}</div>
          {t(UI.disclaimerBody)}
          <div className="sources">
            <b>{t(UI.sourcesLabel)}</b><br />
            {SOURCES.map((s, i) => (
              <span key={i}><a href={s[1]} target="_blank" rel="noopener noreferrer">{s[0]}</a>{i < SOURCES.length - 1 ? ' · ' : ''}</span>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="brand"><span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M2 12h4l2-7 4 14 2-7h2l1.5 3H22" stroke="#14e0c8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>{t(UI.brandMain)}<b>{t(UI.brandAccent)}</b></div>
          <p>{t(UI.footerTagline)}</p>
          <div className="cp">{t(UI.footerCopy)} · {new Date().getFullYear()}</div>
        </div>
      </footer>

      {/* BOTTOM TAB NAV */}
      <nav className="tabbar">
        {TABS.map(([id, label, ic]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>
            <Icon name={ic} color={active === id ? '#14e0c8' : '#7b8c8a'} />
            {t(label)}
          </a>
        ))}
      </nav>
    </>
  )
}
