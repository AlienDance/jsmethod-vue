const updateCart = storedItems => {
  const cartNum = document.querySelector('.cart-num');
  if (storedItems.length) {
    const ammountsArray = [];
    storedItems.forEach(item => {
      ammountsArray.push(item.ammount);
    });
    const totalAmmount = ammountsArray.reduce((prevValue, currentValue) => {
      return prevValue + currentValue;
    });
    cartNum.textContent = totalAmmount;
  } else {
    cartNum.textContent = 0;
  }
};

export default updateCart;
