// Exercise 10
// Move this variable to a json file and load the data in this js
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

function cleanTotal(){
    total = 0;
}

function myCart() {
    calculateSubtotals();
    calculateTotal();
}

// Exercise 1
function addToCartList(id) {
    for (i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            cartList.push(products[i])
            console.log(cartList);
        }
    }
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
};

// Exercise 2
function cleanCart() {

    cartList = []
}

// Exercise 3
function calculateSubtotals() {
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;

    for (i = 0; i < cartList.length; i++){
        
        if (cartList[i].type == 'grocery') {
            subtotal.grocery.value = subtotal.grocery.value + cartList[i].price
            subtotal.grocery.value.toFixed(2)
        }
        if (cartList[i].type == 'beauty'){
            subtotal.beauty.value = subtotal.beauty.value + cartList[i].price
            subtotal.beauty.value.toFixed(2)
        }
        if (cartList[i].type == 'clothes') {
            subtotal.clothes.value = subtotal.clothes.value + cartList[i].price
            subtotal.clothes.value.toFixed(2)
        }
    }
    console.log(subtotal);
    // 1. Create a for loop on the "cartList" array
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
}


// Exercise 4
function calculateTotal() {
    for (let x in subtotal) {
        total += subtotal[x].value
    }
    console.log(total);
    
    // Calculate total price of the cart either using the "cartList" array
}

// Exercise 5 
//NO LE DES BOLA A ESTO QUE VOY PROBANDO COSAS Y ESTÁ AHÍ OLVIDADO
function generateCart() {
    cart = [];
    for (i = 0; i < cartList.length; i++) {
        if (cartList[i].id == cart[i].id) {
            cart[j].quantity += 1 
            cart[j].subtotal = cart[j].quantity * cart[j].price
        }
        else {
            cart.push(cartList[i])
        }
    }
    console.log(cart);
    console.log(cartList);

    // agregar el valor de "cantidad"
    // contar cuantos items hay de type grosery
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 7
function addToCart(id) {
    
    // for (i = 0; i < products.length; i++) {
    //     if (id == products[i].id) {
    //         cart.push(products[i])
    //     }
    // }
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
