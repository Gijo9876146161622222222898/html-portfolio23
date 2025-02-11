document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Danke für deine Nachricht! Ich werde mich bald melden.");
        form.reset();
    });
});
