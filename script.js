const input = document.getElementById('text-input');
const textOfMeme = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');
const imagem = document.getElementById('meme-insert');
const img = document.getElementById('img')
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

const leitorDeArquivos = new FileReader();

input.addEventListener('input', function () {
  textOfMeme.innerHTML = this.value;
})

imagem.addEventListener('input', function() {
  leitorDeArquivos.readAsDataURL(this.files[0]);
  leitorDeArquivos.addEventListener('loadend', function(event){
    img.src = event.target.result
  })
})

function changerColorBackground(color) {
  container.style.borderColor = color;
}

fire.addEventListener('click', () =>{
  changerColorBackground('rgb(255, 0, 0)')
})
water.addEventListener('click', () => {
  changerColorBackground('rgb(0, 0, 255)')
})
earth.addEventListener('click', () => {
  changerColorBackground('rgb(0, 128, 0)')
})
