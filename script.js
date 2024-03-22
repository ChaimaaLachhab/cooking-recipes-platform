
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
