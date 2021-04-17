(this["webpackJsonprecipe-creator"]=this["webpackJsonprecipe-creator"]||[]).push([[0],{15:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),c=n(20),a=n.n(c),s=(n(30),n(15),n(21)),l=n(22),o=n(25),d=n(24),j=n(11),u=n(2),b=n(4),p=(Object(b.a)(),n(10)),h=n.p+"static/media/ingredients-for-a-meal-1324588.8c722b45.jpg",O=n.p+"static/media/italian-homemade-bread-1-1329086.67f50187.jpg",f=n.p+"static/media/recipe-1538714.684634fc.jpg",x=n(0),m=[],g=[];var v=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),n=Object(r.useRef)(),i=Object(r.useRef)(),c=Object(r.useRef)(),a=Object(r.useRef)(),s=Object(r.useState)([]),l=Object(p.a)(s,2),o=l[0],d=l[1];function j(){d(m.map((function(e,t){return Object(x.jsxs)("li",{children:[e.text,Object(x.jsx)("button",{onClick:function(){return e=t,m.splice(e,1),void j();var e},children:"Remove"})]},t)}))),localStorage.setItem("ingredients",JSON.stringify(m))}var u=Object(r.useRef)(),b=Object(r.useState)([]),v=Object(p.a)(b,2),y=v[0],I=v[1];function C(){I(g.map((function(e,t){return Object(x.jsxs)("li",{children:[e.text,Object(x.jsx)("button",{onClick:function(){return e=t,g.splice(e,1),void C();var e},children:"Remove"})]},t)}))),localStorage.setItem("instructions",JSON.stringify(g))}return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)("h1",{children:"Create Your Own Recipe"})}),Object(x.jsxs)("main",{children:[Object(x.jsxs)("section",{id:"images",children:[Object(x.jsx)("img",{id:"img1",src:h,alt:"ingredients on a cutting board"}),Object(x.jsx)("img",{id:"img2",src:O,alt:"bread loaves"}),Object(x.jsx)("img",{id:"img3",src:f,alt:"ingredients on a cutting board"})]}),Object(x.jsxs)("section",{id:"recipe_details",children:[Object(x.jsx)("h2",{children:"Recipe Details"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Title:  "}),Object(x.jsx)("input",{type:"text",ref:e})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"No. of Servings:  "}),Object(x.jsx)("input",{type:"number",ref:n})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Estimated Time:  "}),Object(x.jsx)("input",{type:"text",ref:i})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{children:"Image:  "}),Object(x.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){(function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)},r.readAsDataURL(e)}))})(e.target.files[0]).then((function(e){localStorage.setItem("file",e)}))}})]})]}),Object(x.jsxs)("section",{children:[Object(x.jsx)("h2",{children:"Ingredients"}),Object(x.jsx)("p",{className:"helptext",children:"Enter each ingredient below. If the amount is not a whole number, please enter it as a decimal (e.g., 0.5 to represent 1/2)"}),Object(x.jsx)("ul",{id:"ingredients_list",children:o}),Object(x.jsx)("label",{children:"Ingredient:  "}),Object(x.jsx)("input",{type:"text",ref:t}),Object(x.jsx)("label",{children:"Amount:  "}),Object(x.jsx)("input",{type:"text",ref:c}),Object(x.jsx)("label",{children:"Unit:  "}),Object(x.jsxs)("select",{ref:a,children:[Object(x.jsx)("option",{value:"Whole",children:"Whole"}),Object(x.jsx)("option",{value:"Gram",children:"Gram"}),Object(x.jsx)("option",{value:"Cup",children:"Cup"}),Object(x.jsx)("option",{value:"Teaspoon",children:"Teaspoon"}),Object(x.jsx)("option",{value:"Tablespoon",children:"Tablespoon"}),Object(x.jsx)("option",{value:"Ounce",children:"Ounce"})]}),Object(x.jsx)("button",{id:"addIngredient",onClick:function(){m.push({text:t.current.value+": "+c.current.value+" "+a.current.value}),t.current.value="",c.current.value="",a.current.value="",j()},children:"Add"})]}),Object(x.jsxs)("section",{children:[Object(x.jsx)("h2",{children:"Instructions"}),Object(x.jsx)("p",{className:"helptext",children:"Enter each instruction, in order, below."}),Object(x.jsx)("ol",{id:"instructions_list",children:y}),Object(x.jsx)("textarea",{id:"instruction",ref:u,defaultValue:"Enter instruction here..."}),Object(x.jsx)("button",{id:"addInstruction",onClick:function(){g.push({text:u.current.value}),C(),u.current.value=""},children:"Add"})]}),Object(x.jsx)("section",{children:Object(x.jsx)("input",{type:"submit",id:"generateRecipe",value:"Create Recipe!",onClick:function(){window.location.href="/recipe-creator/#/recipe",localStorage.setItem("recipe_name",e.current.value),localStorage.setItem("n_servings",n.current.value),localStorage.setItem("recipe_time",i.current.value)}})})]})]})},y=n(16),I=n(8);var C=function(){var e,t=localStorage.getItem("recipe_name"),n=localStorage.getItem("file"),r=localStorage.getItem("n_servings"),i=localStorage.getItem("recipe_time"),c=JSON.parse(localStorage.getItem("ingredients")),a=JSON.parse(localStorage.getItem("instructions")),s=c.map((function(e,t){return Object(x.jsxs)("li",{className:"ingredient",children:["\u25a1",e.text.split(":")[1]+" "+e.text.split(":")[0]]},t)})),l=a.map((function(e,t){return Object(x.jsx)("li",{children:e.text},t)})),o=[],d=[],j=Object(y.a)(c);try{var u=function(){var t=e.value,n=t.text.split(":")[0],i=parseFloat(t.text.split(":")[1].split(" ")[1]),c=t.text.split(":")[1].split(" ")[2];fetch("https://api.edamam.com/api/food-database/v2/parser?&app_id=ca747d07&app_key=722fabaee32b8118f7b1cb2e32b137cf&ingr=".concat(n)).then((function(e){return e.json()})).then((function(e){try{var t,a=e.hints[0].food.foodId,s=Object(y.a)(e.hints[0].measures);try{for(s.s();!(t=s.n()).done;){var l=t.value;if(c===l.label){var j=l.uri;fetch("https://api.edamam.com/api/food-database/v2/nutrients?&app_id=ca747d07&app_key=722fabaee32b8118f7b1cb2e32b137cf",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:[{quantity:i,measureURI:j,foodId:a}]})}).then((function(e){return e.json()})).then((function(e){var t=e.totalNutrients.ENERC_KCAL.quantity/r,i=e.totalNutrients.PROCNT.quantity/r,c=e.totalNutrients.FAT.quantity/r,a=e.totalNutrients.CHOCDF.quantity/r;o.push({ingredient:n,calories:t,protein:i,fat:c,carbs:a})}))}}}catch(u){s.e(u)}finally{s.f()}}catch(b){console.log("an error occurred"),console.log(b),d.push(n)}}))};for(j.s();!(e=j.n()).done;)u()}catch(h){j.e(h)}finally{j.f()}var b={calories:0,protein:0,fat:0,carbs:0};return setTimeout((function(){for(var e=0;e<o.length;e++)b.calories=b.calories+o[e].calories,b.protein=b.protein+o[e].protein,b.fat=b.fat+o[e].fat,b.carbs=b.carbs+o[e].carbs;var t=document.getElementById("nutrition_display");t.innerHTML="";for(var n=0,r=Object.entries(b);n<r.length;n++){var i=Object(p.a)(r[n],2),c=i[0],a=i[1],s=document.createElement("li");s.textContent="calories"!==c?c+": "+a.toFixed(2)+" grams":a.toFixed(0)+" calories",t.append(s)}var l=document.getElementById("errors_list");0===d.length?l.innerHTML="":l.innerHTML="Note: Unable to retrieve nutritional information for "+new Intl.ListFormat("en").format(d);var j=4*b.protein,u=9*b.fat,h=4*b.carbs,O=Math.min(500,500)/2-120;document.getElementById("my_dataviz").innerHTML="";var f=I.select("#my_dataviz").append("svg").attr("width",500).attr("height",500).append("g").attr("transform","translate(250,250)"),x={protein:j,fat:u,carbs:h},m=I.scaleOrdinal().domain(x).range(["#EC6B56","##FFC154","#47B39C"]),g=I.pie().value((function(e){return e.value}))(I.entries(x)),v=I.arc().innerRadius(.4*O).outerRadius(.8*O),y=I.arc().innerRadius(.9*O).outerRadius(.9*O);f.selectAll("allSlices").data(g).enter().append("path").attr("d",v).attr("fill",(function(e){return m(e.data.key)})).attr("stroke","white").style("stroke-width","2px").style("opacity",.7),f.selectAll("allPolylines").data(g).enter().append("polyline").attr("stroke","black").style("fill","none").attr("stroke-width",1).attr("points",(function(e){var t=v.centroid(e),n=y.centroid(e),r=y.centroid(e),i=e.startAngle+(e.endAngle-e.startAngle)/2;return r[0]=.95*O*(i<Math.PI?1:-1),[t,n,r]})),f.selectAll("allLabels").data(g).enter().append("text").text((function(e){return e.data.key+" ("+e.data.value.toFixed(0)+" cals)"})).attr("transform",(function(e){var t=y.centroid(e),n=e.startAngle+(e.endAngle-e.startAngle)/2;return t[0]=.99*O*(n<Math.PI?1:-1),"translate("+t+")"})).style("text-anchor",(function(e){return e.startAngle+(e.endAngle-e.startAngle)/2<Math.PI?"start":"end"}))}),1e3),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{children:Object(x.jsx)("h1",{children:t})}),Object(x.jsxs)("main",{children:[Object(x.jsxs)("section",{id:"recipeInfo",children:[Object(x.jsxs)("section",{children:[Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Estimated Recipe Time:"})," ",i," "]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("strong",{children:"Number of servings:"})," ",r," "]}),Object(x.jsx)("img",{src:n,alt:"uploaded recipe"})]}),Object(x.jsxs)("section",{id:"recipeDetails",children:[Object(x.jsx)("h2",{children:"Ingredients"}),Object(x.jsx)("ul",{children:s}),Object(x.jsx)("h2",{children:"Instructions"}),Object(x.jsx)("ol",{children:l})]})]}),Object(x.jsx)("h2",{id:"nutrition_header",children:"Nutritional Information (per serving)"}),Object(x.jsx)("p",{id:"errors_list"}),Object(x.jsxs)("section",{id:"nutritionInfo",children:[Object(x.jsx)("ul",{id:"nutrition_display"}),Object(x.jsx)("div",{id:"my_dataviz"})]})]})]})},S=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsx)(j.a,{children:Object(x.jsxs)(u.c,{children:[Object(x.jsx)(u.a,{exact:!0,path:"/",component:v}),Object(x.jsx)(u.a,{path:"/recipe",component:C})]})})}}]),n}(r.Component);var R=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(S,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(j.a,{children:Object(x.jsx)(R,{})})}),document.getElementById("root")),A()}},[[37,1,2]]]);
//# sourceMappingURL=main.6248d370.chunk.js.map