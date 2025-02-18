const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click',()=>{
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus',(e)=>{
  searchEl.classList.add('focused');
  e.target.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur',(e)=>{
  searchEl.classList.remove('focused');
  e.target.setAttribute('placeholder','');
});