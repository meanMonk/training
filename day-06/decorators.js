var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Decorators
 *   -
 *
 */
function Console(target) {
    console.log('This is decorator FOR:  ', target);
}
var PersonClass = /** @class */ (function () {
    function PersonClass() {
        console.log('Hello Person!');
    }
    PersonClass = __decorate([
        Console /// Decorators
    ], PersonClass);
    return PersonClass;
}());
var AnimalClass = /** @class */ (function () {
    function AnimalClass() {
        console.log('Hello Animal!');
    }
    AnimalClass = __decorate([
        Console
    ], AnimalClass);
    return AnimalClass;
}());
var person = new PersonClass();
console.log('== creating animal class');
var animal = new AnimalClass();
/*
function ConsoleWithValue(config) {
    return function (target) {
        console.log('value of decorators', config);
        console.log('Decorator with config for ', target);
    };
}

@ConsoleWithValue({
    selector: 'app-decorate',
})
class Car {
    constructor() {
        console.log('Hello from Car!');
    }
}

const car = new Car();
 */
