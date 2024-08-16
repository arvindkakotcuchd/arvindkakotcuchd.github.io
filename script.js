let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addToCart(product, price) {
    const productObj = { product, price };
    cartItems.push(productObj);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart();
}

function displayCart() {
    const cartItemsList = document.getElementById('cart-items');
    if (cartItemsList) {
        cartItemsList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - ₹${item.price}`;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.onclick = () => removeFromCart(index);
            li.appendChild(removeBtn);
            cartItemsList.appendChild(li);
        });
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart();
}

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});
