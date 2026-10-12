// Tailwind v3 (i Play CDN) – tailwind.config = { presets: [jkPreset] } nebo obsah vlož do theme.extend
const jkPreset = {
  theme: {
    extend: {
      colors: {
        bg: '#08080c',
        surface: { 1: '#111117', 2: '#18181f', 3: '#22222b' },
        line: { DEFAULT: 'rgba(255,255,255,.10)', strong: 'rgba(255,255,255,.14)' },
        fg: { DEFAULT: '#f5f5f7', muted: 'rgba(235,235,245,.60)', subtle: 'rgba(235,235,245,.38)' },
        accent: { DEFAULT: '#0a84ff', hover: '#409cff', strong: '#0071e3', soft: 'rgba(10,132,255,.16)' },
        success: '#30d158', warning: '#ff9f0a', danger: '#ff453a', info: '#64d2ff',
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
