window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    // Dodaj nowy post
    const newPost = document.createElement('div');
    newPost.className = 'main';
    newPost.innerHTML = `
      <div class="user-name">NewUser</div>
      <div class="img">
        <img src="https://cataas.com/cat" alt="Cat Image" />
      </div>
      <div class="like-share">
        <button class="emoticon">🐱</button>
        <button class="share">🔗</button>
      </div>
    `;
    document.querySelector('.center').appendChild(newPost);
  }
});
