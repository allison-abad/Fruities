// The const keyword value would never change
// The string value 'http' would always be assign in the variable http
const http = require('http');
// The string value 'fs' would always be assign in the variable fs
const fs = require ('fs')
// The string value 'url' would always be assign in the variable url
const url = require('url')
// Format the url with the querystring
var querystring = require('querystring')
const figlet = require('figlet')
// The method (createServer()) fires the function and adds the const http (or 'http') and assgins into the const server
const server = http.createServer( function(response, res){
  // The pathname ('/') is added on the text of the url and assigns it to the const page
  const page = url.parse(response.url).pathname;
  var params = querystring.parse(url.parse(response.url).query);
  console.log(page)
  // If the path of the url contains '/' run this conditional
  if(page == '/'){
    // Conditional '/', read the file index.html
    fs.readFile('index.html', function(err, data){
      // Server response back with Code: level 200
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Server response back with data from the index.html file
      res.write(data);
      // Server ends the response of the index.html file
      res.end()
    });
  }
  // If the pathname contains '/api' in the url, run this condition
  else if(page == '/api'){
    //if 'pokemon' is one of the parameters (querystring), run this condition
    if('fruit' in params){
      // if the parameter (querystring) is equal to the value 'pikachu', run this condition
      if(params['fruit'] == 'greenApple'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Green Apple",
          description: "The fruit has hard, light green skin and a crisp, juicy flesh. They go from being completely green to turning yellow when overripe. The acidity mellows significantly on ripening, and it takes on a balanced flavour.",
          nutritionalFacts: {
            calories: 72,
            fiber: 2+"g.",
            vitaminA: 1+"%",
            vitaminB: 0+"%",
            vitaminC: 8+"%",
            vitaminD: 0+"%"
          },
          benefits: "increases metabolism, low in fat, eliminates dark eye circles",
          familyName: "Malus",
          imageUrl: "https://www.sreemeenakshifruits.com/content/images/thumbs/0000181_green-apple_550.jpeg",
          use: "https://www.thespruceeats.com/granny-smith-apple-pie-recipe-304281"

        }
        // Server ends the response of the object to the main.js file
        res.end(JSON.stringify(objToJson));
      }
      else if(params['fruit'] == 'passionFruit'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Passion Fruit",
          description: "The passion fruit is considered to be a type of berry. It has a tough outer rind and juicy, seed-filled center. There are several types which can vary in color and size, but the most commonly available are purple and yellow varieties. Crops can be found in South and North America, Asia, Europe and Australia.",
          nutritionalFacts: {
            calories: 17,
            fiber: 2+"g.",
            vitaminC: 9+"%",
            vitaminA: 8+"%",
            iron: 2+"%",
            potassium: 2+"%"
          },
          benefits: "The passion fruit has some great health benefits. It is high in antioxidants, it is a rich source of vitamin C and vitamin A. The passion fruit is also a good source of fiber, soluble fiber, the helps the digestion of food, which can prevent blood sugar spikes.Passion fruit is a rich source of antioxidants and dietary fiber. Diets rich in these nutrients have been linked with a lower risk of diseases like heart disease and diabetes.",
          familyName : "Passiflora Edulis",
          imageUrl: "https://saporitoovs.com/wp-content/uploads/2017/08/passionfruit.jpg",
          use: "https://www.foodandwine.com/slideshows/passion-fruit-recipes"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['fruit'] == 'avocado'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Avocado",
          description: "Pear like shape, with a bumpy thick skin, color may very from medium - dark green. Inside contains a centered large seed , and light green  smooth buttery texture.",
          nutrionalFacts: {
            calories: 227,
            vitaminA: 4 + "%",
            vitaminC: 20 + "%",
            totalFat: 21 + "g.",
            saturatedFat: 2.9 +"g., " + 14 + "%",
            polyunsaturatedFat: 2.5+"g.",
            monounsaturatedFat: 13+"g.",
            dietaryFiber: 9+ "g., " + 36 + "%"
          },
          benefits: "Helps in treating arthritis, helps with diabetes management, promotes skin health, promotes weight loss, a rich source of fiber, can help improve cholesterol profile, bolster absorption of plant based nutrients, support eye health, contain essential folic acid, and help promote liver function.",
          familyName: "Laurel family ",
          imageUrl: "https://afm-6b83.kxcdn.com/wp-content/uploads/2016/11/avocado-hub.jpg",
          use: "https://www.foodnetwork.com/recipes/food-network-kitchen/ultra-creamy-avocado-smoothie-3363132"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['fruit'] == 'persimmon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Persimmon",
          description: "Otherwise known as the “apple of the Orient”, persimmon is a bright orange fruit with a silky skin and a gooey sweet pulp",
          nutritionalFacts: {
            calories: 70,
            vitaminA: 55 + "%",
            vitaminC: 21 + "%",
            vitaminb6: 8 + "%"
          },
          benefits: "Persimmon face mask is very effective in brightening the skin tone. Persimmon is a natural anti-ageing skin treatmentacts as a natural sunscreen to protect from harsh UV raysPersimmon contains important nutrients like Vitamin A, B and C, which are excellent stimulants for healthy hair.",
          familyName: "Ebony",
          imageUrl: "http://befreshcorp.net/wp-content/uploads/2017/06/product-packshot-Persimmon-558x600.jpg",
          use: "https://downshiftology.com/recipes/spiced-persimmon-smoothie/"
        }
        res.end(JSON.stringify(objToJson));
      }
    else if(params['fruit'] == 'starFruit'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      var objToJson = {
        name: "Star Fruit",
        description: "It’s a star-shaped tropical fruit with sweet and sour flavor. It has a light green to yellow, waxy smooth skin. Inside is a crispy, juicy pulp that could be either sweet or sour, depending on the cultivation.",
        nutritionalFacts: {
          calories: 31,
          vitaminA: 1 + "%",
          vitaminC: 57 + "%",
          vitaminE:1 + "%"
        },
        benefits: "Rich in antioxidants. ",
        familyName: "Carambola Family",
        imageUrl: "http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/08/carambola.jpg",
        use: "http://www.myrecipes.com/recipe/star-fruit-quencher"
      }
      res.end(JSON.stringify(objToJson));
    }
    else if(params['fruit'] == 'acaiBerry'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      var objToJson = {
        name: "Acai Berry",
        description: "It is a small, round, black-purple drupe about 25mm (1in) in circumference, similar in appearance to a grape, but smaller and with less pulp and produced in branched panicles of 500 to 900 fruits. The exocarp of the ripe fruits is a deep purple color, or green, depending on the kind of açaí and its maturity.",
        nutritionalFacts: {
          calories: 20,
          protein: 0 + "g.",
          totalFat: 1.5 + "g.",
          Carbohydrates: 1,
          fiber: 1 + "g.",
          calcium: 6 + "mg."
        },
        benefits: "help improve heart health; aid in weight loss, skin care, and digestion; reduce allergies; boost the immune system and energy level; aphrodisiac (brain booster); great weapon for premature aging, cancer, and unexplained fatigue or exhaustion. ",
        familyName: "Arecaceae Family",
        imageUrl: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fititropicals.com%2Fwp-content%2Fuploads%2FAcai_Fruit.png&f=1",
        use: "https://davyandtracy.com/recipes/acai-berry-smoothie-recipes-and-nutrition/"
      }
      res.end(JSON.stringify(objToJson));
    }
   } // if condition of pokemon
 } // Else if api condition
   else if(page == '/css/style.css'){
     fs.readFile('css/style.css', function(err, data){
       res.write(data);
       res.end();
     });
   }// End of else if condition for css
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }//End of the else if condition for javascript
  else{
    figlet('404!', function(err, data){
      if(err){
        console.log('Something went wrong......')
        return;
      }
      res.write(data);
      res.end()
    });
  }
}); // Create server function
// When the server is live, listens for the port localhost port 8000
server.listen(8000);
