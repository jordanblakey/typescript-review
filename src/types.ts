////////////////////////////////////////////////////////////////////////////////
// BASIC TYPES
////////////////////////////////////////////////////////////////////////////////
var myName: string = "Jordan"
var myAge: number = 41
var canVote: boolean = true
var anything: any = "dog"
var inferred = 2

document.getElementById('ts').innerHTML = 'Hi, my name is ' + myName + '.'

document.write('<br><h3>Basic Types</h3>')
document.write('myName is a ' + typeof(myName) + '.<br>')
document.write('myAge is a ' + typeof(myAge) + '.<br>')
document.write('canVote is a ' + typeof(canVote) + '.<br>')
document.write('anything is a ' + typeof(anything) + '.<br>')
document.write('inferred is a ' + typeof(inferred) + '.<br>')

var strToNum: number = parseInt('5')
var numToStr: number = 5
document.write('numToStr is a ' + typeof(numToStr.toString()) + '.<br>')

const PI = 3.14159


////////////////////////////////////////////////////////////////////////////////
// INTERFACES
////////////////////////////////////////////////////////////////////////////////
document.write('<br><h3>Interfaces & Arrays</h3>')
interface SuperHero {
  realName: String
  superName: String
}

var superman: SuperHero = {
  realName: 'Clark Kent',
  superName: 'Superman'
}

document.write(superman.realName + ' is ' + superman.superName + '.<br>')

var employees: string[] = ['Bob', 'Sally', 'Sam'];
// employees.push(5);

document.write(employees.toString() + '<br>');

var superheroes: SuperHero[] = [];
superheroes.push({
  realName: 'Bruce Wayne',
  superName: 'Batman'
})

document.write(superheroes[0].realName + ' is ' + superheroes[0].superName + '.<br>')

////////////////////////////////////////////////////////////////////////////////
// MATH
////////////////////////////////////////////////////////////////////////////////

document.write('<br><h3>Operators</h3>')
document.write('5 + 4 = ' + (5+4) + '.<br>')
document.write('5 - 4 = ' + (5-4) + '.<br>')
document.write('5 * 4 = ' + (5*4) + '.<br>')
document.write('5 / 4 = ' + (5/4) + '.<br>')
document.write('5 % 4 = ' + (5%4) + '.<br>')
document.write('5 + String 2 = ' + (5+'2') + '.<br>')


document.write('<br><h3>Increment/Decrement</h3>')
var randNum: number = 1;
document.write('randNum = ' + randNum + '.<br>')
document.write('++randNum = ' + ++randNum + '.<br>')
document.write('randNum++ = ' + randNum++ + '.<br>')
document.write('randNum = ' + randNum + '.<br>')
document.write('--randNum = ' + --randNum + '.<br>')
document.write('randNum-- = ' + randNum-- + '.<br>')
document.write('randNum = ' + randNum + '.<br>')



////////////////////////////////////////////////////////////////////////////////
// Let, Var, Const
////////////////////////////////////////////////////////////////////////////////
document.write('<br><h3>Let vs. Var vs. Const</h3>')

document.write('TL;DR, `let` scopes a variable to a code block. var scopes it to the containing function. const scopes like var, but cannot be unassigned.<br><br> ')

let sampLet = 123
if (true) {
  let sampLet = 456
}
document.write('sampLet: ' + sampLet + '.<br>')

var sampVar = 123
if (true) {
  var sampVar = 456
}
document.write('sampVar: ' + sampVar + '.<br>')

const sampConst = 123
if (true) {
  const sampConst = 456
}
document.write('sampConst: ' + sampConst + '.<br>')

////////////////////////////////////////////////////////////////////////////////
// For Loops
////////////////////////////////////////////////////////////////////////////////

document.write('<br><h3>Loops</h3>')
var randArray = [5,6,7,8];

// Writes the index
for (var val in randArray){
  document.write(val + '<br>')
}

var strArray = randArray.map(Number);
// Writes the value
for (var val2 of strArray) {
  document.write(val2 + '<br>')
}


////////////////////////////////////////////////////////////////////////////////
// Typing Args and Returns
////////////////////////////////////////////////////////////////////////////////

document.write('<br><h3>Typing Args and Returns</h3>')
var getSum = function(num1: number, num2: number){
  return num1 + num2;
}

// assign the return of a function to an expected type
var theSum1: number = getSum(5,2);

document.write('5 + 2 = ' + theSum1 + '.<br>')

var getDiff = function(num3: number, num4: number = 2, num5?: number): number {
  if (typeof num4 !== 'undefined'){
    return num3 - num4 - num5;
  }
  return num3 - num4;
}

document.write('5 - 2 = ' + getDiff(5) + '.<br>')
document.write('5 - 2 - 7 = ' + getDiff(5,2,7) + '.<br>')



// Indefinite num of args
var sumAll = function(...nums: number[]):
void{
  // Arrow function within reduce
  var sum = nums.reduce((a, b) => a + b, 0);
    document.write('Sum: ' + sum + '.<br>')
  }

  sumAll(1,3,4,5,6,7)

  var addOne = (x) => x + 1;

  document.write('1 + 1 = ' + addOne(1) + '.<br>')

////////////////////////////////////////////////////////////////////////////////
// Classes
////////////////////////////////////////////////////////////////////////////////

class Animal {
  // Available outside of the class. Each instance has it's own favFood
  public favFood: string;

  // static shared between all instances of a class
  static numOfAnimals: number = 0;

  constructor(private name: string, private owner: string) {
    Animal.numOfAnimals++;
  }

  ownerInfo(){
    document.write(this.name + ' is owned by ' + this.owner + '.<br>');
  }

  static howManyAnimals(): number {
    return Animal.numOfAnimals;
  }

  private _weight: number;
  get weight(): number {
    return this._weight;
  }

  set weight(weight: number){
    this._weight = weight
  }
}

var spot = new Animal('Spot', 'Doug');
spot.ownerInfo();
spot.weight = 100;
document.write('Spot\'s weight is ' + spot.weight + ' pounds.<br>')
document.write('# of Animal instances: ' + Animal.howManyAnimals() + '<br>')

////////////////////////////////////////////////////////////////////////////////
// Polymorphism
////////////////////////////////////////////////////////////////////////////////

class Dog extends Animal {
  constructor(name: string, owner: string) {
    super(name, owner)
    Dog.numOfAnimals++;
  }
}

var grover = new Dog('Grover', 'Jimmy');
document.write('# of Animals: ' + Animal.howManyAnimals() + '.<br>');

document.write('Is a Dog an Animal? ' + (grover instanceof Animal) + '<br>');



////////////////////////////////////////////////////////////////////////////////
// Interfaces Part 2
////////////////////////////////////////////////////////////////////////////////

interface Vehicle {
  drive(): any;
}

class Car implements Vehicle {
  constructor(private wheels: number) {}

  drive(): void {
    document.write('The car drives with ' + this.wheels + ' wheels.<br>')
  }
}

class Bicycle implements Vehicle {
  constructor(private wheels: number) {}

  drive(): void {
    document.write('The bicycle drives with ' + this.wheels + ' wheels.<br>')
  }
}

var car = new Car(4);
var bike = new Bicycle(2);

car.drive();
bike.drive();

function GetWheels<w extends Vehicle>(veh:w): number {
  return veh.drive();
}

GetWheels(car)
GetWheels(bike)


////////////////////////////////////////////////////////////////////////////////
// Interfaces Part 2
////////////////////////////////////////////////////////////////////////////////

function GetType<T>(val: T): string {
  return typeof(val);
}

var aStr = "A string";
var aNum = 10;

document.write(GetType(aStr) + '.<br>')
document.write(GetType(aNum) + '.<br>')



class GenericNumber<T>{
  add: (val1: T, val2: T) => T;
}

var aNumber = new GenericNumber<number>();
aNumber.add = function(x, y){return x + y;}
document.write('5 + 4 = ' + aNumber.add(5,4) + '<br>');

var aStrNum = new GenericNumber<string>();
aStrNum.add = function(x, y){return String(Number(x) + Number(y));}
document.write('5 + 4 = ' + aStrNum.add('5','4') + '<br>');