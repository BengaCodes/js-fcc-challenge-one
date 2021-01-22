// CHALLENGE 1: Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.
// If n === 0 return 1

function factorialize(num) {
  const arr = []
  let result
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      arr.push(i)
    }
  } else {
    result = 1
  }
  result = arr.reduce((acc, curNum) => {
    return acc * curNum
  }, 1)
  return result
}

const outputOne = factorialize(10)
console.log(outputOne)

// CHALLENGE 2
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
// ex. "abc" === "abcabcabc"

function repeatStringNumTimes(str, num) {
  const newArr = []
  let result = ''
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      newArr.push(str.split(' '))
    }
  }
  result = newArr.join('')
  return result
}

const outputTwo = repeatStringNumTimes('abc', 3)
console.log(outputTwo)

// CHALLENGE 3
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  return celsius * (9 / 5) + 32
}

const outputThree = convertToF(30)
console.log(outputThree)

// CHALLENGE 4
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  const result = arr.find(val => func(val))
  return result
}

const outputFour = findElement([1, 2, 3, 4], num => num % 2 === 0)
console.log(outputFour)

// CHALLENGE 5
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  const result = arr.map(val => Math.max(...val))
  return result
}

const outputFive = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

console.log(outputFive)

// CHALLENGE 6
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  const newStr = str.split(' ')
  const result = newStr.sort((a, b) => b.length - a.length)
  return result[0].length
}

const outputSix = findLongestWordLength('The quick brown fox jumped over the lazy dog')
console.log(outputSix)