console.log("JS file connected");

let createObjectButton = document.getElementById("Create");

createObjectButton.addEventListener("click", async () => {
    window.location.href = "./create_item"
})

let productsElement = document.getElementById("Products");

const getData = async () => {
    let data = await fetch("http://localhost:5000/get_products");
    data.json().then((parsedData) => {
        console.log(parsedData); // array of objects
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        parsedData.forEach(element => {
            let image = document.createElement("img")
            let pTag = document.createElement("p");
            let pTag2 = document.createElement("p");
            let pTag3 = document.createElement("p");
            let pTag4 = document.createElement("p");
            image = new Image(180, 200)
            image.src = element.url;
            image.databaseid = element._id;
            image.onclick = function (event) {
                console.log(event.target.databaseid);
                window.location.href = `./products_page?databaseId=${event.target.databaseid}`
            }
            pTag.textContent = element.name;
            pTag2.textContent = "$" + element.price;
            pTag3.textContent = "Description: " + element.description;
            pTag4.textContent = "Stock: " + element.stock;
            productsElement.appendChild(image);
            productsElement.appendChild(pTag);
            productsElement.appendChild(pTag2);
            productsElement.appendChild(pTag3);
            productsElement.appendChild(pTag4);
        });
    })
}

const searchBar = async () => { 
let searchButton = document.getElementById('Search');

searchButton.addEventListener("click", async() => {
    let searchString = document.getElementById("search-input").value;
    const searchItem = {searchString}
    console.log(searchItem);
    let data = await fetch(`http://localhost:5000/search/${searchString}`);
    data.json().then((parsedData) => {
        console.log(parsedData._id);
        window.location.href = `./products_page?databaseId=${parsedData._id}`
        })
    
})
}
searchBar();
getData();