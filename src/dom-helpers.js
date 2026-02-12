export const renderProducts = (products) => {
  // Grab list
  const productsList = document.querySelector("#products-list");
  const productCount = document.querySelector("#product-count");

  productsList.innerHTML = "";
  productCount.textContent = products.data.products.length;

  products.data.products.forEach((product) => {
    // Create content
    const li = document.createElement("li");
    li.dataset.productId = product.id;

    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // Modify
    img.src = product.thumbnail;
    img.alt = product.title;
    h3.textContent = product.title;
    p.textContent = product.price;

    // Append
    li.append(img, h3, p);
    productsList.append(li); // Here we append each list item which has a product in it
  });
};

export const renderProductDetails = (product) => {
  const detailsSection = document.querySelector("#product-details");
  detailsSection.classList.remove("hidden");

  const productTitle = document.querySelector("#product-title");
  const productThumbnail = document.querySelector("#product-thumbnail");
  const productPrice = document.querySelector("#product-price");
  const productDescription = document.querySelector("#product-description");
  const productRating = document.querySelector("#product-rating");

  productTitle.createElement("h2");
  productThumbnail.createElement("img");
  productPrice.createElement("p");
  productDescription.createElement("p");
  productRating.createElement("p");
};
