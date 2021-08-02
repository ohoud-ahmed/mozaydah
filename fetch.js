products = document.querySelector('#products')
let fetch1 = [];
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        fetch1 = data
        data.forEach(element => {
            const product = `<div class="card col-md-3 mt-4 me-3"><img src="${element.image}" class="card-img-top"width="150" height="190">
<div class="card-body"></div>
<h6 class="card-title">${element.title}</h6>
<button class="w3-button w3-green "style="background: linear-gradient(90deg, rgba(26, 115, 232, 0.7371323529411764) 26%, rgba(255, 111, 0, 0.7511379551820728) 68%); border:none;"> price: ${element.price}</button>
<br><br></div>
</div>`

            products.innerHTML += product
        });
    })