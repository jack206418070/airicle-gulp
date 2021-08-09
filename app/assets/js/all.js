const cartBtn = document.querySelector('.js-cart');
cartBtn.addEventListener('click',cartHandler);

function cartHandler(e){
  e.preventDefault();
  e.stopPropagation();
  const cart = document.querySelector('.cart');
  if(e.target.dataset.cart === 'open' || e.target.nodeName === 'span'){
    cart.classList.add('show');
    e.target.dataset.cart = 'close';
  }else if(e.target.dataset.cart === 'close' || e.target.nodeName === 'span'){
    cart.classList.remove('show');
    e.target.dataset.cart = 'open';
  }
}