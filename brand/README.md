# Grafický manuál JK (v1.0)

Jednotný vizuální jazyk pro www.jan-kuchar.cz a nástroje **AI Statistiky**. Vychází z hlavního webu: tmavá Spotlight estetika, jedna modrá, skleněné plochy, hairline linky.

## Soubory

| Soubor | Kdy použít |
|---|---|
| `tokens.css` | CSS proměnné `--jk-*` (zdroj pravdy). Lze načíst z `https://www.jan-kuchar.cz/brand/tokens.css` |
| `tailwind-v4.css` | Blok `@theme` pro Tailwind v4 (Chat Inspector, Search Analyzer) |
| `tailwind-preset.js` | `theme.extend` pro Tailwind v3 / Play CDN (Reports Visualizer) |
| `icons/*.svg` | Favicony a ikony aplikací do horní lišty |

## Názvy aplikací

| Doména | Název | `<title>` | Ikona |
|---|---|---|---|
| chatbot-message-reader | Chat **Inspector** | Chat Inspector · AI Statistiky | `icons/chat-inspector.svg` (modrá) |
| search-log-analyzer | Search **Analyzer** | Search Analyzer · AI Statistiky | `icons/search-analyzer.svg` (žlutá) |
| blmr-reports-visualizer | Reports **Visualizer** | Reports Visualizer · AI Statistiky | `icons/reports-visualizer.svg` (zelená) |

Slovní značka: první slovo váha 300, druhé 600 (stejně jako „Jan **Kuchař**“).

## Barvy

- Plochy: `bg #08080c` → `surface-1 #111117` (karty) → `surface-2 #18181f` (vstupy) → `surface-3 #22222b` (hover). Žádné Tailwind `slate`/`gray`.
- Linky: `rgba(255,255,255,.10 / .14 / .22)`, tloušťka 0,5 px (`box-shadow: 0 0 0 .5px … inset`).
- Text: `#f5f5f7`, sekundární 60 %, meta 38 % (jen krátké popisky).
- Akcent: `#0a84ff` (odkazy, ikony, focus), výplň tlačítka `#0071e3` (kvůli kontrastu bílého textu), soft `rgba(10,132,255,.16)`.
- Stav: success `#30d158`, warning `#ff9f0a`, danger `#ff453a`, info `#64d2ff`.
- Grafy v pevném pořadí: `#0a84ff #30d158 #ff9f0a #bf5af2 #ff375f #64d2ff #ffd60a #ac8e68`, mřížka 8 % bílé.
- Gradient `135° #0a84ff → #bf5af2 → #ff375f` jen pro logo JK, avatar a ikony.

## Typografie

Stack `-apple-system, "SF Pro Text", Inter, system-ui` (Inter z Google Fonts 200–700). Mono jen pro data a kód.
Škála: 11 (label, 600) · 12 (meta) · **14 základ** · 16 (perex) · 20 (karta) · 24 (sekce) · 32 (titulek stránky). Nadpisy 600, `letter-spacing: -.02em`.

## Tvar a prostor

Poloměry: 5 kbd · 8 řádky/vstupy · 10 tlačítka · 14 karty · 18 panely/dropzóna · pill vyhledávání a čipy. Mřížka 4 px, okraj 24 px (mobil 16), max. šířka 1200 px.

## Kostra aplikace

1. Horní lišta 56 px, sticky, sklo (`--jk-glass` + blur), spodní linka: logo JK (odkaz na www.jan-kuchar.cz) / ikona aplikace + slovní značka + verze; vpravo kontext a akce.
2. Titulek stránky 24–32 px + podtitul `text-2` 13 px.
3. Prázdný stav: dropzóna `r-xl`, přerušovaný okraj `line-3`, ikona nahrání v kruhu `accent-soft`, nadpis 20/600, popis, jedno primární tlačítko, poznámka 12 px. Při přetažení okraj `accent` a pozadí `accent-soft`.
4. Datový pohled: KPI dlaždice → graf → tabulka (čísla vpravo, `tabular-nums`, český formát).
5. Patička / stavový řádek 12 px `text-3`: „AI Statistiky · © 2026 Jan Kuchař“.

## Pravidla

Dělej: barvy jen z tokenů · hairline místo stínů · stav štítkem s tečkou · česky, v nástrojích vykat, tlačítka jako sloveso · jedno primární tlačítko na obrazovce · `lang="cs"`, `color-scheme: dark`, `theme-color #08080c`.

Nedělej: gradient na tlačítkách a nadpisech · mono kapitálky pro hlášky · patkové písmo · druhý akcent · velké stíny pod kartami · světlý režim · emoji jako ikony v nástrojích.
