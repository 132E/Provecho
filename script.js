const button = document.querySelector("button");
const mealList = document.querySelector("input");
const mealHeaderText = document.querySelector("#meal-header");
const mealAreaText = document.querySelector("#meal-area");
const mealDescText = document.querySelector("#meal-desc");
const itemBox = document.querySelector("item");

const imageDiv = document.getElementById("img-div");
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

// const button = document.querySelector("button");
// const mealList = document.querySelector("input");
// const mealHeaderText = document.querySelector("#meal-header");
// const mealAreaText = document.querySelector("#meal-area");
// const mealDescText = document.querySelector("#meal-desc");

// let mealListArray = document.querySelector(".search-result");

// const imageDiv = document.getElementById("img-div");
// // console.log("working");
// button.addEventListener("click", async (e) => {
//   e.preventDefault();
//   let meal = mealList.value;
//   let response = await axios.get(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
//   );
//   let meals = response.data.meals;
//   console.log(meals);
//   const filteredMeals = meals.filter((meal) => {});
//   const code = meals.map((meal) => {
//     let mealPic = meal.strMealThumb;
//     let mealHeader = meal.strMeal;
//     let mealDesc = meal.strInstructions;
//     let mealArea = meal.strArea;

//     return `<div class="item">
//     <div id="img-div"><img src=${mealPic}></div>
//     <div class="flex-container">
//     <h2 class="title" id="meal-header"></h2>
//     <h3 class="area" id="meal-area"></h3>
//     </div>
//     <p class="item-data" id="meal-desc"></p>
//     </div>`;
//   });
//   mealListArray.innerHTML = code;
//   console.log(code);
// });
