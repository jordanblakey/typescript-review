var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myName = "Jordan";
var myAge = 41;
var canVote = true;
var anything = "dog";
var inferred = 2;
document.getElementById('ts').innerHTML = 'Hi, my name is ' + myName + '.';
document.write('<br><h3>Basic Types</h3>');
document.write('myName is a ' + typeof (myName) + '.<br>');
document.write('myAge is a ' + typeof (myAge) + '.<br>');
document.write('canVote is a ' + typeof (canVote) + '.<br>');
document.write('anything is a ' + typeof (anything) + '.<br>');
document.write('inferred is a ' + typeof (inferred) + '.<br>');
var strToNum = parseInt('5');
var numToStr = 5;
document.write('numToStr is a ' + typeof (numToStr.toString()) + '.<br>');
var PI = 3.14159;
document.write('<br><h3>Interfaces & Arrays</h3>');
var superman = {
    realName: 'Clark Kent',
    superName: 'Superman'
};
document.write(superman.realName + ' is ' + superman.superName + '.<br>');
var employees = ['Bob', 'Sally', 'Sam'];
document.write(employees.toString() + '<br>');
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
document.write(superheroes[0].realName + ' is ' + superheroes[0].superName + '.<br>');
document.write('<br><h3>Operators</h3>');
document.write('5 + 4 = ' + (5 + 4) + '.<br>');
document.write('5 - 4 = ' + (5 - 4) + '.<br>');
document.write('5 * 4 = ' + (5 * 4) + '.<br>');
document.write('5 / 4 = ' + (5 / 4) + '.<br>');
document.write('5 % 4 = ' + (5 % 4) + '.<br>');
document.write('5 + String 2 = ' + (5 + '2') + '.<br>');
document.write('<br><h3>Increment/Decrement</h3>');
var randNum = 1;
document.write('randNum = ' + randNum + '.<br>');
document.write('++randNum = ' + ++randNum + '.<br>');
document.write('randNum++ = ' + randNum++ + '.<br>');
document.write('randNum = ' + randNum + '.<br>');
document.write('--randNum = ' + --randNum + '.<br>');
document.write('randNum-- = ' + randNum-- + '.<br>');
document.write('randNum = ' + randNum + '.<br>');
document.write('<br><h3>Let vs. Var vs. Const</h3>');
document.write('TL;DR, `let` scopes a variable to a code block. var scopes it to the containing function. const scopes like var, but cannot be unassigned.<br><br> ');
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write('sampLet: ' + sampLet + '.<br>');
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write('sampVar: ' + sampVar + '.<br>');
var sampConst = 123;
if (true) {
    var sampConst_1 = 456;
}
document.write('sampConst: ' + sampConst + '.<br>');
document.write('<br><h3>Loops</h3>');
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(val + '<br>');
}
var strArray = randArray.map(Number);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val2 = strArray_1[_i];
    document.write(val2 + '<br>');
}
document.write('<br><h3>Typing Args and Returns</h3>');
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write('5 + 2 = ' + theSum1 + '.<br>');
var getDiff = function (num3, num4, num5) {
    if (num4 === void 0) { num4 = 2; }
    if (typeof num4 !== 'undefined') {
        return num3 - num4 - num5;
    }
    return num3 - num4;
};
document.write('5 - 2 = ' + getDiff(5) + '.<br>');
document.write('5 - 2 - 7 = ' + getDiff(5, 2, 7) + '.<br>');
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write('Sum: ' + sum + '.<br>');
};
sumAll(1, 3, 4, 5, 6, 7);
var addOne = function (x) { return x + 1; };
document.write('1 + 1 = ' + addOne(1) + '.<br>');
var Animal = (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + ' is owned by ' + this.owner + '.<br>');
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var spot = new Animal('Spot', 'Doug');
spot.ownerInfo();
spot.weight = 100;
document.write('Spot\'s weight is ' + spot.weight + ' pounds.<br>');
document.write('# of Animal instances: ' + Animal.howManyAnimals() + '<br>');
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog('Grover', 'Jimmy');
document.write('# of Animals: ' + Animal.howManyAnimals() + '.<br>');
document.write('Is a Dog an Animal? ' + (grover instanceof Animal) + '<br>');
var Car = (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        document.write('The car drives with ' + this.wheels + ' wheels.<br>');
    };
    return Car;
}());
var Bicycle = (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        document.write('The bicycle drives with ' + this.wheels + ' wheels.<br>');
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
function GetType(val) {
    return typeof (val);
}
var aStr = "A string";
var aNum = 10;
document.write(GetType(aStr) + '.<br>');
document.write(GetType(aNum) + '.<br>');
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
document.write('5 + 4 = ' + aNumber.add(5, 4) + '<br>');
var aStrNum = new GenericNumber();
aStrNum.add = function (x, y) { return String(Number(x) + Number(y)); };
document.write('5 + 4 = ' + aStrNum.add('5', '4') + '<br>');
//# sourceMappingURL=types.js.map