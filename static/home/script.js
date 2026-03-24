/* Splash ================================================================== */

function initSplash() {
  const splash = document.getElementById("splash");
  const skip = document.getElementById("skip-splash");
  const STORAGE_KEY = "skipSplash";

  const skipped = localStorage.getItem(STORAGE_KEY) === "true";

  if (location.hash === "#splash" || !skipped) {
    splash.removeAttribute("hidden");
    if (location.hash === "#splash") splash.querySelector(".content")?.focus();
  } else {
    splash.setAttribute("hidden", "");
  }

  skip?.addEventListener("change", () => {
    localStorage.setItem(STORAGE_KEY, skip.checked);
  });

  window.addEventListener("hashchange", () => {
    if (location.hash === "#splash") {
      splash.removeAttribute("hidden");
      splash.querySelector(".content")?.focus();
    }
  });
}

/* Last.fm ================================================================== */

const LASTFM_USER = "daudix";
const LASTFM_API_KEY = "1747901e170276677d1d0447cf6519b0";

let lastTrackID = null;

async function fetchLastFm() {
  const player = document.getElementsByClassName("item player")[0];
  const cover = document.getElementById("cover");
  const coverLarge = document.getElementById("cover-large");
  const title = document.getElementById("player-title");
  const artist = document.getElementById("player-artist");
  const link = document.getElementById("player-go");

  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`,
    );
    const data = await res.json();
    const track = data.recenttracks?.track?.[0];
    if (!track) return;

    const trackID = track.mbid || track.url;
    const isPlaying = track["@attr"]?.nowplaying === "true";

    if (
      trackID === lastTrackID &&
      isPlaying === player.classList.contains("playing")
    )
      return;
    lastTrackID = trackID;

    title.textContent = track.name;
    artist.textContent = track.artist["#text"];
    link.href = track.url;

    const getImg = (size) =>
      track.image.find((img) => img.size === size)?.["#text"];
    const large = getImg("large");
    const medium = getImg("medium");
    const small = getImg("small");
    const fallback = "home/image-missing.svg";
    const hasRealCover = Boolean(medium) && medium !== fallback;

    cover.src = medium || fallback;
    coverLarge.srcset = large || "";

    player.classList.toggle("playing", isPlaying);
    player.classList.toggle("has-cover", hasRealCover);

    if (hasRealCover && small) {
      player.style.setProperty("--blurnail", `url("${small}")`);
    } else {
      player.style.removeProperty("--blurnail");
    }

    updateMarquees();
  } catch (e) {
    console.error("Failed to fetch now playing track:", e);
  }
}

/* status.cafe ============================================================== */

async function fetchStatusCafe() {
  const content = document.getElementById("statuscafe-content");
  const face = document.getElementById("statuscafe-face");
  const timeAgo = document.getElementById("statuscafe-time-ago");

  try {
    const res = await fetch("https://status.cafe/users/daudix/status.json");
    const r = await res.json();

    if (!r.content.length) {
      content.innerHTML = "No status yet.";
      return;
    }

    content.innerHTML = r.content;
    face.innerHTML = r.face;
    timeAgo.innerHTML = r.timeAgo;
  } catch (e) {
    console.error("Error fetching status:", e);
  }
}

/* Discord ================================================================== */

let lastDiscordStatus = "";

async function fetchDiscordStatus() {
  const indicator = document.getElementById("online-indicator");
  const indicatorText = document.getElementById("online-indicator-text");

  const labels = {
    online: "Online",
    idle: "Idle",
    dnd: "DND",
    offline: "Offline",
  };

  try {
    const res = await fetch(
      "https://api.lanyard.rest/v1/users/650757995378114581",
    );
    const data = await res.json();
    const status = data.data.discord_status;

    if (status === lastDiscordStatus) return;
    lastDiscordStatus = status;

    indicator.classList.remove("online", "idle", "dnd", "offline");
    indicator.classList.add(status);
    indicatorText.innerHTML = labels[status] ?? "N/A";
  } catch (e) {
    console.error("Error fetching Lanyard data:", e);
    indicatorText.innerHTML = "N/A";
  }
}

/* Clock ==================================================================== */

let lastTime = "";

function updateClock() {
  const clock = document.getElementById("clock");
  const time = new Date().toLocaleString("en-IE", {
    timeZone: "Europe/Moscow",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (time !== lastTime) {
    clock.textContent = time;
    lastTime = time;
  }
}

/* Flutter ================================================================== */

function initFlutter() {
  const flutter = document.getElementById("flutter");
  const shy = document.getElementById("shy");
  const squee = new Audio("/home/squee.mp3");

  shy.addEventListener("click", () => {
    shy.setAttribute("disabled", "true");
    squee.play();
    flutter.classList.add("active");
    flutter.addEventListener(
      "animationend",
      () => {
        shy.removeAttribute("disabled");
        flutter.classList.remove("active");
      },
      { once: true },
    );
  });
}

/* Beeper =================================================================== */
let logLines = [];
let isRateLimited = false;
let realtimeActive = false;
let realtimeTimer = null;
let countdownTimer = null;
let countdownEnds = null;
let rateLimitRecoveryTimer = null;
let prevPlayedCount = 0;
let prevLongPlayedCount = 0;
let prevDisplayText = "";
let volume = 20;

let audioCtx = null;
let gainNode = null;

function ensureAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioCtx.createGain();
  gainNode.connect(audioCtx.destination);
  gainNode.gain.value = volume / 100;
}

function playBeep(duration = 0.2) {
  if (volume === 0) return;
  ensureAudio();
  const osc = audioCtx.createOscillator();
  osc.connect(gainNode);
  osc.frequency.value = 440;
  osc.type = "square";
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + duration);
}

const savedVolume = localStorage.getItem("beeper-volume");

function setVolume(v) {
  volume = Math.min(100, Math.max(0, v));
  if (gainNode) gainNode.gain.value = volume / 100;
  localStorage.setItem("beeper-volume", volume);
  const el = document.getElementById("beeper-volume-level");
  if (el) {
    el.title = `Volume: ${volume}%`;
    el.style.setProperty("--volume", `${volume}%`);
  }
}

function classifyLine(msg) {
  if (msg.includes("Long beep played")) return "long-beep-played";
  if (msg.includes("Long beep received")) return "long-beep-received";
  if (msg.includes("Beep played")) return "beep-played";
  if (msg.includes("Beep received")) return "beep-received";
  if (msg.includes("Rate limit reset")) return "rate-reset";
  if (msg.includes("rate limit")) return "rate-limit";
  return "";
}

function parseLines(text) {
  return text
    .split("\n")
    .map((l) => {
      const m = l.trim().match(/^(\d{2}:\d{2}:\d{2}):\s*(.+)$/);
      return m
        ? { ts: m[1], msg: m[2], cls: classifyLine(m[2]), raw: l.trim() }
        : null;
    })
    .filter(Boolean);
}

function startRateLimitRecovery(duration, limitTs) {
  const now = new Date();
  const nowSecs =
    now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
  const remaining = duration - Math.max(0, nowSecs - tsToUTCSecs(limitTs));

  if (remaining <= 0) return;

  clearTimeout(rateLimitRecoveryTimer);

  rateLimitRecoveryTimer = setTimeout(
    () => {
      console.log("beeper: rate limit expired, refetching logs");
      fetchLog();
    },
    (remaining + 1) * 1000,
  );
}

function stopRateLimitRecovery() {
  clearTimeout(rateLimitRecoveryTimer);
  rateLimitRecoveryTimer = null;
}

function deriveRateLimitState(lines) {
  let limited = false,
    duration = null,
    limitTs = null;
  for (const l of lines) {
    if (l.cls === "rate-limit") {
      limited = true;
      limitTs = l.ts;
      const m = l.msg.match(/(\d+)s rate limit/i);
      duration = m ? parseInt(m[1], 10) : null;
    }
    if (
      l.cls === "rate-reset" ||
      l.cls === "beep-played" ||
      l.cls === "long-beep-played"
    ) {
      limited = false;
      limitTs = null;
    }
  }
  return { limited, duration, limitTs };
}

function tsToUTCSecs(ts) {
  const [h, m, s] = ts.split(":").map(Number);
  return h * 3600 + m * 60 + s;
}

function startCountdown(duration, limitTs) {
  const now = new Date();
  const nowSecs =
    now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
  const remaining = duration - Math.max(0, nowSecs - tsToUTCSecs(limitTs));
  if (remaining <= 0) return;

  countdownEnds = Date.now() + remaining * 1000;
  countdownTimer = setInterval(() => {
    const r = Math.ceil((countdownEnds - Date.now()) / 1000);
    if (r <= 0) {
      stopCountdown();
    } else {
      const progress = Math.max(0, (remaining - r) / remaining);
      updateCountdownDisplay(progress * 360);
    }
  }, 250);
}

function stopCountdown() {
  clearInterval(countdownTimer);
  countdownTimer = null;
  countdownEnds = null;
  updateCountdownDisplay(null);
}

function updateCountdownDisplay(angle) {
  const el = document.getElementById("beeper-countdown");
  if (!el) return;
  if (angle === null) {
    el.style.setProperty("--angle", "0deg");
  } else {
    el.style.setProperty("--angle", `${angle}deg`);
  }
}

function setButtonsRateLimited(limited) {
  for (const id of ["send-beep", "send-beep-long"]) {
    const btn = document.getElementById(id);
    if (!btn) continue;
    btn.disabled = limited;
  }
}

function renderDisplay() {
  const el = document.querySelector(".beeper-display");
  if (!el) return;
  const text = logLines
    .slice(-2)
    .map((l) => l.raw)
    .join("\n");
  if (text === prevDisplayText) return;
  prevDisplayText = text;
  el.textContent = text;
}

function processLines(lines) {
  const played = lines.filter((l) => l.cls === "beep-played").length;
  const longPlayed = lines.filter((l) => l.cls === "long-beep-played").length;
  for (let i = 0; i < played - prevPlayedCount; i++) playBeep(0.2);
  for (let i = 0; i < longPlayed - prevLongPlayedCount; i++) playBeep(0.6);
  prevPlayedCount = played;
  prevLongPlayedCount = longPlayed;

  logLines = lines;

  const { limited, duration, limitTs } = deriveRateLimitState(lines);
  isRateLimited = limited;

  if (limited) {
    if (duration && limitTs && !countdownTimer)
      startCountdown(duration, limitTs);
    if (duration && limitTs && !rateLimitRecoveryTimer)
      startRateLimitRecovery(duration, limitTs);
    setButtonsRateLimited(true);
  } else {
    stopCountdown();
    stopRateLimitRecovery();
    setButtonsRateLimited(false);
  }

  renderDisplay();
}

function todayFilename() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}.log`;
}

async function fetchLog() {
  try {
    const res = await fetch("https://daudix.one/beeper/" + todayFilename(), {
      cache: "no-store",
    });
    if (res.ok) {
      processLines(parseLines(await res.text()));
    } else if (res.status === 404) {
      processLines([]);
    } else {
      showFetchError(`Server error: ${res.status}`);
    }
  } catch (e) {
    console.warn("Beep-o-matic 3000: fetch failed", e);
    showFetchError("Logs could not be loaded,\nfor one reason or another :/");
  }
}

function showFetchError(message) {
  const el = document.querySelector(".beeper-display");
  if (!el) return;
  el.textContent = message;
  el.classList.add("error-state");
}

function burstFetch() {
  fetchLog();
  [500, 1000, 2000, 4000].forEach((t) => setTimeout(fetchLog, t));
}

function setRealtime(active) {
  realtimeActive = active;
  clearInterval(realtimeTimer);
  realtimeTimer = active ? setInterval(fetchLog, 1000) : null;
}

document.addEventListener("visibilitychange", () => {
  if (!realtimeActive) return;
  if (document.hidden) {
    clearInterval(realtimeTimer);
    realtimeTimer = null;
  } else {
    realtimeTimer = setInterval(fetchLog, 1000);
    fetchLog();
  }
});

async function sendBeep(url) {
  ensureAudio();
  setButtonsRateLimited(true);
  try {
    const res = await fetch(url, { method: "POST" });
    if (!res.ok && res.status !== 429) setButtonsRateLimited(false);
  } catch {
    setButtonsRateLimited(false);
  }
  burstFetch();
}

document
  .getElementById("send-beep")
  ?.addEventListener("click", () =>
    sendBeep("https://webhook.daudix.one/hooks/beep"),
  );
document
  .getElementById("send-beep-long")
  ?.addEventListener("click", () =>
    sendBeep("https://webhook.daudix.one/hooks/beep-long"),
  );
document
  .getElementById("beeper-real-time")
  ?.addEventListener("change", (e) => setRealtime(e.target.checked));
document.getElementById("beeper-volume-down")?.addEventListener("click", () => {
  ensureAudio();
  setVolume(volume - 10);
});
document.getElementById("beeper-volume-up")?.addEventListener("click", () => {
  ensureAudio();
  setVolume(volume + 10);
});

const _d = new Date();
setTimeout(
  () => {
    logLines = [];
    prevPlayedCount = 0;
    prevLongPlayedCount = 0;
    prevDisplayText = "";
    fetchLog();
  },
  new Date(_d.getFullYear(), _d.getMonth(), _d.getDate() + 1) - _d,
);

/* Init ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  initFlutter();

  setVolume(savedVolume !== null ? parseInt(savedVolume) : volume);
  fetchLog();

  fetchStatusCafe();
  fetchLastFm();
  fetchDiscordStatus();
  updateClock();

  setInterval(fetchLastFm, 10000);
  setInterval(fetchDiscordStatus, 10000);
  setInterval(updateClock, 1000);
});
