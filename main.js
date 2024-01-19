var pokeList = document.querySelector(".pokemon-list");
var pokeNewArray = pokemons.slice(0, 20);
for (var pokes of pokeNewArray) {
  var pokeCardWrapper = document.createElement("li");
  pokeCardWrapper.classList.add("pokemon-card");
  var cardNumber = document.createElement("strong");
  cardNumber.classList.add("card-num");
  var pokeName = document.createElement("span");
  pokeName.classList.add("poke-name");
  var imageWrapper = document.createElement("div");
  imageWrapper.classList.add("img-card");
  var pokeImg = document.createElement("img");
  var pokeInfo = document.createElement("div");
  pokeInfo.classList.add("poke-info");
  var pokeDate = document.createElement("time");
  var pokeTypes = document.createElement("p");
  cardNumber.textContent = pokes.num;
  pokeName.textContent = pokes.name;
  pokeImg.src = pokes.img;
  pokeImg.alt = pokes.name + " pokemon";
  pokeDate.textContent = "2024-01-19 " + pokes.spawn_time;
  pokeTypes.textContent = pokes.type.join(", ");
  imageWrapper.appendChild(pokeImg);
  pokeInfo.append(pokeDate, pokeTypes);
  pokeCardWrapper.append(cardNumber, pokeName, imageWrapper, pokeInfo);
  pokeList.appendChild(pokeCardWrapper);
}

// get max value from arrray without methods
var numbers = [1, 5, 7, 9, 2, 4];

function findMaxFirst(arr) {
  var max = arr[0];
  if (arr.length <= 0) {
    return undefined;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// var res = findMaxFirst(numbers);
// console.log("max-value: " + res);

function findMaxSecond(arr) {
  var max = arr[0];
  if (arr.lenght <= 0) {
    return undefined;
  }
  for (var nums of arr) {
    if (nums > max) {
      max = nums;
    }
  }
  return max;
}
// var res = findMaxSecond(numbers);
// console.log("max-value: " + res);
