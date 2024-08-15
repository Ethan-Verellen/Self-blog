document.getElementById("darkmode").addEventListener('click', (event) => {
    event.preventDefault();
    var element = document.body;
   element.classList.toggle("dark-mode");
   titleEL.style.borderTop = "white";
   titleEL.style.borderLeft = "white";
   titleEL.style.borderRight = "white";
});