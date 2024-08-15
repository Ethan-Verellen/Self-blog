document.getElementById("darkmode").addEventListener('click', (event) => {
    event.preventDefault();
    console.log('test')
    var element = document.body;
   element.classList.toggle("dark-mode");
});