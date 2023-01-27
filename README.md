Instructions:

1. Home page has all the products that have been created. Pictures link to a single product page. 

2. Product page has all the specifications pulled from the one single product. Includes a buy button, text boxes to edit the product and a delete button as well.

3. The create page allows for the user to create a new product and then it gets stored into the database.

4. The edit commands are in the product page which give the user the chance to edit the specifics of the product.

__________________________________________________________

Frontend specifics:

1. Homepage
    - Has the "Create" link to go to the create page and have the user input the necessary data to make a new object.

    - Displays all products(uses the /get_products route)

    - Can click on a single picture for an object that redirects the user to the specific item page. Puts a query that sends the ID into the products page.

    - User is able to search for a specific product by name and pulls up that specfic product's page(uses the /get_specific_product/:product_id)

2. Product Page
    - Has a link that goes back to the home page

    - Has edit capability at the bottom of the page that allows user to input new data to edit the product(Uses the /update_product)

    - Has a delete button that can delete the product(/delete_product)

    - Clicking buy button will lower the number by 1.

3. Create Page
    - Allows user to input data to create a new product(Uses the /create_product)


# This is my heading one!!!

```
{
    firstname: Mayank
    lastname: Kumar
    age: 26
}

```

~~The world is flat.~~

Commiseration
: Sympathy and sorrow for the misfortune of others

This code was the ==highlight== of my day

