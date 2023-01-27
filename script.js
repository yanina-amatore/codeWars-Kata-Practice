// function isIsogram(str) {
//   //...
//  let newSet = new Set(str)
//   return newSet.size === str.length

// }
// console.log(isIsogram('more'))
// console.log(isIsogram('moore'))

// --  Find Parity Outliner

//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

let arr = [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

let arr2 = [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
let newarr = [22, 4, 3, 6]

function findOutlier(arr) {
  let isEvenarr = arr.filter((n) => n % 2 == 0)
  let isOddarr = arr.filter((n) => n % 2 !== 0)

  return isEvenarr.length == 1 ? isEvenarr[0] : isOddarr[0]
}

// console.log(findOutlier(arr))
// console.log(findOutlier(arr2))
// console.log(findOutlier(newarr))

// ---- Sum of the first nth term of Series

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

function seriesSum(n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3)
  }
  return n === 0 ? '0.00' : parseFloat(sum).toFixed(2).toString()
}
// console.log(seriesSum(1)); // 1.00
// seriesSum(1)
// console.log(typeof seriesSum(1), seriesSum(1)) // 1.25
// console.log(seriesSum(5)) // 1.57

// --- KATA: Friend or Foe?

//Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

const f = ['Ryan', 'Kieran', 'Mark']

function areFriend(arr) {
  return arr.filter((n) => n.length === 4)
}

// console.log('friends', areFriend(f))

// diff way of solving a problem
const friend = (friends) => friends.filter((friend) => friend.length == 4)
// console.log('friends', friend(f))

// --- Consecutive strings

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

let strarr = [
  'zone',
  'abigail',
  'theta',
  'form',
  'libe',
  'zas',
  'theta',
  'abigail',
]

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    let emptyStr = ''
    return emptyStr
  } else {
    let longest = ''
    for (let i = 0; i <= strarr.length - k; i++) {
      let current = strarr.slice(i, i + k).join('')
      if (current.length > longest.length) {
        longest = current
      }
      return longest
    }
  }
}
console.log(longestConsec(strarr, 5))
