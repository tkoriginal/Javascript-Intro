//challenge

let isGuestOneVegan = true
let isGuestTwoVegan = true

//If both vegan ==> offer vegan dishes
//At least one vegan ==> then be sure to offer some vegan option
//Else, offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Here are our vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('Here are our vegan options along with our non-vegan options')
} else {
    console.log('Here is the entire menu')
}