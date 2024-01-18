
var addbook = document.getElementById("addbook-button");

var formBox =document.querySelector(".form-box-inner");

addbook.
addEventListener("click",function(){
    if (formBox.style.display === "none") {
        formBox.style.display = "block";
      } else {
        formBox.style.display = "none";
      }
})




// var card = document.querySelector(".card");
// var submitButton = document.querySelector(".submit-button");

// submitButton.addEventListener("click", function() {
//   var h1Element = card.querySelector("h1");
//   h1Element.textContent = "Rupesh";
// });


var card = document.querySelector(".card");
var submitButton = document.querySelector(".submit-button");

var newH1Content = "Rupesh";

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); 
  
  var h1Element = card.querySelector("h1");
  h1Element.textContent = newH1Content;
});






