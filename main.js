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

    // image container
    let imageContainer = document.createElement("div")
    imageContainer.classList.add("imageContainer")

    let phoneImg = document.createElement("img")
    phoneImg.classList.add("phoneImg")
    phoneImg.src = "./assets/iPhoneX.png"

    imageContainer.append(phoneImg)

    // Text container
        
    let textContainer = document.createElement("div")
    textContainer.classList.add("textContainer")

    let titleText = document.createElement("h1")
    titleText.innerText = product.title

    let descriptionText = document.createElement("h3")
    descriptionText.innerText = product.description 

    let priceText = document.createElement("h2")
    priceText.innerText = product.price + " kr"


    textContainer.append(titleText, descriptionText, priceText)

    // Button container
    let buttonContainer = document.createElement("div")
    buttonContainer.classList.add("buttonContainer")
    let cartButton = document.createElement("button")
    cartButton.innerText = "Lägg till i kundavagnen"
    cartButton.addEventListener("click", () =>  {
        logPhone(phone)
    });

    productContainer.append(imageContainer, textContainer, buttonContainer)
    return productContainer
}

 window.addEventListener("load", () => {
        initSite()
    }) 
