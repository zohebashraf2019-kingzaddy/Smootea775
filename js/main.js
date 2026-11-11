/* =========================================================
   SMOOTEA775 · interactions
   ========================================================= */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;

  /* ---------- nav ---------- */
  const burger = $("#burger"), links = $("#navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", false);
  }));
  $("#year").textContent = new Date().getFullYear();

  /* ---------- wobbly hero letters ---------- */
  let ci = 0;
  $$(".wobble .line").forEach(line => {
    const txt = line.textContent;
    line.textContent = "";
    [...txt].forEach(ch => {
      const s = document.createElement("span");
      s.className = "char"; s.textContent = ch; s.style.setProperty("--i", ci++);
      s.setAttribute("aria-hidden", "true");
      line.appendChild(s);
    });
  });

  /* ---------- DRINK LAB ---------- */
  const tabsEl = $("#tabs"), listEl = $("#drinkList"), blurbEl = $("#tabBlurb");
  const liquid = $("#liquid"), cloudEl = $("#cloud"), pearlsEl = $("#pearls"), cupWrap = $("#cupWrap");
  const addonsEl = $("#cupAddons");
  let currentTab = "milk", current = null, addons = [];

  function renderTabs() {
    Object.entries(MENU).forEach(([key, cat]) => {
      const b = document.createElement("button");
      b.className = "tab"; b.role = "tab";
      b.textContent = `${cat.emoji} ${cat.label}`;
      b.setAttribute("aria-selected", key === currentTab);
      b.addEventListener("click", () => { currentTab = key; updateTabs(); renderList(true); });
      b.dataset.key = key;
      tabsEl.appendChild(b);
    });
  }
  function updateTabs() { $$(".tab", tabsEl).forEach(t => t.setAttribute("aria-selected", t.dataset.key === currentTab)); }

  function renderList(selectFirst) {
    const cat = MENU[currentTab];
    blurbEl.textContent = cat.blurb;
    listEl.innerHTML = "";
    cat.items.forEach((d, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.className = "drink"; b.type = "button";
      b.style.setProperty("--i", i);
      b.style.setProperty("--d1", d.c[0]); b.style.setProperty("--d2", d.c[1]); b.style.setProperty("--d3", d.c[2]);
      b.innerHTML = `<span class="num">${d.n}</span><span class="dname">${d.name}</span><span class="swatch"></span>${d.tag ? `<span class="tag-mini">${d.tag}</span>` : ""}`;
      b.addEventListener("click", e => { selectDrink(d, b); burst(e.clientX, e.clientY, d.c); });
      li.appendChild(b); listEl.appendChild(li);
      if (selectFirst && i === 0) selectDrink(d, b, true);
    });
  }

  function selectDrink(d, btn, quiet) {
    current = d; addons = [];
    $$(".drink", listEl).forEach(x => x.classList.remove("active"));
    btn && btn.classList.add("active");
    // re-theme the entire page to this drink
    root.style.setProperty("--c1", d.c[0]);
    root.style.setProperty("--c2", d.c[1]);
    root.style.setProperty("--c3", d.c[2]);
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = d.c[1];

    $("#cupNum").textContent = typeof d.n === "number" ? `#${d.n}` : d.n;
    $("#cupName").textContent = d.name;
    $("#cupDesc").textContent = d.desc;

    liquid.classList.remove("refill"); void liquid.offsetWidth; liquid.classList.add("refill");
    setCloud(d.cloud || null);
    pearlsEl.innerHTML = "";
    if (d.pearl) addPearls(d.pearl, 16);
    renderAddonTags();
    $$(".chip").forEach(c => c.classList.remove("on"));
    if (!quiet && innerWidth < 1020) $("#cupStage").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }

  function setCloud(color) {
    if (color) { cloudEl.style.setProperty("--cloud", color); cloudEl.classList.add("on"); }
    else cloudEl.classList.remove("on");
  }

  // pearls stacked from the bottom, kept inside the tapered cup
  function addPearls(color, count) {
    const existing = pearlsEl.children.length;
    for (let k = 0; k < count; k++) {
      const idx = existing + k;
      const row = Math.floor(idx / 6);
      const bottom = 2 + row * 6.2 + Math.random() * 2;              // %
      const edge = 14 * (1 - bottom / 100) + 3;                         // cup tapers toward the bottom
      const left = edge + ((idx % 6) / 5) * (100 - edge * 2 - 11) + (Math.random() * 3 - 1.5);
      const p = document.createElement("span");
      p.className = "pearl";
      p.style.setProperty("--p", color);
      p.style.left = left + "%"; p.style.bottom = bottom + "%";
      p.style.animationDelay = (k * 40) + "ms";
      pearlsEl.appendChild(p);
    }
  }

  function renderAddonTags() {
    addonsEl.innerHTML = addons.map(a => `<span style="background:${a.color}">+ ${a.name}</span>`).join("");
  }

  function makeChips(list, el) {
    list.forEach(t => {
      const b = document.createElement("button");
      b.className = "chip"; b.type = "button";
      b.style.setProperty("--chip", t.color);
      b.innerHTML = `<i></i>${t.name}`;
      b.addEventListener("click", e => {
        if (!current) return;
        if (t.kind === "cloud") {
          addons = addons.filter(a => a.kind !== "cloud");
          $$("#cloudChips .chip").forEach(c => c.classList.remove("on"));
          setCloud(t.color);
        } else {
          addPearls(t.color, 8);
        }
        if (!addons.includes(t)) addons.push(t);
        b.classList.add("on");
        renderAddonTags();
        burst(e.clientX, e.clientY, [t.color, t.color, "#fff"]);
      });
      el.appendChild(b);
    });
  }

  $("#shakeBtn").addEventListener("click", () => {
    cupWrap.classList.remove("shake"); void cupWrap.offsetWidth; cupWrap.classList.add("shake");
  });
  $("#randomBtn").addEventListener("click", e => {
    const keys = Object.keys(MENU);
    currentTab = keys[Math.floor(Math.random() * keys.length)];
    updateTabs(); renderList(false);
    const items = MENU[currentTab].items, i = Math.floor(Math.random() * items.length);
    selectDrink(items[i], $$(".drink", listEl)[i], true);
    burst(e.clientX, e.clientY, items[i].c);
  });
  $("#clearBtn").addEventListener("click", () => {
    if (!current) return;
    const btn = $(".drink.active", listEl);
    selectDrink(current, btn, true);
  });

  renderTabs(); renderList(true);
  makeChips(TOPPINGS, $("#toppingChips"));
  makeChips(CLOUDS, $("#cloudChips"));

  /* ---------- pearl burst ---------- */
  function burst(x, y, colors) {
    if (reduced || !x) return;
    for (let i = 0; i < 14; i++) {
      const b = document.createElement("span");
      b.className = "burst";
      const ang = Math.random() * Math.PI * 2, dist = 50 + Math.random() * 90;
      b.style.left = x - 7 + "px"; b.style.top = y - 7 + "px";
      b.style.background = colors[i % colors.length];
      b.style.setProperty("--x", Math.cos(ang) * dist + "px");
      b.style.setProperty("--y", Math.sin(ang) * dist + "px");
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 950);
    }
  }

  /* ---------- floating boba background ---------- */
  const cv = $("#boba-bg"), ctx = cv.getContext("2d");
  let W, H, bobas = [];
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + "px"; cv.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(34, W / 40));
    bobas = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: 5 + Math.random() * 14,
      vy: -(0.15 + Math.random() * 0.45), wob: Math.random() * Math.PI * 2, kind: Math.random()
    }));
  }
  function themeColors() {
    const cs = getComputedStyle(root);
    return [cs.getPropertyValue("--c2").trim(), cs.getPropertyValue("--c3").trim(), "#ff3fb4", "#8a1fd1", "#2a0a3d"];
  }
  let colors = themeColors(), frame = 0;
  function tick() {
    if (++frame % 30 === 0) colors = themeColors();
    ctx.clearRect(0, 0, W, H);
    for (const b of bobas) {
      b.y += b.vy; b.wob += 0.01; const x = b.x + Math.sin(b.wob) * 12;
      if (b.y < -30) { b.y = H + 30; b.x = Math.random() * W; }
      const col = colors[Math.floor(b.kind * colors.length)];
      const g = ctx.createRadialGradient(x - b.r * .35, b.y - b.r * .35, b.r * .1, x, b.y, b.r);
      g.addColorStop(0, "rgba(255,255,255,.85)"); g.addColorStop(.35, col); g.addColorStop(1, col);
      ctx.globalAlpha = .22; ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, b.y, b.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  addEventListener("resize", resize); resize();
  if (!reduced) tick();

  /* ---------- cursor boba trail ---------- */
  if (finePointer && !reduced) {
    let last = 0;
    addEventListener("pointermove", e => {
      const now = performance.now(); if (now - last < 45) return; last = now;
      const t = document.createElement("span");
      t.className = "trail"; t.style.left = e.clientX - 6 + "px"; t.style.top = e.clientY - 6 + "px";
      document.body.appendChild(t); setTimeout(() => t.remove(), 800);
    });
  }

  /* ---------- tilt cards ---------- */
  if (finePointer && !reduced) {
    $$(".tilt").forEach(card => {
      card.addEventListener("pointermove", e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(800px) rotateY(${px * 14}deg) rotateX(${-py * 14}deg) translateY(-6px)`;
      });
      card.addEventListener("pointerleave", () => card.style.transform = "");
    });
  }

  /* ---------- reveal + counters ---------- */
  $$(".section-head, .sig-card, .pop-card, .timeline, .phone, .cater-grid, .social, .masonry img, .addon-group").forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: .12 });
  $$(".reveal").forEach(el => io.observe(el));

  $$("[data-count]").forEach(el => {
    const end = +el.dataset.count; let n = 0;
    const step = () => { n += Math.ceil(end / 30); el.textContent = Math.min(n, end); if (n < end) requestAnimationFrame(step); };
    setTimeout(step, 600);
  });

  /* ---------- reels ---------- */
  const vio = new IntersectionObserver(entries => entries.forEach(en => {
    const v = en.target;
    if (en.isIntersecting) { v.preload = "auto"; v.play().catch(() => {}); } else v.pause();
  }), { threshold: .4 });
  $$(".phone").forEach(ph => {
    const v = $("video", ph), s = $(".sound", ph);
    vio.observe(v);
    ph.addEventListener("click", () => {
      const willUnmute = v.muted;
      $$(".phone video").forEach(o => { o.muted = true; }); $$(".phone .sound").forEach(o => o.textContent = "🔇");
      v.muted = !willUnmute; s.textContent = willUnmute ? "🔊" : "🔇";
      v.play().catch(() => {});
    });
  });

  /* ---------- lightbox ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg");
  const openLb = (src, alt) => { lbImg.src = src; lbImg.alt = alt || ""; lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); };
  const closeLb = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
  $$(".masonry img").forEach(img => img.addEventListener("click", () => openLb(img.src, img.alt)));
  $("#openBoard").addEventListener("click", () => openLb("assets/img/menu.jpg", "SmooTea menu board"));
  $("#lbClose").addEventListener("click", closeLb);
  lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
  addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });

  /* ---------- catering form → email ---------- */
  $("#caterForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target, data = Object.fromEntries(new FormData(f));
    let ok = true;
    ["name", "email"].forEach(k => {
      const inp = f.elements[k]; const bad = !inp.value.trim() || (k === "email" && !inp.checkValidity());
      inp.classList.toggle("invalid", bad); if (bad) ok = false;
    });
    if (!ok) { $("#formNote").textContent = "Please add your name and a valid email 💜"; return; }
    const subject = `Catering Inquiry – ${data.type} – ${data.name}`;
    const body =
`Hi SmooTea!

I'd like to book you for an event.

Name: ${data.name}
Phone: ${data.phone || "-"}
Email: ${data.email}
Event date: ${data.date || "-"}
Event type: ${data.type}
Guest count: ${data.guests || "-"}
Location: ${data.location || "-"}

Details / drinks:
${data.notes || "-"}

Thank you!`;
    location.href = `mailto:info@smootea775.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $("#formNote").textContent = "Opening your email app… or call/text (775) 815-9540 🧋";
  });
})();
