var $star_rating = $('.star-rating .fa');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {

});
//µµµµµµµµµµµµµµµµ
const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};

// rating 
var $star_rating = $('.star-rating .fa');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {

});

//=================== Start Add Recipe ===================/

function displaySelectedAuthorPhoto(event) {
  const selectedFile = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const output = document.getElementById("selectedAuthorPhoto");
    output.src = reader.result;
    const uploadBtn = document.querySelector(".btn1");
    uploadBtn.style.display = "none";
  };

  reader.readAsDataURL(selectedFile);
}

function displaySelectedImage(event) {
  const selectedFile = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const output = document.getElementById("selectedImage");
    output.src = reader.result;
    const uploadBtn = document.querySelector(".btn2");
    uploadBtn.style.display = "none";
  };

  reader.readAsDataURL(selectedFile);
}

let recipes = [];

window.onload = function() {
  let storedRecipes = localStorage.getItem('recipes');
  if (storedRecipes) {
    recipes = JSON.parse(storedRecipes);
  }
};

function addInstruction() {
  let instructionInput = document.createElement("textarea");
  instructionInput.setAttribute("class", "form-control mb-1 instruction-input");
  instructionInput.setAttribute("placeholder", "Enter Instruction");

  let instructionsContainer = document.getElementById("instructionsContainer");

  instructionsContainer.insertBefore(
    instructionInput,
    instructionsContainer.querySelector("button")
  );
}

function addIngredient() {
  let ingredientInput = document.createElement("input");
  ingredientInput.setAttribute("type", "text");
  ingredientInput.setAttribute("class", "form-control mb-1 ingredient-input");
  ingredientInput.setAttribute("placeholder", "Enter Ingredient");

<<<<<<< HEAD
  let ingredientsContainer = document.getElementById("ingredientsContainer");

  ingredientsContainer.insertBefore(
    ingredientInput,
    ingredientsContainer.querySelector("button")
  );
=======
  let ingredientsContainer = document.getElementById('ingredientsContainer');

  ingredientsContainer.insertBefore(ingredientInput, ingredientsContainer.querySelector('button'));
>>>>>>> 140bde8d36d7eb16ce6fd8d1a945ad5dbae3d5a5
}

function submitInfo() {
  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;
  let authorPhoto = document.getElementById("selectedAuthorPhoto").src;
  let authorName = document.getElementById("authorName").value;
  let recipeImage = document.getElementById("selectedImage").src;
  let description = document.getElementById("description").value;
  let calories = document.getElementById("calories").value;
  let totalFat = document.getElementById("totalFat").value;
  let protein = document.getElementById("protein").value;
  let carbohydrate = document.getElementById("carbohydrate").value;
  let cholesterol = document.getElementById("cholesterol").value;
  let cookingTimeHours = document
    .getElementById("cookingTime")
    .querySelectorAll("input")[0].value;
  let cookingTimeMinutes = document
    .getElementById("cookingTime")
    .querySelectorAll("input")[1].value;
  let cookTimeHours = document
    .getElementById("cookTime")
    .querySelectorAll("input")[0].value;
  let cookTimeMinutes = document
    .getElementById("cookTime")
    .querySelectorAll("input")[1].value;

  let ingredientInputs = document.querySelectorAll(".ingredient-input");
  let ingredients = Array.from(ingredientInputs).map((input) => input.value);

  let instructionInputs = document.querySelectorAll(".instruction-input");
  let instructions = Array.from(instructionInputs).map((input) => input.value);

  let recipe = {
    title: title,
    category: category,
    authorName: authorName,
    authorPhoto: authorPhoto,
    recipeImage: recipeImage,
    description: description,
    nutritionInformation: {
      calories: calories,
      totalFat: totalFat,
      protein: protein,
      carbohydrate: carbohydrate,
      cholesterol: cholesterol,
    },
    cookingTime: {
      hours: cookingTimeHours,
      minutes: cookingTimeMinutes,
    },
    cookTime: {
      hours: cookTimeHours,
      minutes: cookTimeMinutes,
    },
    ingredients: ingredients,
    instructions: instructions,
  };

<<<<<<< HEAD
  if (localStorage.getItem("recipes")) {
    recipes = JSON.parse(localStorage.getItem("recipes"));
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
  } else {
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }
=======
  recipes.push(recipe);

  localStorage.setItem('recipes', JSON.stringify(recipes));

>>>>>>> 140bde8d36d7eb16ce6fd8d1a945ad5dbae3d5a5
  resetForm();
  alert("Recipe added successfully!");
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("category").value = "";
  document.getElementById("selectedAuthorPhoto").src = "";
  document.getElementById("authorName").value = "";
  document.getElementById("selectedImage").src = "";
  document.getElementById("description").value = "";
  document.getElementById("calories").value = "";
  document.getElementById("totalFat").value = "";
  document.getElementById("protein").value = "";
  document.getElementById("carbohydrate").value = "";
  document.getElementById("cholesterol").value = "";
  document.getElementById("cookingTime").querySelectorAll("input")[0].value =
    "";
  document.getElementById("cookingTime").querySelectorAll("input")[1].value =
    "";
  document.getElementById("cookTime").querySelectorAll("input")[0].value = "";
  document.getElementById("cookTime").querySelectorAll("input")[1].value = "";

  let ingredientInputs = document.querySelectorAll(".ingredient-input");
  ingredientInputs.forEach((input) => {
    input.parentNode.removeChild(input);
  });

<<<<<<< HEAD
  let instructionInputs = document.querySelectorAll(".instruction-input");
  instructionInputs.forEach((input) => {
    input.parentNode.removeChild(input);
  });
}

/*=================== Start Recipe ===================*/
function displayRecipeCards() {
  const recipes = JSON.parse(localStorage.getItem("recipes"));

  const cardContainer = document.getElementById("recipeContainer");
  cardContainer.innerHTML = "";

  if (recipes && recipes.length > 0) {
    recipes.forEach((recipe, index) => {
      const card = document.createElement("div");
      card.classList.add("col");
      card.innerHTML = `
        <div class="card">
          <img src="${recipe.recipeImage}" class="card-img-top" alt="${recipe.title}">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title">${recipe.title}</h5>
              <div class="text-warning text-center">${generateStars(recipe.nutritionInformation.rating || 0)}</div>
            </div>
            <p class="card-text">${recipe.description}</p>
            <button class="btn btn-dark view-details-btn" data-index="${index}">View Details</button>
          </div>
        </div>
      `;
      cardContainer.appendChild(card);
    });
  } else {
    // If no recipes found, display a message
    const message = document.createElement("div");
    message.classList.add("col");
    message.innerText = "No recipes found.";
    cardContainer.appendChild(message);
  }
}

=======
let instructionInputs = document.querySelectorAll('.instruction-input');
instructionInputs.forEach(input => {
input.parentNode.removeChild(input);
});
}
//=================== End Add Recipe ===================/

//=================== Start Recipe Details ===================/

function displayRecipeDetails(index) {
  const recipes = JSON.parse(localStorage.getItem("recipes"));

  if (recipes && recipes.length > index) {
    localStorage.setItem("selectedRecipeIndex", index);
    window.location.href = "dt-recipe.html";
  } else {
    console.log("Recipe not found in localStorage.");
  }
}
//=================== End Recipe Details ===================/

//=================== Start Recipe ===================/
// Assurez-vous que le DOM est chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
  displayRecipeCards();
});

function displayRecipeCards() {
  const recipes = JSON.parse(localStorage.getItem("recipes"));

  if (recipes && recipes.length > 0) {
      const cardContainer = document.querySelector("#recipeContainer");

      if (cardContainer) {
          recipes.forEach((recipe, index) => {
              const card = document.createElement("div");
              card.classList.add("col");
              card.innerHTML =`
                  <div class="card">
                      <img src="${recipe.recipeImage}" class="card-img-top" alt="${recipe.title}">
                      <div class="card-body">
                          <div class="d-flex justify-content-between">
                              <h5 class="card-title">${recipe.title}</h5>
                              <div class="text-warning text-center">${generateStars(recipe.nutritionInformation.rating || 0)}</div>
                          </div>
                          <p class="card-text">${recipe.description}</p>
                          <button class="btn btn-dark view-details-btn" onclick="displayRecipeDetails(${index})">View Details</button>
                      </div>
                  </div>
                  `;
              cardContainer.appendChild(card);
          });
      } else {
          console.log("Card container not found.");
      }
  } else {
      console.log("No recipes found in localStorage.");
  }
}


>>>>>>> 140bde8d36d7eb16ce6fd8d1a945ad5dbae3d5a5
function generateStars(rating) {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += '<i class="fa fa-star"></i>';
  }
<<<<<<< HEAD
  for (let i = rating; i < 5; i++) {
    stars += '<i class="fa fa-star-o"></i>';
  }
  return stars;
}

displayRecipeCards();
/*=================== End Recipe ===================*/
=======
  return stars;
}


//=================== End Recipe ===================/
>>>>>>> 140bde8d36d7eb16ce6fd8d1a945ad5dbae3d5a5
