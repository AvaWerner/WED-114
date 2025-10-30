//Ava Werner 10/28/25

let favMonth = window.prompt("What is your favorite month?");;
favMonth = favMonth.toLowerCase();

if (isNaN(favMonth) == true) {
   switch(favMonth) {
    case "january" :
        console.log("Snowy landscapes and hot cocoa.");
        break;
    case "february" :
        console.log("Valentine's Day and heart-shaped everything.");
        break;
    case "march" :
        console.log("Spring begins, and flowers start to bloom.");
        break;
    case "april" :
        console.log("Rain showers that bring May flowers.");
        break;
    case "may" :
        console.log("Blossoms everywhere and perfect weather.");
        break;
    case "june" :
        console.log("Summer solstice and endless daylight.");
        break;
    case "july" :
        console.log("Fireworks and Fourth of July festivities.");
        break;
    case "august" :
        console.log("Back-to-school excitement and fresh supplies.");
        break;
    case "september" :
        console.log("Crisp air and cozy sweaters.");
        break;
    case "october" :
        console.log("Pumpkin everything and spooky fun.");
        break;
    case "november" :
        console.log("Comfort food and warm hugs.");
        break;
    case "december" :
        console.log("The joy of giving and wrapping up the year.");
        break;
   }
   if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
        console.log("You love the winter months!");
   }
   else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
        console.log("You enjoy the summer months!");
   }
   else {
    console.log("Other months are interesting too!");
   }
}
else {
    console.log("Please enter a valid month, not numbers!");
}
