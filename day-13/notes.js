/*
Day-13 : 
    Dependency injection;
        - design pattern
    Service 

*/

/* class EarPhone {
	constructor() {}

	increase() {}
	decrease() {}
} */
/* 

.... many more classes can be here
*/
/* class Battery {
	constructor() {}

	getbatteryLevel() {}
} */

/* class Mobile {
	constructor(public earPhone: EarPhone, public battery: Battery) {
		// this.earPhone = new EarPhone();
	}
} */

/* const earPhone = new EarPhone();
const battery = new Battery();

const xiomiMobile = new Mobile(earPhone, battery);
 */
/**
 * Dependency Injection Angular
 *  - services / pipe
 *  @Injectable();
 *
 *
 *  */

/**
 * Service :
 *  - collection of common methods / functions / variable or utility function
 *  - services can business logic
 * 
*/
