

function getProductsFromCart() {

    let cart = localStorage.getItem("cart")

    if(cart) {
        cart = Json.parse(cart)
    } else {
        cart = []
    }
    
    let main = document.getElementsByTagName("main")[0];

    for (var i = 0; i <cart.length; i++) {
        let itemContainer = createCartContainer(cart[i])
        main.appendChild(itemContainer)
    };


}

function createCartContainer(cartItem) {
    let itemContainer = document.createElement("div")
    itemContainer.classList.add("itemContainer")

    // image container 
    let cartImgContainer = document.createElement("div")
    cartImgContainer.classLisr.add("cartImgContainer")

    let itemImg = document.createElement("img")
    itemImg.classList.add("itemImg")
    itemImg.src =  "./assets/" + cartItem.product.image

    cartImgContainer.append(itemImg)


    // Title container 
    let itemTitle = document.createElement("h1")
    itemTitle.classList.add("itemTitle")
    itemTitle.innerText = cart.title

    // Price Container 
    let itemPrice = document.createElement("h2")
    itemPrice.classList.add("itemPrice")
    itemPrice.innerText = cart.price + " kr"

    itemTitle.append(itemPrice)

    itemContainer.append(itemImg, itemTitle, itemPrice)
    return itemContainer 
}



function getNrOfCartItems() {
    let saveProducts = document.getElementsByTagName("span")[0]

    let cart = localStorage.getItem("cart")
      
    let amount = 0
    
    if(!cart) {
        saveProducts.innerText = amount
        return
    } 

    cart = JSON.parse(cart)
    cart.forEach((cartItem) => {
        amount += cartItem.quantity
    })

    saveProducts.innerText = amount 
    console.log(cart)
}

getNrOfCartItems()




