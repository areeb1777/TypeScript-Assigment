// Question No 1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("My setup is sucessfully Run in my Computer");
// Question No 2
var PersonName1 = "Areeb Malik";
var message = "what can i help you";
console.log("Hello ".concat(PersonName1, " ").concat("How are you?" + message));
// Question No 3
var PersonName = "Areeb Malik";
var result1 = PersonName.toLowerCase();
var result2 = PersonName.toUpperCase();
var result3 = PersonName;
console.log(result1, result2, result3);
// Question N0 4 
var FamousQuote = function (quote, author) {
    console.log("".concat(author, " once said, \"").concat(quote, "\""));
};
FamousQuote("In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln");
// Question No 5 
function composeMessage(quote, famousPerson) {
    return " The quote by ".concat(famousPerson, " is \"").concat(quote, "\"");
}
var famous_person = "Abraham Lincoln";
var message1 = composeMessage("In the end, it's not the years in your life that count. It's the life in your years.", famous_person);
console.log(message1);
// Question No 6
var personName = "\t\n   Jane Smith   \t\n";
console.log(personName);
var strippedName = personName.trim();
console.log(strippedName);
// Question No 7 
// Addition operation
console.log("Addition:");
console.log("5 + 3 =", 5 + 3);
// Subtraction operation
console.log("Subtraction:");
console.log("10 - 2 =", 10 - 2);
// Multiplication operation
console.log("Multiplication:");
console.log("4 * 2 =", 4 * 2);
// Division operation
console.log("Division:");
console.log("64 / 8 =", 64 / 8);
// Question No 8 
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(64 / 8);
// Question No 9 
var favoriteNumber = 3;
var message2 = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message2);
// Question No 10
//author: [Areeb Malik]
//date: [Monday, February, 19, 2024]
//task9 Printing my favourite number.
var favoriteNumber1 = 3;
//reveling my favourite number in message format.
console.log("My Favourite Number Is ".concat(favoriteNumber1));
// Question NO  11
//Store the names of your friends in an array called names
var names = ["Ahmed Malik", "Abdul Rehman", "Mubashir Qureshi", "Shazim Malik", "Daniyal Mansoori"];
console.log("Names of my friends:");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Question No 12
var names1 = ["Ahmed Malik", "Abdul Rehman", "Mubashir Qureshi", "Shazim Malik", "Daniyal Mansoori"];
console.log("Greetings to my friends:");
for (var i = 0; i < names1.length; i++) {
    console.log("Hello, ".concat(names1[i], "! Have a great day!"));
}
// Question No 13
var transportationModes = ["Tesla Model 3", "Honda CBR1000RR", "Toyota Camry", "BMW R1250GS Adventure"];
console.log("Examples of my favorite modes of transportation:");
for (var i = 0; i < transportationModes.length; i++) {
    console.log("I would like to own a ".concat(transportationModes[i], "."));
}
// Question No 14 
var guestList = ["Raju", "Adil", "Hussain", "Afzal"];
console.log("Dinner Invitation:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
// Question No 15
var guestList1 = ["Arshad Adil", "Hussain", "Afzal"];
console.log("Dinner Invitation:");
for (var i = 0; i < guestList1.length; i++) {
    console.log("Dear ".concat(guestList1[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
var unableToAttend = guestList1[1];
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to the dinner."));
guestList1[1] = "Akbar Ali";
console.log("Updated Dinner Invitation:");
for (var i = 0; i < guestList1.length; i++) {
    console.log("Dear ".concat(guestList1[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
// Question No 16
var guestList2 = ["Arshad Adil", "Hussain", "Afzal"];
console.log("Dinner Invitation:");
for (var i = 0; i < guestList2.length; i++) {
    console.log("Dear ".concat(guestList2[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
var unableToAttend2 = guestList2[1];
console.log("Unfortunately, ".concat(unableToAttend2, " can't make it to the dinner."));
console.log("Updated Dinner Invitation:");
for (var i = 0; i < guestList2.length; i++) {
    console.log("Dear ".concat(guestList2[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
console.log("Good news! We found a bigger dinner table.");
guestList2.unshift("Abrar Hossan");
var middleIndex = Math.floor(guestList2.length / 2);
guestList2.splice(middleIndex, 0, "Amjad");
guestList2.push("Akhtar Hussain");
console.log("Additional Dinner Invitation:");
for (var i = 0; i < guestList2.length; i++) {
    console.log("Dear ".concat(guestList2[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
// Question No 17
var guestList3 = ["Zia", "kabeer", "Atif", "Ishaq", "Ali", "Manam"];
console.log("Dinner Invitation:");
for (var i = 0; i < guestList3.length; i++) {
    console.log("Dear ".concat(guestList3[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
var unableToAttend3 = guestList3[1];
console.log("Unfortunately, ".concat(unableToAttend3, " can't make it to the dinner."));
guestList3[1] = "Shayan";
console.log("Updated Dinner Invitation:");
for (var i = 0; i < guestList3.length; i++) {
    console.log("Dear ".concat(guestList3[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
console.log("Attention: Due to limited space, we can invite only two people for dinner.");
while (guestList3.length > 2) {
    var removedGuest = guestList3.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
console.log("\nDear ".concat(guestList3[0], " and ").concat(guestList3[1], ", you are still invited to dinner."));
guestList3.pop();
guestList3.pop();
console.log("Final guest list:", guestList3);
// Question No 18
// Array to store places to visit
var placesToVisit = ["Japan", "Italy", "Australia", "Canada", "Brazil"];
console.log(placesToVisit);
console.log("Alphabetical order (without modifying original list):");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("Original order (unchanged):");
console.log(placesToVisit);
console.log("Reverse alphabetical order (without modifying original list):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original order (unchanged):");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:");
console.log(placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:");
console.log(placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit);
// Question No 19 
var guestList4 = ["Leonardo da Vinci", "Albert Einstein", "Nelson Mandela", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"];
console.log("You are inviting ".concat(guestList4.length, " people to dinner."));
console.log("Dinner Invitation:");
for (var i = 0; i < guestList4.length; i++) {
    console.log("Dear ".concat(guestList4[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
// Question No 20 
var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
console.log("List of mountains:");
console.log(mountains);
var car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver"
};
var car2 = {
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "Blue"
};
var car3 = {
    brand: "Honda",
    model: "Civic",
    year: 2021,
    color: "Red"
};
console.log("Car 1:", car1);
console.log("Car 2:", car2);
console.log("Car 3:", car3);
// Question No 22 
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);
// Question N0 23 
//Test 1
var x = 5;
console.log("Is x == 5? I predict True.");
console.log(x == 5);
// Test 2
var y = 10;
console.log("Is y != 5? I predict True.");
console.log(y != 5);
//Test 3
var a = 3;
console.log("Is a > 2? I predict True.");
console.log(a > 2);
// Test 4
var b = 8;
console.log("Is b < 10? I predict True.");
console.log(b < 10);
// Test 5
var c = 7;
console.log("Is c >= 7? I predict True.");
console.log(c >= 7);
// Test 6
var d = 4;
console.log("Is d <= 3? I predict False.");
console.log(d <= 3);
// Test 7
var names2 = "John";
console.log("Is name == 'John'? I predict True.");
console.log(names2 == 'John');
// Test 8
var age = 25;
console.log("Is age != 30? I predict True.");
console.log(age != 30);
// Test 9
var isRaining = false;
console.log("Is it raining? I predict False.");
console.log(isRaining);
// Test 10
var isValid = true;
console.log("Is isValid == true? I predict True.");
console.log(isValid == true);
// Question No 24 
var color = "blue";
console.log("Is color == 'blue'? I predict True.");
console.log(color == 'blue');
var fruit = "apple";
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
var city = "New York";
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
var num1 = 10;
var num2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);
var isWarm = true;
var isSunny = true;
console.log("Is it warm and sunny? I predict True.");
console.log(isWarm && isSunny);
var hasRain = true;
var hasUmbrella = false;
console.log("Is it raining or do you have an umbrella? I predict True.");
console.log(hasRain || hasUmbrella);
var fruits = ["apple", "banana", "orange"];
var fruitToFind = "banana";
console.log("Is ".concat(fruitToFind, " in the fruits array? I predict True."));
console.log(fruits.includes(fruitToFind));
var vegetables = ["carrot", "tomato", "broccoli"];
var vegetableToFind = "cabbage";
console.log("Is ".concat(vegetableToFind, " not in the vegetables array? I predict True."));
console.log(!vegetables.includes(vegetableToFind));
// Question No 25
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
var alien_colors = 'yellow';
if (alien_colors === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// Question No 26
var alien_color1 = 'green';
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
var alien_color5 = 'red';
if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
// Question No 27
var alien_color2 = 'green';
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color2 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alien_color4 = 'yellow';
if (alien_color4 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color4 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color4 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// Question No 28
var age1 = 25;
if (age1 < 2) {
    console.log("The person is a baby.");
}
else if (age1 >= 2 && age1 < 4) {
    console.log("The person is a toddler.");
}
else if (age1 >= 4 && age1 < 13) {
    console.log("The person is a kid.");
}
else if (age1 >= 13 && age1 < 20) {
    console.log("The person is a teenager.");
}
else if (age1 >= 20 && age1 < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question No 29
var favorite_fruits = ["apple", "banana", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
// Question N0 30
var usernames1 = ["admin", "ali", "zia", "akram", "haris", "adil"];
for (var _i = 0, usernames1_1 = usernames1; _i < usernames1_1.length; _i++) {
    var username = usernames1_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// Question N0 31
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, usernames_1 = usernames; _a < usernames_1.length; _a++) {
        var username = usernames_1[_a];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Question N0 32
var current_users = ['Atif', 'Ali', 'Babar', 'Akram', 'Ashraf'];
var new_users = ['Shayan', 'Servar', 'Yousuf', 'Kamran', 'Adil'];
function checkUsername(username) {
    var lowercaseUsername = username.toLowerCase();
    return !current_users.includes(lowercaseUsername);
}
new_users.forEach(function (username) {
    if (checkUsername(username)) {
        console.log("Username '".concat(username, "' is available."));
    }
    else {
        console.log("Username '".concat(username, "' is not available. Please enter a new username."));
    }
});
// Quesion No 33 
var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers1.forEach(function (num) {
    var ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num).concat(ordinalEnding));
});
// Question No 34
var pizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
console.log("Printing pizza names:");
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
console.log("Printing pizza preferences:");
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
console.log("\nI really love pizza!");
// Question No 35
var animals = ['Dog', 'Cat', 'Rabbit'];
console.log("Printing animal names:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("Printing statements about each animal:");
for (var i = 0; i < animals.length; i++) {
    var animalStatement = void 0;
    switch (animals[i]) {
        case 'Dog':
            animalStatement = "A dog would make a great pet.";
            break;
        case 'Cat':
            animalStatement = "A cat is an independent and affectionate pet.";
            break;
        case 'Rabbit':
            animalStatement = "A rabbit is a gentle and social pet.";
            break;
        default:
            animalStatement = "This animal would make a great pet.";
            break;
    }
    console.log(animalStatement);
}
console.log("Any of these animals would make a great pet!");
// Question No 36
function make_shirt(size, message) {
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
make_shirt('Medium', 'Hello, World!');
// Question No 37
function make_shirt1(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
make_shirt1();
make_shirt1('Medium');
make_shirt1('Small', 'Hello, World!');
// Question No 38
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('New York', 'USA');
// Question No 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var city1 = city_country('Lahore', 'Pakistan');
var city2 = city_country('Paris', 'France');
var city3 = city_country('Tokyo', 'Japan');
console.log(city1);
console.log(city2);
console.log(city3);
// Question No 40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2', 12);
var album3 = make_album('Artist3', 'Album3', 8);
console.log(album1);
console.log(album2);
console.log(album3);
// Question No 41
// @ts-ignore
var magicians = ['Addil', 'Harry', 'Shayan', 'Amir'];
// @ts-ignore
function show_magicians(magicians) {
    console.log("Magicians:");
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
// Question No 42
var magicians1 = ['Addil', 'Harry', 'Shayan', 'Amir'];
function show_magicians1(magicians1) {
    console.log("Magicians:");
    magicians1.forEach(function (magician) {
        console.log(magician);
    });
}
// @ts-ignore
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
// Question No 43
// Function to add "the Great" to each magician's name
// @ts-ignore
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}
// Function to display the names of magicians
// @ts-ignore
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Original array of magicians
// @ts-ignore
var magicians = ["Alice", "Bob", "Charlie", "David", "Emily"];
// Make a copy of the array and add "the Great" to each magician's name
// @ts-ignore
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Display original magicians
console.log("Original Magicians:");
show_magicians(magicians);
// Display magicians with "the Great"
console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicians);
// Question No 44
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(function (item) {
        console.log(item);
    });
    console.log("Bread");
    console.log("Sandwich complete!");
}
makeSandwich('Cheese', 'Tomato', 'Lettuce');
makeSandwich('Ham', 'Mustard');
makeSandwich('Turkey');
// Question No 45
function createCar(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var carInfo = __assign({ manufacturer: manufacturer, model: model }, Object.assign.apply(Object, __spreadArray([{}], details, false)));
    return carInfo;
}
var car = createCar('Toyota', 'Camry', { color: 'Red', year: 2024 });
console.log(car);
