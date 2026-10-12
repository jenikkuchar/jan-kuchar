// Tailwind v3.4+ (i Play CDN) – tailwind.config = { presets: [jkPreset] }, nebo darkMode a theme.extend přenes do vlastního configu
// Barvy jsou CSS proměnné z brand/tokens.css (musí být načtený) – tím fungují v tmavém i světlém režimu.
// Modifikátor průhlednosti (bg-accent/50) s proměnnými nefunguje, použij token *-soft nebo fill.
// Režim nastavuje brand/theme.js; varianta dark: odpovídá <html data-theme="dark">.
const jkPreset = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--jk-bg)',
        surface: { 1: 'var(--jk-surface-1)', 2: 'var(--jk-surface-2)', 3: 'var(--jk-surface-3)' },
        line: { DEFAULT: 'var(--jk-line)', strong: 'var(--jk-line-2)' },
        fg: { DEFAULT: 'var(--jk-text)', muted: 'var(--jk-text-2)', subtle: 'var(--jk-text-3)' },
        fill: { DEFAULT: 'var(--jk-fill)', hover: 'var(--jk-fill-hover)' },
        accent: { DEFAULT: 'var(--jk-accent)', hover: 'var(--jk-accent-hover)', strong: 'var(--jk-accent-strong)', soft: 'var(--jk-accent-soft)' },
        success: 'var(--jk-success)', warning: 'var(--jk-warning)', danger: 'var(--jk-danger)', info: 'var(--jk-info)',
        chart: { 1: '#0a84ff', 2: '#30d158', 3: '#ff9f0a', 4: '#bf5af2', 5: '#ff375f', 6: '#64d2ff', 7: '#ffd60a', 8: '#ac8e68' },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', 'ui-monospace', '"JetBrains Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      borderRadius: { row: '8px', button: '10px', card: '14px', panel: '18px' },
    },
  },
};
if (typeof module !== 'undefined') module.exports = jkPreset;
