// const obj = {
//     user: 'Tati',
//     age: 18
// }
// function sayHi() {
//     console.log('hello world');
//     }
//     sayHi()


//     function func() {
//         let num1 = prompt()
//         let num2 = prompt()
//         console.log(num1 + num2);
//         console.log(num1 - num2);
//         console.log(num1 * num2);
//         console.log(num1 / num2);
//         console.log(Math.round (num1 / num2));
    // }
    // func()

    // console.log(typeof func());

    // Задание самост сделать
    // вывести да или нет через промт если четные

    // function oddEven() {
    //     let num = prompt()
        
    //     if(num % 0 !== 0){
    //         console.log( 'ja');
    //     }
    //     else if(num % 2 === 0){
    //         console.log( 'nein'); 
    //     }                
    //      }
    // oddEven()

    // аргументы=====================

    // function func(a,b) {
    //     console.log(a ** b);            
    //  }
    // func(12, 12)
    // func(2, 3)
    // func(prompt(), prompt())
    // console.log(func);   
    // console.log(typeof console);     


    // Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.

    // function func(a,b) {
                 
    //     if(a > b){
    //         console.log (a);
    //     }
    //     else if(a < b){
    //         console.log (b); 
    //     }                
    //      }
    //      func(prompt(), prompt())

        //  вариант Вачо+++++

        // function newFunc(num1, num2) {
        //     if (num1 > num2) {
        //         console.log(`Наибольшее число: ${num1}`);
        //     } else if (num1 < num2) {
        //         console.log(`Наибольшее число: ${num2}`);
        //     }
        // }
       
        // newFunc(-4, -23)
         
    //  +++
        // let result = findnewFunc

        // вывод результата=================
        // function func1(a, b) {
        //     let res =  a ** b
        //     return res
        //     }
        //     console.log(func1(10, 2));

            // вариант с промт Вачо=============

            // function func1(a, b) {
            //     let res = a ** b
            
            //     return res
                
            // }
            // let newRes = func1(prompt(), prompt())
            
            
            // if (newRes > 0) {
            //     console.log('Задача выполнена');
            // }

            // ==============
            
        // function newFunc(num1, num2) {
        //     if (num1 > num2) {
        //         return `Наибольшее число: ${num1}`
        //     } else if (num1 < num2) {
        //         return`Наибольшее число: ${num2}`
        //     }
        // }
       
        // let result = newFunc(34, 23)
        // console.log(result);


// =======================задача найти кв гипотенузы
        // function power(a, b) {
        //     const hipotenuse = Math.sqrt(a * a + b * b)
            
        //     return Math.round(hipotenuse) 
        // }
        // let side1 = 3
        // let side2 = 2
        //  let result = power(side1, side2)     
         
        //  console.log(result)

        //  Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае. Во время разбора покажите вариант с условным оператором и без него.


        // function oddEven(x) {
        //  if (x % 2 == 0) {
        //   return true
        //  } else {
        //  return false
        //  }   
        //   }
        // let res = oddEven(4)
                 
        // console.log(res)


        // вариант 2
        //     function oddEven(x) {
        //     return x % 2 !== 0
        //              }   
        //       let res = oddEven(4)
                    
        //    console.log(res)

           
    // вариант 3
        //    function oddEven(x) {
        //     return x % 2 !== 0
        // }
        
        // let res = oddEven(prompt())
        // console.log(res);

        // Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.

        function arrFunc(maxNum) {
            let arr = []
            for (let i = 0; i <= maxNum; i++) {
               arr.push(i)
                
            }
            return arr
    }
    console.log(arrFunc(5)); // [0, 1, 2, 3, 4, 5]