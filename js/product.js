function addToCart(packageName, packageNumber, price, goldRarity) {
    let packageDetails = {
        itemsID: Date.now(),
        name: packageName,
        number: packageNumber,
        price: price,
        rarity: goldRarity
    };

    // Retrieve cart items from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected package details to the cart
    cart.push(packageDetails);

    // Store the updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, provide feedback to the user that the package was added
    alert('Package added to cart!');
}
