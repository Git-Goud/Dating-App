var girls = [
    {picture: "https://assets.codepen.io/6060109/tinder-girl-1.png"},
    {picture: "https://assets.codepen.io/6060109/tinder-girl-2.png"},
    {picture: "https://assets.codepen.io/6060109/tinder-girl-3.png"},
  ];
  
var feed = document.querySelector('.feed');
  
for (let girl of girls) {
    feed.innerHTML += `
      <img src=${girl.picture}>
    `
}

var greenHeart = document.querySelector('.green-heart');

greenHeart.addEventListener("click", function() {
  
  var gotMatch = document.querySelector(".got-match");
  gotMatch.style.display = 'flex';
});
    
var keepSwiping = document.querySelector('.keep-swiping');

keepSwiping.addEventListener("click"), function() {
  var gotMatch = document.querySelector('.got-match');
  gotMatch.style.display = 'none';
});
