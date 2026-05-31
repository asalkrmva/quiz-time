const PAGES = {
    login: "login.html",
    home: "index.html",
    quiz: "quiz.html"
};

function navigateTo(href) {
    setTimeout(() => {
        window.location.href = href;
    }, 300);
}