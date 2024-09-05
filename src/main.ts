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
const cartContent = document.getElementsByClassName(
  "cart-content"
)[0] as HTMLElement;

electronicsFlt.addEventListener("click", () => {
  console.log("You chose Electronics");
});
jeweleryFlt.addEventListener("click", () => {
  console.log("You chose Jewelery");
});
menClothingFlt.addEventListener("click", () => {
  console.log("You chose Men's Clothing");
});
womenClothingFlt.addEventListener("click", () => {
  console.log("You chose Women's Clothing");
});

// bei leerem Search-Feld alles ausgeben
fetch(PRODUCT_URL)
  .then((response: Response) => {
    return response.json();
  })
  .then((data: any) => {
    data.forEach((product: IProduct) => {
      const productCard = document.createElement("div") as HTMLDivElement;
      const productDiv = document.createElement("div") as HTMLDivElement;
      const priceDiv = document.createElement("div") as HTMLDivElement;
      productCard.appendChild(productDiv);
      productCard.appendChild(priceDiv);
      cartContent.appendChild(productCard);
    });
  })
  .catch((error: Error) => console.error(error.message));
