const input = document.getElementById('text-input');
const textOfMeme = document.getElementById('meme-text');
const preview = document.getElementById('mem-image-container');

input.addEventListener('input', function () {
  textOfMeme.innerHTML = this.value;
})

