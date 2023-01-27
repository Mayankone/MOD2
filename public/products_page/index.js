const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let value = params.databaseId;
console.log(value);

let productElement = document.getElementById("Product");

let returnButton = document.getElementById("Return");

returnButton.addEventListener("click", async() => {
    window.location.href = "http://localhost:5000/"
})



const getSingleProduct = async () => {
    let response = await fetch(`http://localhost:5000/get_specific_product/${value}`);

    let finalData = await response.json();
    let image = document.createElement("img")
    let pTag = document.createElement("p");
    let pTag2 = document.createElement("p");
    let pTag3 = document.createElement("p");
    let pTag4 = document.createElement("p");
    let buyButton = document.getElementById("BUY");


    buyButton.addEventListener("click", async () => {
        finalData.stock = finalData.stock - 1;
        pTag3.innerHTML = "Stock: " + finalData.stock;
        if(finalData.stock <= 0){
            pTag3.innerHTML = "Out of Stock"
            buyButton.disabled = true;
        }
        let newStock = {stock: finalData.stock};
        console.log("sending fetch")
        let response = await fetch(`http://localhost:5000/updatestock/${value}`,{
            method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStock),
        })
        let newData = await response.json();

        console.log(newData);
    })
    


    image = new Image(180, 200)
    image.src = finalData.url;
    pTag.innerHTML = finalData.name;
    pTag2.innerHTML = "Price: $" + finalData.price;
    pTag3.innerHTML = "Stock: " + finalData.stock;
    pTag4.innerHTML = finalData.description;
    productElement.appendChild(image)
    productElement.appendChild(pTag)
    productElement.appendChild(pTag2)
    productElement.appendChild(pTag3)
    productElement.appendChild(pTag4)
    console.log(finalData);

    
}

getSingleProduct()


const updateProduct = async () => {
    let submitButton = document.getElementById("submit");
    

submitButton.addEventListener("click", async () => {
    let newName = document.getElementById("name-input").value;
    let newUrl = document.getElementById("url-input").value;
    let newDescription = document.getElementById("description-input").value;
    let newPrice = +document.getElementById("price-input").value;
    let newStock = +document.getElementById("stock-input").value;

    const product = {
        newName,
        newUrl,
        newDescription,
        newPrice,
        newStock
    }
    let response = await fetch(`http://localhost:5000/update/${value}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    let finalData = await response.json();

    console.log(finalData);
    })
}

updateProduct()


const deleteProduct = async () => {
    let deleteButton = document.getElementById("Delete");
    deleteButton.addEventListener("click", async () => {
        let response = await fetch(`http://localhost:5000/delete/${value}`,{
            method: "delete",
        })
        console.log(response);
    })
}

deleteProduct()
