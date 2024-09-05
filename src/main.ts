import "./style.css";
import { IProduct, IRating, Category } from "./interfaces/IProduct";

const BASE_URL = "https://fakestoreapi.com";
const PRODUCT_URL = `${BASE_URL}/products`;

// EIngabefelder
const searchElement = document.getElementById("search") as HTMLInputElement;
const sortElement = document.getElementById("sort") as HTMLSelectElement;

// Filterbuttons
const electronicsFlt = document.getElementById(
  "electronics"
) as HTMLButtonElement;
const jeweleryFlt = document.getElementById("jewelery") as HTMLButtonElement;
const menClothingFlt = document.getElementById(
  "menClothing"
) as HTMLButtonElement;
const womenClothingFlt = document.getElementById(
  "womenClothing"
) as HTMLButtonElement;

// Sections
const cartContent = document.getElementById("card-content") as HTMLElement;

electronicsFlt.addEventListener("click", () => {
  const electronicProducts: IProduct[] = products.filter(
    (product) => product.category === Category.Electronics
  );
  displayProducts(electronicProducts);
});
jeweleryFlt.addEventListener("click", () => {
  const jewelryProducts: IProduct[] = products.filter(
    (product) => product.category === Category.Jewelery
  );
  displayProducts(jewelryProducts);
});
menClothingFlt.addEventListener("click", () => {
  const menClothingProducts: IProduct[] = products.filter(
    (product) => product.category === Category.MenSClothing
  );
  displayProducts(menClothingProducts);
});
womenClothingFlt.addEventListener("click", () => {
  const womenClothingProducts: IProduct[] = products.filter(
    (product) => product.category === Category.WomenSClothing
  );
  displayProducts(womenClothingProducts);
});

const products: IProduct[] = [];

fetch(PRODUCT_URL)
  .then((response: Response) => {
    return response.json();
  })
  .then((data: any) => {
    data.forEach((product: IProduct) => {
      products.push(product);
    });
  })
  .catch((error: Error) => console.error(error.message));

const displayProducts = (productList: IProduct[]) => {
  cartContent.innerHTML = "";

  productList.forEach((product: IProduct) => {
    const productCard = document.createElement("div") as HTMLDivElement;
    const productDiv = document.createElement("div") as HTMLDivElement;
    const priceDiv = document.createElement("div") as HTMLDivElement;
    const productImage = document.createElement("img") as HTMLImageElement;
    productImage.className = "product-img";
    productImage.src = product.image;
    productDiv.appendChild(productImage);
    const productTitle = document.createElement("p") as HTMLParagraphElement;
    productTitle.className = "titel";
    productTitle.textContent = product.title;
    productDiv.appendChild(productTitle);

    const productSeparator = document.createElement("hr") as HTMLHRElement;
    priceDiv.appendChild(productSeparator);
    const productPrice = document.createElement("p") as HTMLParagraphElement;
    productPrice.className = "price";
    productPrice.textContent = `$ ${product.price.toString()}`;
    priceDiv.appendChild(productPrice);
    const addToCartBtn = document.createElement("button") as HTMLButtonElement;
    addToCartBtn.className = "add-to-card";
    addToCartBtn.textContent = "Add to cart";
    priceDiv.appendChild(addToCartBtn);

    productCard.appendChild(productDiv);
    productCard.appendChild(priceDiv);
    cartContent.appendChild(productCard);
  });
};

displayProducts(products);
