document.addEventListener("DOMContentLoaded", function () {
    const defaultRecipes = [
        {
            title: "Spaghetti Bolognese",
            category: "Pasta",
            authorName: "Chef Marco",
            authorPhoto: "https://static.vecteezy.com/system/resources/previews/046/829/035/non_2x/handsome-male-chef-isolated-on-transparent-background-free-png.png",
            recipeImage: "https://sagourmetfoodco.com.au/wp-content/uploads/2021/05/SAGFC-004-Spaghetti-Bolognese.jpg",
            description: "A classic Italian pasta dish with rich meat sauce.",
            nutritionInformation: {
                calories: 500,
                totalFat: 20,
                protein: 25,
                carbohydrate: 60,
                cholesterol: 50
            },
            cookingTime: { hours: 0, minutes: 30 },
            cookTime: { hours: 0, minutes: 20 },
            ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Garlic", "Onion", "Parmesan cheese"],
            instructions: [
                "Cook the spaghetti according to the package instructions.",
                "In a pan, sauté garlic and onion until fragrant.",
                "Add ground beef and cook until browned.",
                "Pour in tomato sauce and simmer for 15 minutes.",
                "Serve sauce over spaghetti and garnish with Parmesan cheese."
            ],
            rating: 4,
            comments: []
        },
        {
            title: "Chocolate Cake",
            category: "Dessert",
            authorName: "Chef Lisa",
            authorPhoto: "https://img.freepik.com/premium-photo/women-chef-png-chef-smiling-white-background_1038537-21.jpg",
            recipeImage: "https://assets.bonappetit.com/photos/59c924da3b3bf713cb63808a/1:1/w_2560%2Cc_limit/1017%2520WEB%2520WEEK1068.jpg",
            description: "A moist and rich chocolate cake for all occasions.",
            nutritionInformation: {
                calories: 400,
                totalFat: 15,
                protein: 5,
                carbohydrate: 60,
                cholesterol: 30
            },
            cookingTime: { hours: 0, minutes: 45 },
            cookTime: { hours: 0, minutes: 30 },
            ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter", "Baking powder"],
            instructions: [
                "Preheat oven to 180°C.",
                "Mix dry ingredients in a bowl.",
                "Add eggs and butter, then mix until smooth.",
                "Pour batter into a greased pan.",
                "Bake for 30 minutes or until a toothpick comes out clean."
            ],
            rating: 5,
            comments: []
        },
        {
            title: "Caesar Salad",
            category: "Salad",
            authorName: "Chef Julia",
            authorPhoto: "https://pngimg.com/d/chef_PNG140.png",
            recipeImage: "https://brooklynsupper.com/wp-content/uploads/2022/05/caesar-salad-3.jpg",
            description: "A fresh and crisp Caesar salad with creamy dressing.",
            nutritionInformation: {
                calories: 150,
                totalFat: 10,
                protein: 5,
                carbohydrate: 12,
                cholesterol: 20
            },
            cookingTime: { hours: 0, minutes: 10 },
            cookTime: { hours: 0, minutes: 0 },
            ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
            instructions: [
                "Chop the lettuce and place it in a large bowl.",
                "Add croutons and grated Parmesan cheese.",
                "Drizzle Caesar dressing over the salad and toss gently.",
                "Serve chilled."
            ],
            rating: 4,
            comments: []
        },
        {
            title: "Grilled Chicken",
            category: "Main Course",
            authorName: "Chef Andrew",
            authorPhoto: "https://pngimg.com/d/chef_PNG102.png",
            recipeImage: "https://www.budgetbytes.com/wp-content/uploads/2024/06/Grilled-Chicken-Overhead.jpg",
            description: "Perfectly grilled chicken with a smoky flavor.",
            nutritionInformation: {
                calories: 350,
                totalFat: 15,
                protein: 40,
                carbohydrate: 5,
                cholesterol: 80
            },
            cookingTime: { hours: 0, minutes: 15 },
            cookTime: { hours: 0, minutes: 20 },
            ingredients: ["Chicken breasts", "Olive oil", "Garlic powder", "Paprika", "Salt", "Pepper"],
            instructions: [
                "Brush chicken breasts with olive oil and season with spices.",
                "Preheat the grill to medium heat.",
                "Grill the chicken for 6-7 minutes on each side until fully cooked.",
                "Let the chicken rest for 5 minutes before serving."
            ],
            rating: 5,
            comments: []
        },
        {
            title: "Vegetable Stir-Fry",
            category: "Vegetarian",
            authorName: "Chef Mia",
            authorPhoto: "https://www.pngkey.com/png/full/440-4408403_chef-png-chef-women-png.png",
            recipeImage: "https://recipe30.com/wp-content/uploads/2021/08/Asian-stirfried-vegetables.jpg",
            description: "A colorful mix of fresh vegetables stir-fried to perfection.",
            nutritionInformation: {
                calories: 200,
                totalFat: 5,
                protein: 6,
                carbohydrate: 35,
                cholesterol: 0
            },
            cookingTime: { hours: 0, minutes: 10 },
            cookTime: { hours: 0, minutes: 10 },
            ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Garlic", "Ginger"],
            instructions: [
                "Heat a wok or skillet over high heat.",
                "Add oil, garlic, and ginger, and stir-fry for 30 seconds.",
                "Add vegetables and stir-fry for 5-7 minutes until tender-crisp.",
                "Drizzle soy sauce over the vegetables and toss to combine."
            ],
            rating: 4,
            comments: []
        },
        {
            title: "Margherita Pizza",
            category: "Pizza",
            authorName: "Chef Luigi",
            authorPhoto: "https://pngimg.com/d/chef_PNG115.png",
            recipeImage: "https://twicpics.moulinex.it/https://sebplatform.api.groupe-seb.com/statics/a24b6f39-ae71-4b11-97f0-f8ffd819eab4.jpg?w=1920&fit=scale",
            description: "Classic Margherita pizza with fresh basil and mozzarella.",
            nutritionInformation: {
                calories: 300,
                totalFat: 12,
                protein: 10,
                carbohydrate: 40,
                cholesterol: 25
            },
            cookingTime: { hours: 0, minutes: 20 },
            cookTime: { hours: 0, minutes: 15 },
            ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil"],
            instructions: [
                "Preheat oven to 220°C.",
                "Roll out the pizza dough and spread tomato sauce evenly.",
                "Top with mozzarella cheese and fresh basil leaves.",
                "Bake for 12-15 minutes until the crust is golden."
            ],
            rating: 5,
            comments: []
        }
    ];

    if (!localStorage.getItem('recipes')) {
        localStorage.setItem('recipes', JSON.stringify(defaultRecipes));
        console.log("Default recipes added to localStorage");
    }
});


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

$(document).ready(function() {
  $('#ratingSection .disabled').off('click');
});

//=================== Start Home ===================/
const recipess = JSON.parse(localStorage.getItem("recipes"));
function displayRecipes(recipes) {
   
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    recipes.forEach(recipe => {
        const card = document.createElement("div");
                    card.classList.add("col");
                    card.innerHTML = `
                        <div class="card">
                            <img src="${recipe.recipeImage}" class="card-img-top" alt="${recipe.title}">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">${recipe.title}</h5>
                                    <div class="text-warning text-center">${generateStarIcons(recipe.rating || 0)}</div>
                                </div>
                                <p class="card-text">${recipe.description}</p>
                                <button class="btn btn-dark view-details-btn" onclick="displayRecipeDetails(${index})">View Details</button>
                            </div>
                        </div>
                    `;
                    cardContainer.appendChild(card);
    });
}
// filtrer  par catégorie


    function filterRecipesByCategory(category) {
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);
    }

    // cat
    const categoryLinks = document.querySelectorAll(".category");
    categoryLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const category = e.target.dataset.category;
            filterRecipesByCategory(category);
        });
    });


    
// Affichage de recipe
document.addEventListener("DOMContentLoaded", function() {
  displayRecipes();
});

function displayRecipes() {
  const recipes = JSON.parse(localStorage.getItem("recipes"));

  if (recipes && recipes.length > 0) {
      const cardContainer = document.querySelector("#recipeExplore");

      if (cardContainer) {
          recipes.forEach((recipe, index) => {
              const card = createRecipeCard(recipe, index);
              cardContainer.appendChild(card);
          });
      } else {
          console.log("Card container not found.");
      }
  } else {
      console.log("No recipes found in localStorage.");
  }
}

function createRecipeCard(recipe, index) {
  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
      <div class="card">
          <img src="${recipe.recipeImage}" class="card-img-top" alt="${recipe.title}">
          <div class="card-body">
              <div class="d-flex justify-content-between">
                  <h5 class="card-title">${recipe.title}</h5>
                  <div class="text-warning text-center">${generateStarIcons(recipe.rating || 0)}</div>
              </div>
              <p class="card-text">${recipe.description}</p>
              <button class="btn btn-dark view-details-btn" onclick="displayRecipeDetails(${index})">View Details</button>
          </div>
      </div>
  `;
  return card;
}

function generateStarIcons(rating) {
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += '<i class="fas fa-star"></i>';
  }
  for (let i = rating; i < 5; i++) {
    stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

//:::::::::::::::::::::::::::::
document.addEventListener("DOMContentLoaded", function() {
    displayTrendingRecipes();
  });
  
  function displayTrendingRecipes() {
    const recipes = JSON.parse(localStorage.getItem("recipes"));
  
    if (recipes && recipes.length > 0) {
        const cardContainer = document.querySelector("#recipeTrending");
  
        if (cardContainer) {
            recipes.forEach((recipe, index) => {
                if (recipe.rating >= 4) { // Afficher uniquement les recettes avec un rating de 4 ou plus
                    const card = document.createElement("div");
                    card.classList.add("col");
                    card.innerHTML = `
                        <div class="card">
                            <img src="${recipe.recipeImage}" class="card-img-top" alt="${recipe.title}">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">${recipe.title}</h5>
                                    <div class="text-warning text-center">${generateStarIcons(recipe.rating || 0)}</div>
                                </div>
                                <p class="card-text">${recipe.description}</p>
                                <button class="btn btn-dark view-details-btn" onclick="displayRecipeDetails(${index})">View Details</button>
                            </div>
                        </div>
                    `;
                    cardContainer.appendChild(card);
                }
            });
        } else {
            console.log("Card container not found.");
        }
    } else {
        console.log("No recipes found in localStorage.");
    }
  }
  
  function generateStarIcons(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += '<i class="fas fa-star"></i>';
    }
    for (let i = rating; i < 5; i++) {
      stars += '<i class="far fa-star"></i>';
    }
    return stars;
  }
  
//=================== end Home ===================/

//=================== Start Add Recipe ===================/

function displaySelectedAuthorPhoto(event) {
  const selectedFile = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
      const output = document.getElementById('selectedAuthorPhoto');
      output.src = reader.result;
      const uploadBtn = document.querySelector('.btn1');
      uploadBtn.style.display = 'none';
  }

  reader.readAsDataURL(selectedFile);
}

function displaySelectedImage(event) {
  const selectedFile = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
      const output = document.getElementById('selectedImage');
      output.src = reader.result;
      const uploadBtn = document.querySelector('.btn2');
      uploadBtn.style.display = 'none';
  }

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
  let instructionInput = document.createElement('textarea');
  instructionInput.setAttribute('class', 'form-control mb-1 instruction-input');
  instructionInput.setAttribute('placeholder', 'Enter Instruction');

  let instructionsContainer = document.getElementById('instructionsContainer');

  instructionsContainer.insertBefore(instructionInput, instructionsContainer.querySelector('button'));
}

function addIngredient() {
  let ingredientInput = document.createElement('input');
  ingredientInput.setAttribute('type', 'text');
  ingredientInput.setAttribute('class', 'form-control mb-1 ingredient-input');
  ingredientInput.setAttribute('placeholder', 'Enter Ingredient');

  let ingredientsContainer = document.getElementById('ingredientsContainer');

  ingredientsContainer.insertBefore(ingredientInput, ingredientsContainer.querySelector('button'));
}


function submitInfo() {
  let title = document.getElementById('title').value;
  let category = document.getElementById('category').value;
  let authorPhoto = document.getElementById('selectedAuthorPhoto').src;
  let authorName = document.getElementById('authorName').value;
  let recipeImage = document.getElementById('selectedImage').src;
  let description = document.getElementById('description').value;
  let calories = document.getElementById('calories').value;
  let totalFat = document.getElementById('totalFat').value;
  let protein = document.getElementById('protein').value;
  let carbohydrate = document.getElementById('carbohydrate').value;
  let cholesterol = document.getElementById('cholesterol').value;
  let cookingTimeHours = document.getElementById('cookingTime').querySelectorAll('input')[0].value;
  let cookingTimeMinutes = document.getElementById('cookingTime').querySelectorAll('input')[1].value;
  let cookTimeHours = document.getElementById('cookTime').querySelectorAll('input')[0].value;
  let cookTimeMinutes = document.getElementById('cookTime').querySelectorAll('input')[1].value;

  let ingredientInputs = document.querySelectorAll('.ingredient-input');
  let ingredients = Array.from(ingredientInputs).map(input => input.value);

  let instructionInputs = document.querySelectorAll('.instruction-input');
  let instructions = Array.from(instructionInputs).map(input => input.value);

  let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  let recipeIndex = recipes.length;

  let recipe = {
      recipeIndex: recipeIndex,
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
          cholesterol: cholesterol
      },
      cookingTime: {
          hours: cookingTimeHours,
          minutes: cookingTimeMinutes
      },
      cookTime: {
          hours: cookTimeHours,
          minutes: cookTimeMinutes
      },
      ingredients: ingredients,
      instructions: instructions,
      rating: 0,
      comments :0
  };

  recipes.push(recipe);

  localStorage.setItem('recipes', JSON.stringify(recipes));

  resetForm();

  alert("Recipe added successfully!");
}


function resetForm() {
document.getElementById('title').value = '';
document.getElementById('category').value = '';
document.getElementById('selectedAuthorPhoto').src = '';
document.getElementById('authorName').value = '';
document.getElementById('selectedImage').src = '';
document.getElementById('description').value = '';
document.getElementById('calories').value = '';
document.getElementById('totalFat').value = '';
document.getElementById('protein').value = '';
document.getElementById('carbohydrate').value = '';
document.getElementById('cholesterol').value = '';
document.getElementById('cookingTime').querySelectorAll('input')[0].value = '';
document.getElementById('cookingTime').querySelectorAll('input')[1].value = '';
document.getElementById('cookTime').querySelectorAll('input')[0].value = '';
document.getElementById('cookTime').querySelectorAll('input')[1].value = '';

let ingredientInputs = document.querySelectorAll('.ingredient-input');
ingredientInputs.forEach(input => {
input.parentNode.removeChild(input);
});

let instructionInputs = document.querySelectorAll('.instruction-input');
instructionInputs.forEach(input => {
input.parentNode.removeChild(input);
});
}
//=================== End Add Recipe ===================/

//=================== Start Recipe Details ===================/

// display recipe details
function displayRecipeDetails(recipeIndex) {
  window.location.href = `dt-recipe.html?recipeIndex=${recipeIndex}`;
}

document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeIndex = parseInt(urlParams.get('recipeIndex'));

  const recipes = JSON.parse(localStorage.getItem("recipes"));
  if (recipes && recipes.length > recipeIndex) {
    const selectedRecipe = recipes[recipeIndex];

    document.getElementById('title').innerText = selectedRecipe.title;
    document.getElementById('category').innerText = selectedRecipe.category;
    document.getElementById('cookingTime').innerText = `${selectedRecipe.cookingTime.hours} h ${selectedRecipe.cookingTime.minutes} min`;
    document.getElementById('cookTime').innerText = `${selectedRecipe.cookTime.hours} h ${selectedRecipe.cookTime.minutes} min`;
    document.getElementById('authorName').innerText = selectedRecipe.authorName;
    document.getElementById('selectedAuthorPhoto').src = selectedRecipe.authorPhoto;
    document.getElementById('selectedImage').src = selectedRecipe.recipeImage;
    document.getElementById('description').innerText = selectedRecipe.description;
    document.getElementById('calories').innerText = selectedRecipe.nutritionInformation.calories;
    document.getElementById('totalFat').innerText = selectedRecipe.nutritionInformation.totalFat;
    document.getElementById('protein').innerText = selectedRecipe.nutritionInformation.protein;
    document.getElementById('carbohydrate').innerText = selectedRecipe.nutritionInformation.carbohydrate;
    document.getElementById('cholesterol').innerText = selectedRecipe.nutritionInformation.cholesterol;

    let ingredientList = document.getElementById('addIngredient');
    ingredientList.innerHTML = '';
    selectedRecipe.ingredients.forEach(ingredient => {
      let li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = ingredient;
      ingredientList.appendChild(li);
    });

    let instructionList = document.getElementById('addInstruction');
    instructionList.innerHTML = '';
    selectedRecipe.instructions.forEach((instruction, index) => {
      let li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = `${index + 1}. ${instruction}`;
      instructionList.appendChild(li);
    });
  } else {
    console.log("Recipe not found in localStorage.");
  }
});

// Rating
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeIndex = parseInt(urlParams.get('recipeIndex'));

  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const selectedRecipe = recipes[recipeIndex];

  if (selectedRecipe && selectedRecipe.rating !== undefined) {
      initializeRating(recipeIndex);
  } else {
      console.log("Rating not found for the selected recipe in localStorage.");
  }

  if (selectedRecipe && selectedRecipe.rating !== undefined) {
      const rating = selectedRecipe.rating;
      const starRating = document.querySelector('#ratingSection .star-rating');
      const ratingValueInput = document.querySelector('#ratingSection .rating-value');

      const stars = starRating.querySelectorAll('.fa-star-o, .fa-star');
      stars.forEach((star, index) => {
          if (index < rating) {
              star.classList.remove('fa-star-o');
              star.classList.add('fa-star');
          } else {
              star.classList.remove('fa-star');
              star.classList.add('fa-star-o');
          }
      });

      ratingValueInput.value = rating;
  }
});

function initializeRating(recipeIndex) {
  const stars = document.querySelectorAll('.star-rating .fa');

  stars.forEach((star, index) => {
      star.addEventListener('click', function (event) {
          const rating = parseInt(event.target.getAttribute('data-rating'));
          setRating(recipeIndex, rating);
      });
  });

  function setRating(recipeIndex, rating) {
      const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
      if (recipes && recipes.length > recipeIndex) {
          recipes[recipeIndex].rating = rating;
          localStorage.setItem("recipes", JSON.stringify(recipes));
      } else {
          console.log("Recipe not found in localStorage.");
      }
  }
}

// comment 
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeIndex = parseInt(urlParams.get('recipeIndex'));

  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const selectedRecipe = recipes[recipeIndex];

  if (selectedRecipe) {
      initializeComments(recipeIndex);
  } else {
      console.log("Selected recipe not found in localStorage.");
  }
});

function initializeComments(recipeIndex) {
  const commentsSection = document.getElementById('commentsSection');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const commentTextarea = document.getElementById('commentTextarea');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function (event) {
      event.preventDefault();
      submitComment(recipeIndex);
  });

  displayComments(recipeIndex);

  function submitComment(recipeIndex) {
      const name = nameInput.value;
      const email = emailInput.value;
      const commentText = commentTextarea.value;

      if (name.trim() !== '' && email.trim() !== '' && commentText.trim() !== '') {
          const newComment = {
              name: name,
              email: email,
              comment: commentText
          };

          // Récupérer la recette correspondante depuis le local storage
          const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
          const selectedRecipe = recipes[recipeIndex];

          // Mettre à jour la propriété 'comments' de la recette avec le nouveau commentaire
          if (selectedRecipe) {
              if (!selectedRecipe.comments) {
                  selectedRecipe.comments = [];
              }
              selectedRecipe.comments.push(newComment);
              localStorage.setItem("recipes", JSON.stringify(recipes));
              displayComments(recipeIndex);
          } else {
              console.log("Recipe not found in localStorage.");
          }

          nameInput.value = '';
          emailInput.value = '';
          commentTextarea.value = '';
      }
  }

  function displayComments(recipeIndex) {
      commentsSection.innerHTML = '';

      // Récupérer la recette correspondante depuis le local storage
      const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
      const selectedRecipe = recipes[recipeIndex];

      if (selectedRecipe && selectedRecipe.comments) {
          selectedRecipe.comments.forEach((comment, index) => {
              const commentElement = document.createElement('div');
              commentElement.classList.add('bg-light-subtle', 'bg-transparent', 'rounded-4', 'border', 'p-3', 'my-3');
              commentElement.innerHTML = `
                  <h5 class="text-secondary pb-0">${comment.name}</h5>
                  <p class="text-secondary border-bottom pb-3">${comment.email}</p>
                  <p class="mx-4 my-1" style="word-wrap: break-word;">${comment.comment}</p>
                  <button class="btn btn-dark mt-3 delete-comment-btn" data-index="${index}">Supprimer</button>
              `;
              commentsSection.appendChild(commentElement);
          });

          const deleteButtons = document.querySelectorAll('.delete-comment-btn');
          deleteButtons.forEach(button => {
              button.addEventListener('click', function (event) {
                  const indexToDelete = event.target.dataset.index;
                  if (selectedRecipe.comments) {
                      selectedRecipe.comments.splice(indexToDelete, 1);
                      localStorage.setItem("recipes", JSON.stringify(recipes));
                      displayComments(recipeIndex);
                  }
              });
          });
      }
  }
}



//=================== End Recipe Details ===================/

//=================== Start Recipe ===================/

document.addEventListener("DOMContentLoaded", function() {
    displayRecipeCards(1); // Affiche la première page par défaut
});

function displayRecipeCards(pageNumber) {
    const searchInput = document.getElementById("searchInput");
    const recipes = JSON.parse(localStorage.getItem("recipes"));
    const recipesPerPage = 4; // Nombre de recettes par page

    if (recipes && recipes.length > 0) {
        const filteredRecipes = filterRecipes(recipes, searchInput.value.trim().toLowerCase());
        const paginatedRecipes = paginateRecipes(filteredRecipes, pageNumber, recipesPerPage);

        renderRecipeCards(paginatedRecipes);

        // Déclencher la fonction de recherche lorsque le contenu de l'entrée de recherche change
        searchInput.addEventListener("input", function() {
            displayRecipeCards(1); // Afficher la première page après la recherche
        });

        // Afficher les boutons de pagination
        displayPaginationButtons(pageNumber, Math.ceil(filteredRecipes.length / recipesPerPage));
    } else {
        console.log("No recipes found in localStorage.");
    }
}

function filterRecipes(recipes, searchText) {
    return recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchText) ||
        recipe.description.toLowerCase().includes(searchText) ||
        recipe.ingredients.some(ingredient =>
            ingredient.toLowerCase().includes(searchText)
        )
    );
}

function paginateRecipes(recipes, pageNumber, recipesPerPage) {
    const startIndex = (pageNumber - 1) * recipesPerPage;
    const endIndex = Math.min(startIndex + recipesPerPage, recipes.length);
    return recipes.slice(startIndex, endIndex);
}

function renderRecipeCards(recipes) {
    const cardContainer = document.querySelector("#recipeContainer");
    if (cardContainer) {
        cardContainer.innerHTML = ''; // Efface le contenu précédent du conteneur de carte

        recipes.forEach((recipe, index) => {
            const card = document.createElement("div");
            card.classList.add("col");
            card.innerHTML = `
                <div class="card">
                    <img src="${recipe.recipeImage}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${recipe.title}</h5>
                            <div class="text-warning text-center">${generateStars(recipe.rating || 0)}</div>
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
}

function displayPaginationButtons(currentPage, totalPages) {
    const paginationContainer = document.querySelector("#paginationContainer");
    if (paginationContainer) {
        paginationContainer.innerHTML = ''; // Efface le contenu précédent

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.classList.add("btn", "btn-outline-dark", "mx-1");
            if (i === currentPage) {
                button.classList.add("active");
            }
            button.addEventListener("click", function() {
                displayRecipeCards(i);
            });
            paginationContainer.appendChild(button);
        }
    } else {
        console.log("Pagination container not found.");
    }
}

function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    for (let i = rating; i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}


function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    for (let i = rating; i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}





//=================== End Recipe ===================/
// function displayTrendingRecipeCards() {
//   const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

//   // Filtrer les recettes ayant un rating
//   const ratedRecipes = recipes.filter(recipe => recipe.rating !== null && recipe.rating !== undefined && recipe.rating > 0);

//   // Trier les recettes par rating (du plus grand au plus petit)
//   const sortedRecipes = ratedRecipes.sort((a, b) => b.rating - a.rating);

//   const cardContainer = document.querySelector("#trendingRecipeContainer");

//   if (cardContainer) {
//       sortedRecipes.forEach((recipe, index) => {
//           const card = document.createElement("div");
//           card.classList.add("col");
//           card.innerHTML = `
//               <div class="card">
//                   <img src="${recipe.recipeImage}" class="card-img-top" alt="${recipe.title}">
//                   <div class="card-body">
//                       <div class="d-flex justify-content-between">
//                           <h5 class="card-title">${recipe.title}</h5>
//                           <div class="text-warning text-center">${generateStars(recipe.rating)}</div>
//                       </div>
//                       <p class="card-text">${recipe.description}</p>
//                       <button class="btn btn-dark view-details-btn" onclick="displayRecipeDetails(${index})">View Details</button>
//                   </div>
//               </div>
//           `;
//           cardContainer.appendChild(card);
//       });
//   } else {
//       console.log("Card container not found.");
//   }
// }
