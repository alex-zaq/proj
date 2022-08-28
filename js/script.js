'use strict';

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));

// console.log(btns[1].classList.add('red','tttdsfdsf'));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }


btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')){
  //   btns[1].classList.add('red')
  // } else {
  //   btns[1].classList.remove('red')
  // }
  btns[1].classList.toggle('red');
});

console.log(btns[0].className);


// const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);



// function deepCount(data) {

//   let count = 0;
//   for (let i = 0; i < data.length; i++){
//       if (Array.isArray(data[i])) {
//         count += deepCount(data[i]) +1;
//        } else {
//         count += 1;
//        }
//   }

//   return count;
// }



// console.log(deepCount([[[[[[[[[]]]]]]]]]));



















// function isPangram(str) {

  

//   let res = str.replace(/\s/g, '')

//   const setLegnth = new Set( res.toLowerCase() ).size;

//   return  setLegnth === 26;

// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));




// function amountOfPages(totalnumber) {
  
//   let currNumber = '';
//   let step = 1;

//   while (currNumber.length !== totalnumber){
//     currNumber += step;
//     step++;
//   }

//   return --step

// }


// console.log(amountOfPages(1095));














// console.log(Number.MAX_SAFE_INTEGER);

// const bigint = 1233543523452346426456345634563454364n;

// const sameBignint = BigInt(1233543523452346426456345634563454364)

// // нельзя использовать с math

// //  деление возвращает без дробной часи
// console.log(2n === 2); //+,-,*,**,%, >(можно с обысчным)

// let bigint1 = 1n;
// let number = 2;

// console.log(bigint1 + BigInt(number));
// console.log(Number(bigint1) + number);























// const arr = [1,1,1,3,4,5,5,5,5,6,6,7,7];

// const arr = ['Alex','Ann','Alex'];
// const set = new Set(arr);
// set.add('Ivan').add('Ivan');
// console.log(set);
// // set.delete(value);
// // set.has(value);
// // set.clear();
// // set.size;
// // for (let value of set) console.log(value);
// set.forEach( (value, valueAgain, set) => {
//     console.log(value,valueAgain);
// })
// // console.log(set.values());
// // console.log(set.keys());
// // console.log(set.entries());
// function unique(arr) {
//   return  Array.from(new Set(arr)); // часто используется
// }




// const user = {
//   name:'Alex',
//   surname:'Smith',
//   birthday:'20/04/1993',
//   showMyPublicData: function(){
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user,'birthday', {
//   value: prompt('Date?'),
//   enumerable:true,
//   configurable:true});

// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));


// Object.defineProperties(user, {
//   name: {writible:false},
//   surname:{writable:false}
// })




// Object.defineProperty(user,'showMyPublicData', 
// {enumerable:false});
// for (let key in user) console.log(key);
// Object.defineProperty(user,'gender', {value:'male'});
// user.name = 'afdf';



// writable если true то можно изменить иначе только для 
// чтения
// enumerable - свойство будет перечисляться в циклах
// configurable - можно удлать и атрибуты можно изменить















// const p = document.querySelectorAll('p');
// console.log(p);
// let students = {
//   js: [{
//     name: 'John',
//     progress: 100

//   }, {
//     name: 'Ivan',
//     progress: 60
//   }],


//   html: {

//     basic: [{
//       name: 'Peter',
//       progress: 20
//     }, {
//       name: 'Ann',
//       progress: 18
//     }],

//     pro: [{
//       name: 'Sam',
//       progress: 10
//     }],

//     semi:{
//       students: [{
//         name:'Test',
//         progress:100
//       }]
//     }

//   }

// }


// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;
  
//   for (let course of Object.values(data)){
//       if (Array.isArray(course)){
//           students += course.length;

//           for (let i = 0; i < course.length; i++){
//             total += course[i].progress;
//           }

//       } else {
//         for (let subCourse of Object.values(course)){
//           students += subCourse.length;         

//           for (let i = 0; i < subCourse.length; i++){
//             total += subCourse[i].progress;
//           }
//       }
//   }

// }
//   return total / students;
// }

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)){

//       let students = data.length;
//       let progress = 0;

//       for (let i = 0; i < data.length; i++){
//         progress += data[i].progress;

//       }

//       return [students,progress];
      
//     } else { 
      
//       let result = [0, 0];

//       for (let elem of Object.values(data)){
//           const subArr = getTotalProgressByRecursion(elem)
//           result[0]+=subArr[0];
//           result[1]+=subArr[1];
//       }

//       return result;

//     }
//   }

// const result = getTotalProgressByRecursion(students)
 
// console.log(result[1]/result[0]);















// function pow1(x, n) {

//   let result = 1;

//   for (let i = 0; i < n; i++){
//     result *= x;
//   }
  
//   return result;
// }


// function pow2(x, n) {

//   if (n == 1) { return x } else if (n == 0) {
//     return 1
//   } else {
//       return x * pow2(x, n - 1)
//   }

// }

// // console.log( Math.pow(2, 2) == pow1(2, 2)  );
// console.log( Math.pow(2, 2) == pow2(2, 2)  );

//  











// console.log(document.body);
// console.log(document.documentElement)

// console.log(document.body.childNodes) // все узлы родителя ноды
// console.log(document.body.firstChild) // первый потомок ноды
// console.log(document.body.lastChild) //  последний потомок ноды

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);


// console.log(document.body.firstElementChild) // первый потомок


// for (let node of document.body.childNodes) {
//   if (node.nodeName == '#text') {
//     continue;
//   }
//   console.log(node);
// }















// const btn = document.querySelector('button');
// const overlay = document.querySelector('.overlay');


// const btns = document.querySelectorAll('button')
// btns.forEach( btn => {
//     btn.addEventListener('click', () => {
//       console.log('zaq');
//     }, {once:true})
// })


//  const deleteElement = (e) => {
//   // e.target.remove();
//   console.log(e.currentTarget);
//   console.log(e.type);
//  }

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click',deleteElement) 


// const link = document.querySelector('a');
// link.addEventListener('clik', (e) => {
//   e.preventDefault();
//   console.log(e.target);
// });




