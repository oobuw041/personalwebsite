// Smooth scrolling effect for navbar links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(link => {//selects all the nav links
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevents instant jump
            let target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust to prevent overlap with fixed navbar
                behavior: "smooth" // Enables smooth scrolling
            });
        });
    });
});
