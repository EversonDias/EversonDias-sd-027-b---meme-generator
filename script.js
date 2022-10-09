const input = document.getElementById('text-input');
const textOfMeme = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');
const imagem = document.getElementById('meme-insert');
const img = document.getElementById('img')

const leitorDeArquivos = new FileReader();

input.addEventListener('input', function () {
  textOfMeme.innerHTML = this.value;
})

imagem.addEventListener('input', function() {
  leitorDeArquivos.readAsDataURL(this.files[0]);
  leitorDeArquivos.addEventListener('loadend', function(event){
    container.style.backgroundImage = `url('${event.target.result}')`
    container.style.backgroundSize = 'cover'
  })
})
