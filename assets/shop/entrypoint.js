// In this file you can import assets like images or stylesheets
console.log('Hello Webpack Encore! Edit me in assets/shop/entrypoint.js');
document.addEventListener('DOMContentLoaded', function () {
const quantity = document.getElementById('sylius_shop_add_to_cart_cartItem_quantity');
if (quantity) {
    quantity.value = 10;
    quantity.setAttribute('step', '10');
    quantity.setAttribute('min', '10');

    quantity.addEventListener('change', function() {
        if (parseInt(quantity.value) === 70) {
            alert('Great Choice!');
        }
    });
}
});