let key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxNTIyOWNlZTJlMjAwMThkY2JmODciLCJpYXQiOjE2OTk4MjgyNjUsImV4cCI6MTcwMTAzNzg2NX0.rRvlQZkum2BHVmGkjqbtCKWuPkTzfXedVH3Nr8hmx0o";

let crea = document.querySelector(".crea");

crea.addEventListener("click", (e) => {
      e.preventDefault();

      let name = document.querySelector("#name").value;
      let description = document.querySelector("#description").value;
      let type = document.querySelector("#type").value;
      let image = document.querySelector("#image").value;
      let price = document.querySelector("#price").value;

      /*let url = (urlString) => {
            try {
                  return Boolean(new URL(urlString));
            } catch (e) {
                  return false;
            }
      };*/

      /*   if (
            !name.value ||
            !description.value ||
            !type.value ||
            !image.value ||
            !price.value
      ) {
            alert("Please fill all the fields");
      } else {*/
      let newknife = {
            name,
            description,
            type,
            image,
            price,
      };
      fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            headers: {
                  "content-type": "application/json",
                  authorization: ` Bearer ${key}`,
            },
            body: JSON.stringify({
                  name: "test",
                  type: "test",
                  description: "test",
            }),
      })
            .then((res) => res.json())
            .then((knife) => {
                  console.log(knife);
                  // location.href = "/dettaglioprodotto.html";
            });
});
