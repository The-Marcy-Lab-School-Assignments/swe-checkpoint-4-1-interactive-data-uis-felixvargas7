import { getProductById, getProducts } from "./fetch-helpers";
import { renderProductDetails, renderProducts } from "./dom-helpers";
import { searchProducts } from "./fetch-helpers";

const errorMessage = document.querySelector("#error-message");

getProducts().then((products) => {
  if (products.data === null) {
    console.log("Failed to load recipes.");
    return; // This allows for the function to stop before having to renderProducts
  }
  renderProducts(products.data);
});

const button = document.querySelector("#products-list");
button.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;

  const id = li.dataset.productId;

  getProductById(id).then(({ data, error }) => {
    if (error) {
      errorMessage.textContent = error.message;
      return;
    }
    renderProductDetails(data);
  });
});

const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const query = formData.get("query");

  const result = await searchProducts(query);

  if (result.error) {
    errorMessage.textContent = error.message;
    return;
  }

  renderProducts(result.data);
  searchForm.reset();
});
