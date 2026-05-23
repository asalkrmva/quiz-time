const loginBtn = document.getElementById('loginBtn');
const profileBtn = document.getElementById('profileBtn');
const logoutBtn = document.getElementById('logoutBtn');
const darkBtn = document.getElementById('darkBtn');

function restoreLoginState() {
    if (localStorage.getItem(STORAGE_KEYS.LOGIN)) {
        profileBtn.removeAttribute("hidden");
        logoutBtn.removeAttribute("hidden");
        loginBtn.setAttribute("hidden", "");
    } else {
        loginBtn.removeAttribute("hidden");
        profileBtn.setAttribute("hidden", "");
        logoutBtn.setAttribute("hidden", "");
    }
}

function logout() {
    localStorage.removeItem(STORAGE_KEYS.LOGIN);
    restoreLoginState();
}

restoreLoginState();
restoreSavedTheme();

loginBtn.addEventListener('click', () => navigateTo(PAGES.login));
logoutBtn.addEventListener('click', () => logout());
darkBtn.addEventListener('click', () => toggleTheme());
