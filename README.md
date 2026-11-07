# Imgur Direct Links Modern

A small, dependency-free script to list direct media URLs that are **already present in the DOM** of an Imgur album/gallery open in your browser.

Independent implementation, inspired by [kemalberke/imgurDirectLinks](https://github.com/kemalberke/imgurDirectLinks). No original source code has been copied into this repository. This project is not affiliated with or endorsed by Imgur.

## How to use

1. Open a public Imgur album (`imgur.com/a/...`) or gallery (`imgur.com/gallery/...`).
2. Scroll through it to load as many images as possible.
3. Review [index.js](index.js) before running it.
4. Open DevTools (usually F12), choose **Console**, paste the script, and press Enter.
5. The URLs are printed one per line. In Chrome/Brave DevTools you can also enter `copy(imgurDirectLinks)` to copy the results.

**Safety note:** Browser developer tools warn about pasting code because arbitrary code can steal data. Read and understand any snippet first, including this one. Do not disable browser security settings to make it work.

## Behavior and privacy

- Reads image/video/link attributes already visible to the page.
- Keeps URLs from `i.imgur.com` with recognized media extensions and deduplicates them.
- Does not use `fetch`, `XMLHttpRequest`, cookies, localStorage, or remote APIs.
- Does not upload data, download media, modify Imgur content, or collect credentials.
- The results are displayed locally in your DevTools console and assigned to `window.imgurDirectLinks`. Page scripts can technically read that variable while the tab remains open, so **do not run this on private or sensitive pages**. It is intended for public albums.

## Limitations

- Not guaranteed to find every image. Imgur may lazy-load or virtualize items. Scroll and rerun if needed.
- Some links may be thumbnail/preview URLs rather than original-resolution media. The script deliberately does not guess alternate URLs.
- Depending on the page layout, recommendations or other unrelated media can appear in the results.
- It doesn't bypass account permissions, access restrictions, or rate limits.
- Imgur may change its markup. Compatibility with its current website has **not yet been verified in a live browser**.
- Use only for media you have permission to access and reuse. A direct URL does not confer redistribution rights.

## Contributing

Bug reports and improvements welcome. Please avoid submitting private gallery links, credentials, cookies, or personally identifiable information in issues. Do not include copyrighted media in test fixtures without permission.

## License

This repository's original code and documentation are licensed under the [MIT License](LICENSE). Imgur trademarks, website content, and third-party media remain with their respective owners.
