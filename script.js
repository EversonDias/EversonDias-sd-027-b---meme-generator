const input = document.getElementById('text-input');
const textOfMeme = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');
const imagem = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

const leitorDeArquivos = new FileReader();

input.addEventListener('input', () => {
  textOfMeme.innerHTML = input.value;
});

imagem.addEventListener('input', () => {
  leitorDeArquivos.readAsDataURL(imagem.files[0]);
  leitorDeArquivos.addEventListener('loadend', (event) => {
    img.src = event.target.result;
  });
});

function changerColorBackground(color, size, type) {
  container.style.borderColor = color;
  container.style.borderWidth = size;
  container.style.borderStyle = type;
}

fire.addEventListener('click', () => {
  changerColorBackground('rgb(255, 0, 0)', '3px', 'dashed');
});
water.addEventListener('click', () => {
  changerColorBackground('rgb(0, 0, 255)', '5px', 'double');
});
earth.addEventListener('click', () => {
  changerColorBackground('rgb(0, 128, 0)', '6px', 'groove');
});

function changerBackground(props) {
  img.src = props;
}

meme1.addEventListener('click', () => {
  changerBackground('./imgs/meme1.png');
});
meme2.addEventListener('click', () => {
  changerBackground('./imgs/meme2.png');
});
meme3.addEventListener('click', () => {
  changerBackground('./imgs/meme3.png');
});
meme4.addEventListener('click', () => {
  changerBackground('./imgs/meme4.png');
});
