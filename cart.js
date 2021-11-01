


function getProductsFromCart() {
    
    let cart = localStorage.getItem("cart")         

    if(cart) {
        cart = JSON.parse(cart)
    } else {
        cart = []
    }
    
    let section = document.getElementsByClassName("sectionCart")[0];
    console.log(cart)
    for (var i = 0; i <cart.length; i++) {
        let itemContainer = createCartContainer(cart[i]);
        
        section.appendChild(itemContainer)
    };
    createEndOfSaleContainer(cart)
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

    // Remove Button 

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



// End Of sale Button 

function createEndOfSaleContainer(cart) {

    let totalPrice = 0
    cart.forEach((cartItem) => {
        totalPrice += cartItem.product.price * cartItem.quantity
    })

    let priceAndCheckoutSection = document.getElementsByClassName("sectionPrice")[0]

    // Creates container for Total price
    let totalPriceContainer = document.createElement("div")
    totalPriceContainer.classList.add("totalPriceContainer")
    totalPriceContainer.innerText = "Totalt pris:" + totalPrice

    // 
    let endOfSaleButtonContainer = document.createElement("div")
    endOfSaleButtonContainer.classList.add("endOfSaleButtonContainer")
    
    let endOfSaleButton = document.createElement("div")
    endOfSaleButton.classList.add("endOfSaleButton")
    endOfSaleButton.innerText = "Slutför ditt köp"
    endOfSaleButton.addEventListener("click", () => {
        // Töm carten (cart i localstorage) och navigera till startsidan
    })

    let checkIcon = document.createElement("i")
    checkIcon.className = "fas fa-check"
    checkIcon.classList.add("checkLogo")

    endOfSaleButton.append(checkIcon)
    endOfSaleButtonContainer.append(endOfSaleButton)

    priceAndCheckoutSection.append(totalPriceContainer, endOfSaleButtonContainer)
      

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
getProductsFromCart()           



