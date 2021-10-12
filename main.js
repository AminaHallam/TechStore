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
    let div = document.createElement("div")
    main.appendChild(div)

    var listOfProducts =["products"];
    for (var i = 0; i <listOfProducts.length; i++) {
    if (listOfProducts [i] === "LG V30") {
    div.appendChild(listOfProducts)
    console.log(listOfProducts[i]);
    break;
    }
    };

}
    
    /*window.addEventListener("loadProducts", initSite) */


function generatePhoneList() {
    let phoneList = document.createElement("div")
    phoneList.classList.add("phoneList")

    // image container
    let imageContainer = document.createElement("div2")
    imageContainer.classList.add("imageContainer")

    let phoneImg = document.createElement("img")
    phoneImg.classList.add("phoneImg")
    phoneImg.src = ""

    imageContainer.append(phoneImg)

    // Text container
        
    let textContainer = document.createElement("div")
    textContainer.classList.add("textContainer")

    let titleText = document.createElement("h1")
    titleText.innerText = products.title

    let descriptionText = document.createElement("h3")
    descriptionText.innerText = products.description 

    let priceText = document.createElement("h3")
    priceText.innerText = products.price 


    textContainer.append(nameText, titleText, priceText)

    // Button container
    let buttonContainer = document.createElement("div")
    buttonContainer.classList.add("buttonContainer")
    let cartButton = document.createElement("button")
    cartButton.innerText = "Lägg till i kundavagnen"
    cartButton.addEventListener("click", () =>  {
        logPhone(phone)
    });

    phoneList.append(imageContainer, textContainer, buttonContainer)
}


