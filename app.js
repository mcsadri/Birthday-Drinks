'use strict'

function getGreeting(){
    let greetingName = getFirstName();
    let greetingFlavor = getFlavor();
    let greetingFlavorMsg = getFlavorMsg(greetingFlavor);
    getColor();
    let greetingDays = getDays();
    return document.write('Hi, ' + greetingName + '. ' + greetingFlavorMsg + ' There are ' + greetingDays + ' days until we open these.');
}

// prompts and returns user's first name
function getFirstName(){
    let firstName = prompt('What\'s your first name?');
    return firstName;
}

// prompts and returns user's whiskey flavor
function getFlavor(){
    //let faveFlavor = '';
    let faveFlavor;
    //console.log(faveFlavor);
    while(faveFlavor != 'malty' && faveFlavor != 'corny' && faveFlavor != 'peaty' && faveFlavor != 'bland'){
        faveFlavor = prompt('How do you like your whiskey (malty, corny, peaty, bland)?');
        //console.log(faveFlavor);
    }
    //console.log(faveFlavor);
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

// prompts and sets how many extra bottles are needed
function getExtraBottles(){
    let userBottles = prompt('How many extra bottles of booze will we need? (1 -5)');
    let countBottles;
    let printBottles = '';
    for(let x = 0; x < userBottles; x++){
        countBottles = x + 1;
        printBottles = printBottles + '<img class="clipartBottle" alt="whiskey bottle clipart" src="./images/whiskeyclipart.jpg">' + countBottles;
    }
        return document.write(printBottles);
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