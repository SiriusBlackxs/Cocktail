function getRandomeCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            console.log("this is the data: ", data)
            displayRandomCocktail(data);

        }).catch(e => {
            console.log("Fetch error " + e.message)
        })
}

getRandomeCocktail();

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0]);

    let drinkSection = document.querySelector('#drink-section');
    drinkSection.innerHTML = '';

    let drinkName = document.createElement('h2');
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);
    drinkName.setAttribute("id","text-drink")
    let img = document.createElement('img');
    img.setAttribute("id","img-para")
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img);

    for (let i = 1; i < 16; i++) {
        console.log();

        if (cocktail.drinks[0][`strIngredient${i}`] == null || cocktail.drinks[0][`strIngredient${i}`] == '') {
            break;
        }

        let ingredient = document.createElement('ons-list-item');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];
        ingredient.setAttribute("id","ingredient")
        drinkSection.appendChild(ingredient);
    }

    let card = document.createElement('ons-card');
    card.innerHTML = cocktail.drinks[0].strInstructions;

    drinkSection.appendChild(card);
    card.setAttribute("id","card")

}

function SearchCoctailsByName(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
        console.log("data -> ",data)
        data = JSON.stringify(data)
        JSON.parse(data);
        console.log(data)

    }).catch(e => {
        console.log("Fetch error " + e.message)
    })
}

SearchCoctailsByName()