let value;
//string
value = 10;
value = String(10 + 30);
value = (40).toString();

//Boolean to string
value = String(true);
value = (false).toString();
//array
value = String([1, 2, 3, 4]);

//Object
value = String({name: 'Denis'});

value = 30 + '';
value = 30 - '';
value = 30 - 'as';
value = 30 - '5';
value = 30 / '5';
value = 30 + true;
value = 30 + false;
value = 30 - false;
value = null - 30;
value = 30 + undefined;

//String to number
value = Number('23');
value = Number(true);
value = Number(false);
value = Number(null);
value = Number('332dca');
value = Number([1, 2, 3]);

value = parseInt('200px');
value = parseInt('200.2312px');
value = parseFloat('200.2312px');


//Boolean
value = Boolean(true);
value = Boolean('true');
value = Boolean('');
value = Boolean(' ');
value = Boolean(undefined);
value = Boolean(null);
value = Boolean(NaN);
value = Boolean(1);
value = Boolean(1454);
value = Boolean(-1454);


value = +'10+5';
value = 2 / null;


// console.log(value);
//
// console.log(typeof value);
//
//
// console.log('' + 1 + 0); //"10"
// console.log('' - 1 + 0);//-1
// console.log(true + false); //1
// console.log(6 / '3'); //2
// console.log('2' * '3');//6
// console.log(2 + 'px');//2px
// console.log('4' - 2);//2
// console.log('4px' - 2);//Nun
// console.log(7 / 0);//Infiniti


// console.log('2' * '3'); //6
// console.log(1 + 2 + '3'); //"33"
// console.log('10' / '2');//5
// console.log('6' - '2');//4
// console.log(false == 0);//true
// console.log(true == 1);//true
// console.log('5' == 5);//true
// console.log(null + 1); //1
// console.log(undefined + 1); //Nan



// console.log([] + 1); //2
// console.log(([1,2] + [3,4])); //2
// console.log({} + []); //2
// console.log({} + {}); //2
// console.log(1 + "2" + "2"); //122
// console.log(1 + +"2" + "2");//32
// console.log(+"2" + "2" + 1);//221


//
// console.log("2" > "10") //false
// console.log([] == ![])//true
// console.log(3 + 4 - "5");//2
// console.log("10" / 2 === 5);//true
// console.log(1 + 1 - 1 === 1 + +"1" - 1);//true


console.log("5" * 3);//15
console.log(4 + 5 + "px");//9px
console.log("$" + 4 + 5);//$45
console.log("4" - 2);//2
console.log("4px" - 2);//nun