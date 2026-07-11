document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to Diamondgee Jewelries!");

    const buttons = document.querySelectorAll(".product a");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Customer clicked Order on WhatsApp");
        });
    });
});
