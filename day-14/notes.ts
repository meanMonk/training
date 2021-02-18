/**
 *
 * DI - Dependency injection
 *  -  it's design pattern use to reduce code complexity and readability
 *  -  it's use to make the code to be more simpler for testing.
 * Angular Uses Dependency Injection
 *  - Service : Is alway injectable @Injectable
 *  services : is nothing but the class or module or group feature.
 *   - mostly all the common functions > (Methods)
 *   - variables , utility services, can write business the services.
 *   - usefull incase of data sharing between components.
 */

class Earphone {}
class Battery {}
class Network {}

class MobileOld {
	public earphone: Earphone;
	public battery: Battery;
	public network: Network;
	constructor() {
		this.earphone = new Earphone();
		this.battery = new Battery();
		this.network = new Network();
	}
}

////
class Mobile {
	constructor(
		public earphone: Earphone,
		public battery: Battery,
		public network: Network,
	) {}
}

// test file
const earphone = new Earphone();
const battery = new Battery();
const network = new Network();

const mobile = new Mobile(earphone, battery, network);

// assert(mobile.earphone).isAvailable()



/**
 * Making api call in angular 
 *  - HTTP calls 
 * 	 - GET | POST | PUT | DELETE
 * 
 * 
 * HttpClientModule 
 * 
*/


