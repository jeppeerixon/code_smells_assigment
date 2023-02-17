import { findCartHtml, generateTable } from "./cartFunctions";
import { makeDogProdHTML, makeDogProdInfo, dogHtmlEventlisteners, SelctedProdCategory } from "./productFunctions";

/*
1. Se om du kan hitta problem med koden nedan och se om du kan göra den bättre.
*/
export enum Sort {
  PRICE_ASCENDING = "Stigande pris",
  PRICE_DECENDING = "Sjunkande pris",
  NAME_ALPHABETIC = "Alfabetisk ordning",
  NAME_ALPHABETIC_REVERSE = "Omvänd alfabetisk ordning",
}

// DONE!
export class Product {
  constructor(
    public id: number,
    public name: string,
    public imageUrl: string[],
    public price: number,
    public description: string
  ) {}
}

export function sortProductsBy(sort: Sort, products: Product[]): Product[] {

  const copiedList: Product[] = [...products];

  switch (sort) {
    case Sort.PRICE_ASCENDING:
      return products.sort((a, b) => a.price - b.price);
    case Sort.PRICE_DECENDING:
      return products.sort((a, b) => b.price - a.price);
    case Sort.NAME_ALPHABETIC:
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case Sort.NAME_ALPHABETIC_REVERSE:
      return products.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return copiedList;
  }
}

/*
  2. Refaktorera funktionen createProductHtml :)
  */

// Done! dock inte så nöjd med denna gör om ifall du hinner!
class Cart {
  addToCart(i: number) {}
}

export let cartList = JSON.parse(localStorage.getItem("savedCartList") || "[]");
export let productList = JSON.parse(localStorage.getItem("savedList") || "[]");

export function createProductHtml() {

  let quantity = 0;
  for (let i = 0; i < cartList.length; i++) {
    quantity += cartList[i].quantity;
  }

  let floatingCart = document.getElementById(
    "floatingcartnumber"
  ) as HTMLElement;
  floatingCart.innerHTML = "" + quantity;

  for (let i = 0; i < productList.length; i++) {
    
    let dogHtml = makeDogProdHTML(i);

    let dogProdInfo = makeDogProdInfo(dogHtml.dogImg, dogHtml.dogproduct, i);

    dogHtmlEventlisteners(dogHtml, dogProdInfo.cartSymbolContainer, i);

    dogProdInfo.cartSymbol.addEventListener("click", () => {
      let cart = new Cart();
      cart.addToCart(i);
    });

    SelctedProdCategory(dogHtml.dogproduct, i);
  }
  
  let listastext = JSON.stringify(productList);
  localStorage.setItem("savedList", listastext);
  sessionStorage.clear();
}

/*
  3. Refaktorera funktionen getfromstorage
  */

// Done!  
export class CartProduct {
  constructor(
    public name: string,
    public image: string,
    public price: number,
    public amount: number
  ) {}
}


function getCartInfoFromStorage() {
  let fromstorage: string = localStorage.getItem("cartArray") || "";
  let astext: CartProduct[] = JSON.parse(fromstorage);

  let cartHtml = findCartHtml();

  for (let i: number = 0; i < astext.length; i++) {
    generateTable(cartHtml.titlecontainer, astext, i, cartHtml.amountcontainer, cartHtml.productquantity);
  }

  let addition: number = 0;

  for (let i = 0; i < astext.length; i++) {
    addition += astext[i].price *= astext[i].amount;
  }

  let totalprice2: HTMLTableCellElement = document.createElement("th");
  cartHtml.checkkouttotal2.appendChild(totalprice2);
  totalprice2.innerHTML = addition + "$";
  totalprice2.id = "totalincenter";
}