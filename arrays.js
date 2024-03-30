// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function reversedStrings(arr, indices) {
    arr = arr.map(str => str.split('').reverse().join(''));
    indices.forEach(a => { if (a < arr.length) { arr[a] = arr[a].split('').reverse().join(''); } });
    return arr.sort();
}
const strings = ["apple", "banana", "orange", "grape", "Tomato", "Pineaple"]; const indicesToReverse = [0, 4];
const reversed = reversedStrings(strings, indicesToReverse);
console.log(reversed);


// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

function checkPositiveNegative(arr) {
    if (arr.some(num => num > 0)) { return "positive"; }
    else if (arr.some(num => num < 0)) {
        return "negative";
    } else { return "Zero"; }
}
const arrNumbers = [0, 0, 0, 0];
console.log(checkPositiveNegative(arrNumbers));


// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortedBySalary(employee) {
    return employee.sort((x, y) => x.salary - y.salary);
}
const employee = [{ id: 1, name: "Luke", salary: 1000000 },
{ id: 2, name: "Diana", salary: 700000 },
{ id: 3, name: "Brian", salary: 130000 }];
const sortedArr = sortedBySalary(employee);
console.log(sortedArr);


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.


const arrNums = [10,11,22,30,31];
let numsMultipliedTwo =[];
arrNums.forEach(function(num){
    numsMultipliedTwo.push(num*2);
})
console.log({numsMultipliedTwo});


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

function multiplyAddArray(nums){
    for(let i = 0; i < 4 && i < nums.length; i++){
        nums[i] *=8;

    }
    for(let i = nums.length -2; i < nums.length; i++){
        if (i >= 0){
            nums[i] += 5;
        }  
    }
    console.log(nums);
}
let nums = [11, 20, 22, 25, 30, 31, 34];
multiplyAddArray(nums);