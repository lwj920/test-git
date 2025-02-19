
const btn = document.querySelector('#TOP');
const box_pst = document.querySelectorAll('.rightMenu')[0].offsetTop;
btn.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst, behavior: 'smooth' } )
});
const btn1 = document.querySelector('#COVER');
const box_pst1 = document.querySelectorAll('.p0__bg')[0].offsetTop;
btn1.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst1-70, behavior: 'smooth'})
});
const btn2 = document.querySelector('#TEL');
const box_pst2 = document.querySelectorAll('.p1__bg')[0].offsetTop;
btn2.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst2-70, behavior: 'smooth'})
});
const btn3 = document.querySelector('#SITE');
const box_pst3 = document.querySelectorAll('.p2__bg')[0].offsetTop;
btn3.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst3-70, behavior: 'smooth'})
});
const btn4 = document.querySelector('#WORK');
const box_pst4 = document.querySelectorAll('.p6__bg')[0].offsetTop;
btn4.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst4-70, behavior: 'smooth'})
});
const btn5 = document.querySelector('#Apple');
const box_pst5 = document.querySelectorAll('.p2')[0].offsetTop;
btn5.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst5-70, behavior: 'smooth'})
});
const btn6 = document.querySelector('#YoungPoong');
btn6.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst5+850, behavior: 'smooth'})
});
const btn7 = document.querySelector('#ABCefe');
btn7.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst5+1750, behavior: 'smooth'})
});
const btn8 = document.querySelector('#CELL');
btn8.addEventListener('click',function(){
  window.scrollTo({left:0, top:box_pst5+2640, behavior: 'smooth'})
});



const modalOpenButton1 = document.getElementById('modalOpenButton1');
const modalCloseButton1 = document.getElementById('modalCloseButton1');
const modal1 = document.getElementById('modalContainer1');

modalOpenButton1.addEventListener('click', () => {
  modal1.classList.remove('hidden');
});

modalCloseButton1.addEventListener('click', () => {
  modal1.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal1.classList.add('hidden');
  } 
});


const modalOpenButton2 = document.getElementById('modalOpenButton2');
const modalCloseButton2 = document.getElementById('modalCloseButton2');
const modal2 = document.getElementById('modalContainer2');

modalOpenButton2.addEventListener('click', () => {
  modal2.classList.remove('hidden');
});

modalCloseButton2.addEventListener('click', () => {
  modal2.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.classList.add('hidden');
  } 
});


const modalOpenButton3 = document.getElementById('modalOpenButton3');
const modalCloseButton3 = document.getElementById('modalCloseButton3');
const modal3 = document.getElementById('modalContainer3');

modalOpenButton3.addEventListener('click', () => {
  modal3.classList.remove('hidden');
});

modalCloseButton3.addEventListener('click', () => {
  modal3.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal3) {
    modal3.classList.add('hidden');
  } 
});


const modalOpenButton4 = document.getElementById('modalOpenButton4');
const modalCloseButton4 = document.getElementById('modalCloseButton4');
const modal4 = document.getElementById('modalContainer4');

modalOpenButton4.addEventListener('click', () => {
  modal4.classList.remove('hidden');
});

modalCloseButton4.addEventListener('click', () => {
  modal4.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal4) {
    modal4.classList.add('hidden');
  } 
});


const modalOpenButton5 = document.getElementById('modalOpenButton5');
const modalCloseButton5 = document.getElementById('modalCloseButton5');
const modal5 = document.getElementById('modalContainer5');

modalOpenButton5.addEventListener('click', () => {
  modal5.classList.remove('hidden');
});

modalCloseButton5.addEventListener('click', () => {
  modal5.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal5) {
    modal5.classList.add('hidden');
  } 
});


const modalOpenButton6 = document.getElementById('modalOpenButton6');
const modalCloseButton6 = document.getElementById('modalCloseButton6');
const modal6 = document.getElementById('modalContainer6');

modalOpenButton6.addEventListener('click', () => {
  modal6.classList.remove('hidden');
});

modalCloseButton6.addEventListener('click', () => {
  modal6.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === modal6) {
    modal6.classList.add('hidden');
  } 
});



const modalOpenButton7 = document.getElementById('modalOpenButton7');
const modalCloseButton7 = document.getElementById('modalCloseButton7');
const modal7 = document.getElementById('modalContainer7');

modalOpenButton7.addEventListener('click', () => {
  modal7.classList.remove('hidden');
});

modalCloseButton7.addEventListener('click', () => {
  modal7.classList.add('hidden');
  
});
window.addEventListener('click', (event) => {
    if (event.target === modal7) {
      modal7.classList.add('hidden');
    } 
  });