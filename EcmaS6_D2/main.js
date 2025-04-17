const containerBtns = document.getElementById('user-buttons');
const titleContainer = document.getElementById('title-posts');
(async function () {
    var res = await fetch("https://jsonplaceholder.typicode.com/users");
    var users  = await res.json();
    users.map(user =>{  
    const button = document.createElement('button');
    button.textContent = `${user.name}`;
    button.addEventListener('click', () => {
         postTitle(user.id);
    }); 
    containerBtns.appendChild(button);
});
postTitle(1);
})();
async function postTitle(userId) {
    titleContainer.innerHTML = "";
    var res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    var posts = await res.json();
    posts.forEach(post => {
    const text =document.createElement('p');
    text.textContent= post.title;
    titleContainer.appendChild(text);
     });
}