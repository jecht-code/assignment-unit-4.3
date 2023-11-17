console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem (item) {
    if (isFull() === false) {
        basket.push(item);
        return true;
    }
    return false;
}
console.log(addItem('Apples'));
console.log(addItem('Liver'));
console.log(addItem('Jowel'));
console.log(basket);

function listItems () {
    for (let itemFood of basket) {
        console.log(itemFood);
    }
}
listItems();

function empty () {
    basket = [];
    //console.log(basket);
}
empty();
console.log(basket);

console.log(addItem('Apples'));
console.log(addItem('Liver'));
console.log(addItem('Jowel'));

function isFull () {
    if (basket.length < maxItems) {
        return false;
    }
    return true;
}
console.log(isFull());

console.log(addItem('Tiger Togue'));
console.log(addItem('Monkey Foot'));
console.log(addItem('Angel Tear'));

console.log(basket);



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
