
var addbook = document.getElementById("addbook-button");

var formBox =document.querySelector(".form-box-inner");

addbook.
addEventListener("click",function(){
    if (formBox.style.display === "block") {
        formBox.style.display = "none";
      } else {
        formBox.style.display = "block";
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


submitButton.addEventListener("click", function(event) {
  event.preventDefault(); 

  var newDiv = document.createElement("div");
  var newh1 = document.createElement("h1");
  var newh2 = document.createElement("h2");
  var newh3 = document.createElement("h3");
  var newp = document.createElement('p');

  newDiv.className = 'card';




  newh1.textContent = document.getElementById("name").value;
  newh2.textContent = "by "+ document.getElementById("author").value;
  newh3.textContent = document.getElementById("pages").value + " Pages";
  newp.textContent = document.getElementById("read").value;


  newDiv.appendChild(newh1);
  newDiv.appendChild(newh2);
  newDiv.appendChild(newh3);
  newDiv.appendChild(newp);

  allcards.appendChild(newDiv);

});






