function searchRecipe() {
    let input = document.getElementById('searchBar').value.toUpperCase();
    let recipeCards = document.getElementsByClassName('recipe-card');
  
    for (let i = 0; i < recipeCards.length; i++) {
      let title = recipeCards[i].getElementsByTagName('h2')[0];
      if (title.innerHTML.toUpperCase().indexOf(input) > -1) {
        recipeCards[i].style.display = "";
      } else {
        recipeCards[i].style.display = "none";
      }
    }
  }
  