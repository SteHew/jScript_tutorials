var batwing = {
  status: "Ready",
  rescueBatman: function() {
    document.write("Locating his transponder ... initiating launch ...");
  },
  greetingBatman: function() {
    document.write("Great to meet you, Batman");
  },
  drinkWithBatman: function() {
    document.write("Let's have a cold beer.")
  }
}

/*
if (batwing.status === "Ready") {
  batwing.rescueBatman();
}
else if (batwing.status === "Friends") {
  batwing.greetingBatman();
}
*/

var utilities = {
  printAllMembers: function(targetObject) {
    for (i in targetObject) {
      document.write("<br />" + targetObject[i]);
    }
  }
}

// utilities.printAllMembers(batwing);

/*
var planet = {
  id: 34,
  name: "Uranus",
  type: "Gas planet",
  orbit: "17-71",
  country: {
    countryId: 6,
    name: "Human Nation",
    notification: function() {
      document.write("Human Olympics on Jupiter");
    }
  },
  moons: [
    { orbit: 1, name: "Tavan" },
    { orbit: 2, name: "Tabor" },
    { orbit: 3, name: "Tagal" }
  ],
  cities: [
    { locationId: 15, name: " will be held in Gladius" },
    { locationId: 16, name: " will be held in Chalybs" },
    { locationId: 17, name: " will be held in Ensis" }
  ]
};
*/

// planet.country.notification();
// document.write(planet.cities[1].name);


// utilities.printAllMembers(planet);
// utilities.printAllMembers(planet.country);
// document.write("<br />The moon " + planet.moons[0].name + " circulates in orbit number " + planet.moons[0].orbit);
// document.write(planet.cities[2].name);


/*
document.write("<br/>" + planet.name);
planet.name = "Venus";
document.write("<br/>" + planet.name);
*/

/*
var z = planet;
document.write(z.name);
*/

/*
if (typeof planet.defense === "undefined") {
  planet.defense = "Ion Canon";
}

document.write(planet.defense);
*/

/*
for (member in planet)
{
  document.write("<br/>" + member + " >> " + planet[member]);
}
*/

/*
// Creating constructors
function car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var firstCar = new car("Eagle", "Talon TSi", 1993);
var secondCar = new car("Dodge", "Dart", 1971);
var thirdCar = new car("Mazda", "323", 1998);

document.write(firstCar.make + " " + firstCar.model + " " + firstCar.year);
document.write("<br/>" + secondCar.make + " " + secondCar.model + " " + secondCar.year);
document.write("<br/>" + thirdCar.make + " " + thirdCar.model + " " + thirdCar.year);
*/

