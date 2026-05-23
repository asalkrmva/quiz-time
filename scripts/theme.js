const DARK_THEME_CLASS = 'dark';
const LIGHT_THEME_CLASS = 'light';

function toggleTheme() {
    document.body.classList.toggle(DARK_THEME_CLASS);

    if (document.body.classList.contains(DARK_THEME_CLASS)) {
        darkBtn.innerText = '☀️';
        localStorage.setItem(STORAGE_KEYS.THEME, DARK_THEME_CLASS);
    } else {
        darkBtn.innerText = '🌙';
        localStorage.setItem(STORAGE_KEYS.THEME, LIGHT_THEME_CLASS);
    }
}

function restoreSavedTheme() {
    if (localStorage.getItem(STORAGE_KEYS.THEME) === DARK_THEME_CLASS) {
        document.body.classList.add(DARK_THEME_CLASS);
        darkBtn.innerText = '☀️';
    }
}