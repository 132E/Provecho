const button = document.querySelector("button");
const mealList = document.querySelector("input");
const imageDiv = document.getElementById("img-div");

const API_ID = "1";
const API_key = "1";

button.addEventListener("click", async () => {
  let meal = mealList.value;
  let response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken&api_id=${API_ID}&api_key=${API_key}`
  );
  let mealPic = response.data.message;
  imageDiv.innerHTML = `<img src=${mealPic}>`;
});
