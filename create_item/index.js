let returnButton = document.getElementById("Return");

returnButton.addEventListener("click", async() => {
    window.location.href = "/public"
})

let submitButton = document.getElementById('Submit');

submitButton.addEventListener('click', async () => {
    let nameString = document.getElementById('name-input').value;
    let urlString = document.getElementById('url-input').value;
    let descriptionString = document.getElementById('description-input').value;
    let priceNumber = +document.getElementById('price-input').value;
    let stockNumber = +document.getElementById('stock-input').value;

    const item = {
        nameString,
        urlString,
        descriptionString,
        priceNumber,
        stockNumber
    }

    let response = await fetch('http://localhost:5000/create_product', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        // to send JSON data over HTTP
        body: JSON.stringify(item)

    })

   

})