// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(console.log(json))

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadPost();

function displayPost(posts) {
    div = document.getElementById('posts');
    for (const post of posts) {
        // console.log(post);
        const li = document.createElement('li');
        li.classList.add('post')
        li.innerHTML = `Title: ${post.title}, Post Id: ${post.id}`;
        div.appendChild(li);
    }
}