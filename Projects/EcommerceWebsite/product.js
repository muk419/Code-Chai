
async function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    try {

        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();
        const productDetails = document.getElementById("product-details");
        productDetails.innerHTML = `
            <h1>${product.title}</h1>
            <img src="${product.image}" alt="Product Image">
            <p>Category: ${product.category}</p>
            <p>Description: ${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product?.rating?.rate} (${product?.rating?.count} reviews)</p>
            <button>Buy Now</button>
        `;
    } catch (error) {
        console.log(error);
    }
}

loadProductDetails();
