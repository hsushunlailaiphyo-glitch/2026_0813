/* ==========================================================================
   ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT.
   ==========================================================================

   Every word, photo and song on the website comes from this file.

   THREE RULES so you never break it:
     1. Text goes inside "quotes".
     2. If your text contains an apostrophe (it's, don't), that's fine —
        just make sure the quotes at the START and END are double quotes.
     3. Every item ends with a comma ,   Keep the commas where they are.

   If the site ever goes blank after an edit, you deleted a comma,
   a quote or a bracket. Undo your last change and it will come back.
   ========================================================================== */

const CONTENT = {

  /* ------------------------------------------------------------------
     1. HER  +  THE COLOURS
     ------------------------------------------------------------------ */

  name: "Nann Wai",
  fullName: "Nann Wai Wai",

  // Her birthday. Month 9 = September. The countdown repeats every year.
  birthday: { month: 9, day: 28 },
  birthYear: 2002,
  timezone: "Asia/Tokyo",   // countdown unlocks at midnight in Japan

  /* Pick the starting colour theme. She can change it herself with the
     "colours" button in the top-right corner, and it remembers her choice.

     Choose one:  "blush"     baby pink, soft and sweet   ← the default
                  "sky"       baby blue
                  "lavender"  soft purple
                  "mint"      soft green
                  "butter"    warm cream
                  "cherry"    her red, softened
                  "midnight"  soft dark, nice for reading at 2am   */
  theme: "blush",


  /* ------------------------------------------------------------------
     2. THE COUNTDOWN SCREEN (what she sees before Sep 28)
     ------------------------------------------------------------------ */

  gate: {
    eyebrow: "something is waiting for",
    note: "come back on the 28th. it opens by itself.",
    signature: "— shun, sutaki & phyu",
  },


  /* ------------------------------------------------------------------
     3. THE FIRST SCREEN (after it unlocks)
     ------------------------------------------------------------------ */

  hero: {
    eyebrow: "september 28",
    title: "Nann Wai",
    subtitle: "twenty-four, and still the warmest person we know",
    // Each "..." below is one paragraph. Add or remove as you like.
    body: [
      "This is not a card. It is a small room we built for you, and it stays open all year.",
      "There are letters inside from the five people who love you most. Some of them are sealed — you'll know when to open those.",
    ],
  },


  /* ------------------------------------------------------------------
     4. LETTERS FROM THE FIVE OF YOU
     ------------------------------------------------------------------
     ✏️ REPLACE every `body` below with your real words.
     The placeholder text is deliberately gentle so that if you run out
     of time, nothing on the site reads as unfinished — but please
     replace it. Your real words are the whole point.

     `preview` is the 2 lines shown on the card before she clicks.
     `body` is the letter itself — one "..." per paragraph.
     ------------------------------------------------------------------ */

  lettersTitle: "letters, from the five of us",
  lettersLede: "Five people wrote to you. Take your time — they are not going anywhere.",

  letters: [
    {
      from: "Shun",
      role: "your friend",
      preview: "I have wanted to tell you these things for a long time, and a birthday felt like a good excuse.",
      body: [
        "Nann Wai,",
        "I have wanted to tell you these things for a long time, and a birthday felt like a good excuse to finally do it properly.",
        "You are the person who notices. When someone in our group goes quiet, you are always the first one to ask why. I don't think you know how rare that is.",
        "Thank you for every time you carried something heavy without telling anyone. I hope this year is lighter for you.",
        "Happy birthday.",
      ],
      signature: "shun",
    },
    {
      from: "Sutaki",
      role: "your friend",
      preview: "Happy birthday to the one who keeps all of us together without ever making it look like work.",
      body: [
        "Nann Wai,",
        "Happy birthday to the one who keeps all of us together without ever making it look like work.",
        "You have this way of making people feel like they arrived somewhere safe. I hope this year gives you back everything you've been quietly giving away.",
        "I'm so glad you're mine to grow old with.",
      ],
      signature: "sutaki",
    },
    {
      from: "Phyu",
      role: "your friend",
      preview: "Some people are kind because it is polite. You are kind because you actually mean it.",
      body: [
        "Nann Wai,",
        "Some people are kind because it is polite. You are kind because you actually mean it, and I have watched you do it for years now.",
        "You are so much stronger than you give yourself credit for. Independent, stubborn in the best way, and softer than you let people see.",
        "Happy birthday. Please be as good to yourself as you are to us.",
      ],
      signature: "phyu",
    },
    {
      from: "Pann Wai",
      role: "your little sister",
      preview: "I got the best one. I have known that since I was small and I still know it now.",
      body: [
        "To my sister,",
        "I got the best one. I have known that since I was small and I still know it now.",
        "Thank you for going first at everything so that it would be less scary for me.",
        "Happy birthday. I love you.",
      ],
      signature: "pann wai",
    },
    {
      from: "Tho",
      role: "ko aung thukha",
      preview: "Of all the ordinary days, the best ones are the ones with you in them.",
      body: [
        "Nann Wai,",
        "Of all the ordinary days, the best ones are the ones with you in them.",
        "Happy birthday, my love. Here's to another year of your laugh, your camera, and your terrible music timing.",
        "I'm proud of you. Always.",
      ],
      signature: "tho",
    },
  ],


  /* ------------------------------------------------------------------
     5. "OPEN WHEN" LETTERS
     ------------------------------------------------------------------
     Sealed envelopes she opens on the day she needs them.
     The site quietly remembers the date she first opened each one.

     ✏️ REPLACE the `body` of each. Whoever writes it goes in `signature`.
     Feel free to delete any you don't want, or add new ones by copying
     a block. Keep the `id` unique — that's how the site remembers.
     ------------------------------------------------------------------ */

  openWhenTitle: "open when...",
  openWhenLede: "Eight sealed letters. Don't read them all today. Save them for the days that need them.",
  openWhenFoot: "we'll keep adding to these. it's never going to be finished.",

  openWhen: [
    {
      id: "tired",
      title: "you are tired",
      body: [
        "Stop. Whatever it is, it can wait until tomorrow.",
        "You do not have to earn rest. You are allowed to be tired without having a good enough reason for it.",
        "Drink some water. Put the phone down after this. We'll still be here in the morning.",
      ],
      signature: "shun",
    },
    {
      id: "alone",
      title: "you feel alone",
      body: [
        "You are not. You just can't feel us from where you're standing right now.",
        "There are five people who would pick up if you called at 3am and not one of them would be annoyed about it. Not one.",
        "Read this again. Then message one of us. That's the whole assignment.",
      ],
      signature: "sutaki",
    },
    {
      id: "cantsleep",
      title: "you can't sleep",
      body: [
        "Nothing has to be solved tonight. Whatever your brain is chewing on at this hour, it will be a smaller thing in daylight. It always is.",
        "Put on something soft. Let the room be dark. You are safe.",
        "Goodnight, Nann Wai.",
      ],
      signature: "phyu",
    },
    {
      id: "missus",
      title: "you miss us",
      body: [
        "We miss you too. Constantly, and usually at inconvenient times.",
        "Distance hasn't done anything to this. We are exactly where you left us.",
        "Scroll up. Look at the photos. Then come back and tell us you miss us — we like hearing it.",
      ],
      signature: "shun, sutaki & phyu",
    },
    {
      id: "misshome",
      title: "you miss home",
      body: [
        "It's allowed to hurt. Missing home isn't weakness and it isn't ungratefulness for where you are.",
        "You carry it with you anyway — in how you talk, how you feed people, how you love.",
        "Home is not somewhere behind you. Some of it is right here reading this with you.",
      ],
      signature: "pann wai",
    },
    {
      id: "proud",
      title: "you are proud of yourself",
      body: [
        "GOOD. Say it out loud. Tell somebody. Tell all of us.",
        "You are so quick to make yourself small about your own wins, so this letter is here to make you sit in it for a minute.",
        "You did that. Nobody did it for you.",
      ],
      signature: "tho",
    },
    {
      id: "laugh",
      title: "you need to laugh",
      body: [
        "Think about the most unhinged thing one of us has ever done in front of you.",
        "You already smiled, didn't you.",
        "Okay — now go find one of us and demand entertainment. We're contractually obligated.",
      ],
      signature: "sutaki",
    },
    {
      id: "doubt",
      title: "you doubt yourself",
      body: [
        "The voice telling you you're not good enough has been lying to you for years and it has never once been right.",
        "Look at what you've built. Look at who chose to stay near you. That is the evidence. The doubt is not.",
        "We are certain about you, even on the days you aren't.",
      ],
      signature: "all of us",
    },
  ],


  /* ------------------------------------------------------------------
     6. PHOTOS
     ------------------------------------------------------------------
     HOW TO ADD A PHOTO:
       1. Put the image file in the `photos` folder.
       2. Add a line below like:
             { src: "photos/beach.jpg", caption: "okayama, summer" },
       3. That's it. Refresh the page.

     Tip: rename files to simple lowercase names with no spaces
          (nann-01.jpg, not "IMG 2839 (1).JPG").

     `emptySlots` is how many blank film frames to show while the
     gallery is still empty. Set it to 0 once you've added real photos.
     ------------------------------------------------------------------ */

  photosTitle: "us, on film",
  photosLede: "Proof. Some of these you have never seen.",
  emptySlots: 6,

  photos: [
    // ✏️ Delete this comment and add your photos here, for example:
    // { src: "photos/nann-01.jpg", caption: "the night we didn't sleep" },
    // { src: "photos/nann-02.jpg", caption: "okayama, spring" },
  ],


  /* ------------------------------------------------------------------
     7. MUSIC
     ------------------------------------------------------------------
     HOW TO ADD THE YOUTUBE LINK:
       A YouTube URL looks like  youtube.com/watch?v=ABC123xyz
       The bit after  v=  is the id. Paste just that bit into `youtubeId`.

       Example:  youtubeId: "ABC123xyz",

     If you leave youtubeId empty (""), the song still shows and
     clicking it searches YouTube — so nothing looks broken.
     ------------------------------------------------------------------ */

  musicTitle: "something soft, for the background",
  musicLede: "Press play and leave it on while you read. You know these already.",

  music: [
    { title: "seasons",             artist: "wave to earth", youtubeId: "" },
    { title: "bad",                 artist: "wave to earth", youtubeId: "" },
    { title: "sunny days sleeping", artist: "wave to earth", youtubeId: "" },
    { title: "annie",               artist: "wave to earth", youtubeId: "" },
    { title: "light",               artist: "wave to earth", youtubeId: "" },
  ],


  /* ------------------------------------------------------------------
     8. THE LAST THING SHE READS
     ------------------------------------------------------------------ */

  closing: {
    title: "happy birthday, nann wai",
    body: [
      "This site doesn't expire. Come back on a bad Tuesday in February. Come back at 2am. It will still be here, and so will we.",
    ],
    signature: "with everything — shun, sutaki & phyu",
  },

  footerMade: "made by hand, with love, in okayama",
};
