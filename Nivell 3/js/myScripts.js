var products = [
    {
        id: 1,
        name: 'Monitor',
        price: 110.5,
        type: 'pc'
    },
    {
        id: 2,
        name: 'Memoria ram',
        price: 60.25,
        type: 'pc'
    },
    {
        id: 3,
        name: 'Mouse',
        price: 9,
        type: 'pc'
    },
    {
        id: 4,
        name: 'Samsung J7',
        price: 260,
        type: 'mobil'
    },
    {
        id: 5,
        name: 'Nokia S1',
        price: 205,
        type: 'mobil'
    },
    {
        id: 6,
        name: 'Motorola R4',
        price: 175,
        type: 'mobil'
    },
    {
        id: 7,
        name: 'Memoria SD',
        price: 15,
        type: 'accesorios'
    },
    {
        id: 8,
        name: 'Cartucho de toner',
        price: 19.99,
        type: 'accesorios'
    },
    {
        id: 9,
        name: 'Protector de pantalla',
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

function cleanCart() {
    cart = []
}

function cleanScreen(){

    //LIMPIA LA PARTALLA QUE MUESTRA EL CARRITO//

    document.getElementById('showCart').innerHTML = ''
}


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
}


function calculateTotal() {
    total = 0; 
    for (let x in subtotal) {
        total += subtotal[x].value
    }
    console.log(total);
}

function applyPromotionsCart() {
    
    // Apply promotions to each item in the array "cart"

    for (i = 0; i < cart.length; i++) {
        if (cart[i].name == 'Memoria SD' && cart[i].quantity >= 3)
            cart[i].subtotalWithDiscount = cart[i].quantity * 10; //Promoció monitor
        else if (cart[i].name == 'Mouse' && cart[i].quantity >= 10)
        cart[i].subtotalWithDiscount = (cart[i].subtotal / 3) * 2; //Promoció mouse
        else {
            delete cart[i].subtotalWithDiscount;
        }
    }
}

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
}

function removeFromCart(id) {
    
    for (i = 0; i < cart.length; i++) {
        if (id == cart[i].id && cart[i].quantity > 1){
            cart[i].quantity --
            cart[i].subtotal = cart[i].price * cart[i].quantity;
        }
        else if (id == cart[i].id && cart[i].quantity == 1) {
            cart.splice(i, 1)
        }
    }
    printCart()
    calculateSubtotals();
    calculateTotal();
    applyPromotionsCart();
}

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

        //CREA BOTONES DE RESTAR

        th = document.createElement('th')
        tr.appendChild(th);
        let btn = document.createElement('button')
        th.appendChild(btn)
        btn.classList.add('btn', 'btn-danger', 'btn-sm')
        btn.setAttribute('id', item.id)
        btn.innerHTML += '-'
        btn.addEventListener("click", function(){
            removeFromCart(item.id)
        });
    });
    
}





//ANIMACIÓN DEL SCROLL A SHOP//

$(function() {
    $('#scroll, #scrollHero, #scrollFooter').bind('click', 'ul li a', function(event) {
        $.scrollTo(event.target.hash, 1000);
    });
});