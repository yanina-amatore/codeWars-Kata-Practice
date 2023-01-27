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
  let isEvenarr = arr.filter (n => n % 2 == 0)
  let isOddarr = arr.filter (n => n % 2 !== 0)
  
  return isEvenarr.length == 1 ? isEvenarr[0] : isOddarr[0]
}

console.log(findOutlier(arr))
console.log(findOutlier(arr2))
console.log(findOutlier(newarr))