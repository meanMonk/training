/**
 * @Communication between to components
 *
 *  [(ngModel)]="userName"
 *
 *
 * Decorators :
 *  when ever you created new component  you want to pass data to that component from parent
 *   Parent ===> Child
 *    @Input:    <app-data-sharing  [userList]="userList" ></app-data-sharing>
 *  when ever we want to listen to the any changes or events in component
 * Child    ===>  Parent
 *  - if there is any action in child component want to update to the parent in that case we can use
 *    @Output:   <app-data-sharing  (onUserSelect)="onUserSelect" ></app-data-sharing>
 *
*/