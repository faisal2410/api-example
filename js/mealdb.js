
const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //    console.log(searchText);
//   Clear Data
  searchField.value = "";
  if(searchText==""){
      alert("Please enter a food name")
      return
  }
//   Load Data
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  //    console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.meals))
    .catch(error=>{
        console.log(error)
    })
};

const displaySearchResult = (meals) => {
    // console.log(meals)
  const searchResult = document.getElementById("search-result");
  const noResult=document.getElementById('no-result');  
//   Clear data
  searchResult.innerHTML ="";
  noResult.innerHTML="";
  if(meals==null){        
      const p=document.createElement('p')
      p.classList.add("text-center")
      p.innerText="No Result Found"
      noResult.appendChild(p);
      return
  } 
    meals.forEach((meal) => {
        // console.log(meal);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
          </div>`;
          searchResult.appendChild(div);
    
      });

  
 
 
  // console.log(meals)
};

const loadMealDetail=mealid=>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealDetail(data.meals[0]))
}
const displayMealDetail=mealDetail=>{
console.log(mealDetail);
const mealDetails=document.getElementById('meal-details');
const div=document.createElement('div');
div.classList.add('card')
div.innerHTML=`
<img src=${mealDetail.strMealThumb} class="card-img-top img-fluid" alt="">
<div class="card-body">
<p class="card-title">${mealDetail.strMeal}</p>
  <p class="card-text">${mealDetail.strInstructions.slice(0,150)}</p>
  <a href=${mealDetail.strYoutube} target="_blank" class="btn btn-primary">Follow us</a>
</div>
`
mealDetails.appendChild(div);
}