// const nums = [1, 2, 3, 4, 5];

// const newNums = [];

// for(let i = 0; i < nums.length; i++) {
//     newNums.push( nums[i] * 2 );
// }

// console.log( newNums ); // logs [2, 4, 6, 8, 10]

// Functions should always return the same value given the same input(s).
// No side effects: when invoked, functions should not modify values that are created outside their immediate scope.

const nums = [1, 2, 3, 4, 5];

function double(num) {
    num = num * 2
    return num;
}

const newNums = nums.map( double );
console.log( newNums ); // logs [2, 4, 6, 8, 10]
console.log(nums)