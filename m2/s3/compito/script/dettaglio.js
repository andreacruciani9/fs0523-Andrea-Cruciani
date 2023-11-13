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
            coltelli.forEach((knife, i) => {
                  let clone = getclone();
                  let id = clone.querySelector(".id");
                  let name = clone.querySelector(".name");
                  let description = clone.querySelector(".description");
                  let brand = clone.querySelector(".brand");
                  let imageUrl = clone.querySelector(".imageUrl");
                  let prezzo = clone.querySelector(".prezzo");

                  let img = clone.querySelector(".img");
                  let elimina = clone.querySelector(".elimina");
                  let modifica = clone.querySelector(".modifica");
                  //  let lista = clone.querySelector("#lista");
                  // let tr = clone.getElementsByTagName(tr);
                  //tr = `${knife.id}`;
                  console.log(prezzo);

                  id.innerText = i + 1;
                  name.innerText = knife.name;
                  description.innerText = knife.description;
                  brand.innerText = knife.brand;
                  img.src = knife.imageUrl;
                  prezzo.innerText = ` ${knife.price} €`;
                  modifica.href = "edit.html?id=" + knife._id;
                  document.querySelector("#lista").append(clone);
                  console.log(knife);

                  elimina.addEventListener("click", () => {
                        fetch(
                              `https://striveschool-api.herokuapp.com/api/product/${knife._id}`,

                              {
                                    method: "DELETE",
                                    headers: {
                                          "Content-Type": "application/json",
                                          Authorization: `Bearer ${key}`,
                                    },
                              }
                        ).then((response) => {
                              if (!response.ok) {
                                    throw new Error(
                                          "Errore nella richiesta DELETE"
                                    );
                              }
                        });
                        //   .catch((error) => {
                        //        console.error(error);
                        //});
                  });
            });
      });

function getclone() {
      temp = document.getElementsByTagName("template")[0];
      return temp.content.cloneNode(true);
}
