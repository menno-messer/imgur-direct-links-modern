# Imgur Direct Links Modern

**Copy image links from an Imgur album in seconds — directly in your browser.**

No app, login, API key, or upload to another website. The script reads links already on the page and prints them in your browser's console.

## How to use

1. Open a **public Imgur album** and scroll down to load its images.
2. Press **F12** (or right-click → **Inspect**) and open **Console**.
3. Copy the code from **[index.js](index.js)**, paste it into the console, and press **Enter**.
4. Your image links appear, one per line. To copy them all in Chrome/Brave, enter `copy(imgurDirectLinks)`.

If your browser blocks pasting, follow its on-screen instructions **only after reading the code and deciding you trust it**. Never paste random code from strangers into the console.

## Privacy

**Runs locally.** This script does not send the extracted links to any extra server, call an external API, or download your images. Imgur itself still handles normal page requests. Intended for public albums only.

## Good to know

- It finds media currently loaded on the page, not necessarily every image in an album. Scroll and run it again if links are missing.
- Some links may be previews rather than full-resolution originals; other page images may occasionally be included.
- Imgur's layout can change. This version has **not yet been live-tested** on all current pages.
- Only reuse images you have the rights to use.

## About

Independent rewrite inspired by [kemalberke/imgurDirectLinks](https://github.com/kemalberke/imgurDirectLinks). Not affiliated with Imgur. Original project code was not copied.

Licensed under [MIT](LICENSE).
