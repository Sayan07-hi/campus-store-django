// =========================
// HOMEPAGE JAVASCRIPT
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const sellLinks = document.querySelectorAll('a[href="#sell"]');

    sellLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const sellSection = document.getElementById("sell");

            if (sellSection) {
                sellSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});