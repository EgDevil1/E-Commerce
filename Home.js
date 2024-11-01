let cart = [];

function addToCart(productName, price) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartCount.innerText = cart.reduce((count, item) => count + item.quantity, 0);
    cartItems.innerHTML = cart.map(item => 
        `<li>${item.name} - Rs.${item.price} x ${item.quantity}</li>`
    ).join("");
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPrice.innerText = `Total: Rs. ${total}`;
}

function showCheckout() {
    document.querySelector('.cart-section').classList.remove('show');
    document.querySelector('.checkout-section').classList.add('show');
}

function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    
    alert(`Order placed!\nName: ${name}\nAddress: ${address}\nContact: ${contact}\nTotal: Rs.${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}`);
    cart = [];
    updateCart();
    document.querySelector('.checkout-section').classList.remove('show');
}
