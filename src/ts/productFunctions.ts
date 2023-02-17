import { productList } from "./vg";

export function makeDogProdHTML(i: number) {
    let dogproduct: HTMLDivElement = document.createElement("div");
    let dogImgContainer: HTMLDivElement = document.createElement("div");
    dogImgContainer.className = "dogimgcontainer";
    dogproduct.appendChild(dogImgContainer);
    let dogImg: HTMLImageElement = document.createElement("img");
  
    dogImg.src = productList[i].picture;
    dogImg.alt = productList[i].pictureAlt;
    return { dogImg, dogImgContainer, dogproduct };
  }
  
export function dogHtmlEventlisteners(dogHtml: { dogImg: HTMLImageElement; dogImgContainer: HTMLDivElement; dogproduct: HTMLDivElement; }, cartSymbolContainer: HTMLDivElement, i: number) {
dogHtml.dogImg.addEventListener("mouseover", () => {
    cartSymbolContainer.classList.add("hover");
    dogHtml.dogImg.classList.add("hover");
});

dogHtml.dogImg.addEventListener("mouseout", () => {
    dogHtml.dogImg.classList.remove("hover");
    cartSymbolContainer.classList.remove("hover");
});

dogHtml.dogImg.addEventListener("click", () => {
    productList[i].productSpec = !productList[i].productSpec;
    window.location.href = "product-spec.html#backArrow";
    let listastext = JSON.stringify(productList);
    localStorage.setItem("savedList", listastext);
});

dogHtml.dogImgContainer.appendChild(dogHtml.dogImg);
}

export function SelctedProdCategory(dogproduct: HTMLDivElement, i: number) {
    switch (productList[i].category) {
        case "sassy":
          (document.getElementById("sassy") as HTMLElement).appendChild(dogproduct);
          break;
        case "kriminella":
          (document.getElementById("kriminella") as HTMLElement).appendChild(dogproduct);
          break;
        case "singlar":
          (document.getElementById("singlar") as HTMLElement).appendChild(dogproduct);
          break;
        case "puppy":
          (document.getElementById("puppy") as HTMLElement).appendChild(dogproduct);
          break;
        case "oldies":
          (document.getElementById("oldies") as HTMLElement).appendChild(dogproduct);
          break;
      }
  }
  
export function makeDogProdInfo(dogImgContainer: HTMLDivElement, dogproduct: HTMLDivElement, i: number) {
let cartSymbolContainer: HTMLDivElement = document.createElement("div");
cartSymbolContainer.className = "cartSymbolContainer";
dogImgContainer.appendChild(cartSymbolContainer);

let cartSymbol: HTMLElement = document.createElement("i");
cartSymbol.className = "bi bi-bag-plus";
cartSymbolContainer.appendChild(cartSymbol);

let name: HTMLHeadingElement = document.createElement("h5");
name.innerHTML = productList[i].name;
dogproduct.appendChild(name);

let price: HTMLHeadingElement = document.createElement("p");
price.innerHTML = "$" + productList[i].price;
dogproduct.appendChild(price);

let info: HTMLHeadingElement = document.createElement("p");
info.innerHTML = productList[i].info;
dogproduct.appendChild(info);

productList[i].productSpec = false;
return { cartSymbolContainer, cartSymbol };
}