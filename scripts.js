document.addEventListener('DOMContentLoaded', function() {
    fetch('get_posts.php')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('posts');
            data.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `
                    <h2>${post.title}</h2>
                    <img src="${post.thumbnail}" alt="Thumbnail">
                    <p>${post.description}</p>
                    <a href="post.php?id=${post.id}">Read More</a>
                `;
                postsContainer.appendChild(postDiv);
            });
        });
});
