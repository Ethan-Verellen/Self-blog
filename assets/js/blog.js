const splitPost = JSON.parse(localStorage.getItem('blogpost'));
console.log(splitPost);
const fullblog = document.getElementById('post');

function bloging() {
    for (i=0; i < splitPost.length
        ; i++) {
        const fullblog = document.getElementById('post');
        const singleblog = document.createElement('div');
        const titleEL = document.createElement('p');
        const contentEL = document.createElement('p');
        const nameEL = document.createElement('p');

        titleEL.textContent=`${splitPost[i].title}`;
        titleEL.setAttribute('style', 'border-bottom: solid; margin-left: 1%;')
        singleblog.appendChild(titleEL);

        contentEL.textContent=`${splitPost[i].content}`;
        singleblog.appendChild(contentEL);

        nameEL.textContent=`By: ${splitPost[i].username}`;
        singleblog.appendChild(nameEL);
        fullblog.appendChild(singleblog);
        // titleEL.style.borderTop = "solid black";
        // titleEL.style.borderLeft = "solid black";
        // titleEL.style.borderRight = "solid black";

    }
};
document.getElementById("back").addEventListener('click', (event) => {
    event.preventDefault();
    document.location.href = './'
});
bloging()