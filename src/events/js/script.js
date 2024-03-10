const bts = document.querySelectorAll('.btn');
const div1 = document.querySelector('.div1');
const span = document.querySelector('.span');

bts.forEach(btn => {
  btn.addEventListener('click', (event) => {
    console.log('target', event.target);
    console.log('currentTarget', event.currentTarget);
  });
});
div1.addEventListener('click', (event) => {
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
});
span.addEventListener('click', (event) => {

  event.stopImmediatePropagation();
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);
});
span.addEventListener('click', (event) => {
  console.log('click2');
});
span.addEventListener('click', (event) => {
  console.log('click3');
});