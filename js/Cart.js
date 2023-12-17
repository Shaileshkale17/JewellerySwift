function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('trash');
    cartItemsContainer.innerHTML = ''; // Clear previous content
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        let cartList = document.createElement('div');
        cart.forEach(packageDetails => {
            console.log(packageDetails)
            let cartItemHTML = `
            <div class="cart-main">
                <div class="cart-img">
                    <img src="${packageDetails.image}" alt="${packageDetails.name}">
                </div>
                <div class="cart-text">
                    <p>${packageDetails.name}</p>
                </div>
                <div class="cart-text">
                    <p>Price: ${packageDetails.price}</p>
                </div>
                <div class="cart-icon">
                    <input type="number" name="" id="" value="1">
                    <i onclick="removeItem(${packageDetails.itemsID})" class="bi bi-trash"></i>
                </div>
            </div>`;

            // Calculate total price
            totalPrice += parseFloat(packageDetails.price);

            let cartItem = document.createElement('div');
            cartItem.innerHTML = cartItemHTML;
            cartList.appendChild(cartItem);
        });

        // Display total price
        // let totalElement = document.createElement('div');
        // totalElement.innerHTML = `<p>Total Price: ${totalPrice}</p>`;
        // cartItemsContainer.appendChild(totalElement);

        cartItemsContainer.appendChild(cartList);
    }
}

// Call the function to display cart items when the cart page loads
displayCartItems();

// Function to remove an item from the cart
function removeItem(itemsID) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let updatedCart = cart.filter(item => item.itemsID !== itemsID);

    // Update the cart in local storage 
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Refresh the displayed cart items
    displayCartItems();
}
