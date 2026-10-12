# Grafický manuál JK (v1.1)

Jednotný vizuální jazyk pro www.jan-kuchar.cz a nástroje **AI Statistiky**. Vychází z hlavního webu: Spotlight estetika, jedna modrá, skleněné plochy, hairline linky. Tmavý i světlý režim, výchozí podle systému.

## Soubory

| Soubor | Kdy použít |
|---|---|
| `tokens.css` | CSS proměnné `--jk-*` pro oba režimy (zdroj pravdy). Lze načíst z `https://www.jan-kuchar.cz/brand/tokens.css` |
| `theme.js` | Přepínání světlého / tmavého režimu (sekce Režim). `https://www.jan-kuchar.cz/brand/theme.js` |
| `tailwind-v4.css` | Blok `@theme` pro Tailwind v4 (Chat Inspector, Search Analyzer) |
| `tailwind-preset.js` | `theme.extend` pro Tailwind v3 / Play CDN (Reports Visualizer) |
| `icons/*.svg` | Favicony a ikony aplikací do horní lišty |
| `staticrypt.html` | Šablona přihlašovací obrazovky pro StatiCrypt (`-t`). Ikona a slovní značka se berou z `--template-title` („Název · přihlášení“) |

## Názvy aplikací

| Doména | Název | `<title>` | Ikona |
|---|---|---|---|
| chatbot-message-reader | Chat **Inspector** | Chat Inspector · AI Statistiky | `icons/chat-inspector.svg` (modrá) |
| search-log-analyzer | Search **Analyzer** | Search Analyzer · AI Statistiky | `icons/search-analyzer.svg` (žlutá) |
| blmr-reports-visualizer | Reports **Visualizer** | Reports Visualizer · AI Statistiky | `icons/reports-visualizer.svg` (zelená) |

Všechny tři nástroje jsou **pouze pro přihlášené uživatele** – u odkazů na ně (web, manuál) vždy ikona zámku a text „Pouze pro přihlášené uživatele“.

Slovní značka: první slovo váha 300, druhé 600 (stejně jako „Jan **Kuchař**“).

## Barvy

Hodnoty níže jsou pro tmavý režim. Světlé varianty jsou v `tokens.css` v bloku `[data-theme="light"]` a v tabulce v sekci Režim.

- Plochy: `bg #08080c` → `surface-1 #111117` (karty) → `surface-2 #18181f` (vstupy) → `surface-3 #22222b` (hover). Žádné Tailwind `slate`/`gray`.
- Linky: `rgba(255,255,255,.10 / .14 / .22)`, tloušťka 0,5 px (`box-shadow: 0 0 0 .5px … inset`).
- Text: `#f5f5f7`, sekundární 60 %, meta 38 % (jen krátké popisky).
- Akcent: `#0a84ff` (odkazy, ikony, focus), výplň tlačítka `#0071e3` (kvůli kontrastu bílého textu), soft `rgba(10,132,255,.16)`.
- Stav: success `#30d158`, warning `#ff9f0a`, danger `#ff453a`, info `#64d2ff`.
- Výplně: `fill` (sekundární tlačítko, čip, kbd), `fill-hover`. Nikdy `rgba(255,255,255,…)` natvrdo, rozbije to světlý režim.
- Grafy v pevném pořadí (v obou režimech stejné): `#0a84ff #30d158 #ff9f0a #bf5af2 #ff375f #64d2ff #ffd60a #ac8e68`, mřížka a osy z tokenů `chart-grid`, `chart-axis`.
- Gradient `135° #0a84ff → #bf5af2 → #ff375f` jen pro logo JK, avatar a ikony.

## Typografie

Stack `-apple-system, "SF Pro Text", Inter, system-ui` (Inter z Google Fonts 200–700). Mono jen pro data a kód.
Škála: 11 (label, 600) · 12 (meta) · **14 základ** · 16 (perex) · 20 (karta) · 24 (sekce) · 32 (titulek stránky). Nadpisy 600, `letter-spacing: -.02em`.

## Tvar a prostor

Poloměry: 5 kbd · 8 řádky/vstupy · 10 tlačítka · 14 karty · 18 panely/dropzóna · pill vyhledávání a čipy. Mřížka 4 px, okraj 24 px (mobil 16), max. šířka 1200 px.

## Kostra aplikace

1. Horní lišta 56 px, sticky, sklo (`--jk-glass` + blur), spodní linka: logo JK (odkaz na www.jan-kuchar.cz) / ikona aplikace + slovní značka + verze; vpravo kontext, akce a jako poslední přepínač režimu.
2. Titulek stránky 24–32 px + podtitul `text-2` 13 px.
3. Prázdný stav: dropzóna `r-xl`, přerušovaný okraj `line-3`, ikona nahrání v kruhu `accent-soft`, nadpis 20/600, popis, jedno primární tlačítko, poznámka 12 px. Při přetažení okraj `accent` a pozadí `accent-soft`.
4. Datový pohled: KPI dlaždice → graf → tabulka (čísla vpravo, `tabular-nums`, český formát).
5. Patička / stavový řádek 12 px `text-3`: „AI Statistiky · © 2026 Jan Kuchař“.

## Režim (světlý / tmavý)

Každá aplikace podporuje oba režimy a má přepínač. Chování je všude stejné jako na hlavním webu.

**Kde**
- Aplikace: v horní liště úplně vpravo, za akcemi, odsazený 8 px od posledního tlačítka. Na mobilu zůstává v liště (nikdy ne v menu).
- Web bez lišty (www.jan-kuchar.cz): plovoucí v pravém horním rohu, 14 px od okrajů (+ `safe-area-inset`).
- Jinde (patička, nastavení, menu) ho nedávej. Volitelně navíc jedna položka „Vzhled“ se segmentovým přepínačem Světlý / Tmavý ve vyhledávání (⌘K), jako na webu.

**Jak vypadá**
- Kruhové ikonové tlačítko: 32 px v liště aplikace, 38 px plovoucí na webu. Ikona 18 px, tah 1,8, `currentColor`.
- Pozadí `fill` (na webu `glass` + blur), hairline `line-2`, ikona `text-2`, hover `text` + `fill-hover`, focus `--jk-focus`.
- Ikona ukazuje režim, **do kterého se přepne**: v tmavém slunce, ve světlém měsíc. Bez textu.
- `aria-label="Přepnout světlý / tmavý režim"`, `title="Přepnout režim (⌘⇧L)"`.

**Jak se chová**
- Výchozí režim podle systému (`prefers-color-scheme`); dokud uživatel nepřepne, sleduje i změny systému.
- Kliknutí přepne a volbu uloží do `localStorage` pod klíčem `theme` (`light` / `dark`). Volba platí pro danou doménu.
- Zkratka ⌘⇧L / Ctrl+Shift+L.
- Režim se nastaví ještě před vykreslením (skript v `<head>`), stránka nesmí probliknout. Mění se i `<meta name="theme-color">` (`#08080c` / `#f5f5f7`).
- Přechod barev max. 0,3 s, při `prefers-reduced-motion` žádný.

**Kód** – vše řeší `theme.js`, stačí tlačítko s atributem `data-theme-toggle`:

```html
<head>
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#08080c">
  <script src="https://www.jan-kuchar.cz/brand/theme.js"></script>  <!-- synchronně, před styly -->
  <link rel="stylesheet" href="https://www.jan-kuchar.cz/brand/tokens.css">
</head>
…
<button class="theme-toggle" data-theme-toggle aria-label="Přepnout světlý / tmavý režim" title="Přepnout režim (⌘⇧L)">
  <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
  <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>
</button>
```

```css
.theme-toggle{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;flex:none;
  color:var(--jk-text-2);background:var(--jk-fill);box-shadow:var(--jk-hairline);border:0;cursor:pointer;
  transition:color var(--jk-dur-fast),background var(--jk-dur-fast)}
.theme-toggle:hover{color:var(--jk-text);background:var(--jk-fill-hover)}
.theme-toggle:focus-visible{outline:none;box-shadow:var(--jk-focus)}
.theme-toggle svg{width:18px;height:18px}
[data-theme="light"] .theme-toggle .sun,[data-theme="dark"] .theme-toggle .moon{display:none}
```

V Reactu stačí stejné tlačítko (`data-theme-toggle` funguje přes delegaci událostí). Na změnu režimu (např. překreslení grafu) reaguj událostí `jk-themechange` na `document`, aktuální režim vrací `jkTheme.get()`.

**Světlé hodnoty**

| Token | Tmavý | Světlý |
|---|---|---|
| bg / surface-1 / 2 / 3 | `#08080c #111117 #18181f #22222b` | `#f5f5f7 #ffffff #f2f2f5 #e8e8ed` |
| glass | `rgba(32,32,40,.72)` | `rgba(255,255,255,.72)` |
| line / line-2 / line-3 | bílá 10 / 14 / 22 % | černá 8 / 10 / 18 % |
| text / text-2 / text-3 | `#f5f5f7`, 60 %, 38 % | `#1d1d1f`, `rgba(60,60,67,.62)`, `.42` |
| fill / fill-hover | bílá 7 / 12 % | černá 5 / 9 % |
| accent / hover | `#0a84ff` / `#409cff` | `#007aff` / `#0062cc` |
| accent-strong (tlačítko) | `#0071e3` | `#0071e3` |
| success / warning / danger / info | `#30d158 #ff9f0a #ff453a #64d2ff` | `#248a3d #c93400 #d70015 #0071a4` |
| stín popoveru | černá 80 % | černá 18 % |

Značka (gradient, dlaždice aplikací, logo JK), série grafů, typografie a tvary se nemění.

## Pravidla

Dělej: barvy jen z tokenů · hairline místo stínů · stav štítkem s tečkou · česky, v nástrojích vykat, tlačítka jako sloveso · jedno primární tlačítko na obrazovce · `lang="cs"`, `color-scheme: dark light`, oba režimy s přepínačem podle sekce Režim · každou obrazovku zkontroluj v obou režimech.

Nedělej: gradient na tlačítkách a nadpisech · mono kapitálky pro hlášky · patkové písmo · druhý akcent · velké stíny pod kartami · barvy natvrdo mimo tokeny (`#fff`, `rgba(255,255,255,…)`) · vlastní přepínač režimu jinde nebo jinak než podle manuálu · emoji jako ikony v nástrojích.
