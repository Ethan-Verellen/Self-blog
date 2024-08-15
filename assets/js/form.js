const usernamEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
const formEl = document.getElementById('blogForm');
let blogpost = [];

blogpost = JSON.parse(localStorage.getItem('blogpost'))||[];
console.log(blogpost);

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const blogtitle =titleEl.value;
    const blogusername =usernamEl.value;
    const blogcontent =contentEl.value;
    

    if (blogtitle == "" || blogusername == "" || blogcontent == "") {
        alert('please fill in all squares');
        return;
    }

    const blog = {
        title: blogtitle,
        username: blogusername,
        content: blogcontent,
    };
    
    blogpost.push(blog);

    const bp = JSON.stringify(blogpost);

    localStorage.setItem('blogpost', bp)

    document.location.href = './blog.html'
});