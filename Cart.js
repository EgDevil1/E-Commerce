// Display cart items on Loading
document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
});

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    cartList.innerHTML = ''; // Clear previous items
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - Rs. ${item.price}`;
        total += item.price;

        // Remove item button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem(index);
        li.appendChild(removeButton);

        cartList.appendChild(li);
    });

    totalPriceElement.textContent = `Total: Rs. ${total}`;
}

function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    loadCartItems(); 
}

function proceedToCheckout() {
    document.getElementById('cart-section').style.display = 'none';
    document.getElementById('checkout-section').style.display = 'block';
}

function submitOrder(event) {
    event.preventDefault();
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html'; // Redirect to home
}
