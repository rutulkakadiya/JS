document.getElementById("searchBtn").addEventListener("click", function () {
    const search = document.getElementById("searchItem").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

        .then((res) => res.json())

        .then((json) => {
            console.clear();
            console.log(json);

            let mainDiv1 = document.getElementById("mainDiv");
            mainDiv1.innerHTML = "";

            if (json.meals) {
                json.meals.forEach((meal) => {
                    let recipeDiv = document.createElement("div");
                    recipeDiv.className = "item_div"
                    recipeDiv.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p id="text-${meal.idMeal}" class="text-[25px] font-bold">${meal.strMeal}</p>
                <h1 class="text-[18px] text-[#4a4a4a] mt-3"><span class="font-bold">${meal.strArea}</span> Dish</h1>
                <p class="text-[18px] text-[#4a4a4a] mt-3">Belongs to <span class="font-bold">${meal.strCategory}</span> Category</p>
                
                `;

                    const input1 = document.createElement("input")
                    input1.className = "input_box"

                    const button = document.createElement("button")
                    button.innerText = "Edit"
                    button.className = "btn1"
                    

                    const button1 = document.createElement("button")
                    button1.innerText = "Update"
                    button1.className = "btn2"
                    button1.disabled = true;
                    
                    const button2 = document.createElement("button")
                    button2.innerText = "Delete"
                    button2.className = "btn3"

                    recipeDiv.append(input1, button, button1,button2)
                    mainDiv1.append(recipeDiv);


                    button.addEventListener("click", function() {

                        input1.value = meal.strMeal;                        

                        input1.style.display = "block"
                        button1.disabled = false;

                        localStorage.setItem("edit_value",meal.strMeal)                        

                    })

                    button1.addEventListener("click", function() {

                        if(!button1.disabled){
                            const new_value = input1.value;
                        document.getElementById(`text-${meal.idMeal}`).innerText = new_value;
                        }                                                                                                           
                        
                        localStorage.setItem("updated_value",new_value)
                    })

                    button2.addEventListener("click", function() {

                        recipeDiv.remove()
                    })
                });


            } else {
                mainDiv1.innerHTML = "No results found.";
            }
        })


        .catch(err => {
            console.log("Error");
        });



});