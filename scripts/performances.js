const perf = document.querySelector('.performances');
const perfList = document.querySelector('.performances__list');
const perfTitle = document.querySelector('.performances__title');
const perfItems = Array.from(document.querySelectorAll('.performances__item'));


if (perfList.children.length === 1) {
  perfList.classList.add('performances__list_items_one');
  perfTitle.classList.add('performances__title_items_one')
  perf.classList.add('performances_items_one');
}

if (perfList.children.length === 2) {
  perfList.classList.add('performances__list_items_two');
}

if (perfList.children.length >= 3) {
  perfList.classList.add('performances__list_items_three-or-more');
  perfItems.forEach(item => item.classList.add('performances__item_items_three-or-more'));
}





