//user can select fruit from dropbox
//user will click button when selecting fruit
//user will see information displayed on selected fruit
//iformation on selected fruit is displayed on DOM

//user clicks on button
//Event listener
document.getElementsByTagName('button')[0].onclick = search;
//when user clicks on button following function will fire
function search(){
  var fruit = document.getElementsByTagName('select')[0].value;
  //retrieve data from the server to the URL and store information in variable request
  var request = new XMLHttpRequest();
  //from the fruit selectiong What comes after the '/api?fruit=' will determine if request is true or false.
  request.open('GET','/api?fruit=' + fruit, true);
  //when web page is loaded run this function
  request.onload=function(){
    //code 200: mean passible, everything is good. Code:400 means not valid; request won't work
    if(request.status >= 200 && request.status < 400){
      //successful endpoint or url
      //taking the object request with propert name responseText and storing the value that's in property (responseText) to the variable data
      var data = JSON.parse(request.responseText)
      //the data for the fruit information is display in the (DOM)
      document.getElementsByClassName('fruitName')[0].innerHTML = data.name;
      document.getElementsByClassName('fruitImg')[0].src = data.imageUrl;
      document.getElementsByClassName('fruitFamily')[0].innerHTML = data.familyName;
      document.getElementsByClassName('fruitDescription')[0].innerHTML = data.description;
      document.getElementsByClassName('fruitCalories')[0].innerHTML = data.nutritionalFacts.calories;
      document.getElementsByClassName('fruitFiber')[0].innerHTML = data.nutritionalFacts.fiber;
      document.getElementsByClassName('fruitVitaminA')[0].innerHTML = data.nutritionalFacts.vitaminA;
      document.getElementsByClassName('fruitVitaminB')[0].innerHTML = data.nutritionalFacts.vitaminB;
      document.getElementsByClassName('fruitVitaminC')[0].innerHTML = data.nutritionalFacts.vitaminC;
      document.getElementsByClassName('fruitVitaminD')[0].innerHTML = data.nutritionalFacts.vitaminD;
      document.getElementsByClassName('fruitSugar')[0].innerHTML = data.nutritionalFacts.sugar;
      document.getElementsByClassName('fruitBenefit')[0].innerHTML = data.benefits;
      document.getElementsByClassName('fruitLink')[0].setAttribute("href", "" + data.use + "")
    }
    else {

    }
  };
  //if URL is not true, run this function
  request.onerror = function(){

  }
  //If there are no errors, send the information to the server
  request.send();


}
