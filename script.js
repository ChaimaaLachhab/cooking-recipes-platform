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

let ingredientsCount = 1;

document.getElementById('addIngredient').addEventListener('click', addIngredientField);

function addIngredientField() {
    const container = document.getElementById('ingredientsContainer');
    const input = document.createElement('input');
    input.className = 'form-control mb-2';
    input.type = 'text';
    input.placeholder = 'Ingredient ' + (ingredientsCount + 1);
    container.appendChild(input);
    ingredientsCount++;
}
function displaySelectedImage(event, imgId) {
        const selectedImage = document.getElementById(imgId);
        selectedImage.src = URL.createObjectURL(event.target.files[0]);
     }

// sauvegarder 
document.getElementById('saveRecipe').addEventListener('click', saveRecipe);

function saveRecipe() {
    const title = document.querySelector('input[placeholder="Enter Title"]').value;
    const description = document.getElementById('floatingTextarea2').value;
    const ingredients = Array.from(document.querySelectorAll('#ingredientsContainer input')).map(input => input.value);
    
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    
    recipes.push({
        title,
        description,
        ingredients
    });
    
    localStorage.setItem('recipes', JSON.stringify(recipes));
    
    alert('Recipe saved successfully!');
}
