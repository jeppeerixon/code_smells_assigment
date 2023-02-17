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

// Done!  
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
export class CartProduct {
  constructor(
    public name: string,
    public image: string,
    public price: number,
    public amount: number
  ) {}
}


function getfromstorage() {
  let container = document.getElementById("checkout-table");

  let fromstorage: string = localStorage.getItem("cartArray") || "";
  let astext: CartProduct[] = JSON.parse(fromstorage);

  // gör om till stor `` string

  let productcontainer = document.getElementById(
    "product-ckeckout-container"
  ) as HTMLDivElement;

  let amountcontainer = document.getElementById(
    "amount-checkout-container2"
  ) as HTMLDivElement;
  let amounttext: HTMLTableCellElement = document.createElement("th");
  amountcontainer.appendChild(amounttext);
  amounttext.innerHTML = "amount:";

  let titlecontainer = document.getElementById(
    "title-container"
  ) as HTMLTableRowElement;
  titlecontainer.innerHTML = "<strong>products:</strong>";

  let productquantity = document.getElementById(
    "product-quantity"
  ) as HTMLTableRowElement;
  let qttext: HTMLTableCellElement = document.createElement("th");
  productquantity.appendChild(qttext);
  qttext.innerHTML = "change quantity:";

  let checkkouttotal2 = document.getElementById(
    "title-total"
  ) as HTMLTableCellElement;
  let totaltext: HTMLTableCellElement = document.createElement("th");
  checkkouttotal2.appendChild(totaltext);
  totaltext.innerHTML = "total:";


    // samma här eller funktioner
  for (let i: number = 0; i < astext.length; i++) {
    let productt: HTMLTableCellElement = document.createElement("th");
    titlecontainer.appendChild(productt);
    productt.innerHTML = astext[i].name;
    productt.className = "hej";

    let amountt: HTMLTableCellElement = document.createElement("th");
    amountcontainer.appendChild(amountt);
    amountt.innerHTML = "x" + astext[i].amount;
    amountt.className = "hej";

    let amountqt: HTMLTableCellElement = document.createElement("th");
    productquantity.appendChild(amountqt);
    let amountplusbtn: HTMLButtonElement = document.createElement("button");
    amountqt.appendChild(amountplusbtn);
    amountqt.className = "hej";

    let icon: HTMLSpanElement = document.createElement("i");
    amountplusbtn.appendChild(icon);

    icon.className = "fas fa-minus";
    amountplusbtn.className = "plusbtn";

    let icon2: HTMLSpanElement = document.createElement("i");
    icon2.className = "fas fa-plus";

    let amountminusbtn: HTMLButtonElement = document.createElement("button");
    amountqt.appendChild(amountminusbtn);
    amountminusbtn.appendChild(icon2);
    amountminusbtn.className = "minusbtn";
  }

  let addition: number = 0;

  for (let i = 0; i < astext.length; i++) {
    addition += astext[i].price *= astext[i].amount;
  }

  let totalprice2: HTMLTableCellElement = document.createElement("th");
  checkkouttotal2.appendChild(totalprice2);
  totalprice2.innerHTML = addition + "$";
  totalprice2.id = "totalincenter";
}
