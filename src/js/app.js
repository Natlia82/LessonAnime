// TODO: write your code here
const ButtonAnime = document.querySelector('.button');
// const textAnime = document.querySelector('.text');
ButtonAnime.addEventListener('click', () => {
  document.getElementById('expansion-body').classList.toggle('expansion-hide');
  // document.getElementById('expansion-body').classList.toggle('border');
});
