let key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxNTIyOWNlZTJlMjAwMThkY2JmODciLCJpYXQiOjE2OTk4MjgyNjUsImV4cCI6MTcwMTAzNzg2NX0.rRvlQZkum2BHVmGkjqbtCKWuPkTzfXedVH3Nr8hmx0o";

fetch("https://striveschool-api.herokuapp.com/api/product/", {
      method: "GET",
      headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
      },
})
      .then((res) => res.json())
      .then((coltelli) => {
            coltelli.forEach((knife) => {
                  let clone = getclone();
                  let name = clone.querySelector(".name");
                  let description = clone.querySelector(".description");
                  let brand = clone.querySelector(".brand");

                  let img = clone.querySelector(".img");
                  let prezzo = clone.querySelector(".prezzo");

                  name.innerText = knife.name;
                  description.innerText = knife.description;
                  brand.innerText = knife.brand;
                  img.src = knife.imageUrl;
                  prezzo.innerText = ` ${knife.price} €`;
                  document.querySelector("#target").append(clone);
            });
      });

function getclone() {
      temp = document.getElementsByTagName("template")[0];
      return temp.content.cloneNode(true);
}
/* "name": "coltello da carneeeee",
    "description": "hbdzbb",
    "brand": "jap-knife",
    "imageUrl": "https://th.bing.com/th/id/OIP.d2vs1-jIPy8lN5OqOwXrMwAAAA?pid=ImgDet&w=200&h=201&c=7&dpr=1,3",
    "price": 24,*/
