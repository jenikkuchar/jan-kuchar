/* =====================================================================
   JK · přepínač světlého / tmavého režimu  (v1.1)
   Načti v <head> PŘED styly, synchronně (bez defer/async), ať stránka neprobliká:
     <script src="https://www.jan-kuchar.cz/brand/theme.js"></script>
   Chování:
   - výchozí režim podle systému (prefers-color-scheme), dokud uživatel nepřepne
   - volba se pamatuje v localStorage pod klíčem "theme" ("light" | "dark")
   - nastavuje <html data-theme="…"> a <meta name="theme-color">
   - každý prvek s atributem data-theme-toggle přepíná režim po kliknutí
   - zkratka ⌘⇧L / Ctrl+Shift+L
   - po změně vyvolá na document událost "jk-themechange" (detail: "light" | "dark")
   API: jkTheme.get(), jkTheme.set('light' | 'dark'), jkTheme.toggle()
   ===================================================================== */
(() => {
  const KEY = 'theme', COLORS = { dark: '#08080c', light: '#f5f5f7' };
  const root = document.documentElement;
  const mq = matchMedia('(prefers-color-scheme: light)');
  const saved = () => { try { const t = localStorage.getItem(KEY); return t === 'light' || t === 'dark' ? t : null; } catch (e) { return null; } };

  function apply(t){
    root.dataset.theme = t;
    let m = document.querySelector('meta[name="theme-color"]');
    if (!m) { m = document.createElement('meta'); m.name = 'theme-color'; document.head.appendChild(m); }
    m.content = COLORS[t];
    document.dispatchEvent(new CustomEvent('jk-themechange', { detail: t }));
  }
  const get = () => root.dataset.theme;
  function set(t){ try { localStorage.setItem(KEY, t); } catch (e) {} apply(t); }
  const toggle = () => set(get() === 'light' ? 'dark' : 'light');

  apply(saved() || (mq.matches ? 'light' : 'dark'));
  mq.addEventListener('change', e => { if (!saved()) apply(e.matches ? 'light' : 'dark'); });

  document.addEventListener('click', e => { if (e.target.closest('[data-theme-toggle]')) toggle(); });
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'l') { e.preventDefault(); toggle(); }
  });

  window.jkTheme = { get, set, toggle };
})();
