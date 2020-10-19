

const apiCall = () => {
const grabRecipes = async () => {
  const request =await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  const data = await request.json();
  return data;
};
grabRecipes().then(recipieData => {
  // console.log("index.html 16 |data", recipieData);
  var recipe = recipieData.meals[0];
  console.log(recipe)
  return recipe;
                      })

                    };

                    apiCall()
