


function getProductsFromCart() {
    
    let cart = localStorage.getItem("cart")         //här skulle det inte va med , product

    if(cart) {
        cart = JSON.parse(cart)
    } else {
        cart = []
    }
    
    let main = document.getElementsByTagName("main")[0];
    console.log(cart)
    for (var i = 0; i <cart.length; i++) {
        let itemContainer = createCartContainer(cart[i]);
        
        main.appendChild(itemContainer)
    };
}


function createCartContainer(cartItem) {
    // product card container
    let itemContainer = document.createElement("div")
    itemContainer.classList.add("itemContainer")
    
    // image container 
    let cartImgContainer = document.createElement("div")
    cartImgContainer.classList.add("cartImgContainer")

    let itemImg = document.createElement("img")
    itemImg.classList.add("itemImg")
    itemImg.src =  "./assets/" + cartItem.product.image

    cartImgContainer.append(itemImg)
    
    // Title container 
    let itemTitleContainer = document.createElement("div")
    itemTitleContainer.classList.add("itemTitleContainer")

    let itemTitle = document.createElement("h1")
    itemTitle.classList.add("itemTitle")
    itemTitle.innerText = cartItem.product.title

    itemTitleContainer.append(itemTitle)

    // Price Container 
    let itemPriceContainer = document.createElement("div")
    itemPriceContainer.classList.add("itemPriceContainer")

    let itemPrice = document.createElement("h2")
    itemPrice.classList.add("itemPrice")
    itemPrice.innerText = cartItem.product.price + " kr"

    itemPriceContainer.append(itemPrice)

    //Button Container
    let removeItemButtonContainer = document.createElement("div")
    removeItemButtonContainer.classList.add("removeItemButtonContainer")
    removeItemButtonContainer.addEventListener("click", () => {
        removeItemFromCart(cartItem)
    });

    let icon = document.createElement("i")
    icon.className = "far fa-trash-alt"
    icon.classList.add("trashcanCart")

    let buttonRemoveItemTextContainer = document.createElement("div")
    buttonRemoveItemTextContainer.innerText = "Ta bort"

    removeItemButtonContainer.append(icon, buttonRemoveItemTextContainer)

    itemContainer.append(cartImgContainer, itemTitleContainer, itemPriceContainer, removeItemButtonContainer)
    return itemContainer
}

function removeItemFromCart() {
    localStorage.removeItem("cart")
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
}

getNrOfCartItems()
getProductsFromCart()           //kallade på funktionen



