/* ============================================================
   GOALS — render kartu "Tujuan dan Rencana Masa Depan"
   dari SITE_DATA.goals dan jalankan scroll loop ke kiri.

   Cara kerja loop tanpa celah:
   1. Satu "grup" berisi kartu diulang sampai selebar area tampil.
   2. Grup itu digandakan sekali -> track = [grup][grup].
   3. CSS menggeser track sejauh -50% (tepat satu grup), lalu mengulang.
   ============================================================ */
(function () {
    const cfg = window.SITE_DATA && SITE_DATA.goals;
    const marquee = document.getElementById("goals-marquee");
    const track = document.getElementById("goals-track");
    if (!cfg || !cfg.items || !cfg.items.length || !marquee || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    /* true = hormati pengaturan "kurangi gerakan" milik sistem pengguna */
    const respectReduced = cfg.respectReducedMotion !== false;
    const SVG_NS = "http://www.w3.org/2000/svg";

    function createIcon(name) {
        const id = document.getElementById("icon-" + name) ? name : "spade";
        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("class", "icon");
        const use = document.createElementNS(SVG_NS, "use");
        use.setAttribute("href", "#icon-" + id);
        svg.appendChild(use);
        return svg;
    }

    function createCard(item, hidden) {
        const card = document.createElement("article");
        card.className = "goal-card";
        if (hidden) card.setAttribute("aria-hidden", "true");

        const icon = document.createElement("div");
        icon.className = "goal-card-icon";
        icon.appendChild(createIcon(item.icon));

        const text = document.createElement("p");
        text.className = "goal-card-text";
        text.textContent = item.text;

        card.append(icon, text);
        return card;
    }

    function appendCards(group, hidden) {
        cfg.items.forEach((item) => group.appendChild(createCard(item, hidden)));
    }

    function build() {
        track.replaceChildren();
        track.style.removeProperty("--goals-duration");

        const group = document.createElement("div");
        group.className = "goals-group";
        appendCards(group, false);
        track.appendChild(group);

        if (respectReduced && reduceMotion.matches) {
            marquee.classList.add("is-static");
            return;
        }
        marquee.classList.remove("is-static");

        let guard = 0;
        while (group.offsetWidth < marquee.clientWidth && guard++ < 20) {
            appendCards(group, true);
        }

        const clone = group.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);

        const speed = cfg.speed > 0 ? cfg.speed : 40;
        track.style.setProperty("--goals-duration", group.offsetWidth / speed + "s");
    }

    let lastWidth = marquee.clientWidth;
    let timer;
    window.addEventListener("resize", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (marquee.clientWidth !== lastWidth) {
                lastWidth = marquee.clientWidth;
                build();
            }
        }, 200);
    });
    reduceMotion.addEventListener("change", build);

    build();
})();