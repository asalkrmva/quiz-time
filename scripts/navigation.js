const PAGES = {
    login: "login.html",
    home: "home.html",
    quiz: "quiz.html"
};

function navigateTo(href) {
    setTimeout(() => {
        window.location.href = href;
    }, 300);
}