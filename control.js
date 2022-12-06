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



function loadcomment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displaycomment(data))
}
loadcomment();

function displaycomment(comments) {
    div = document.getElementById('comments');
    for (const comment of comments) {
        // console.log(comment);
        const li = document.createElement('li');
        li.classList.add('comment')
        li.innerHTML = 
        `<h4>Id: ${comment.id}</h4>
        <h5>Name: ${comment.name}</h5>
        <h6>Email: ${comment.email}</h6>
        <p>Description: ${comment.body}</p>`
        div.appendChild(li);
    }
}

