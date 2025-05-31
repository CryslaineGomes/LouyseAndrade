function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-pt]');
    elements.forEach(el => {
        const current = el.innerText;
        const pt = el.getAttribute('data-pt');
        const en = el.getAttribute('data-en');
        el.innerText = (current === pt) ? en : pt;
    });
}
