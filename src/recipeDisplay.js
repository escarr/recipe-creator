import './App.css';
import * as d3 from "d3v4";

function DisplayRecipe() {

   // get items from local storage
   const recipe_name = localStorage.getItem('recipe_name');
   const recipe_image = localStorage.getItem('file');
   const n_servings = localStorage.getItem('n_servings');
   const recipe_time = localStorage.getItem('recipe_time');
   const ingredients =  JSON.parse(localStorage.getItem('ingredients'));
   const instructions =  JSON.parse(localStorage.getItem('instructions'));


   // create lists of ingredients and instructions to display
    const ingredientsList = ingredients.map((ingredient, i) => 
        <li key={i} className="ingredient">&#9633; 
        {ingredient.text.split(":")[1] + " " + ingredient.text.split(":")[0]}</li>);

    const instructionsList = instructions.map((instruction, i) => 
        <li key={i}>{instruction.text}</li>);

    // api call for each ingredient to get nutrition info
    const all_nutrition = [];
    const errors = [];

    for (const ingredient of ingredients) {

        const ingredient_name = ingredient.text.split(":")[0];
        const ingredient_mult = parseFloat(ingredient.text.split(":")[1].split(" ")[1]);
        const unit = ingredient.text.split(":")[1].split(" ")[2];
    
        // call 1 to get the correct measure url
        fetch(`https://api.edamam.com/api/food-database/v2/parser?&app_id=ca747d07&app_key=722fabaee32b8118f7b1cb2e32b137cf&ingr=${ingredient_name}`)

        .then(response => response.json())
        .then(data => {
            try {
            const food_id = data.hints[0].food.foodId; 

            for (const measure of data.hints[0].measures) {
                if (unit === measure.label) {
                    const uri =  measure.uri; 

                    const base_url = 'https://api.edamam.com/api/food-database/v2/nutrients?&app_id=ca747d07&app_key=722fabaee32b8118f7b1cb2e32b137cf';

                    //c call 2 to get the actual nutrition info
                    fetch(base_url, {
                        method: 'POST',
                        cache: 'no-cache',
                        credentials: 'same-origin',

                        headers: {
                            'Content-Type': 'application/json'
                         },
                        body: JSON.stringify({
                                "ingredients": [
                                  {
                                    "quantity": ingredient_mult,
                                    "measureURI": uri,
                                    "foodId": food_id  } ] })
                            
                    }).then(response => response.json()).then(data => {
                        // add info to all_nutrition
                        const calories = data.totalNutrients.ENERC_KCAL.quantity/n_servings;
                        const protein = data.totalNutrients.PROCNT.quantity/n_servings;
                        const fat = data.totalNutrients.FAT.quantity/n_servings;
                        const carbs = data.totalNutrients.CHOCDF.quantity/n_servings;
                        all_nutrition.push({"ingredient": ingredient_name, 
                                "calories": calories,
                                "protein": protein,
                                "fat": fat,
                                "carbs": carbs})
                    });
                }
            }
    }
    // in the case of an error, tell user that nutrition info couldn't be retrieved
    catch(error) {
        console.log("an error occurred");
        console.log(error);
        errors.push(ingredient_name);
    }})} ;

    // aggregate nutrition info for all ingredients
    const combined_nutrition = {"calories": 0, "protein": 0, "fat": 0, "carbs": 0};

    // wait 1 second to make sure everything is populated first
    setTimeout(
    function calculateNutrition(){
       for(var i = 0; i < all_nutrition.length; i++ ) {
            combined_nutrition.calories = (combined_nutrition.calories + all_nutrition[i].calories);
            combined_nutrition.protein = (combined_nutrition.protein + all_nutrition[i].protein);
            combined_nutrition.fat = (combined_nutrition.fat + all_nutrition[i].fat);
            combined_nutrition.carbs = (combined_nutrition.carbs + all_nutrition[i].carbs);

       }

       const nutrition_display = document.getElementById("nutrition_display");
       nutrition_display.innerHTML = "";
       for (const [key, value] of Object.entries(combined_nutrition)) {
            const new_item = document.createElement("li");
            if (key !== 'calories') {
                new_item.textContent = key + ": " + value.toFixed(2) + " grams"; 
            } else {
                new_item.textContent = value.toFixed(0) + " calories"; 
            }
            nutrition_display.append(new_item);
                 
       }

       // output any errors
       const error_display = document.getElementById("errors_list");
       if (errors.length === 0) {
            error_display.innerHTML = "";
       } else {
            error_display.innerHTML = "Note: Unable to retrieve nutritional information for " + new Intl.ListFormat('en').format(errors); 
        }
 

       // convert grams to calories
       const protein_cals = combined_nutrition.protein*4;
       const fat_cals = combined_nutrition.fat*9;
       const carbs_cals = combined_nutrition.carbs*4;

        // pie chart
        // set the dimensions and margins of the graph
        var width = 500
        var height = 500
        var margin = 120
        
        // source: https://www.d3-graph-gallery.com/graph/donut_basic.html
        // source: https://www.d3-graph-gallery.com/graph/donut_label.html
        
        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin
           
        document.getElementById("my_dataviz").innerHTML = "";
        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#my_dataviz")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
           
       // replaced with my data
        var data = {protein: protein_cals, fat: fat_cals, carbs:carbs_cals};
           
        // set the color scale
        var color = d3.scaleOrdinal()
            .domain(data)
                .range(["#EC6B56", "##FFC154", "#47B39C"])
           
        // Compute the position of each group on the pie:
        var pie = d3.pie()
            .value(function(d) {return d.value; })
             var data_ready = pie(d3.entries(data))
                // The arc generator
        var arc = d3.arc()
        .innerRadius(radius * 0.4)         // This is the size of the donut hole
        .outerRadius(radius * 0.8)

        // Another arc that won't be drawn. Just for labels positioning
        var outerArc = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9)

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
        .selectAll('allSlices')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)

        // Add the polylines between chart and labels:
        svg
        .selectAll('allPolylines')
        .data(data_ready)
        .enter()
        .append('polyline')
        .attr("stroke", "black")
        .style("fill", "none")
        .attr("stroke-width", 1)
        .attr('points', function(d) {
            var posA = arc.centroid(d) // line insertion in the slice
            var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
            var posC = outerArc.centroid(d); // Label position = almost the same as posB
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
            posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
            return [posA, posB, posC]
        })

        // Add the polylines between chart and labels:
        svg
        .selectAll('allLabels')
        .data(data_ready)
        .enter()
        .append('text')
        .text( function(d) { return d.data.key + ' (' + d.data.value.toFixed(0) + ' cals)' } )
        .attr('transform', function(d) {
            var pos = outerArc.centroid(d);
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
            return 'translate(' + pos + ')';
        })
        .style('text-anchor', function(d) {
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            return (midangle < Math.PI ? 'start' : 'end')
        })
      }, 1000);
          
    return(

    <div className="App">

    <header className="App-header">
      <h1>{recipe_name}</h1>
    </header>

        <main>
            <section id = "recipeInfo">
            <section>
                <p><strong>Estimated Recipe Time:</strong> {recipe_time} </p>
                <p><strong>Number of servings:</strong> {n_servings} </p>
                <img src={recipe_image} alt="uploaded recipe"></img>
            </section>

            <section  id="recipeDetails">
                <h2>Ingredients</h2>
                <ul>{ingredientsList}</ul>
                <h2>Instructions</h2>
                <ol>{instructionsList}</ol>
            </section>

            </section>

            <h2 id="nutrition_header">Nutritional Information (per serving)</h2>
            <p id="errors_list"></p>
            <section id="nutritionInfo">
                <ul id="nutrition_display"></ul>
                <div id="my_dataviz"></div>
            </section>

        </main>
    </div>
 )};


export default DisplayRecipe;