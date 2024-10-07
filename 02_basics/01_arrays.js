// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[0])

// Array methods

// myArr.push(10)
// myArr.pop()

// myArr.unshift(11)
// myArr.shift()

console.log(myArr.includes(1))// true/false
console.log(myArr.indexOf(1))

const newArry=myArr.join()
const newArry1=myArr.join("-")
const newArry2=myArr.join(" ")
console.log(typeof newArry,"this is join")
console.log(newArry1,"this is join")
console.log(newArry2,"this is join")
console.log(myArr)


// slice, splice

console.log(myArr.slice(1,4))
console.log(myArr.slice(-4,-2))


console.log(myArr.splice(2,4),"this is splice")
console.log(myArr)

