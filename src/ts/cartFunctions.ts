import { CartProduct } from "./vg";

export function findCartHtml() {
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
    return { titlecontainer, amountcontainer, productquantity, checkkouttotal2 };
}
  
 export function generateTable(titlecontainer: HTMLTableRowElement, astext: CartProduct[], i: number, amountcontainer: HTMLDivElement, productquantity: HTMLTableRowElement) {
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