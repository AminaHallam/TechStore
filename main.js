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


let initSite = () => {

    let main = document.getElementsByTagName("main")[0]


    phones.array.forEach((phone) => {

    });



    function generatePhoneList() {
        let phoneList = document.createElement("div")
        phoneList.classList.add("phoneList")

        // image container
        let imageContainer = document.createElement("div")
        imageContainer.classList.add("imageContainer")

        let phoneImg = document.createElement("img")
        phoneImg.classList.add("phoneImg")
        phoneImg.src = "./assets/iPhoneX.png"

        imageContainer.append(phoneImg)

        // Text container
        
        // Button container
        let buttonContainer = document.createElement("div")
        buttonContainer.classList.add("buttonContainer")
        let cartButton = document.createElement("button")
        cartButton.innerText = "Lägg till i kundavagnen"
        cartButton.addEventListener("click", () =>  {
            logPhone(phone)
        });


    }
    phoneList.append(imageContainer, buttonContainer)
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
for (var i = 0; i <listOfProducts.length; i++) {
    if (listOfProducts [i] == "LG V30") {
        console.log(listOfProducts[i]);
        break;
    }

}


    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}

