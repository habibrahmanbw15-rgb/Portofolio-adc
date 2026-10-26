/* ============================================================
   CONTACT — logika form "Hubungi Saya"
   Alur: validasi -> (endpoint? fetch : mailto) -> status ke pengguna.
   Semua teks & aturan ada di SITE_DATA.contact (data.js).
   ============================================================ */
(function () {
    const cfg = window.SITE_DATA && SITE_DATA.contact;
    const form = document.getElementById("contact-form");
    if (!cfg || !form) return;

    const msg      = cfg.messages;
    const status   = form.querySelector(".form-status");
    const button   = form.querySelector(".btn-kirim");
    const btnLabel = button.querySelector("span");
    const honeypot = form.elements["website"];

    /* Regex sederhana untuk validasi format email */
    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    /* Bangun daftar field dari cfg.rules (urutan sesuai deklarasi di data.js) */
    const fields = Object.keys(cfg.rules).map((name) => ({
        name,
        el:      form.elements[name],
        rule:    cfg.rules[name],
        errorEl: null,
        touched: false,
    }));

    let lastSentAt = 0;

    /* ---------- Error & status display ---------- */
    function ensureErrorEl(field) {
        if (field.errorEl) return field.errorEl;
        const p    = document.createElement("p");
        p.className = "form-error";
        p.id        = "cf-" + field.name + "-error";
        field.el.setAttribute("aria-describedby", p.id);
        field.el.closest(".form-group").appendChild(p);
        field.errorEl = p;
        return p;
    }

    function showError(field, text) {
        ensureErrorEl(field).textContent = text;
        field.el.setAttribute("aria-invalid", "true");
    }

    function clearError(field) {
        if (field.errorEl) field.errorEl.textContent = "";
        field.el.removeAttribute("aria-invalid");
    }

    function setStatus(text, type) {
        status.textContent = text || "";
        status.className   = "form-status" + (type ? " is-" + type : "");
    }

    /* ---------- Validasi per field ---------- */
    function validate(field) {
        const value             = field.el.value.trim();
        const { label, min, max, type } = field.rule;
        let error = "";

        if (!value) {
            error = msg.required(label);
        } else if (type === "email" && !EMAIL_RE.test(value)) {
            error = msg.emailInvalid;
        } else if (value.length < min) {
            error = msg.tooShort(label, min);
        } else if (value.length > max) {
            error = msg.tooLong(label, max);
        }

        if (error) showError(field, error);
        else        clearError(field);
        return !error;
    }

    /* ---------- Karakter counter untuk textarea pesan ---------- */
    const messageField = fields.find((f) => f.name === "pesan");
    let counter = null;
    if (messageField) {
        counter = document.createElement("span");
        counter.className = "form-counter";
        messageField.el.closest(".form-group").appendChild(counter);
        messageField.el.setAttribute("maxlength", messageField.rule.max + 50);
    }
    function updateCounter() {
        if (!counter) return;
        const len         = messageField.el.value.length;
        counter.textContent = len + " / " + messageField.rule.max;
        counter.classList.toggle("is-over", len > messageField.rule.max);
    }

    /* ---------- Event listeners per field ---------- */
    fields.forEach((field) => {
        if (!field.el) return; /* field mungkin tidak ada di DOM — abaikan */
        field.el.addEventListener("input", () => {
            if (field.name === "pesan") updateCounter();
            if (field.touched) validate(field);
        });
        field.el.addEventListener("blur", () => {
            field.touched = true;
            validate(field);
        });
    });

    /* ---------- Ambil semua nilai form ---------- */
    function getValues() {
        const data = {};
        fields.forEach((f) => {
            if (f.el) data[f.name] = f.el.value.trim();
        });
        return data;
    }

    /* ---------- Busy state ---------- */
    function setBusy(busy) {
        button.disabled = busy;
        button.setAttribute("aria-busy", String(busy));
        btnLabel.textContent = busy ? msg.buttonBusy : msg.buttonIdle;
    }

    /* ---------- Mailto fallback ----------
       Menyertakan email pengirim di:
         - Reply-To  -> kamu bisa langsung reply dari inbox
         - Subject   -> langsung terlihat dari siapa
         - Body      -> info lengkap tersimpan di badan email               */
    function openMailto(data) {
        const subject = encodeURIComponent(
            `${cfg.subjectPrefix} – ${data.nama} <${data.email}>`
        );
        const body = encodeURIComponent(
            `Dari   : ${data.nama}\n` +
            `Email  : ${data.email}\n` +
            `Asal   : ${data.asal || "-"}\n` +
            `\n` +
            `Pesan\n` +
            `─────────────────────────\n` +
            `${data.pesan}`
        );
        /* Reply-To agar ketika kamu reply langsung masuk ke email pengirim */
        const replyTo = encodeURIComponent(data.email);

        window.location.href =
            `mailto:${cfg.email}` +
            `?subject=${subject}` +
            `&body=${body}` +
            `&reply-to=${replyTo}`;

        setStatus(msg.mailto, "info");
    }

    /* ---------- Fetch ke endpoint (Formspree / REST API) ---------- */
    async function sendToEndpoint(data) {
        setBusy(true);
        setStatus(msg.sending, "info");
        try {
            const res = await fetch(cfg.endpoint, {
                method:  "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body:    JSON.stringify(data),
            });
            if (!res.ok) throw new Error("HTTP " + res.status);

            setStatus(msg.success, "success");
            form.reset();
            fields.forEach((f) => { f.touched = false; clearError(f); });
            updateCounter();
            lastSentAt = Date.now();
        } catch (err) {
            setStatus(
                err instanceof TypeError ? msg.network : msg.failed,
                "error"
            );
        } finally {
            setBusy(false);
        }
    }

    /* ---------- Submit ---------- */
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        /* Jebakan bot */
        if (honeypot && honeypot.value) {
            setStatus(msg.success, "success");
            form.reset();
            return;
        }

        /* Cooldown */
        const waitSec = Math.ceil(
            (lastSentAt + cfg.cooldownSeconds * 1000 - Date.now()) / 1000
        );
        if (waitSec > 0) {
            setStatus(msg.cooldown(waitSec), "error");
            return;
        }

        /* Validasi semua field */
        fields.forEach((f) => (f.touched = true));
        const invalid = fields.filter((f) => f.el && !validate(f));
        if (invalid.length) {
            setStatus(msg.invalid, "error");
            invalid[0].el.focus();
            return;
        }

        const data = getValues();
        if (cfg.endpoint) {
            sendToEndpoint(data);
        } else {
            lastSentAt = Date.now();
            openMailto(data);
        }
    });

    updateCounter();
})();
