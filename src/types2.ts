// console.log('Hello from ts');

let myString: string
let mySlicedString: string
let myNum: number
let myBool: boolean
let myVar: any

// Note that these expected type syntaxes are the same
//let strArr: string[];
let strArr: Array<string>

//let numArr: number[];
let numArr: Array<number>

//let boolArr: boolean[];
let boolArr: Array<boolean>

let strNumTuple: [string, number, number, number, number]

// let myVoid: void = null;
let myVoid: void = undefined
let myNull: null = null
let myUndefined: undefined = undefined

myString = 'Hello' + ' ' + 'World'
mySlicedString = 'Hello'.slice(0, 3)
myNum = 0xf00d
myBool = false
myVar = 'Hello'

strArr = ['Hello', 'World']
numArr = [1, 2, 3]
boolArr = [true, false, true]

strNumTuple = ['Hello', 4, 2, 1, 5]

console.log('myString: ' + myString)
console.log('mySlicedString: ' + mySlicedString)
console.log('myNum: ' + myNum)
console.log('myBool: ' + myBool)
console.log('myVar: ' + myVar)

console.log(strArr)
console.log(numArr)
console.log(boolArr)

console.log(strNumTuple)

console.log(myVoid)
