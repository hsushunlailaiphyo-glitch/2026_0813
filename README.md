# for nann wai 🤍

A birthday site for Nann Wai — 28 September, Okayama.

It shows a **countdown** until midnight JST on the 28th, then opens by itself
and stays open forever. The countdown resets each year to her next birthday.

---

## The only thing you need to know

**Everything on the site — every letter, photo and song — lives in one file:**

```
assets/js/content.js
```

Open it, change the words between the `"quotes"`, save. That's the whole job.
You never need to touch the other files.

---

## How to edit it (no terminal, no Claude needed)

The easiest way, from your phone or laptop:

1. Go to your repository on **github.com**
2. Click into `assets` → `js` → `content.js`
3. Click the **pencil ✏️ icon** (top right)
4. Change the text
5. Scroll down, click **Commit changes**

Cloudflare rebuilds the site automatically in about 30 seconds. Refresh and it's live.

> **If the site ever goes blank after an edit**, you deleted a comma, a quote or
> a bracket. On GitHub, open the file → **History** → click the version before
> your change → **Revert**. Nothing is ever permanently broken.

---

## How to add photos

1. On GitHub, open the **`photos`** folder → **Add file** → **Upload files**
2. Drag your pictures in → **Commit changes**
3. Open `assets/js/content.js` and add one line per photo inside `photos: [ ]`:

```js
photos: [
  { src: "photos/nann-01.jpg", caption: "the night we didn't sleep" },
  { src: "photos/nann-02.jpg", caption: "okayama, spring" },
],
```

4. Set `emptySlots: 0` once you have real photos in.

**Tips**
- Rename files to simple lowercase names, no spaces: `nann-01.jpg`, not `IMG 2839 (1).JPG`
- Keep each photo under ~1 MB if you can. Shrink big ones at [squoosh.app](https://squoosh.app) — free, works in the browser, takes 10 seconds each.
- Aim for **under 100 photos total**. That keeps the site instant on her phone.

---

## How to add the music links

A YouTube address looks like `youtube.com/watch?v=`**`dQw4w9WgXcQ`**

Copy the bit after `v=` into `youtubeId`:

```js
{ title: "seasons", artist: "wave to earth", youtubeId: "dQw4w9WgXcQ" },
```

Leave it as `""` and the song still shows — clicking it just searches YouTube.
Nothing looks broken either way.

---

## Secret addresses (for you, not for her)

Add these to the end of the site's address:

| Address | What it does |
|---|---|
| `?preview` | Skip the countdown and see the finished site right now |
| `?theme=rose` | Preview any theme without editing anything |
| `?reset` | Put the countdown back and re-seal all the envelopes |

Example: `https://nann.pages.dev/?preview`

**Test with `?preview` often while you write.** It's the only way to see what
she'll see on the day.

---

## Putting it online (Cloudflare Pages — free, ~5 minutes, once)

1. Go to **dash.cloudflare.com** → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Choose this repository
3. Leave **every build setting empty**:
   - Framework preset: **None**
   - Build command: **(leave blank)**
   - Build output directory: **`/`**
4. Click **Save and Deploy**

You'll get a free address like `nann-wai.pages.dev`. It's yours forever, no card needed.

From then on, **every time you commit on GitHub the site updates itself.**

> Want a nicer address later? You can add a real domain (~$12/year) at any time
> without rebuilding anything. The free address keeps working too.

---

## Will this still exist in ten years?

Yes, if you do three small things:

| Part | How long it lasts | What would kill it |
|---|---|---|
| The code (GitHub) | Forever, free | Deleting the repo |
| Hosting (Cloudflare Pages) | Forever, free, no expiry | Deleting the account |
| The photos | As long as the repo | Nothing — they're inside it |
| A custom domain (optional) | Until you stop paying | A missed renewal email |

**The three things:**
1. Don't delete the GitHub repo. That's the master copy — code *and* photos.
2. Keep a second copy of the original photos somewhere else (Google Drive). Repos are safe, but never trust one copy of anything.
3. Give Nann access to the GitHub repo. If it's only yours, it dies with your attention. If it's hers, it's hers.

Nothing here rots on its own. There's no server to maintain, no database to
back up, no npm packages to update, no bill to pay. This is why plain HTML was
the right choice — it will still open in a browser in 2040.

---

## What she can do herself, today

- **Change the colours** — the "colours" button, top right. Six themes. It remembers her choice.
- **Open the sealed letters** — the site quietly records the date she first opened each one, so it becomes a record of her hard days.
- Everything works offline-ish, on any phone, with no login.

## What she *can't* do yet (phase 2)

Writing her own diary entries and uploading her own camera work needs a real
database — that's Cloudflare D1 + R2, and it's a separate build after the
birthday. This version is deliberately the gift, done properly, on time.

---

## Your checklist before 28 September

- [ ] Rewrite all 5 letters in `letters:` with your real words
- [ ] Rewrite the 8 `openWhen:` letters (or ask Sutaki, Phyu, Pann Wai and Tho to write some)
- [ ] Upload photos + add them to `photos:`, then set `emptySlots: 0`
- [ ] Paste the YouTube ids for the wave to earth songs
- [ ] Check it on your own phone with `?preview`
- [ ] Deploy to Cloudflare Pages **at least a week early** so nothing is rushed on the day
- [ ] Visit `?reset` on your phone afterwards so *you* see the countdown too
- [ ] Send her the link on the 28th

**Message Sutaki, Phyu, Pann Wai and Tho today.** People need a week to write
something heartfelt — that's your real deadline, not the code.

---

## The files, briefly

```
index.html              the page skeleton
assets/css/style.css    all the design + the six colour themes
assets/js/content.js    ← everything you edit
assets/js/app.js        the countdown + the interactions
photos/                 your pictures go here
```
