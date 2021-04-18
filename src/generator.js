import './App.css';
import image1 from './ingredients-for-a-meal-1324588.jpg'
import image2 from './italian-homemade-bread-1-1329086.jpg'
import image3 from './recipe-1538714.jpg'
import { useState, useRef } from 'react';

// define empty lists to fill upon user action
const ingredients = [];
const instructions = [];

function RecipeGenerator() {

  const recipe_name = useRef();
  const ingredient = useRef();
  const n_servings = useRef();
  const recipe_time = useRef();
  const amount = useRef();
  const unit = useRef();

  // code to update ingredients as they are added/removed
  const [ingredientsDisplay, setIngredientsDisplay] = useState([]); 

  function updateIngredientsDisplay() {
    setIngredientsDisplay(ingredients.map((ingredient, i) => 
      <li key={i}>{ingredient.text} 
      <button onClick = {() => removeIngredient(i)}>Remove</button></li>));
      localStorage.setItem('ingredients', JSON.stringify(ingredients));
  }

  function removeIngredient(idx) {
    ingredients.splice(idx, 1);
    updateIngredientsDisplay();
  }

  function addIngredient() {
    ingredients.push({text: ingredient.current.value + ': ' + amount.current.value + ' ' + unit.current.value});
    ingredient.current.value = "";
    amount.current.value = "";
    unit.current.value = "";
    updateIngredientsDisplay();
  }

  // code to update instructions as they are added/removed
  const instructionInput = useRef();
  const [instructionsDisplay, setInstructionsDisplay] = useState([]);

  function updateInstructionsDisplay() {
    setInstructionsDisplay(instructions.map((instruction, i) => 
      <li key={i}>{instruction.text} 
      <button onClick = {() => removeInstruction(i)}>Remove</button></li>));
      localStorage.setItem('instructions', JSON.stringify(instructions));
  }

  function removeInstruction(idx) {
    instructions.splice(idx, 1);
    updateInstructionsDisplay();
  }

  function addInstruction() {
    instructions.push({text: instructionInput.current.value});
    updateInstructionsDisplay();
    instructionInput.current.value = "";
  }

  // when recipe is submitted, go to new url & save variables
  function submitRecipe() {
    window.location.href='/recipe-creator/#/recipe';
    localStorage.setItem('recipe_name', recipe_name.current.value);
    localStorage.setItem('n_servings', n_servings.current.value);
    localStorage.setItem('recipe_time', recipe_time.current.value);
  }


// source: https://stackoverflow.com/questions/46040973/how-to-upload-image-using-reactjs-and-save-into-local-storage
// code for reading in & saving image
  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    })};

  function handleImageUpload (i) {
    const file = i.target.files[0];
    getBase64(file).then(base64 => {
      localStorage.setItem("file", base64);
    });
  };

  return (

<div className="App">
  
    <header className="App-header">
      <h1>Create Your Own Recipe</h1>
    </header>

    <main>

      <section id = "images">
          <img id="img1" src={image1} alt="ingredients on a cutting board"/>
          <img id="img2" src={image2} alt="bread loaves"/>
          <img id="img3" src={image3} alt="ingredients on a cutting board"/>
      </section>

      <section id='recipe_details'>
        <h2>Recipe Details</h2>
        <div>
          <label>Title:  </label>
          <input type="text" ref={recipe_name}></input>
        </div>
        <div>
          <label>No. of Servings:  </label>
          <input type="number" ref={n_servings}></input>
        </div>
        <div>
          <label>Estimated Time:  </label>
          <input type="text" ref={recipe_time}></input>
        </div>
        <div>
          <label>Image:  </label>
          <input type="file" accept="image/*" onChange={handleImageUpload}></input>
        </div>
      </section>

      <section>
          <h2>Ingredients</h2>
          <p className="helptext">Enter each ingredient below. If the amount is not a whole number, please enter it as a decimal (e.g., 0.5 to represent 1/2)</p>
          <ul id = "ingredients_list">{ingredientsDisplay}</ul>
          <label>Ingredient:  </label>
            <input type="text" ref={ingredient}/>
          <label>Amount:  </label>
            <input type="text" ref={amount}/>
          <label>Unit:  </label>
            <select ref={unit}>
                <option value="Whole">Whole</option>
                <option value="Gram">Gram</option>
                <option value="Cup">Cup</option>
                <option value="Teaspoon">Teaspoon</option>
                <option value="Tablespoon">Tablespoon</option>
                <option value="Ounce">Ounce</option>
            </select>

          <button id="addIngredient" onClick={addIngredient}>Add</button>
      </section>

      <section>
         <h2>Instructions</h2>
         <p className="helptext">Enter each instruction, in order, below.</p>
         <ol id = "instructions_list">{instructionsDisplay}</ol>
         <textarea id="instruction" ref={instructionInput} defaultValue='Enter instruction here...'></textarea>
         <button id="addInstruction" onClick={addInstruction}>Add</button>
      </section>

      <section>
          <input type="submit" id = "generateRecipe" value = "Create Recipe!" onClick={submitRecipe}/>
      </section>

    </main>

  </div>

  
  );
}

export default RecipeGenerator;

