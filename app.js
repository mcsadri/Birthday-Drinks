'use strict'

let firstName = prompt('What\'s your first name?')
let faveFlavor = prompt('How do you like your whisk(e)y (malty, corny, peaty, bland)?');
let userColor = prompt('Pick a color (red, green, pink, blue):')
var today = new Date();
    // console.log('today is ' + today);
var partyDay = new Date('07/06/2024');
    // console.log('We party on ' + partyDay);
let timeMillisecs;
let timeDays;
let message = '';

document.body.style.backgroundColor = userColor;
if(userColor === 'black'){
    // document.body.style.text
    document.getElementById("myH2").style.color = "white";
}

//Determine how many days remain until the party day
timeMillisecs = (today.getTime() - partyDay.getTime()) * -1;
    // console.log('this many ms ' + timeMillisecs * -1);
timeDays = Math.floor(timeMillisecs / ( 1000 * 60 * 60 * 24));
    // console.log('this many days ' + timeDays);

//Provide on-screen greeting depending on user's favoriteFlavor of whisk(e)y
if(faveFlavor === 'corny'){
    //console.log('Bourbon is great');
    message = 'Bourbon is great!';
} else if(faveFlavor === 'malty' || faveFlavor === 'peaty'){
    //console.log('Slàinte Mhathn');
    message = 'Slàinte Mhath!';
} else if(faveFlavor === 'bland'){
    //console.log('Vodka is boring');
    message = 'So basically vokda?';
} else{
    //console.log('Invalid input');
    message = 'Stick with water.';
}
document.write('Hello ' + firstName + '. ' + message + ' There are ' + timeDays + ' days until we open these.');

// confirm(timeDays + ' days is a long time!\nCan you wait that long?');

// console.log('done with program');