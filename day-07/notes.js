/*Day-07*/
/**
 * PIPE's In angular.
 *  Pipe is nothing but the class which help to format or modify the content in interpoplation
 *  {{'2021-02-09Z10:20 PM' | date : 'mediumDate' }}    9th Feb 2021, 9th Feb, Feb 9th
 *
 *  - CurrencyPipe
 *  - DatePipe
 *  - JsonPipe
 *  - LowercasePipe
 *  - TitleCasePipe
 *  - DecimalPipe
 *  - I18SelectPipe
 *  - KeyValue
 *  - PercentPipe
 *  - SlicePipe
 *
 *
 *  question: attached prefix and postfix as __ to the each word of given string?
 *      - input : I am learning angular!
 *      - output : __I__ __am__ __learning__ __angular!__
 *
 *
 * Styling of our application
 *  # Css Framework to achieve responsive sites
 *     - Bootstrap 5
 *         To install bootstrap `npm install bootstrap@next -S`
 *     - TailwindCss
 *     - Material
 *
 *
 *
 * */

/**
 * Task :
 *  - Create custom pipe which will convert change all the char A (lowercase | uppercase) style color blue bold
 *  input : Hello Alphabet
 *
 * {{input| changeChar : 'A' : true : '#123'}}
 *  
 *  <p><span style="color:#123; " class="fw-bold">A</span>pple</p>
 *
*/
