const productlist = document.querySelector(".product_list_container");
let url = "https://kea-alt-del.dk/t7/api/products?limit=100";

function showProducts(data) {
  const markup = data
    .map(
      (product) => `
    <div class="card">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="sahara1">
        <h4>${product.productdisplayname}</h4>
        <h5>${product.articletype} / ${product.brandname}</h5>
        <p>DKK ${product.price},-</p>
        <a href="produkt.html">Read More</a>
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
