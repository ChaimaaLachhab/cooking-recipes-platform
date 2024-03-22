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

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// START ADD RECIPE

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
      instructions: instructions
  };

  console.log("Recipe Information:", recipe);

  recipes.push(recipe);

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