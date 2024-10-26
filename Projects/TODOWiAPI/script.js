
const apiUrl = "http://localhost:3000/posts";

let selectedPostId = null;
async function fetchPosts() {
    const response = await fetch(apiUrl);
    const posts = await response.json();
    displayPosts(posts);
}

function displayPosts(posts) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button onclick="editPost(${post.id}, '${post.title}', '${post.body}')">Edit</button>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
        postContainer.appendChild(postElement);
    });
}

async function createPost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
    });
    const newPost = await response.json();
    alert("Post created successfully!");
    fetchPosts();
    resetForm();
}

function editPost(id, title, body) {
    
    selectedPostId = id;
    document.getElementById('title').value = title;
    document.getElementById('body').value = body;
    document.getElementById('updateButton').style.display = 'block';
 
}

async function updatePost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const response = await fetch(`${apiUrl}/${selectedPostId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
    });
    const updatedPost = await response.json();
    alert("Post updated successfully!");
    fetchPosts();
    resetForm();
}

async function deletePost(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    alert("Post deleted successfully!");
    fetchPosts();
}

function resetForm() {
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
    selectedPostId = null;
    document.getElementById('updateButton').style.display = 'none';
}

fetchPosts();
