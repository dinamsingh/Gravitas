// GRAVITAS Exercise Form Guides
// Curated YouTube video IDs and technique metadata for all built-in exercises.
// For custom exercises (id > 51), the app will use YouTube search embed as fallback.

window.GRAVITAS_GUIDES = {

  // ─── CHEST ────────────────────────────────────────────────────────────────

  1: { // Barbell Bench Press
    youtubeId: "rT7DgCr-3pg",
    benchAngle: { label: "0° — Flat", value: 0, type: "flat" },
    setup: [
      "Bench par lait jao, paon zameen par flat rakho.",
      "Bar ko shoulder se thoda zyada choda pakdo (ring finger on knurling).",
      "Shoulder blades ko milao aur chest upar ki taraf squeeze karo.",
      "Wrist straight rakho — bar ko palm ke heel pe rakho."
    ],
    execution: [
      "Bar ko chest ke middle (nipple line) ki taraf slowly lower karo.",
      "Elbow 45–75° angle pe rakho, na puri flare na puri tuck.",
      "Bar ko uthate time ek powerful, fast motion use karo.",
      "Top pe arms lock karo lekin hyperextend mat karo."
    ],
    dos: [
      "Shoulder blades retract aur depress karke rakho puri movement mein.",
      "Paon zameen par drive karo — ye stabilization deta hai.",
      "Uniform arc mein lower karo, seedha neeche mat girao.",
      "Natural back arch rakhna theek hai (excessive nahi)."
    ],
    donts: [
      "Bar ko chest se bounce mat karo.",
      "Butt bench se mat uthaao.",
      "Elbows ko puri tarah bahar flare mat karo.",
      "Wrist ko peeche bend mat hone do."
    ]
  },

  2: { // Incline Dumbbell Press
    youtubeId: "8iPEnMpOzC0",
    benchAngle: { label: "30° – 45° Incline", value: 37, type: "incline" },
    setup: [
      "Bench ko 30–45° pe set karo (45° se zyada front delt dominant ho jata hai).",
      "Dumbbell ghutno pe rakho, phir ek-ek karke shoulder pe kick karo.",
      "Apni back bench par firmly rakho, shoulder blades retract karo."
    ],
    execution: [
      "Dumbbell uthate time ek slight arc mein move karo.",
      "Lower karte waqt elbow shoulder ke level tak jayein.",
      "Top pe dumbbell thoda andar laao (ek-doosre ke kareeb) lekin touch mat karo."
    ],
    dos: [
      "30° angle upper chest hit karta hai sabse effectively.",
      "Controlled lowering (2–3 seconds) kar ke stretch feel karo.",
      "Natural wrist position rakh — rotate mat karo forcefully."
    ],
    donts: [
      "45° se zyada angle na karo — ye shoulders ki exercise ban jati hai.",
      "Dumbbells ko drop mat karo — controlled rakh.",
      "Momentum se mat uthaao, muscle se uthaao."
    ]
  },

  3: { // Machine Chest Press
    youtubeId: "xUm0BiZCWlQ",
    benchAngle: null,
    setup: [
      "Seat height adjust karo — handles mid-chest ke level pe aani chahiye.",
      "Deeply seat pe baith jao, back firmly pad se laga ke rakho.",
      "Handles pakdo — wrist neutral rakho."
    ],
    execution: [
      "Exhale karte hue handles aage push karo.",
      "Arms ke top pe full extension lo, lekin lock mat karo.",
      "Inhale karte hue starting position tak wapas aao."
    ],
    dos: [
      "Slow negative (returning phase) use karo — 2-3 second.",
      "Machine ki range of motion apne body ke mutabiq adjust karo."
    ],
    donts: [
      "Handles ko snap mat karo — smooth movement rako.",
      "Lower back ko arch mat karo aggressively."
    ]
  },

  4: { // Cable Crossover
    youtubeId: "taI4XduLpTk",
    benchAngle: null,
    setup: [
      "Cable machine ke dono pulleys ko upar set karo.",
      "Beech mein khade ho, ek paon aage rakho stability ke liye.",
      "Dono hands se D-ring pakdo, slight elbow bend rakho."
    ],
    execution: [
      "Hands ko neeche aur andar laao, ek arc mein.",
      "Sternum ke saamne hands cross karke peak contraction lo.",
      "2–3 second hold karo, phir slowly wapas jao."
    ],
    dos: [
      "Elbow angle throughout pura maintain karo.",
      "Squeeze karo — ye isolation exercise hai, feel zaroori hai."
    ],
    donts: [
      "Arms ko straight lock mat karo.",
      "Torso ko aage mat jhukao zyada."
    ]
  },

  5: { // Dumbbell Flyes
    youtubeId: "eozdVDA78K0",
    benchAngle: { label: "0° — Flat  (slight 15° incline optional)", value: 0, type: "flat" },
    setup: [
      "Flat bench par lait jao, dumbbell chest ke upar hold karo.",
      "Elbows slightly bend rakho throughout."
    ],
    execution: [
      "Dumbbell ko arc mein side mein lower karo jabtik stretch feel ho.",
      "Chest ke through squeeze karke wapas upar laao."
    ],
    dos: [
      "Elbow bend fixed rakho — fly movement, curl nahi.",
      "Controlled lower karo — injury prone exercise hai."
    ],
    donts: [
      "Zyada weight mat use karo — shoulder injury risk hai.",
      "Arms ko completely straight mat karo."
    ]
  },

  // ─── BACK ──────────────────────────────────────────────────────────────────

  6: { // Pull-Ups
    youtubeId: "eGo4IYlbE5g",
    benchAngle: null,
    setup: [
      "Bar ko shoulder se thoda zyada choda pakdo (pronated grip — palms bahar).",
      "Arms puri tarah se extend karke hang karo.",
      "Chest slightly aage ki taraf tilt karo."
    ],
    execution: [
      "Shoulder blades depress aur retract karo pehle.",
      "Chin bar ke upar laao — chest bar ko touch karne ki koshish karo.",
      "Full hang mein wapas jao."
    ],
    dos: [
      "Scapular pull se start karo (shoulder blade movement).",
      "Slow, controlled descent karo."
    ],
    donts: [
      "Kicking ya swinging se momentum mat lo.",
      "Neck ko strain mat karo upar pochane ki koshish mein."
    ]
  },

  7: { // Lat Pulldown
    youtubeId: "CAwf7n6Luuc",
    benchAngle: null,
    setup: [
      "Wide grip se bar pakdo (ring finger knarling marks ke bahar).",
      "Thigh pad apni thighs ke upar firmly adjust karo.",
      "Slight backward lean lo (30° se zyada nahi)."
    ],
    execution: [
      "Bar ko chin ya upper chest tak pull karo.",
      "Peak pe elbow side mein squeeze karo.",
      "Arms ko fully extend karke wapas jao."
    ],
    dos: [
      "Lats se pull karo — biceps se nahi.",
      "Elbows ko andar neeche ki taraf drive karo."
    ],
    donts: [
      "Zyada backward lean mat lo.",
      "Bar ko bounce mat karo stack se."
    ]
  },

  8: { // Close-Grip Lat Pulldown
    youtubeId: "YKXIG4MRY6I",
    benchAngle: null,
    setup: [
      "V-bar ya narrow attachment lagao.",
      "Grip neutral rakho (palms ek-doosre ki taraf).",
      "Straight ya slight lean le ke baitho."
    ],
    execution: [
      "Handle ko upper abdomen/lower chest tak pull karo.",
      "Elbows ko body ke side mein squeeze karo.",
      "Controlled release karo."
    ],
    dos: ["Chest upar rakho throughout.", "Lower lats aur inner back feel karo."],
    donts: ["Keh karo jhatak ke mat karo.", "Wrist ko curl mat karo."]
  },

  9: { // Barbell Bent-Over Row
    youtubeId: "FWJR5Ve8bnQ",
    benchAngle: null,
    setup: [
      "Hip-width stance lo, bar ko shins ke kareeb rakho.",
      "Hinge karke 45–75° forward lean lo.",
      "Overhand ya underhand grip — shoulder width."
    ],
    execution: [
      "Bar ko lower chest ya belly button tak pull karo.",
      "Elbows body ke tight side mein rakho.",
      "Controlled lower karo."
    ],
    dos: [
      "Neutral spine maintain karo.",
      "Bar ko lat se pull karo na biceps se."
    ],
    donts: [
      "Lower back ko round mat karo.",
      "Torso ko swing mat karo weight uthane ke liye."
    ]
  },

  10: { // Seated Cable Row
    youtubeId: "GZbfZ033f74",
    benchAngle: null,
    setup: [
      "V-bar ya narrow grip attachment lagao.",
      "Seat par baitho, paon footpad se laga ke rakho.",
      "Arms fully extended — slight lean forward — neutral spine."
    ],
    execution: [
      "Handle ko belly button tak pull karo.",
      "Shoulder blades squeeze karo peak pe.",
      "Arms straight hone tak release karo."
    ],
    dos: ["Upright posture rako during pull.", "Full stretch lo starting position mein."],
    donts: ["Zyada lean mat karo forward ya backward.", "Jerk mat karo."]
  },

  11: { // Chest-Supported Row
    youtubeId: "HIKzvHkibWc",
    benchAngle: { label: "30° – 45° Incline", value: 35, type: "incline" },
    setup: [
      "Bench ko 30–45° pe set karo.",
      "Chest bench par lay karo, paon zameen par flat.",
      "Dumbbell ya barbell pakdo, arms hang karne do."
    ],
    execution: [
      "Elbows ko body ke side mein upar pull karo.",
      "Shoulder blades squeeze karo peak pe.",
      "Controlled lower karo."
    ],
    dos: [
      "Chest supported hone se lower back ki cheating remove hoti hai.",
      "Strict form use karo — momentum nahi."
    ],
    donts: ["Neck ko strain mat karo.", "Hips ko bench se mat uthaao."]
  },

  12: { // Face Pull
    youtubeId: "rep-qVOkqgk",
    benchAngle: null,
    setup: [
      "Cable ko head level ya thoda upar set karo.",
      "Rope attachment use karo.",
      "Ek kadam peeche khade ho, slight stance lo."
    ],
    execution: [
      "Rope ko face ki taraf pull karo — hands ears ke paas aayein.",
      "External rotation de elbows ko.",
      "Slowly release karo."
    ],
    dos: ["Light weight use karo — form se karo.", "Elbows upar maintain karo pull mein."],
    donts: ["Heavy weight mat lao — injury risk.", "Arms ko down pull mat karo."]
  },

  13: { // Conventional Deadlift
    youtubeId: "op9kVnSso6Q",
    benchAngle: null,
    setup: [
      "Paon hip-width pe set karo, bar shins ke upar.",
      "Hip hinge karke bar pakdo — shoulder width overhand grip.",
      "Back flat, chest upar, hips neeche — 'proud chest' position."
    ],
    execution: [
      "Paon zameen mein push karo (leg press ki tarah).",
      "Hips aur shoulders simultaneously upar aayein.",
      "Hips full extension pe lock karo.",
      "Controlled lower karo — same path pe wapas."
    ],
    dos: [
      "Bar ko legs ke kareeb rakh throughout.",
      "Lats ko engage karo — 'protect your armpits'.",
      "Breath hold karo (Valsalva) heavy sets mein."
    ],
    donts: [
      "Lower back round mat karo — most important.",
      "Bar ko jump nahi karwaana — smooth pull.",
      "Hips ko pehle nahi uthaana — synchronized movement."
    ]
  },

  // ─── LEGS ──────────────────────────────────────────────────────────────────

  14: { // Barbell Back Squat
    youtubeId: "ultWZbUMPL8",
    benchAngle: null,
    setup: [
      "Bar ko upper traps pe rakho (high bar) ya rear delts pe (low bar).",
      "Paon shoulder-width se thoda zyada, toes 15–30° bahar.",
      "Tight grip se bar ko pakdo, elbows neeche."
    ],
    execution: [
      "Hips ko peeche aur neeche le jao.",
      "Knee toes ke direction mein track karo.",
      "Hip crease parallel ke neeche jaaye (full depth).",
      "Heels se drive karo, hips lock karo top pe."
    ],
    dos: [
      "Chest upar, back straight throughout.",
      "Knees toes ke direction mein push karo.",
      "Core tight — belt use karo heavy sets mein."
    ],
    donts: [
      "Knees inward mat girane do (valgus).",
      "Heel utha mat ne do.",
      "Forward lean zyada mat karo."
    ]
  },

  15: { // Leg Press
    youtubeId: "IZxyjW7MPJQ",
    benchAngle: null,
    setup: [
      "Paon platform pe shoulder-width mein rakho.",
      "Seat adjust karo — 90° se thoda zyada bend honi chahiye legs mein.",
      "Toes 15–20° bahar."
    ],
    execution: [
      "Safety locks release karo.",
      "Platform ko controlled neeche laao.",
      "Paon se push karke starting position mein wapas jao."
    ],
    dos: [
      "Full range of motion use karo.",
      "Lower back ko seat se mat uthaao."
    ],
    donts: [
      "Knees lock mat karo fully.",
      "Paon ko zyada neeche rakho — glutes target ke liye upar rakho."
    ]
  },

  16: { // Leg Extension
    youtubeId: "YyvSfVjQeL0",
    benchAngle: null,
    setup: [
      "Seat adjust karo — knee joint pivot axis se align honi chahiye.",
      "Ankle pad shins ke neeche rakho.",
      "Handles pakdo stability ke liye."
    ],
    execution: [
      "Legs ko fully extend karo — quad squeeze karo top pe.",
      "Controlled lower karo — full ROM."
    ],
    dos: ["Peak contraction pe 1–2 second hold karo.", "Slow eccentric (lowering) use karo."],
    donts: ["Hips ko seat se mat uthaao.", "Momentum se jhatak ke mat karo."]
  },

  17: { // Romanian Deadlift
    youtubeId: "JCXUYuzwNrM",
    benchAngle: null,
    setup: [
      "Paon hip-width pe, bar thighs ke saamne.",
      "Overhand grip — shoulder width.",
      "Micro-bend rakho knees mein."
    ],
    execution: [
      "Hips ko peeche push karte hue bar ko neeche slide karo.",
      "Hamstring stretch feel hone tak jao (usually shin ke level tak).",
      "Hips ko aage drive karo — glutes squeeze karke upar aao."
    ],
    dos: [
      "Bar ko legs ke close rakho throughout.",
      "Neutral spine maintain karo."
    ],
    donts: [
      "Knees ko zyada bend mat karo — ye hamstring exercise hai.",
      "Lower back round mat karo."
    ]
  },

  18: { // Seated Leg Curl
    youtubeId: "1Tq3QdYUuHs",
    benchAngle: null,
    setup: [
      "Seat adjust karo — knee joint axis se align.",
      "Ankle pad calf ke upper part pe rakho.",
      "Slightly forward lean karo."
    ],
    execution: [
      "Heels ko seat ke neeche pull karo.",
      "Peak pe 1–2 second hold karo.",
      "Controlled release karo."
    ],
    dos: ["Full ROM use karo.", "Toes neutral ya slightly pointed rakho."],
    donts: ["Hips ko seat se mat uthaao.", "Jerk mat karo."]
  },

  19: { // Bulgarian Split Squat
    youtubeId: "2C-uNgKwPLE",
    benchAngle: null,
    setup: [
      "Ek paon ke top ko bench ya elevated surface pe rakho.",
      "Front paon itna aage rakho ki knee toes se aage na jaaye.",
      "Torso upright ya slight forward lean."
    ],
    execution: [
      "Back knee ko zameen ki taraf lower karo.",
      "Front leg se drive karo — upar aao.",
      "Balance pe dhyan do."
    ],
    dos: ["Front leg quad aur glute feel karo.", "Core tight rakho throughout."],
    donts: ["Front knee inward mat hone do.", "Zyada heavy weight na lo start mein."]
  },

  // ─── GLUTES ────────────────────────────────────────────────────────────────

  20: { // Barbell Hip Thrust
    youtubeId: "SEdqd1n0cvg",
    benchAngle: null,
    setup: [
      "Upper back ko bench ke edge ke against rakho.",
      "Paon flat, shoulder-width pe.",
      "Bar ko hip crease pe pad ke saath rakho."
    ],
    execution: [
      "Hips drive karo upar — straight line shoulder se knee tak.",
      "Glutes squeeze karo top pe — 1–2 second hold.",
      "Controlled lower karo."
    ],
    dos: ["Chin ko chest se touch karo — neck neutral.", "Full hip extension lo top pe."],
    donts: ["Ribs ko flare mat karo.", "Knees inward mat hone do."]
  },

  // ─── CALVES ────────────────────────────────────────────────────────────────

  21: { // Standing Calf Raise
    youtubeId: "c5Kv6-fnTj8",
    benchAngle: null,
    setup: [
      "Platform ke edge pe ball of foot rakho.",
      "Heel ko freely hang karne do.",
      "Machine pe shoulders pe pads rakho."
    ],
    execution: [
      "Heels ko jitna ho sake upar raise karo.",
      "Peak pe 1–2 second hold karo.",
      "Heel ko puri tarah neeche jaane do — full stretch."
    ],
    dos: ["Full ROM — stretch aur contraction dono.", "Slow, controlled reps karo."],
    donts: ["Bounce mat karo neeche se.", "Knees bend mat karo."]
  },

  22: { // Seated Calf Raise
    youtubeId: "JbyjNymZOt0",
    benchAngle: null,
    setup: [
      "Knees ko pad ke neeche secure karo.",
      "Paon ka agla hissa (ball) platform edge pe rakho.",
      "Neutral spine."
    ],
    execution: [
      "Heels raise karo — maximum height.",
      "Hold karo, phir puri tarah neeche jaao."
    ],
    dos: ["Soleus muscle feel karo — deep inner calf.", "Slow reps use karo."],
    donts: ["Bounce mat karo.", "Knees ko upar mat uthaao."]
  },

  // ─── SHOULDERS ─────────────────────────────────────────────────────────────

  23: { // Barbell Overhead Press
    youtubeId: "2yjwXTZQDDI",
    benchAngle: null,
    setup: [
      "Bar ko collar bones pe rack karo.",
      "Shoulder-width grip — elbows thoda aage.",
      "Khade ho ke karo — tight glutes, core engaged."
    ],
    execution: [
      "Bar ko straight upar press karo — head slightly peeche karo bar pass karte waqt.",
      "Arms lock karo top pe — bar ke neeche aao.",
      "Controlled lower karo clavicle tak."
    ],
    dos: ["Wrist neutral rakho.", "Full lockout lo."],
    donts: ["Lower back arch mat karo zyada.", "Bar ko forward path pe mat press karo."]
  },

  24: { // Seated Dumbbell Press
    youtubeId: "HzIiNhHhhtA",
    benchAngle: { label: "85° – 90° (Near Vertical)", value: 87, type: "incline" },
    setup: [
      "Bench ko 85–90° pe set karo.",
      "Dumbbell shoulder level pe start karo, palms aage.",
      "Back firmly bench par rakho."
    ],
    execution: [
      "Dumbbell ko upar press karo — slight arc mein.",
      "Top pe dumbbell slightly andar laao.",
      "Shoulder level tak wapas lower karo."
    ],
    dos: ["Core tight rakho.", "Full range of motion use karo."],
    donts: ["Elbows flare mat karo zyada.", "Jerky motion mat karo."]
  },

  25: { // Dumbbell Lateral Raise
    youtubeId: "3VcKaXpzqRo",
    benchAngle: null,
    setup: [
      "Khade ho ya seated — neutral spine.",
      "Dumbbell sides pe pakdo — slight elbow bend.",
      "Slight forward lean karo (5–10°)."
    ],
    execution: [
      "Arms ko shoulder height tak raise karo — slight elbow bend maintain.",
      "Peak pe wrist ko slightly internally rotate karo (pinky upar).",
      "Controlled lower karo."
    ],
    dos: ["Light weight — form se karo.", "Pause karo top pe."],
    donts: ["Momentum se mat swing karo.", "Ears tak zyada upar mat jao."]
  },

  26: { // Cable Lateral Raise
    youtubeId: "PPQEEpuTqFM",
    benchAngle: null,
    setup: [
      "Cable pulley ko low position pe rakho.",
      "Handle ko opposite hand se pakdo (body ke dusre taraf se).",
      "Straight khade raho."
    ],
    execution: [
      "Arm ko shoulder height tak raise karo.",
      "Controlled lower karo — tension maintain karo."
    ],
    dos: ["Constant tension is key — cable dumbbell se better hai.", "Unilateral karo aur both sides pe equal focus."],
    donts: ["Heavy weight mat lo — form toot jayega.", "Torso mat jhukao."]
  },

  27: { // Reverse Pec Deck
    youtubeId: "toHqVFDO5TE",
    benchAngle: null,
    setup: [
      "Seat height adjust karo — arms shoulder level pe hon.",
      "Handles pakdo — palms facing down ya inward.",
      "Chest pad se thoda door baitho."
    ],
    execution: [
      "Arms ko peeche open karo — rear delts ko squeeze karo.",
      "Slow, controlled return."
    ],
    dos: ["Elbow bend fixed rakho.", "Light weight — rear delts weak muscle hai."],
    donts: ["Neck ko strain mat karo.", "Momentum mat use karo."]
  },

  28: { // Bent-Over Reverse Fly
    youtubeId: "EA7u4Q_8HQ0",
    benchAngle: null,
    setup: [
      "Hip hinge karo — torso almost parallel to floor.",
      "Dumbbell haath mein — palms facing each other.",
      "Slight elbow bend."
    ],
    execution: [
      "Arms ko sides mein raise karo — shoulder height tak.",
      "Rear delts squeeze karo peak pe.",
      "Controlled lower karo."
    ],
    dos: ["Neutral spine rakho.", "Light weight — strict form."],
    donts: ["Torso ko swing mat karo.", "Zyada heavy na lo."]
  },

  // ─── TRAPS ─────────────────────────────────────────────────────────────────

  29: { // Barbell Shrug
    youtubeId: "g6qbq4Lf1FI",
    benchAngle: null,
    setup: [
      "Overhand grip — shoulder width.",
      "Arms fully extended — neutral spine.",
      "Khade raho — slight forward lean optional."
    ],
    execution: [
      "Shoulders ko ears ki taraf straight upar shrug karo.",
      "Peak pe 1–2 second hold.",
      "Controlled lower karo."
    ],
    dos: ["Straight up-and-down movement.", "Full contraction feel karo."],
    donts: ["Shoulders ko roll mat karo — injury risk.", "Neck ko bend mat karo."]
  },

  30: { // Dumbbell Shrug
    youtubeId: "cJRVVxmytaM",
    benchAngle: null,
    setup: [
      "Dumbbell sides pe hang karo — neutral grip.",
      "Arms fully extended."
    ],
    execution: [
      "Shoulders upar straight shrug karo.",
      "Hold, phir controlled lower karo."
    ],
    dos: ["Full ROM.", "Dono sides equally."],
    donts: ["Roll mat karo.", "Momentum mat use karo."]
  },

  // ─── BICEPS ────────────────────────────────────────────────────────────────

  31: { // Barbell Curl
    youtubeId: "kwG2ipFRgfo",
    benchAngle: null,
    setup: [
      "Shoulder-width underhand grip.",
      "Khade ho — elbows body ke side mein fixed.",
      "Slight forward lean acceptable."
    ],
    execution: [
      "Bar ko chin tak curl karo.",
      "Bicep peak pe squeeze karo.",
      "Fully extend karo neeche."
    ],
    dos: ["Elbows fix karo — anchor point.", "Full extension lo neeche."],
    donts: ["Body swing mat karo.", "Elbows aage mat laao curling mein."]
  },

  32: { // Incline Dumbbell Curl
    youtubeId: "sAq_ocpRh_I",
    benchAngle: { label: "45° – 60° Incline", value: 52, type: "incline" },
    setup: [
      "Bench ko 45–60° pe set karo.",
      "Dumbbell pakdo, arms fully hang karne do sides se.",
      "Back firmly bench par."
    ],
    execution: [
      "Dumbbell curl karo — supinate (rotate) karo curling mein.",
      "Peak pe squeeze karo.",
      "Slowly lower karo — full extension."
    ],
    dos: [
      "Ye angle bicep long head ko maximum stretch deta hai.",
      "Slow eccentric karo — ye is exercise ka main benefit hai."
    ],
    donts: ["Shoulder ko aage mat laao — arm back pe hang karo.", "Swing mat karo."]
  },

  33: { // Hammer Curl
    youtubeId: "TwD-YGVP4Bk",
    benchAngle: null,
    setup: [
      "Neutral grip (palms facing each other — hammer grip).",
      "Khade ya seated — elbows fixed at sides."
    ],
    execution: [
      "Curl karo neutral grip maintain karte hue.",
      "Peak pe hold, controlled lower karo."
    ],
    dos: ["Brachialis aur brachioradialis target hota hai.", "Wrist neutral rakho throughout."],
    donts: ["Palms ko rotate mat karo — neutral grip fixed.", "Swing mat karo."]
  },

  34: { // Preacher Curl
    youtubeId: "fIWP-FRFNU0",
    benchAngle: null,
    setup: [
      "Upper arm ko pad pe firmly rakho.",
      "EZ-bar ya dumbbell underhand grip.",
      "Arms fully extended starting position."
    ],
    execution: [
      "Curl karo — upper arm pad pe fixed rakho.",
      "Full contraction lo.",
      "Slowly lower karo — full extension."
    ],
    dos: ["Strict form — pad se arm ko mat uthaao.", "Slow reps — cheating possible nahi."],
    donts: ["Heavy weight mat lo — elbow joint stress.", "Elbows ko pad se mat uthaao."]
  },

  // ─── TRICEPS ───────────────────────────────────────────────────────────────

  35: { // Rope Pushdown
    youtubeId: "vB5OHsJ3EME",
    benchAngle: null,
    setup: [
      "High pulley pe rope attachment lagao.",
      "Rope ke ends pakdo — pronated grip.",
      "Slight forward lean — elbows body ke side mein fixed."
    ],
    execution: [
      "Rope ko neeche push karo — ends ko bahar separate karo.",
      "Tricep fully extend karo.",
      "Slowly return karo."
    ],
    dos: ["Elbows tucked aur fixed.", "Peak contraction pe rope split karo."],
    donts: ["Elbows mat hone do swing — anchor karo.", "Forward lean zyada mat karo."]
  },

  36: { // Overhead Cable Extension
    youtubeId: "yh8jdR1SKpg",
    benchAngle: null,
    setup: [
      "Cable ko low position pe set karo.",
      "Rope ya handle pakdo.",
      "Peeche ki taraf face karo cable machine se.",
      "Elbows ears ke kareeb bend karo."
    ],
    execution: [
      "Arms ko fully extend karo overhead.",
      "Tricep long head squeeze karo.",
      "Controlled return."
    ],
    dos: ["Long head maximum stretch milti hai is angle pe.", "Elbows narrow rakho throughout."],
    donts: ["Elbows flare mat karo.", "Jerk mat karo."]
  },

  37: { // Tricep Dips
    youtubeId: "wjUmnZH528Y",
    benchAngle: null,
    setup: [
      "Parallel bars pakdo — shoulder width.",
      "Arms lock karo upar.",
      "Slight forward lean chest ke liye, upright triceps ke liye."
    ],
    execution: [
      "Elbows peeche bending ke saath neeche jao.",
      "Chest/shoulder level tak ya jitna comfortable ho.",
      "Arms fully extend karo upar."
    ],
    dos: ["Controlled descent.", "Forward lean = more chest; upright = more tricep."],
    donts: ["Zyada neeche mat jao — shoulder injury.", "Flare mat karo elbows."]
  },

  38: { // Skull Crushers
    youtubeId: "d_KZxkY_5cM",
    benchAngle: { label: "0° — Flat (Decline optional: -15°)", value: 0, type: "flat" },
    setup: [
      "EZ-bar ya straight bar — shoulder width grip.",
      "Flat bench par lait jao.",
      "Bar ko chest ke upar hold karo arms locked."
    ],
    execution: [
      "Elbows bend karo — bar ko forehead tak lower karo.",
      "Elbows fixed rakho — only forearms move.",
      "Arms extend karo — starting position."
    ],
    dos: ["Elbows narrow rakho throughout.", "Controlled — bar gira to sach mein skull crush."],
    donts: ["Elbows flare mat karo.", "Heavy weight se start mat karo."]
  },

  // ─── ABS / CORE ────────────────────────────────────────────────────────────

  39: { // Cable Crunch
    youtubeId: "2fbujeH3F0E",
    benchAngle: null,
    setup: [
      "Rope attachment — high pulley.",
      "Ghutno ke bal baitho — cable facing.",
      "Rope ko neck ke behind ya ears ke side pe hold karo."
    ],
    execution: [
      "Hips fixed rakho — spine ko flex karo (crunch).",
      "Peak pe abs squeeze karo.",
      "Controlled return."
    ],
    dos: ["Hip movement minimize karo — abs se karo.", "Full ROM — stretch feel karo."],
    donts: ["Arms se pull mat karo — abs se move karo.", "Hip hinge mat karo."]
  },

  40: { // Plank
    youtubeId: "pSHjTRCQxIw",
    benchAngle: null,
    setup: [
      "Forearms zameen par — elbows shoulders ke neeche.",
      "Body straight line mein — head to heels.",
      "Core brace karo — pelvis neutral."
    ],
    execution: [
      "Position hold karo.",
      "Normal breathe karo.",
      "Hips ko level rakho — na upar na neeche."
    ],
    dos: ["Glutes aur quads tight rakho.", "Breathing maintain karo."],
    donts: ["Hips ko sag mat hone do.", "Head drop mat karo ya upar mat karo."]
  },

  41: { // Hanging Leg Raise
    youtubeId: "hdng3lyAFmI",
    benchAngle: null,
    setup: [
      "Bar pakdo — shoulder width.",
      "Arms fully extended hang karo.",
      "Slight backward tilt of pelvis."
    ],
    execution: [
      "Legs ko raise karo — hip flexion se.",
      "Hip level ya upar tak — advanced ke liye 90° ya overhead.",
      "Controlled lower karo."
    ],
    dos: ["Swing minimize karo.", "Bent knee se shuru karo agar advanced nahi."],
    donts: ["Momentum se mat swing karo.", "Lower back se arch mat karo."]
  },

  42: { // Russian Twist
    youtubeId: "wkD8rjkodUI",
    benchAngle: null,
    setup: [
      "Baith jao — legs bent ya extended (advanced).",
      "Slight backward lean — V-shape body.",
      "Haath aage rakho ya weight pakdo."
    ],
    execution: [
      "Torso ko side se side rotate karo.",
      "Obliques feel karo.",
      "Rhythmic pace maintain karo."
    ],
    dos: ["Rotation torso se karo, na arms se.", "Feet lifted for more challenge."],
    donts: ["Lower back pe stress mat do — neutral spine.", "Zyada fast mat karo — controlled."]
  },

  43: { // Decline Sit-Up
    youtubeId: "1fbU_MkV7NE",
    benchAngle: { label: "15° – 30° Decline", value: -22, type: "decline" },
    setup: [
      "Bench ko 15–30° decline pe set karo.",
      "Ankles secure karo bench hooks pe.",
      "Haath chest pe ya head ke peeche."
    ],
    execution: [
      "Core se sit up karo — lower back mat use karo.",
      "Full range — torso vertical ya thoda aage.",
      "Controlled lower karo."
    ],
    dos: ["Slow movement karo — momentum se mat.", "Full crunch motion lo."],
    donts: ["Neck se mat pull karo — haath head ke peeche hai to release karo.", "Jerk mat karo."]
  },

  44: { // Ab Wheel Rollout
    youtubeId: "Xyd_fa5zoEU",
    benchAngle: null,
    setup: [
      "Ghutno ke bal baitho — wheel haath mein.",
      "Hips ko slightly aage lean karo.",
      "Core tight brace karo."
    ],
    execution: [
      "Wheel ko aage roll karo — body extend karo.",
      "Hips ko drop mat karo — anti-extension maintain.",
      "Core se pull karo — wapas starting position."
    ],
    dos: ["Start with short range of motion.", "Core tight rakho — lower back protect karo."],
    donts: ["Hips ko sagging mat hone do.", "Beginners full extension mat karo."]
  },

  // ─── CARDIO ────────────────────────────────────────────────────────────────

  45: { // Treadmill Running
    youtubeId: "kVnyY17VS9Y",
    benchAngle: null,
    setup: [
      "Treadmill pe khade ho — handrails mat pakdo (agar possible).",
      "Upright posture — slight forward lean.",
      "Comfortable stride length."
    ],
    execution: [
      "Steady pace ya intervals as needed.",
      "Midfoot strike karo — heel strike avoid karo.",
      "Arms naturally swing karo."
    ],
    dos: ["Incline 1–2% rakho — outdoor running simulate karta hai.", "Hydrated raho."],
    donts: ["Handrails mat pakdo — it defeats the purpose.", "Start mein zyada fast mat jao."]
  },

  46: { // Stationary Bike
    youtubeId: "tP5XRRbJ8Sc",
    benchAngle: null,
    setup: [
      "Seat height adjust karo — slight knee bend at bottom.",
      "Handlebar comfortable height pe.",
      "Foot straps secure karo."
    ],
    execution: [
      "Smooth, circular pedaling motion.",
      "Resistance appropriate rakho.",
      "Upright ya slight forward lean."
    ],
    dos: ["Consistent cadence maintain karo.", "HIIT ya steady state — both effective."],
    donts: ["Zyada neeche seat mat rakho — knee strain.", "Handlebars pe zyada lean mat karo."]
  },

  47: { // Rowing Machine
    youtubeId: "H0r_p-Fo9NU",
    benchAngle: null,
    setup: [
      "Feet footrests mein secure karo.",
      "Handle pakdo — overhand grip.",
      "Start: knees bent, arms extended, body slight forward."
    ],
    execution: [
      "Legs drive karo pehle (60% power).",
      "Phir body hinge backward (30%).",
      "Finally arms pull (10%) — handle ke navel tak.",
      "Recovery: arms forward, body lean, knees bend."
    ],
    dos: ["Sequence: Legs → Body → Arms. Recovery: Arms → Body → Legs.", "Smooth continuous movement."],
    donts: ["Arms pehle mat kheincho — legs first.", "Round back mat karo."]
  },

  // ─── FUNCTIONAL TRAINING ───────────────────────────────────────────────────

  48: { // Battle Ropes
    youtubeId: "l6hpDO0u6EY",
    benchAngle: null,
    setup: [
      "Rope ke anchor ke saamne khade ho.",
      "Comfortable distance — tension mein rope.",
      "Athletic stance — knees slightly bent."
    ],
    execution: [
      "Alternating ya simultaneous waves banao.",
      "Full arm extension se hip level tak.",
      "Core engaged throughout."
    ],
    dos: ["Controlled breathing.", "Multiple wave patterns try karo."],
    donts: ["Only arms mat use karo — full body involvement.", "Straight legs mat rakho."]
  },

  49: { // Kettlebell Swing
    youtubeId: "YSxHifyI6s8",
    benchAngle: null,
    setup: [
      "Shoulder-width stance — feet slightly wider.",
      "Kettlebell thoda aage zameen par.",
      "Hinge karo aur dono haath se pakdo."
    ],
    execution: [
      "Hips se back swing karo — kettlebell between legs.",
      "Explosive hip extension — kettlebell aage aur upar.",
      "Shoulder height tak swing.",
      "Hips bend karo wapas — swing continue."
    ],
    dos: [
      "Hip hinge hai ye — squat nahi.",
      "Hips drive karo — arms passive rahein.",
      "Glutes squeeze karo top pe."
    ],
    donts: ["Lower back se mat karo — hips se karo.", "Arms se lift mat karo — hip power use karo."]
  },

  50: { // Thruster
    youtubeId: "L219ltL15zk",
    benchAngle: null,
    setup: [
      "Barbell ya dumbbell front rack position mein.",
      "Shoulder-width squat stance.",
      "Elbows aage — clean grip."
    ],
    execution: [
      "Full depth squat karo.",
      "Drive karo upar — squat se directly overhead press mein.",
      "Arms lock karo overhead.",
      "Bar front rack mein wapas."
    ],
    dos: ["Squat aur press ek seamless movement mein.", "Core tight throughout."],
    donts: ["Squat aur press separately mat karo — combine karo power.", "Elbows mat girane do."]
  },

  51: { // Close-Grip Lat Pulldown (re-checking id numbers — this is a re-look)
    youtubeId: "YKXIG4MRY6I",
    benchAngle: null,
    setup: ["V-bar attachment use karo.", "Narrow neutral grip."],
    execution: ["Upper abs/sternum tak pull karo.", "Squeeze karo, release karo."],
    dos: ["Lower lats aur inner back feel karo."],
    donts: ["Lean zyada mat karo.", "Swing mat karo."]
  }

};

// Helper: Get guide for an exercise. Returns null if not found.
window.getExerciseGuide = function(exerciseId) {
  return window.GRAVITAS_GUIDES[Number(exerciseId)] || null;
};

// Helper: Build YouTube embed URL
window.buildYouTubeUrl = function(youtubeId, exerciseName) {
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`;
  }
  // Fallback: search embed for custom exercises
  const query = encodeURIComponent((exerciseName || "exercise") + " proper form tutorial");
  return `https://www.youtube.com/embed?listType=search&list=${query}&rel=0&modestbranding=1&playsinline=1`;
};
