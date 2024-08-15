document.getElementById("darkmode").addEventListener('click', (event) => {
    event.preventDefault();
    var element = document.body;
   element.classList.toggle("dark-mode");
});