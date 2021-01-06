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
var char = prompt('Enter a character:')
if (char>=0 || char<=9) {
    document.write('The input character is number')
}
else if ((char>='a' && char<='z')) {
    document.write('The input character is lower case')
}
else if (char>=A && char<=Z) {
    document.write('The input character is uuper case')
}