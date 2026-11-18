// PROTOTYPE - NOT FOR PRODUCTION
// Question: Does Sebastian learn words he didn't know, and come back to it calmly?
// Date: 2026-11-17
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html).
window.CONFIG = {
  seed: 1,
  max_dpr: { value: 1.5, min: 1, max: 3, step: 0.25 },            // sharpness cap on high-density screens (lower = smoother on slow tablets)
  volume: { value: 0.35, min: 0, max: 1, step: 0.05 },             // sound effects (the voice is always full)
  use_my_voice: { value: 0, min: 0, max: 1, step: 1 },            // 0 = the AI voice everywhere; 1 = your own recordings where you made them
  voice_rate: { value: 0.85, min: 0.5, max: 1.2, step: 0.05 },     // browser voice speed (last fallback only)
  voice_pitch: { value: 1.05, min: 0.5, max: 2, step: 0.05 },

  // ---- Words per session ----
  new_per_session: { value: 3, min: 1, max: 6, step: 1 },          // new words met in one session
  review_per_session: { value: 3, min: 0, max: 6, step: 1 },       // earlier words brought back
  box1: { value: 1, min: 1, max: 3, step: 1 },                     // sessions until a review after a miss or first meeting
  box2: { value: 2, min: 1, max: 5, step: 1 },                     // after 1 good find
  box3: { value: 4, min: 2, max: 8, step: 1 },                     // after 2 good finds
  box4: { value: 8, min: 3, max: 16, step: 1 },                    // after 3 good finds

  // ---- Mastery (the album) ----
  finds_to_know: { value: 3, min: 1, max: 6, step: 1 },            // first-try finds that complete a sticker
  finds_per_session: { value: 2, min: 1, max: 6, step: 1 },        // most finds that count in one session (3 over 2 sessions)

  // ---- Memory cards ----
  pairs: { value: 3, min: 2, max: 6, step: 1 },                    // pairs at first
  pairs_more: { value: 4, min: 2, max: 6, step: 1 },               // pairs once he knows more words
  pairs_more_after: { value: 6, min: 1, max: 30, step: 1 },        // known words before the bigger game
  mismatch_time: { value: 2, min: 0.5, max: 4, step: 0.1 },        // s two different cards stay open before turning back
  match_pause: { value: 0.8, min: 0.2, max: 2, step: 0.1 },        // s before a match rides into the wagon

  // ---- Find it ----
  choices_new: { value: 2, min: 2, max: 4, step: 1 },              // pictures to choose from for a word not yet found
  choices_known: { value: 3, min: 2, max: 4, step: 1 },            // once the word has a first find
  find_next_delay: { value: 1.8, min: 0.5, max: 4, step: 0.1 },    // s after a right tap before the next question

  // ---- Celebrations (memory cleared, finds done, story finished, new sticker, station complete) ----
  fireworks: { value: 5, min: 0, max: 12, step: 1 },              // bursts for a finished activity
  fireworks_big: { value: 9, min: 0, max: 20, step: 1 },          // bursts for a completed station
  applause_small: { value: 1, min: 0, max: 2, step: 0.1 },        // applause for each matched pair and each picture found (0 = none)
  applause: { value: 1, min: 0, max: 2, step: 0.1 },              // applause loudness (0 = none)

  // ---- Pace and calm ----
  page_fade: { value: 0.6, min: 0.1, max: 1.5, step: 0.05 },       // s page cross-fade
  idle_motion: { value: 1, min: 0, max: 2, step: 0.1 },            // how much a word's picture gently moves (0 = still)
  map_speed: { value: 230, min: 80, max: 600, step: 10 },          // px/s Pip drives along the map to a station
  drive_time: { value: 9, min: 3, max: 20, step: 0.5 },            // s Pip takes to drive through a finished set's scene
  hold_again: { value: 3, min: 0.5, max: 6, step: 0.5 },           // s a grown-up holds to start another session
};
