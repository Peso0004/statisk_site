// let productId = 1163;

const productId = new URLSearchParams(window.location.search).get("product_id");

let productContainer = document.querySelector(".produkt_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
                <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="sahara1">
        
            </div>

            <div>
                <h2>Product Information</h2>
                <h4>Model name</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;${data.productdisplayname} </p>
                <h4>Color</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;${data.basecolour}</p>
                <h4>Inventory number</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;${data.relid}</p>  

                <h2>${data.brandname}</h2>
                <p class="Nike">${data.brandbio}</p>

            
            </div>

            <div class="Sahara">
                <h3 class="sahara1">${data.productdisplayname}</h3>
                <h5 class="Tshirts">${data.articletype} / ${data.brandname}</h5>
                <div class="choosegrid">
                    <p class="Choose">Choose a size</p>
                    <div class="smallknapgrid">
                        <p class="smallknap">s</p>
                        <div class="triangle-down"></div>
                    </div>
                </div>
                <p class="knap">Add to basket</p>
            </div>
    `;
  });
