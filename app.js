// ------------------------------------------------ Chapter 1 ---------------------------------------------

// Task1
// alert('Welcome to my Web')

// Task2
// alert('Error! Please enter a valid password.')

// Task3
// alert('Welcome to JS Land.. \nHappy coding!')

//Task4
// alert('Welcome to JS Land..')
// alert('Happy coding!')

//Task 5,6 and 7 are self practice



// -------------------------------------------------- Chapter 2 ------------------------------------------------

// Task1
// var username;

//Task2
// var myName = 'Muhammad Zain Ammad';

// Task3
// var message = 'Hello World';
// alert(message)

//Task4
// var name = 'Jhone Doe'
// var age = '15 years old'
// var course = 'Certified Mobile Application Development'
// alert(name)
// alert(age)
// alert(course)

// Task 5
// var a = 'PIZZA'
// var b = 'PIZZ'
// var c = 'PIZ'
// var d = 'PI'
// var e = 'P'
// alert(a + '\n' + b + '\n' +c + '\n' + d + '\n' + e)

//Task 6
// var email = 'zainammad05@gmail.com'
// alert('My email address is '+ email)

//Task 7
// var book = 'A smarter way to learn JavaScript'
// alert('I am trying to learn from the Book '+book)

//Task 8
// document.write('Yah I can write HTML content through JavaScript')

//Task 9
// var a= '▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬'
// alert(a)

// ------------------------------Chapter 3 ---------------

//Task 1
// var age = 20;
// alert('I am '+age+' years old')

//Task 2

//Task 3
// var birthYear = 2000;
// document.write('My birth year is '+birthYear +'<br/>' + 'Data type of my declared variable is '+typeof(birthYear))

//Task 4
// var name = prompt('Enter your name:');
// var product = prompt('Enter product title:');
// var quantity = +prompt('Enter quantity:');
// document.write(name + ' ordered ' + quantity + product + '(s) on XYZ Clothing store')

// ------------------------- Chapter 4 ---------------

//Task 1
// var x,y,z ;

//Task 2
// var a, $a, _a, a1, aB;
// var 2a, !a, alert, ?a, @a;

//Task 3
// document.write('Rules for naming JS variables <br> <br>Variable names can only contain , numbers, $ and _ . For example : $my_1stVariable <br>Variable must begin with a letter, $ or _ . For example : $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS keywords')

// -------------------------- Chapter 5 ----------------

//Task 1
// var a = +prompt('Enter 1st number: ')
// var b = +prompt('Enter 2nd number: ')
// var result = a+b;
// document.write('Sum of '+a+' and '+b+' is '+result)

//Task 2
// var a = +prompt('Enter 1st number: ')
// var b = +prompt('Enter 2nd number: ')
// var resultAdd = a+b;
// var resultSub = a-b;
// var resultProduct = a*b;
// var resultDivide = a/b;
// var resultModulus = a%b;
// document.write('Sum of '+a+' and '+b+' is '+resultAdd+'<br>')
// document.write('Subtraction of '+a+' and '+b+' is '+resultSub+'<br>')
// document.write('Multiplication of '+a+' and '+b+' is '+resultProduct+'<br>')
// document.write('Division of '+a+' and '+b+' is '+resultDivide+'<br>')
// document.write('Modulus of '+a+' and '+b+' is '+resultModulus)

//Task 3
// var x;
// document.write('Value after variable declaration is: Undefined <br>');
// var y=5;
// document.write('Initial value: '+y +'<br>');
// y=++y;
// document.write('Value after increment is: '+y+'<br>');
// y=y+7;
// document.write('Value after addition is: '+y+'<br>');
// y=--y;
// document.write('Value after decrement is: '+y+'<br>');
// y=y%3;
// document.write('Ther remainder is: '+y)

//Task 4
// var price=600;
// document.write('Total cost to buy 5 tickets to a movie is '+600*5+'PKR')

//Task 5

// ------------------------ Chapter 6-9 -------------------

//Task 1
// var num=+prompt('Enter a number: ');
// document.write('Result: <br>The value of a is: '+num +'<br><br>**********************************<br><br>')

// num=++num
// document.write('The value of ++a is:' +num +'<br>')
// document.write('Now the value of a is: '+num+'<br><br>')

// num1=num++
// document.write('The value of a++ is:' +num1 +'<br>')
// document.write('Now the value of a is: '+num+'<br><br>')

// num2=--num
// document.write('The value of --a is:' +num2 +'<br>')
// document.write('Now the value of a is: '+num+'<br><br>')

// num3=num--
// document.write('The value of a-- is:' +num3 +'<br>')
// document.write('Now the value of a is: '+num+'<br><br>')

//Task 2
// var a=2;
// var b=1;
// document.write('a is: '+a+'<br>')
// document.write('b is: '+b+'<br>')
// var result = --a - --b + ++b + b--;
// --a = 1
// --a - --b= 1
// --a - --b + ++b = 2 
// --a - --b + ++b + b-- = 3
// document.write('result is: '+result)

//Task 3
// var name = prompt('Enter your name:')
// document.write('Welcome to my website, '+name)

// ----------------------Chapter 9-11 --------------------

//Task 1
// var city = prompt('Enter your City: ', 'Karachi')
// if(city=='Karachi'){
//     document.write('Welcome to city of lights')
// }

//Task 2
// var gender = prompt('Enter your gender: ')
// if (gender=='male') {
//     document.write('Good Morning Sir')
// }
// else if (gender=='female') {
//     document.write("Good Morning Ma'am")
// }

//Task 3
// var signalColor = prompt('Enter color of signal')
// if (signalColor=='red') {
//     document.write('Red: '+'Must Stop')
// }
// else if (signalColor=='yellow') {
//     document.write('Yellow: '+'Ready to move')
// }
// else if (signalColor=='green') {
//     document.write('Green: '+'Move now')
// }

//Task 4
// var fuel = +prompt('Enter remaining fuel in litres: ')
// if (fuel<0.25) {
//     document.write('Please refill the fuel in your car')
// }

// ---------------------------Chapter 12-13 -------------

//Task 1
// var char = prompt('Enter a character:')
// if (char>=0 || char<=9) {
//     document.write('The input character is number')
// }
// else if ((char>='a' && char<='z')) {
//     document.write('The input character is lower case')
// }
// else if (char>=A && char<=Z) {
//     document.write('The input character is uuper case')
// }

//Task 2
// var num1=+prompt('Enter integer 1')
// var num2=+prompt('Enter integer 2')
// if (num1>num2) {
//     document.write('1st input integer is greater')
// }
// else if (num1<num2) {
//     document.write('2nd input integer is greater')
// }
// else{
//     document.write('Both input integers are equal')
// }

//Task 3
// var num=+prompt('Enter any number:')
// if (num>0) {
//     document.write('The input number is positive')
// }
// else if (num<0) {
//     document.write('The input number is negative')
// }
// else{
//     document.write('The input number is zero')
// }

//Task 4
// var char=prompt("Enter an alphabet:")
// if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u') {
//     document.write('True')
// }
// else{
//     document.write('False')
// }

// ------------------------- Chapter 14-16 --------------

//Task 1
// var arr =[]

//Task 3
// var arr=['a','b','c']

//Task 4
// var arr=[1,2,3]

//Task 5
// var arr=[true,false]

//Task 6
// var arr=['a',1,true]

//Task 7
// var arr =['SSC','HSC','BCS'];
// document.write('1) '+arr[0] +'<br>');
// document.write('2) '+arr[1] +'<br>');
// document.write('3) '+arr[2] +'<br>');

//Task 8
// var names =['Ali','Ahmed','Omer']
// var scores =[320,230,480]
// document.write('Score of '+names[0]+' is '+scores[0]+'. Percentage: '+(scores[0]/500)*100+'% <br>' )
// document.write('Score of '+names[1]+' is '+scores[1]+'. Percentage: '+(scores[1]/500)*100+'% <br>' )
// document.write('Score of '+names[2]+' is '+scores[2]+'. Percentage: '+(scores[2]/500)*100+'% <br>' )

//Task 10
// var arr = [320,230,480,120]
// document.write('Scores of Students : '+arr[0]+','+arr[1]+','+arr[2]+','+arr[3]+'<br>')
// arr.sort();
// document.write('Ordered Scores of Students : '+arr[0]+','+arr[1]+','+arr[2]+','+arr[3])



// -------------------------- Chapter 17-20 --------------

//Task 1
// var arr = [[],[]];

//Task 2
// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

//Task 3
// for(var b=1; b<11;b++){
//     document.write(b+'<br>')
// }

//Task 5
// var fruits = ['apple','banana','mango','orange','strawberry']
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+'<br>')
// }
// for(var i=0;i<fruits.length;i++){
//     document.write('<br>Element at index '+i+' is '+fruits[i])
// }

//Task 8
// var A=[24,53,78,91,12]
// document.write('Array items: '+A[0]+','+A[1]+','+A[2]+','+A[3]+','+A[4])
// var largestNum=A[0]
// for(var i=0;i<A.length;i++){
//     if (A[i]>largestNum) {
//         largestNum=A[i]
//     }
// }
// document.write('<br>The largest number is '+largestNum)

//Task 9
// var A=[24,53,78,91,12]
// document.write('Array items: '+A[0]+','+A[1]+','+A[2]+','+A[3]+','+A[4])
// var smallestNum=A[0]
// for(var i=0;i<A.length;i++){
//     if (A[i]<smallestNum) {
//         smallestNum=A[i]
//     }
// }
// document.write('<br>The smallest number is '+smallestNum)

//Task 10
// for(var i=0;i<=100;i+5){
//     document.write(i+',')
// }


