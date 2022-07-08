const button = document.querySelector("button");
const mealList = document.querySelector("input");
const mealHeaderText = document.querySelector("#meal-header");
const mealAreaText = document.querySelector("#meal-area");
const mealDescText = document.querySelector("#meal-desc");
const imageDiv = document.getElementById("img-div");

// const newItem = document.querySelector("item");

console.log("working");

button.addEventListener("click", async (e) => {
  e.preventDefault();

  let meal = mealList.value;
  let response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
  );
  let meals = response.data.meals;
  console.log(meals["0"]);
  let mealPic = meals[0].strMealThumb;
  let mealHeader = meals[0].strMeal;
  let mealDesc = meals[0].strInstructions;
  let mealArea = meals[0].strArea;
  mealHeaderText.innerHTML = mealHeader;
  mealAreaText.innerHTML = mealArea;
  mealDescText.innerHTML = mealDesc;
  imageDiv.innerHTML = `<img src=${mealPic}>`;
});
