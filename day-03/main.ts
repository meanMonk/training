// TYPESCRIPT;
// - type script is also superset of javascript
// which provides types of javascript object
// widely used now due to it's feature which help us to resolve the issues run time.

// -  Types in typescript
// let UserName: string;
// let Mark: number;
// let user: any;
// let userList: Array<string> | [string] = ['one', 'two','three'];

// interface User {
// 	name: string;
// 	id: number;
// 	userName?: string;
// }
// // variable defined in camelCase
// let userDetail: User = {
// 	name: 'Sample',
// 	id: 123,
// };

/* 
interface Point {
	x: number;
	y: number;
}

let pointA: Point = {
	x: 10,
	y: 20,
};
let pointB: Point = {
	x: 3,
	y: 200,
};

let getPointLocation = (point: Point) => {
	console.log(`X- ${point.x} Y - ${point.y}`);
};

getPointLocation(pointA);
getPointLocation(pointB);
 */

// Cohesion : all the properties and methods should be in same class
/* 
class Point {
	x: number;
	y: number;
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	getPointLocation() {
		console.log(`X- ${this.x} Y- ${this.y}`);
	}
}

let pointA: Point = new Point(10, 20);
let pointB: Point = new Point(2, 30);

console.log(pointA);
pointA.getPointLocation();
console.log(pointB);
pointB.getPointLocation();
 */
// ACCESS MODIFIER
// private public protected
// import { Point } from './point';

// let pointA: Point = new Point(10, 20);
// console.log(pointA);

//
// export enum Direction {
// 	Up,
// 	Down,
// 	Left,
// 	Right,
// 	South,
// }

// let user = {
// 	currentDirection: Direction.Down,
// };

// if (Direction.South === user.currentDirection) {
// 	console.log('Going ahead properly');
// } else {
// 	console.log('Danger ! you are on wrong track!');
// }
// console.log(Direction.Left);

// UNIONS
// let phoneNumber: string | number | Array<number>;

// phoneNumber = '56789013';
// phoneNumber = 56789013;
// phoneNumber = [56789013];

// // Unions

// import { Point } from './point';

// class Points extends Point {
// 	constructor(x: number, y: number) {
// 		super(x, y);
// 	}

// 	getPointDistance(anotherPoint: Point) {
// 		let diffX = anotherPoint.getX() - this.getX();
// 		let diffX = anotherPoint.getX() - this.getX();
// 		console.log();
// 	}
// }

// let points = new Points(10, 20);

// points.getPointDistance;

// interface Circle {
// 	radius: number;
// }

// class AdvanceCircle implements Circle {
// 	radius: number;
// 	constructor(radius: number) {
// 		this.radius = radius;
// 	}
// 	getCircleDiameter() {
// 		return this.radius * 2;
// 	}
// }

// let circleA = new AdvanceCircle(10);
// console.log(circleA.getCircleDiameter());

/** TODO:
 * LinkedList
 *   addNode
 *   getAllNodes
 *   getNthNode
 *   getLastNode
 *   getFirstNode
 */

// [value|next] > [value1|next1] > [value1|next2]

class CreateLinkedList {}

let linkedList = new CreateLinkedList();
