function getSum1(num1: number, num2: number): number {
  // return 'Hello';
  return num1 + num2
}

// console.log(getSum1(1, 4));

let mySum = function(num1: number, num2: any) {
  if (typeof num1 == 'string') {
    num1 = parseInt(num1)
  }
  if (typeof num2 == 'string') {
    num2 = parseInt(num2)
  }

  return num1 + num2
}

// console.log(mySum(3,5));

function getName(firstName: string, lastName: string): string {
  if (lastName == undefined) {
    return firstName
  }

  return firstName + ' ' + lastName
}

console.log(getName('John', 'Doe'))

// function myVoid(): void {
//   return
// }

// console.log(myVoid())
