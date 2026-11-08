
(() => {
    "use strict";

    const $ = (sel, root = document) => root.querySelector(sel);

    $("#year").textContent = new Date().getFullYear();

    // Line counters on the textareas
    document.querySelectorAll("[data-count]").forEach((area) => {
        const out = $(area.dataset.count);
        const noun = area.dataset.countNoun || "items";
        const render = () => {
            const n = area.value.split("\n").filter((line) => line.trim()).length;
            out.textContent = `${n} ${noun}`;
            out.classList.toggle("is-set", n > 0);
        };
        area.addEventListener("input", render);
        render();
    });

    // Show / hide API key
    const keyInput = $("#apiKey");
    const keyToggle = $("#toggleKey");
    keyToggle.addEventListener("click", () => {
        const hidden = keyInput.type === "password";
        keyInput.type = hidden ? "text" : "password";
        keyToggle.setAttribute("aria-pressed", String(hidden));
        keyToggle.setAttribute("aria-label", hidden ? "Hide API key" : "Show API key");
        $("use", keyToggle).setAttribute("href", hidden ? "#i-eye-off" : "#i-eye");
    });

    // Start checking always routes to the web platform
    const modal = $("#webModal");
    $("#checkerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        modal.showModal();
    });

    modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-close]")) modal.close();
        // click on the backdrop closes too
        if (event.target === modal) modal.close();
    });
})();