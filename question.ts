/**
 *  Javascript Expression : 
 *      - what ever the js code you write is js express.
 * 
 *  Angular Expression : 
 *      - what ever js you write inside the {{}} [interpolation]
 * 
 * Describe app.module.ts. angularfile
 *
 
@NgModule({
  declarations: [AComponent, BComponent, DesignPipe],
  imports: [BrowserModule],
  providers: [ServiceA, ServiceB],
  exports: [ServiceA, ServiceB, DesignPipe], // whatever the module , component, service, pipe etc which you want to export 
  bootstrap: [],  /// the root component of an application goes here.
})
 export class RouterModule{}


* 
 * 
 * 
 * 
 */