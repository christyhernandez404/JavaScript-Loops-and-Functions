
//Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

let loggedIn = true;

function addItem(item) {
    if (loggedIn) {
        console.log(`You've added ${item} to your cart!`);
        }
        else {
            console.log("You must login before you can add something to a cart.");
        }
        
}

addItem('water bottle')

//Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.
let products = [
    {id: 1, name: "water bottle", price: 3.00},
    {id: 2, name: "cereal", price: 4.5},
    {id: 3, name: "tomatoes", price: 2.5},
    {id:4, name: "kiwis", price: 5},
    {id:5, name: "oranges", price: 3.5 }];

let cart = [];

function displayProducts(){
for (let product of products) {
    console.log(`${product.id}:${product.name}, $${product.price}`);
}}


displayProducts()

function addToCart(productID){
    const product = products.find(product => product.id == productID);
    if (product) {
        cart.push(product);
        console.log(`${product.name} has been added to the cart`);
    }
    else { console.log("Invalid product ID");

    }
}

//Calculate the total cost of the items in the cart and display it to the user.

function total(){
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    return `$${total}`;
}

displayProducts() //user can view items to the cart with this function
addToCart(1) //user must put in product ID to add item to the cart
addToCart(2)//user must put in product ID to add item to the cart
console.log(cart) //to view all items in the cart
console.log(total()) //to view total

