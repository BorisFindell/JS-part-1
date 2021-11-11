// Exercise 10
// Move this variable to a json file and load the data in this js
var products = [
    {
        id: 1,
        name: 'monitor',
        price: 110.5,
        type: 'pc'
    },
    {
        id: 2,
        name: 'memoria ram',
        price: 60.25,
        type: 'pc'
    },
    {
        id: 3,
        name: 'mouse',
        price: 9,
        type: 'pc'
    },
    {
        id: 4,
        name: 'samsung J7',
        price: 260,
        type: 'mobil'
    },
    {
        id: 5,
        name: 'nokia S1',
        price: 205,
        type: 'mobil'
    },
    {
        id: 6,
        name: 'motorola R4',
        price: 175,
        type: 'mobil'
    },
    {
        id: 7,
        name: 'memoria sd',
        price: 15,
        type: 'accesorios'
    },
    {
        id: 8,
        name: 'cartucho toner',
        price: 19.99,
        type: 'accesorios'
    },
    {
        id: 9,
        name: 'protector pantalla',
        price: 9.99,
        type: 'accesorios'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    pc: {
        value: 0, 
        discount: 0
    },
    mobil: {
        value: 0, 
        discount: 0
    },
    accesorios: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// function myCart() {
// }

// Exercise 1
// function addToCartList(id) {
//     for (i = 0; i < products.length; i++) {
//         if (id == products[i].id) {
//             cartList.push(products[i])
//             console.log(cartList);
//         }
//     }
//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cartList array
// }

// Exercise 2
function cleanCart() {
    cart = []
}

function cleanScreen(){

    //LIMPIA LA PARTALLA QUE MUESTRA EL CARRITO//

    document.getElementById('showCart').innerHTML = ''
}

// Exercise 3
function calculateSubtotals() {

    subtotal.pc.value = 0;
    subtotal.mobil.value = 0;
    subtotal.accesorios.value = 0;

    for (i = 0; i < cart.length; i++){
        
        if (cart[i].type == 'pc') {
            subtotal.pc.value = subtotal.pc.value + cart[i].subtotal
            subtotal.pc.value.toFixed(2)
        }
        if (cart[i].type == 'mobil'){
            subtotal.mobil.value = subtotal.mobil.value + cart[i].subtotal
            subtotal.mobil.value.toFixed(2)
        }
        if (cart[i].type == 'accesorios') {
            subtotal.accesorios.value = subtotal.accesorios.value + cart[i].subtotal
            subtotal.accesorios.value.toFixed(2)
        }
    }
    console.log(subtotal);
    // 1. Create a for loop on the "cartList" array
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
}


// Exercise 4
function calculateTotal() {
    total = 0; 
    for (let x in subtotal) {
        total += subtotal[x].value
    }
    console.log(total);
    // Calculate total price of the cart either using the "cartList" array
}

// Exercise 5 

// function generateCart() {
//     cart = [];
//     for (i = 0; i < cartList.length; i++) {
//         let found = cart.find(element => element.name == cartList[i].name)
//             if (found == null) {

//                 let newItem = {}
//                 newItem.name = cartList[i].name;
//                 newItem.type = cartList[i].type;
//                 newItem.price = cartList[i].price;
//                 newItem.quantity = 1;
//                 newItem.subtotal = cartList[i].price;
//                 cart.push(newItem)
//             }
//              else {
//                 found.quantity++;
//                 found.subtotal = found.price * found.quantity;
//             }
//     }
//     applyPromotionsCart();
//     // Using the "cartlist" array that contains all the items in the shopping cart, 
//     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
// }

// Exercise 6
function applyPromotionsCart() {
    
    // Apply promotions to each item in the array "cart"

    for (i = 0; i < cart.length; i++) {
        if (cart[i].name == 'memoria sd' && cart[i].quantity >= 3)
            cart[i].subtotalWithDiscount = cart[i].quantity * 10; //Promoció monitor
        else if (cart[i].name == 'mouse' && cart[i].quantity >= 10)
        cart[i].subtotalWithDiscount = (cart[i].subtotal / 3) * 2; //Promoció mouse
        else {
            delete cart[i].subtotalWithDiscount;
        }
    }
}

// Exercise 7
function addToCart(id) {
    
    for (i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            let found = cart.find(element => element.id == products[i].id)
            if (found == null) {

                let newItem = {}
                newItem.id = products[i].id;
                newItem.name = products[i].name;
                newItem.type = products[i].type;
                newItem.price = products[i].price;
                newItem.quantity = 1;
                newItem.subtotal = products[i].price;
                cart.push(newItem);
            }
            else {
                found.quantity++;
                found.subtotal = found.price * found.quantity;
            }
            console.log(cart);
        
        }
        
    }
    calculateSubtotals();
    calculateTotal();
    applyPromotionsCart();
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {

    for (i = 0; i < cart.length; i++) {
        if (id == cart[i].id && cart[i].quantity > 1){
            cart[i].quantity --
            cart[i].subtotal = cart[i].price * cart[i].quantity;
        }
        else if (id == cart[i].id && cart[i].quantity == 1) {
            cart.pop(cart[i])
        }
    }
    calculateSubtotals();
    calculateTotal();
    applyPromotionsCart();
}

// Exercise 9
function printCart() {

    //LIMPIA LA PARTALLA QUE MUESTRA EL CARRITO//
    
    cleanScreen()

    cart.forEach(function (item) {

        //CREA LAS ROWS

        let tr = document.createElement('tr');
        document.getElementById('showCart').appendChild(tr);

        //CREA EL NOMBRE

        let th = document.createElement('th')
        tr.appendChild(th);
        th.innerHTML += item.name;

        //CREA PRICE

        th = document.createElement('th')
        tr.appendChild(th);
            if (item.subtotalWithDiscount == undefined)
                th.innerHTML += item.subtotal;
            else
                th.innerHTML += item.subtotalWithDiscount;

        //CREA QUANTITY

        th = document.createElement('th')
        tr.appendChild(th);
        th.innerHTML += item.quantity;
    });
}

//ANIMACIÓN DEL SCROLL A SHOP//

$(function() {
    $('#scroll, #scrollHero, #scrollFooter').bind('click', 'ul li a', function(event) {
        $.scrollTo(event.target.hash, 1000);
    });
});