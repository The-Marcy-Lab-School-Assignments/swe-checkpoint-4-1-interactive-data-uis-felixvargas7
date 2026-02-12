import { getProducts } from "./fetch-helpers";
import { renderProducts } from "./dom-helpers";

getProducts().then((products) => {
  if (products.data === null) {
    console.log("Failed to load recipes.");
    return; // This allows for the function to stop before having to renderProducts
  }
  renderProducts(products);
});

const button = document.querySelector("#products-list");
button.addEventListener("click", (event) => {
  event.target.closest("li");
  const productElement = document.querySelector();
  const productId = productElement.dataset.productId;
  console.log(productId);
  fetch();
});
