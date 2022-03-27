let quantityInputs = document.querySelectorAll('.quantity__value');
for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener('change', quantityChanged);
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  let cartItemContainer = document.querySelectorAll('.items__container')[0];
  let cartRows = cartItemContainer.querySelectorAll('.item__info');

  let total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.querySelectorAll('.item__price')[0];
    let quantityElement = cartRow.querySelectorAll('.quantity__value')[0];
    let price = parseFloat(priceElement.innerText.replace('$', ''));
    let quantity = quantityElement.value;

    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.querySelector('.total__output').innerText = '$' + total;
  document.querySelector('.subtotal__output').innerText = '$' + total;
}
