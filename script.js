document.addEventListener("DOMContentLoaded", function () {

    
    document.getElementById("ano").textContent = new Date().getFullYear();

    
    document
        .getElementById("toggle-tema")
        .addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
        });

});
