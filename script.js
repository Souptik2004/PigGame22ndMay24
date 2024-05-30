'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const header = document.querySelector('.header');
//const btnScrollTo = document.querySelector('.btn--dcroll-to');
//const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  //e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    console.log(e.target);
    console.log('LINK');
    const id = this.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message2 = document.createElement('div');
message2.classList.add('hollodiv');
message2.innerHTML = 'hello bachho';

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'we use cookis or increase function and analytics';
message.innerHTML =
  'we use cookis or increase function and analytics <button  class = "btn">Got-it!</button>';
//header.prepend(message);
// const btnLogo = document.querySelector('.nav__logo');
// btnLogo.addEventListener('click', function (e) {
//   e.preventDefault();
//   header.append(message);
// });
message2.style.backgroundColor = '#37383d';
message2.style.color = '#e4e4e4';
header.after(message2);
const message1 = message.cloneNode(true);
header.before(message);
header.append(message1);
header.after(message);
document.querySelector('.btn').addEventListener('click', function () {
  message.remove();
  message1.remove();
});

//dom traversing
message.style.backgroundColor = '#37383d';
//message.style.height = '100';
message.style.width = '100%';
message.style.height = '100px';
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section3 = document.querySelector('#section--3');

const s1coords = section1.getBoundingClientRect();
console.log(s1coords);
// btnScrollTo.addEventListener('click', function (e) {
//   //console.log(e.target.getBoundingClientRect());
//   //console.log(window.pageXOffset, pageYOffset);

//   console.log(
//     'height and width ',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // window.scrollTo({
//   //   left: s1coords.left,
//   //   top: s1coords.top,
//   //   behavior: 'smooth',
//   // });

//   //section1.scrollIntoView({ behavior: 'smooth' });
// });
// const h3 = document.querySelector('h3');
// // h3.addEventListener('Select', function (e) {
// //   //alert('hovering');
// //   header.scrollIntoView({ behavior: 'smooth' });
// // });
// h3.onmouseenter = function (e) {
//   header.scrollIntoView({ behavior: 'smooth' });
// };
// const event = function (e) {
//   //alert('hovering');
//   section1.scrollIntoView({ behavior: 'smooth' });
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseleave', event);
// setTimeout(() => h1.removeEventListener('mouseleave', event), 5000);

//creating a randm color
//rgb(255,255.255);

//header.style.backgroundColor = randomColor;
// const randomColor = function () {
//   const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);
//   const randomColor = `rgb(${randomInt(200, 255)},${randomInt(
//     200,
//     255
//   )},${randomInt(200, 255)})`;
//   console.log(randomColor);
//   this.style.backgroundColor = randomColor;
// };

//
// btnFeatures.addEventListener('click', randomColor);
// document.querySelector('.nav').addEventListener('click', randomColor);
const btnFeatures = document.querySelector('#logo');
btnFeatures.addEventListener('click', function () {
  section3.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
// console.log(h1.children);

//console.log(tabs, tabsContainer, tabsContent);
//console.log('u');
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;
  if (clicked) {
    //e.target.classList.remove('operations__tab--active');
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(t => t.classList.remove('operations__content--active'));

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');

    clicked.classList.add('operations__tab--active');
    console.log('TAB');
  }
});
