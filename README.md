# jan-kuchar.cz

Osobní stránka ve stylu macOS Spotlight – jméno a vyhledávací pole, přes které se dohledají informace. Jen dark mode, jeden statický `index.html`, žádný build.

- Texty „Kdo jsem“, „Co dělám“ a „Zájmy“ jsou v HTML v `<div id="obsah">` (vizuálně skryté, kvůli vyhledávačům a AI) – Spotlight je načítá odtud. Ostatní položky, e-mail a odkazy jsou v bloku `Obsah – uprav podle sebe` na začátku `<script>`.
- SEO/AEO: strukturovaná data JSON-LD (`Person`) v `<head>`, `robots.txt`, `sitemap.xml` a `llms.txt` – při změně textů aktualizuj i `llms.txt`.
- Hosting: GitHub Pages (Settings → Pages → branch `main`, root). Soubor `CNAME` nastavuje doménu `jan-kuchar.cz`.
- DNS: A záznamy na `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (+ `CNAME www → jenikkuchar.github.io`).
