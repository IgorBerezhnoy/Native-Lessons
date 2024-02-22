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

//
// console.log('5' * 3);//15
// console.log(4 + 5 + 'px');//9px
// console.log('$' + 4 + 5);//$45
// console.log('4' - 2);//2
// console.log('4px' - 2);//nun


let result;
// result = '3' + 2;
// console.log(result); //32
//
// result = '3' + true;
// console.log(result); // 3true
//
// result = '3' + undefined;
// console.log(result); // 3undef
//
// result = '4' - '2';
// console.log(result); // 2
//
// result = '4' - 2;
// console.log(result); // 2
//
// result = '4' * 2;
// console.log(result); // 8
//
// result = 'hello' - 'world';
// console.log(result); // nan
//
// result = '4' - true;
// console.log(result); // 3
//
// result = 4 + false;
// console.log(result); // 4
//
// result = 4 + null;
// console.log(result); // 4
//
// result = 4 - undefined;
// console.log(result); // nun
//
// result = true + undefined;
// console.log(result); // nun

// Explicit Conversion
//
// result = Number('324e-1');
// console.log(result); //324
//
// result = Number(null);
// console.log(result); //0
//
// result = Number(' ');
// console.log(result); //0
//
// result = Number('hello');
// console.log(result); //nan
//
// result = parseInt('20.01');
// console.log(result); //20
//
// result = String(2 + 4);
// console.log(result); //6
//
// result = String(undefined);
// console.log(result); //und
//
// result = (324).toString();
// console.log(result); //324
//
// result = true.toString();
// console.log(result); //true
//
// result = Boolean('');
// console.log(result); //false
//
// result = Boolean(' ');
// console.log(result); //true


// Какое будет выведено значение: let x = 5; alert( x++ ); ?
//  Чему равно такое выражение: [ ] + false - null + true ?
//  Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//  Чему равна сумма [ ] + 1 + 2?
//  Что выведет этот код: alert( &quot;1&quot;[0] )?
//  Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
//  Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b)?
//  Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); ?
//  a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//  Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
//  Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot;?
//  Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ?


// let x = 5;
// console.log(x++);//5
//
// x = [] + false - null + true;//0
// console.log(x);

// let y = 1;
// let x = y = 2;

// let x = [] + 1 + 2
//
//   console.log(x);

// console.log(2 && 1 && null && 0 && undefined) //null
// console.log( null || 2 && 3 || 4 ) //3
// console.log( +"Infinity" ) //Infinity
// console.log(typeof ([1,2,4]+[1,2,5]))

//
// let x = 5;
// console.log(x++);

// console.log([1,2,3] + false);
console.log( ({}+1))
console.log(function (){}+1)