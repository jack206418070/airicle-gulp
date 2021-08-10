"use strict";

var cartBtn = document.querySelector('.js-cart');
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
cartBtn.addEventListener('click', cartHandler);

function cartHandler(e) {
  e.preventDefault();
  e.stopPropagation();
  var cart = document.querySelector('.cart');

  if (e.target.dataset.cart === 'open' || e.target.nodeName === 'span') {
    cart.classList.add('show');
    e.target.dataset.cart = 'close';
  } else if (e.target.dataset.cart === 'close' || e.target.nodeName === 'span') {
    cart.classList.remove('show');
    e.target.dataset.cart = 'open';
  }
}
//# sourceMappingURL=all.js.map
