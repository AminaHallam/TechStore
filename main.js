var listOfProducts;  

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();

    });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
} 

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {

    let main = document.getElementsByTagName("main")[0];

    for (var i = 0; i <listOfProducts.length; i++) {
        let productContainer = createProductContainer(listOfProducts[i]);

        main.appendChild(productContainer)
    };
}


function createProductContainer(product) {
    let productContainer = document.createElement("div")
    productContainer.classList.add("productContainer")


    // Text container
    
    let textContainer = document.createElement("div")
    textContainer.classList.add("textContainer")

    let titleText = document.createElement("h1")
    titleText.classList.add("titleText")
    titleText.innerText = product.title

    let descriptionText = document.createElement("h3")
    descriptionText.classList.add("descriptionText")
    descriptionText.innerText = product.description

    textContainer.append(titleText, descriptionText)

    // image container
    let imageContainer = document.createElement("div")
    imageContainer.classList.add("imageContainer")

    let phoneImg = document.createElement("img")
    phoneImg.classList.add("phoneImg")
    phoneImg.src =  "./assets/" + product.image
    
    imageContainer.append(phoneImg)


    //Price container
    let priceContainer = document.createElement("div")
    priceContainer.classList.add("priceContainer")

    let priceText = document.createElement("h2")
    priceText.classList.add("priceText")
    priceText.innerText = product.price + " kr"

    priceContainer.append(priceText)

    // Button container
    let buttonContainer = document.createElement("div")
    buttonContainer.classList.add("buttonContainer")

    let icon = document.createElement("i")
    icon.className = "fas fa-cart-arrow-down"
    icon.classList.add("cartIcon")

    let buttonTextContainer = document.createElement("div")
    buttonTextContainer.innerText = "Lägg till i kundvagnen"
    buttonTextContainer.addEventListener("click", () =>  {
        addToCart(product)
    });

    buttonContainer.append(icon, buttonTextContainer)
    
    productContainer.append(textContainer, imageContainer, priceText, buttonContainer)
    return productContainer
}

window.addEventListener("load", () => {
    initSite()
}) 


function addToCart(product) {
    console.log(product);

    let cart = localStorage.getItem("cart")

    if(cart) {
        cart = JSON.parse(cart)
    } else {
        cart = []
    }

    let productIndex = cart.findIndex((cartItem) => {
        return cartItem.product.name == product.name
    })
    // FINNS PRODUKTEN SOM SKALL SPARAS?

    // HITTA PRODUKT

    if(productIndex >= 0) {
        cart[productIndex].quantity++
    } else {
        cart.push({
            product: product,
            quantity: 1
        })
    }

    cart.push(product[productIndex])

    localStorage.setItem("cart", JSON.stringify(cart))
}


function getNrOfCartItems() {
    let priceContainer = document.getElementsByTagName("span") [0]
    
    let saveproducts = localStorage.getItem("saveproducts")
    
    let amount = 0 
    
    
    
    priceContainer.inneText = amount 
    
}




    /*for (var i = 0; i <addToCart.length; i++) {
        product[i].addEventListener('click', () => {
            cartNumbers();
        })

    }; */



    
let cart = [
    {
        product: {title: "Iphone X"},
        quantity: 2
    },
    {
        product: {title: "LG"},
        quantity: 4
    },
    {
        product: {title: "Nokia X"},
        quantity: 1
    },
]