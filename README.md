# Eden's birthday website

A complete, build-free HTML/CSS/JavaScript site. No accounts, packages, analytics, or external fonts. Personalized for Eden with Kody’s letter, nine love notes, and nine unique supplied images.

## Try it

Unzip the folder, then double-click index.html to open it in a browser. Keep the files together. Click the envelope; tap love notes; click added scrapbook photos to enlarge them. Escape or the × closes a photo. The footer lets you replay the envelope.

## Personalize it

1. Open content.js in a text editor such as VS Code.
2. Replace all bracketed sample text. The letter array controls what goes inside the envelope. Each entry is a paragraph. Add or remove entries, preserving commas. Use backticks for multiline paragraphs; escape any literal backtick with a backslash.
3. Edit loveNotes titles and text; add or remove entries freely.
4. Copy photos into photos/ and fill each memory's src, for example "photos/first-date.jpg". Set a descriptive alt and title for accessibility. Photo titles, dates, and captions are not displayed. Do not use computer paths such as C:\\Users or /Users. Filenames are case-sensitive online.
5. Optionally set letterPhoto.src to put an image inside the letter too.
6. Change --paper, --ink, --rose, and --pink at the top of styles.css to adjust colors.
7. Save, refresh the browser, and check on a phone before sharing.

There is no editor screen or upload button on Eden's site. You control the published content by editing content.js and adding photo files. Changes become visible to others only after you upload the changed files to your host. You can also send your text and photos back to ChatGPT for integration.

## GitHub Pages

Create a repository and upload the CONTENTS of this folder so index.html is at the repository root. In the repository Settings → Pages, choose Deploy from a branch, select main and /(root), and save. Use the URL GitHub displays once deployment finishes. No npm install or build step is needed. GitHub may change interface labels over time.

The published site and, on the free public-repository route, the source/photos are public. The noindex meta tag requests search engines not index it; it is not access control. The envelope is a presentation effect, not a lock. Include only material you are comfortable publishing.

## Files

- index.html: page structure
- content.js: all personal content
- styles.css: appearance and responsive layout
- script.js: interactions and rendering
- photos/: your pictures

## Before gifting

Check every photo, verify the envelope and note interactions, and open the published link on her likely device size. No birthday date is required by the code; it opens immediately whenever visited.
