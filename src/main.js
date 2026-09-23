import confetti from 'canvas-confetti';

/* ==========================================================================
   BILINGUAL TRANSLATION DICTIONARY (EN / AR)
   ========================================================================== */
const translations = {
  en: {
    envelope: {
      tagline: "POV: You just found your 2026 wedding invitation 💌💍",
      formalInvite: "WEDDING INVITATION",
      tapInstruction: "Tap wax seal to open"
    },
    names: {
      groom: "Ammar",
      bride: "Sidra",
      ampersand: "&",
      fullNames: "Ammar & Sidra",
      dateHeader: "Sunday, 11 October 2026"
    },
    hall: {
      scrollPrompt: "Scroll to enter"
    },
    card: {
      verseTranslation: "\"And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.\"",
      verseRef: "— Surah Ar-Rum [30:21] —",
      announcement: "On a night crowned with love, and destined to unite two hearts, we are honored to invite you to celebrate our wedding",
      blessing: "May Allah bless us, shower His blessings upon us, and unite us in goodness."
    },
    calendar: {
      title: "Save the Date",
      month: "October 2026",
      addToCalendar: "Add to calendar"
    },
    days: {
      m: "M", t: "T", w: "W", th: "T", f: "F", sa: "S", su: "S"
    },
    location: {
      title: "Location",
      venue: "The white palace",
      venueAddress: "The White Palace, Grand Ballroom",
      mapView: "Maps",
      openInMaps: "Open in Maps"
    },
    timeline: {
      title: "Wedding Program",
      step1Title: "Welcome & Arrival",
      step1Desc: "Welcoming the bride and groom & honorable guests",
      step2Title: "Wedding Ceremony",
      step2Desc: "The official ceremony & celebration",
      step3Title: "The Dinner",
      step3Desc: "Grand royal banquet & delights",
      step4Title: "Farewell & Send-off",
      step4Desc: "Farewell & thanking the guests"
    },
    rsvp: {
      title: "Confirm Attendance",
      subtitle: "Please let us know if you will be joining us on our special day",
      nameLabel: "Your name *",
      namePlaceholder: "Enter your full name",
      guestsLabel: "Number of guests *",
      statusLabel: "Will you attend? *",
      attending: "Joyfully Accept",
      declining: "Regretfully Decline",
      wishesLabel: "Warm Wishes & Blessings",
      wishesPlaceholder: "Write a message for the couple...",
      submitBtn: "Submit RSVP",
      successTitle: "Thank You!",
      successMsg: "Your response has been warmly received. We look forward to celebrating together!"
    },
    countdown: {
      title: "Countdown",
      subtitle: "Until our wedding",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES",
      seconds: "SECONDS",
      quote: "Until we gather beneath a sky filled with joy, we await your presence with love 🤍"
    },
    share: {
      btn: "Share Invitation",
      text: "💍 You are warmly invited to celebrate the wedding of Ammar & Sidra on October 11, 2026 at The White Palace!"
    }
  },
  ar: {
    envelope: {
      tagline: "دعوة زفاف فاخرة لعام 2026 💌💍",
      formalInvite: "دعوة زفاف خاصة",
      tapInstruction: "انقر على الختم لفتح الدعوة"
    },
    names: {
      groom: "عمار",
      bride: "سدرة",
      ampersand: "و",
      fullNames: "عمار و سدرة",
      dateHeader: "الأحد، ١١ أكتوبر ٢٠٢٦"
    },
    hall: {
      scrollPrompt: "مرر للأسفل للدخول"
    },
    card: {
      verseTranslation: "«وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ»",
      verseRef: "— سورة الروم [٣٠:٢١] —",
      announcement: "في ليلة تكللت بالحب واجتمع فيها الشمل، يسرنا ويشرفنا دعوتكم لمشاركتنا فرحتنا بمناسبة زفافنا",
      blessing: "بارك الله لنا وبارك علينا وجمع بيننا في خير"
    },
    calendar: {
      title: "احفظ التاريخ",
      month: "أكتوبر ٢٠٢٦",
      addToCalendar: "إضافة إلى التقويم"
    },
    days: {
      m: "إ", t: "ث", w: "أ", th: "خ", f: "ج", sa: "س", su: "ح"
    },
    location: {
      title: "الموقع",
      venue: "القصر الأبيض",
      venueAddress: "القصر الأبيض، قاعة الاحتفالات الكبرى",
      mapView: "الخرائط",
      openInMaps: "فتح في خرائط Google"
    },
    timeline: {
      title: "برنامج الحفل",
      step1Title: "استقبال الضيوف",
      step1Desc: "استقبال العروسين والضيوف الكرام",
      step2Title: "مراسم الزفاف",
      step2Desc: "مراسم عقد القران والاحتفال",
      step3Title: "مأدبة العشاء",
      step3Desc: "عشاء ملكي فاخر",
      step4Title: "توديع الضيوف",
      step4Desc: "اختتام الحفل وشكر الحضور الكرام"
    },
    rsvp: {
      title: "تأكيد الحضور",
      subtitle: "يسعدنا ويشرفنا تأكيد حضوركم لمشاركتنا أجمل اللحظات",
      nameLabel: "الاسم الكريم *",
      namePlaceholder: "اكتب اسمك الكامل هنا",
      guestsLabel: "عدد الضيوف *",
      statusLabel: "هل ستشرفنا بالحضور؟ *",
      attending: "يشرفني الحضور بكل سرور",
      declining: "أعتذر لظروف خاصة بكل مودة",
      wishesLabel: "تهنئة ودعاء للعروسين",
      wishesPlaceholder: "اكتب كلمة طيبة للعروسين...",
      submitBtn: "إرسال تأكيد الحضور",
      successTitle: "شكراً جزيلاً!",
      successMsg: "تم استلام تأكيد حضوركم بكل سرور، نتشوق للاحتفال معكم في هذه الليلة المميزة!"
    },
    countdown: {
      title: "العد التنازلي",
      subtitle: "حتى موعد زفافنا",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      seconds: "ثانية",
      quote: "إلى أن نلتقي تحت سماءٍ تملؤها الفرحة، ننتظر تشريفكم لنا بكل الحب 🤍"
    },
    share: {
      btn: "مشاركة الدعوة",
      text: "💍 يسعدنا دعوتكم لحضور حفل زفاف عمار وسدرة يوم الأحد ١١ أكتوبر ٢٠٢٦ في القصر الأبيض!"
    }
  }
};

let currentLang = 'en';

/* ==========================================================================
   AUDIO SYNTHESIZER FOR WAX SEAL CRACK / POP SOUND
   ========================================================================== */
function playWaxSealSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(380, ctx.currentTime + 0.12);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.38);
  } catch (err) {
    console.warn("AudioContext not permitted yet", err);
  }
}

/* ==========================================================================
   AUDIO MANAGER (MUSIC PLAYBACK & MUTE TOGGLE)
   ========================================================================== */
const bgAudio = document.getElementById('bg-audio');
const musicToggleBtn = document.getElementById('music-toggle');
let isAudioPlaying = false;

function startBackgroundMusic() {
  if (!bgAudio) return;
  bgAudio.volume = 0.65;
  const playPromise = bgAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      isAudioPlaying = true;
      musicToggleBtn.classList.add('playing');
      musicToggleBtn.classList.remove('muted');
    }).catch(err => {
      console.log("Autoplay waiting for direct user gesture", err);
    });
  }
}

function toggleMusic() {
  if (!bgAudio) return;
  if (isAudioPlaying) {
    bgAudio.pause();
    isAudioPlaying = false;
    musicToggleBtn.classList.remove('playing');
    musicToggleBtn.classList.add('muted');
  } else {
    bgAudio.play().then(() => {
      isAudioPlaying = true;
      musicToggleBtn.classList.add('playing');
      musicToggleBtn.classList.remove('muted');
    }).catch(e => console.error(e));
  }
}

musicToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMusic();
});

/* ==========================================================================
   ENVELOPE OPENING CHOREOGRAPHY
   ========================================================================== */
const envelopeBox = document.getElementById('envelope-box');
const waxSealBtn = document.getElementById('wax-seal-btn');
const phaseEnvelope = document.getElementById('phase-envelope');
let envelopeOpened = false;

function triggerEnvelopeOpening() {
  if (envelopeOpened) return;
  envelopeOpened = true;

  // Play audio synthesizer snap and start romantic background track
  playWaxSealSound();
  startBackgroundMusic();

  // Open 3D Envelope
  envelopeBox.classList.add('open');

  // Trigger luxury celebration confetti burst from seal
  confetti({
    particleCount: 40,
    spread: 60,
    origin: { y: 0.5 },
    colors: ['#D4AF37', '#720E1E', '#FFFFFF', '#FAF7F2']
  });

  // After animation unfolds, dissolve envelope and glide camera into Grand Hall
  setTimeout(() => {
    phaseEnvelope.classList.add('opened');
    document.body.classList.remove('envelope-active');

    // Smoothly scroll app viewport to phase-hall
    const appViewport = document.getElementById('app-viewport');
    const phaseHall = document.getElementById('phase-hall');
    if (appViewport && phaseHall) {
      phaseHall.scrollIntoView({ behavior: 'smooth' });
    }
  }, 1300);
}

if (waxSealBtn) {
  waxSealBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerEnvelopeOpening();
  });
}

if (envelopeBox) {
  envelopeBox.addEventListener('click', () => {
    triggerEnvelopeOpening();
  });
}

/* ==========================================================================
   BILINGUAL I18N SYSTEM
   ========================================================================== */
const langToggleBtn = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  langLabel.textContent = lang === 'ar' ? 'عربي' : 'EN';

  const t = translations[lang];

  // Update text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const parts = key.split('.');
    let val = t;
    for (const part of parts) {
      if (val && val[part] !== undefined) {
        val = val[part];
      } else {
        val = null;
        break;
      }
    }
    if (val !== null) {
      el.textContent = val;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const parts = key.split('.');
    let val = t;
    for (const part of parts) {
      if (val && val[part] !== undefined) {
        val = val[part];
      } else {
        val = null;
        break;
      }
    }
    if (val !== null) {
      el.placeholder = val;
    }
  });
}

langToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const nextLang = currentLang === 'en' ? 'ar' : 'en';
  applyLanguage(nextLang);
});

/* ==========================================================================
   LOVE REACTIONS (HEART BUTTON)
   ========================================================================== */
const loveBtn = document.getElementById('love-btn');
const loveCountEl = document.getElementById('love-count');
let loveCount = 87;

loveBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  loveCount++;
  loveCountEl.textContent = loveCount;

  // Floating heart particles
  const rect = loveBtn.getBoundingClientRect();
  const emojis = ['🤍', '❤️', '✨', '💍', '🌸'];
  const particle = document.createElement('div');
  particle.className = 'floating-heart-particle';
  particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  particle.style.left = `${rect.left + rect.width / 2}px`;
  particle.style.top = `${rect.top}px`;
  particle.style.setProperty('--rand-x', (Math.random() * 80 - 40).toFixed(0));

  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 1800);
});

/* ==========================================================================
   LIVE WEDDING COUNTDOWN TIMER
   ========================================================================== */
const targetDate = new Date('2026-10-11T20:00:00').getTime();

const cdDays = document.getElementById('cd-days');
const cdHours = document.getElementById('cd-hours');
const cdMinutes = document.getElementById('cd-minutes');
const cdSeconds = document.getElementById('cd-seconds');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    if (cdDays) cdDays.textContent = '00';
    if (cdHours) cdHours.textContent = '00';
    if (cdMinutes) cdMinutes.textContent = '00';
    if (cdSeconds) cdSeconds.textContent = '00';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
  if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
  if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
  if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ==========================================================================
   CALENDAR SYNC (.ICS FILE & GOOGLE CALENDAR)
   ========================================================================== */
const addToCalendarBtn = document.getElementById('add-to-calendar-btn');

function generateIcsCalendar() {
  const event = {
    title: "Ammar & Sidra Wedding",
    description: "You are joyfully invited to celebrate the royal wedding of Ammar & Sidra at The White Palace.",
    location: "The White Palace, Grand Ballroom",
    start: "20261011T200000",
    end: "20261012T020000"
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ammar & Sidra//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    `DTSTART:${event.start}`,
    `DTEND:${event.end}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Ammar_and_Sidra_Wedding.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

if (addToCalendarBtn) {
  addToCalendarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateIcsCalendar();

    // Trigger subtle celebratory confetti
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#E7C97F', '#720E1E']
    });
  });
}

/* ==========================================================================
   RSVP FORM HANDLING
   ========================================================================== */
const rsvpForm = document.getElementById('rsvp-form');
const pillAttending = document.getElementById('pill-attending');
const pillDeclining = document.getElementById('pill-declining');
const rsvpSpinner = document.getElementById('rsvp-spinner');
const rsvpFeedback = document.getElementById('rsvp-feedback');

// Radio pill toggles
if (pillAttending && pillDeclining) {
  pillAttending.addEventListener('click', () => {
    pillAttending.classList.add('active');
    pillDeclining.classList.remove('active');
  });
  pillDeclining.addEventListener('click', () => {
    pillDeclining.classList.add('active');
    pillAttending.classList.remove('active');
  });
}

if (rsvpForm) {
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const guestNameInput = document.getElementById('guest-name');
    const guestCount = document.getElementById('guest-count').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const guestWishes = document.getElementById('guest-wishes').value;

    if (!guestNameInput.value.trim()) {
      guestNameInput.focus();
      guestNameInput.style.borderColor = '#720E1E';
      return;
    }

    // Show loading state
    rsvpSpinner.classList.remove('hidden');

    setTimeout(() => {
      rsvpSpinner.classList.add('hidden');
      rsvpForm.style.display = 'none';
      rsvpFeedback.classList.remove('hidden');

      // Grand celebration confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#D4AF37', '#720E1E', '#FFFFFF']
      });

      // Save to localStorage
      try {
        localStorage.setItem('wedding_rsvp', JSON.stringify({
          name: guestNameInput.value.trim(),
          guests: guestCount,
          status: attendance,
          wishes: guestWishes,
          submittedAt: new Date().toISOString()
        }));
      } catch (err) {
        console.warn(err);
      }
    }, 700);
  });
}

/* ==========================================================================
   WHATSAPP / SOCIAL SHARE INVITATION
   ========================================================================== */
const shareInviteBtn = document.getElementById('share-invite-btn');

if (shareInviteBtn) {
  shareInviteBtn.addEventListener('click', () => {
    const text = translations[currentLang].share.text;
    const url = window.location.href;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + '\n' + url)}`;
    window.open(shareUrl, '_blank');
  });
}
