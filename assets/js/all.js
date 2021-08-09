"use strict";

var cartBtn = document.querySelector('.js-cart');
cartBtn.addEventListener('click', cartHandler);

function cartHandler(e) {
  e.preventDefault();
  e.stopPropagation();
  var cart = document.querySelector('.cart');
  var cartFooter = document.querySelector('.cart__footer');

  if (e.target.dataset.cart === 'open' || e.target.nodeName === 'span') {
    cart.classList.add('show');
    cartFooter.classList.add('show');
    e.target.dataset.cart = 'close';
  } else if (e.target.dataset.cart === 'close' || e.target.nodeName === 'span') {
    cart.classList.remove('show');
    cartFooter.classList.remove('show');
    e.target.dataset.cart = 'open';
  }
}
//# sourceMappingURL=all.js.map
