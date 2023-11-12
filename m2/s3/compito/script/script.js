let key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxNTIyOWNlZTJlMjAwMThkY2JmODciLCJpYXQiOjE2OTk4MjgyNjUsImV4cCI6MTcwMTAzNzg2NX0.rRvlQZkum2BHVmGkjqbtCKWuPkTzfXedVH3Nr8hmx0o";
let url = "https://striveschool-api.herokuapp.com/api/product/";
fetch(url, {
      headers: {
            contentType: "application/json",
            Authorization: `Bearer ${key} `,
      },
})
      .then((res) => res.json())
      .then((dati) => {
            console.log(dati);
      });
