function isIsogram(str) {
  //...
 let newSet = new Set(str)
  return newSet.size === str.length
 
}
console.log(isIsogram('more'))
console.log(isIsogram('moore'))