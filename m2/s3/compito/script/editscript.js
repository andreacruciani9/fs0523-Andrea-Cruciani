let key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxNTIyOWNlZTJlMjAwMThkY2JmODciLCJpYXQiOjE2OTk4MjgyNjUsImV4cCI6MTcwMTAzNzg2NX0.rRvlQZkum2BHVmGkjqbtCKWuPkTzfXedVH3Nr8hmx0o";

let url = new URLSearchParams(location.search);

let knifeId = url.get("id");
console.log(url.get("id"));

fetch("https://striveschool-api.herokuapp.com/api/product/" + knifeId, {
      method: "GET",
      headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
      },
})
      .then((res) => res.json())
      .then((knife) => {
            let name = document.querySelector("#name").value;
            let description = document.querySelector("#description").value;
            let brand = document.querySelector("#brand").value;
            let imageUrl = document.querySelector("#imageUrl").value;
            let price = document.querySelector("#price").value;
            if (
                  name == "" ||
                  description == "" ||
                  brand == "" ||
                  imageUrl == "" ||
                  price == ""
            ) {
                  alert("Please fill all the fields");
            }

            name.value = knife.name;

            description.value = knife.description;

            brand.value = knife.brand;

            imageUrl.value = knife.imageUrl;

            price.value = knife.price;
      });

let modifica = document.querySelector(".modifica");
modifica.addEventListener("click", (e) => {
      e.preventDefault();

      let name = document.querySelector("#name").value;
      let description = document.querySelector("#description").value;
      let brand = document.querySelector("#brand").value;
      let imageUrl = document.querySelector("#imageUrl").value;
      let price = document.querySelector("#price").value;
      if (
            name == "" ||
            description == "" ||
            brand == "" ||
            imageUrl == "" ||
            price == ""
      ) {
            alert("Please fill all the fields");
      }
      /*let url = (urlString) => {
          try {
                return Boolean(new URL(urlString));
          } catch (e) {
                return false;
          }
    };*/

      let newknife = {
            name,
            description,
            brand,
            imageUrl,
            price,
      };

      fetch(`https://striveschool-api.herokuapp.com/api/product/${knifeId}`, {
            method: "PUT",
            headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${key}`,
            },
            body: JSON.stringify(newknife),
      })
            .then((res) => res.json())
            .then((knife) => {
                  console.log(knife);
                  location.href = "/dettaglioprodotto.html";
            });
});
