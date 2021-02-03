export class Point {
	constructor(private x: number, private y: number) {}
	getX() {
		return this.x;
	}
	setX(x) {
		this.x = x;
	}
	getPointLocation() {
		console.log(`X- ${this.x} Y- ${this.y}`);
	}
}
