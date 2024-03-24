
console.log('Coding Step 1.a - c')
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 9

// an array is created with some values
let arr1 = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(arr1);

// subtract the first item from the last item using the length method of the array
let result = arr1[arr1.length - 1] - arr1[0];
console.log(result);

// 56 is added to the end of the array using the push method
arr1.push(56);
console.log(arr1);

// subtract the first item from the last item using the length method of the array
result = arr1[arr1.length - 1] - arr1[0];
console.log(result);


// for loop to go trough the array and add the number in each item of the array to totalAge.   Then divide the totalAge into the length of the array to determine the average
let totalAge = 0;
for (let i = 0; i < arr1.length; i++) 
    { totalAge += arr1[i] };
console.log('Average age is: ' + totalAge / arr1.length);




console.log('Coding Step 2.a - c');
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob' 

const arrNames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// for loop created to go through each item in the array and count the number of characters in each item to be added to the variable lettersPerName.  Then that is divided into the length of the array.
let lettersPerName = 0;
for (i = 0; i < arrNames.length; i++){
    lettersPerName += arrNames[i].length;
}
console.log('Average Letters per Name ' + lettersPerName / arrNames.length);

// for loop created to concatenate each item in the array into a new string
let stringOfNames = '';
for (i = 0; i < arrNames.length; i++){
    stringOfNames = stringOfNames += arrNames[i] + ' ';
}
console.log('Array converted to String: ' + stringOfNames);



// Coding Step 3
// How do you access the last element of any array?  By using the length object of the table minus 1



// Coding step 4
// How do you access the first element of any array? By refering to position [0] of the array





console.log('Coding Step 5');
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// This could have been used to concatenate the Array into a string
// stringOfNames = arrNames.join(' ');
const nameLengths =  [];
for (i = 0; i < arrNames.length; i++){
       nameLengths[i] = (arrNames[i].length);
}
console.log('Lengths of each name in array ' + nameLengths);




console.log('Coding Step 6');
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// for loop is created to go trough each item in the array, add each the item into a variable sumTotal
let sumTotal = 0;
for (i = 0; i < nameLengths.length; i++) {
     sumTotal += nameLengths[i];
}
console.log('Sum of all elements in array is: ' + sumTotal);




console.log('Coding Step 7');
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
// the function uses a for loop to concatenate the string into a newString the number of times as passed in the second argument
let newString = '';
function concatStrings(str1, numberOfTimes){
    for (i = 0; i < numberOfTimes; i++){
        newString += str1;
    } return(newString);
}
console.log(concatStrings('Hello', 5));






console.log('Coding Step 8');
// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
// the function returns the first and last name separated by a space
function fullName(first, last){
    return(first + ' ' + last);
};

console.log(fullName('Mauricio', 'Herrera'));




console.log('Coding Step 9');
//  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// a for loop is created to go through each item in the array and add each item to the sumTotal.   An if statement is used to check if the amount is greater than 100 and return a true boolean

sumTotal = 0;
function sumOfArray(arr1){
    for (i = 0; i < arr1.length; i++){
        sumTotal += arr1[i];
    }
  
    if (sumTotal > 100) {
        return(true);
    } 
}




console.log('Coding Step 10');
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
// Arr2 was created with random numbers.   a function avgOfArray was created. A For loop is created to go through each item in the array and added to SumofArray.   Then the sumOfArray is divided into the length of the array using the length method

const arr2 = [2, 30, 4, 6, 80, 90, 3];
console.log(sumOfArray(arr2));


sumTotal = 0;
function avgOfArray(arr1) {
    for (i = 0; i < arr1.length; i++){
        sumTotal += arr1[i];
    }
    return(sumTotal / arr1.length);
}

// avgOfArray function is called passing arr2 as parameter
console.log(avgOfArray(arr2));





console.log('Coding Step 11');
//  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// function avg1GreaterAvg2 was written receiving 2 arrays as parameters
// a for loop is written for each arrray saving the the average of each array into a variable.   Then, the 2 variables are compared and return a true boolean if the average of array1 is greater than array2
function avg1GreaterAvg2(arr1, arr2){
let avg1 = 0;
let avg2 = 0;
    sumTotal = 0;
    for (i = 0; i < arr1.length; i++){
        sumTotal += arr1[i];
    }
    avg1 = sumTotal / arr1.length;

    sumTotal = 0;
    for (i = 0; i < arr2.length; i++){
        sumTotal += arr2[i];
    }
    avg2 = sumTotal / arr2.length;
     if (avg1 > avg2) {
        return(true)
    } 
}

console.log(avg1GreaterAvg2(arr1, arr2));





console.log('Coding Step 12');
/// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// a function was written receiving 2 variables.   Then an if statement is used to determined if both isHotOutside and moneyInPocket are true to return a true boolean

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50){
        return(true);
    }
}

console.log(willBuyDrink(true, 15.00));






console.log('Coding Step 13');
//  Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// This function is to assist a cashier to know how much change to give back after a purchase or to notify the buyer that the amount to cover the purchase is short

//  Function that receives 2 parameters -- Total Purchase and Amount Paid
//  an If statement is used to determine if the amount paid is over the amount of the total purchase
function howMuchChange(total, amtPaid) {
    if (amtPaid > total) {
        return('your change is $' + (amtPaid - total));
    } else return('you still owe $' + (total - amtPaid));
}

// variables are created to store total price and amount paid.  Then the function is called and return is printed
totalPrice = 29.75;
amtPaid = 20.00;
console.log(howMuchChange(totalPrice, amtPaid));