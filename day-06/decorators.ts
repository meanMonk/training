/**
 * Decorators
 *   - no argument
 *   - with arguments CLOSURE
 *
 */
function Console(target) {
	console.log('This is decorator FOR:  ', target);
}

@Console /// Decorators
class PersonClass {
	constructor() {
		console.log('Hello Person!');
	}
}

@Console
class AnimalClass {
	constructor() {
		console.log('Hello Animal!');
	}
}

const person = new PersonClass();
console.log('== creating animal class');
const animal = new AnimalClass();
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
/* Decorators In Angular */
/**
 *  1. Class decorator eg. @Component @NgModule
 *          @decorator
 *          class person
 *  2. Property Decorator eg. @Input @Output
 *  3. Method decorator eg. @HostListener
 *  4. Parameter decorator eg. @Inject 
 */
