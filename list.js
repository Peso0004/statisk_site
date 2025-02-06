const category = new URLSearchParams(window.location.search).get("category");

const productlist = document.querySelector(".product_list_container");
let url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
// let url = `https://kea-alt-del.dk/t7/api/products?category=${product.id}`;

function showProducts(data) {
  const markup = data
    .map(
      (product) => `
    <div class="card">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="sahara1">
        <h4>${product.productdisplayname}</h4>
        <h5>${product.articletype} / ${product.brandname}</h5>
                        <p class="${!product.discount && "hide"}">Prev. DKK ${product.price},-</p>
               

                 <p class="${!product.discount && "hide"}">Now DKK ${Math.round((product.price - (product.price * product.discount) / 100) / 10) * 10},-</p> 
    
        <p class="${product.discount && "hide"}">DKK ${product.price},-</p>
        <a class="bottomlink" href="produkt.html?product_id=${product.id}">Read More</a>
        <p class="${product.soldout && "Soldout"} ${!product.soldout && "hide"}">Sold Out</p>
        <p class="${product.discount && "rabat"} ${!product.discount && "hide"}">-${product.discount}%</p>

    </div>`
    )
    .join(``);

  productlist.innerHTML = markup;
}

function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
}

hentData();

// document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFiltered));

// function showFiltered() {
//   const filter = this.dataset.gender;
//   if (filter == "All") {
//     showProducts(allData);
//   } else {
//     fraction = allData.filter((product) => product.gender === filter);
//     showProducts(fraction);
//   }
// }

// let allData;
// fetch(endpoint)
//   .then((response) => response.json())
//   .then((json) => {
//     allData = json;
//     showProducts(allData);
//   });
