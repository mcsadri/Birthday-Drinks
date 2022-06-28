'use strict'

function getGreeting(){
    let greetingMsgPt1 = getUserInput();
    let greetingDays = getDays();
    return document.write(greetingMsgPt1 + ' There are ' + greetingDays + ' days until we open these.');
}

// get input from user and validate
function getUserInput(){
    let count =+ 1;
    let greetingName = getFirstName();
        console.log(count, greetingName);
    let greetingFlavor = getFlavor();
        console.log(count, greetingFlavor);
    let greetingColor = getColor();
    console.log(count, greetingColor);
    let userConfirm = confirm("You entered:\n" + "\tFirst name: " + greetingName + "\n" + "\tFlavor: " + greetingFlavor + "\n" + "\tColor: " + greetingColor + "\n" + "Are these are correct.");
    if (userConfirm === true){
        //exit
    } else{
        getUserInput();
    }
    let greetingFlavorMsg = getFlavorMsg(greetingFlavor);
    let message1 = 'Hello ' + greetingName + '. ' + greetingFlavorMsg;
    return message1;
}

// prompts and returns user's first name
function getFirstName(){
    let firstName = prompt('What\'s your first name?');
    return firstName;
}

// prompts and returns user's whiskey flavor
function getFlavor(){
    let faveFlavor = prompt('How do you like your whiskey (malty, corny, peaty, bland)?');
    return faveFlavor;
}

// returns flavor text
function getFlavorMsg(faveFlavor){
    let message = '';
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
    return message;
}

// prompts and sets main background color
function getColor(){
    let userColor = prompt('Pick a color (e.g. coral, pink, darkorange, gold, etc.):')
    document.body.style.backgroundColor = userColor;
    //set background color according to userColor and modidy text color if neccesary
    if(userColor === 'black'){
        document.getElementById("myH2").style.color = "white";
    }
    return userColor;
}

// calculate the number days from today until partyDay
function getDays(){
    var today = new Date();
        // console.log('today is ' + today);
    var partyDay = new Date('07/06/2024');
        // console.log('We party on ' + partyDay);
    let timeDays;
        //Determine how many days remain until the party day
    timeDays = Math.floor(((today.getTime() - partyDay.getTime()) * -1) / ( 1000 * 60 * 60 * 24));
    return timeDays;
}

// console.log('done with program');