const UI = {
  loginBtn: document.getElementById("btn"),
  error: document.getElementById("error"),
  username: document.getElementById("username"),
  password: document.getElementById("password")
};

UI.loginBtn?.addEventListener("click", () => {
  event.preventDefault();

  let username = UI.username.value;
  let password = UI.password.value;

  if (username === "admin" && password === "admin") {
    localStorage.setItem(STORAGE_KEYS.LOGIN, true);

    navigateTo(PAGES.home);

    document.body.classList.toggle("off");
  } else {
    UI.error.innerText = "Username or password incorrect";

    UI.username.value = "";
    UI.password.value = "";
  }
});