const setItemToLocalStorage = (parsedItem, updateCart) => {
  const storedItems = JSON.parse(localStorage.getItem('cart'));
  if (!storedItems.find(item => item.id === parsedItem.id)) {
    storedItems.push({ id: parsedItem.id, title: parsedItem.title, ammount: 1, category: parsedItem.category });
  } else {
    storedItems.find(item => item.id === parsedItem.id).ammount++;
  }
  updateCart(storedItems);
  localStorage.setItem('cart', JSON.stringify(storedItems));
};

export default setItemToLocalStorage;
