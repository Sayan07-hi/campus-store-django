const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.textContent === "♡") {
            button.textContent = "♥";
            button.style.color = "#e05263";
        } else {
            button.textContent = "♡";
            button.style.color = "#718096";
        }

    });

});