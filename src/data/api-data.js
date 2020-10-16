let jsonResponse = '';

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => {
    // do something if promise is successful
    return response.json(); // Convert readable stream to javascript object notation
  })
  .then((jsonResponse) => {
    console.log(typeof(jsonResponse)); // log the jsonofied response
    document.querySelector("#result").innerHTML = `${jsonResponse}`;
  })
  .catch((error) => {
    console.log(error);
  });

  