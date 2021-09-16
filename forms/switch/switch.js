let firstName = prompt("Enter your first name.")
let state = prompt("Enter the state you live in (i.e. NE, CA, AZ).")
let temp = prompt("Enter the temperature in Fahrenheit today.")
let message = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

switch (temp) {
  case 'history':
    console.log('I love history too!\n');
    break;
  case 'math':
    console.log('Do you like math\n?');
    break;
 case 'economics':
    console.log("Economics Book - that's all I have to say");
    break;
  default:
    console.log('Unknown Book');
}
 