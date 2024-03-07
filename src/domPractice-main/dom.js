// Создать div
const div = document.createElement('div');
// Добавить к нему класс wrapper
div.classList.add('wrapper');
// Поместить его внутрь тэга body
document.body.append(div);
// Создать заголовок H1 "DOM (Document Object Model)"
const h1 = document.createElement('h1');
h1.textContent = 'DOM (Document Object Model)';
// Добавить H1 перед DIV с классом wrapper
div.before(h1);
// Создать список <ul></ul>
const ul = document.createElement('ul');
ul.innerHTML = '<li>один</li><li>два</li><li>три</li>';
// Поместить список внутрь элемента с классом wrapper
div.append(ul);
// Добавить в него 3 элемента с текстом "один, два, три"


// Поместить список внутрь элемента с классом wrapper

// =================================================
// Создать изображение
const img = document.createElement('img');
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/800px-Gull_portrait_ca_usa.jpg');
// 2. Добавить атрибут width со значением 240
img.setAttribute('width', '240');
// 3. Добавить класс super
img.classList.add('super');
// 4. Добавить свойство alt со значением "Super Man"
img.setAttribute('alt', 'Super Man"');
// Поместить изображение внутрь элемента с классом wrapper
div.append(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const elemHtml = `<div class="pDiv">
<p>1</p>
<p>2</p>
</div>`;
// Поместить этот DIV до элемента <ul></ul>
ul.insertAdjacentHTML('beforebegin', elemHtml);
// Добавить для 2-го параграфа класс text
div.children[0].children[0].classList.add('text');
// Удалить 1-й параграф
div.children[0].children[1].remove();

// Создать функцию generateAutoCard,
// которая принимает 3 аргумента: brand, color, year
const generateAutoCard = (brand, color, year) => {
  return `<div class="autoCard">
    <h2>${brand} ${year}</h2>
    <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${year} лет.</p>
  </div>`;
};
// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos
const autos = document.createElement('div');
autos.classList.add('autos');
// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
  {brand: 'Tesla', year: 2015, color: 'Красный'},
  {brand: 'Lexus', year: 2016, color: 'Серебристый'},
  {brand: 'Nissan', year: 2012, color: 'Черный'},
];

// Поместить эти 3 карточки внутрь DIV с классом autos
carsList.forEach((el, i) => {
  autos.innerHTML += generateAutoCard(el.brand, el.color, el.year);
});
// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
div.before(autos);
// Добавить кнопку Удалить на каждую карточку авто

autos.childNodes.forEach((el, i) => {
  const btn = document.createElement('button');
  btn.textContent = 'Удалить';
  btn.addEventListener('click', () => {
    el.remove();
  });
  el.append(btn);
});
// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку


// // Создать div
// const div = document.createElement('div');
// // Добавить к нему класс wrapper
// div.classList.add('wrapper');
// // Поместить его внутрь тэга body
// document.body.appendChild(div);
// // Создать заголовок H1 "DOM (Document Object Model)"
// const h1 = document.createElement('h1');
// h1.textContent = 'DOM (Document Object Model)';
// // Поместить H1 внутрь DIV с классом wrapper
// div.append(h1);
// // Добавить H1 перед DIV с классом wrapper
// div.before(h1);
// // Создать список <ul></ul>
// // Добавить в него 3 элемента с текстом "один, два, три"
// const ul = document.createElement('ul');
// ul.innerHTML = '<li>один</li><li>два</li><li>три</li>';
//
// // Поместить список внутрь элемента с классом wrapper
// div.append(ul);
// // =================================================
// // Создать изображение
// const img = document.createElement('img');
// // Добавить следующие свойства к изображению
// // 1. Добавить атрибут source
// img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/800px-Gull_portrait_ca_usa.jpg');
// // 2. Добавить атрибут width со значением 240
// img.setAttribute('width', '240');
// // 3. Добавить класс super
// img.classList.add('super');
// // 4. Добавить свойство alt со значением "Super Man"
// img.setAttribute('alt', 'Super Man"');
// // Поместить изображение внутрь элемента с классом wrapper
// div.append(img);
// // =================================================
// // Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
// const pDiv = document.createElement('div');
// pDiv.classList.add('pDiv');
// pDiv.innerHTML = '<p>1</p><p>2</p>';
// // Поместить DIV внутрь элемента с классом wrapper
// div.append(pDiv);
// // Поместить этот DIV до элемента <ul></ul>
// ul.before(pDiv);
// // Добавить для 2-го параграфа класс text
// pDiv.children[1].classList.add('text');
// // Удалить 1-й параграф
// pDiv.children[0].remove();
//
// // Создать функцию generateAutoCard,
// // которая принимает 3 аргумента: brand, color, year
// const generateAutoCard = (brand, color, year) => {
//   return `<div class="autoCard">
//     <h2>${brand} ${year}</h2>
//     <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${year} лет.</p>
//   </div>`;
// };
// // Функция должна возвращать разметку HTML:
// // <div class="autoCard">
// //   <h2>BRAND YEAR</h2>
// //   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// // </div>
//
// // Создать новый DIV с классом autos
// const autos = document.createElement('div');
// autos.classList.add('autos');
// // Создать 3 карточки авто, используя функцию generateAutoCard
// const carsList = [
//   {brand: 'Tesla', year: 2015, color: 'Красный'},
//   {brand: 'Lexus', year: 2016, color: 'Серебристый'},
//   {brand: 'Nissan', year: 2012, color: 'Черный'},
// ];
// carsList.forEach((car) => {
//   autos.innerHTML += generateAutoCard(car.brand, car.color, car.year);
// });
// // Поместить эти 3 карточки внутрь DIV с классом autos
//
// // Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
// div.before(autos);
// // Добавить кнопку Удалить на каждую карточку авто
// autos.childNodes.forEach((card) => {
//   const button = document.createElement('button');
//   button.textContent = 'Удалить';
//   button.addEventListener('click', () => {
//     card.remove();
//   });
//   card.append(button);
// });
// // При клике на кнопку - удалять карточку из структуры DOM
// // 1. Выбрать все кнопки
// // 2. Создать функцию удаления
// // 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
