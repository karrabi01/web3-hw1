// ---------how to show our massage-----------------

// document.write("Hello 1");
//          alert("Hello 2");
//          console.log("Hello 3 (show in the console ) ");
//          document.write("<br>");

// ---------how to define new variable-----------------

//          var cost = 6;
//          console.log(cost);

// ---------how to see the type of our variable--------------

//          console.log(typeof cost);
//          var avg = 18.1;
//          console.log(avg);
//          console.log(typeof avg);
//          var fname = "Fatemeh";
//          console.log(fname);
//          console.log(typeof fname);
//          var isOdd = true;
//          console.log(isOdd);
//          console.log(typeof isOdd);
//          var city;
//          console.log(city);
//          console.log(typeof city);
//          var province = null;
//          console.log(province);
//          console.log(typeof province);

// ---------how to define an array-----------------

//          var students = ["amir", "ali", "reza"];
//          console.log(typeof students);

// ---------how to define more than one variable together-----------------

//          var cost = 2;
//          var count = 5;
//          var totalPrice = count * cost;
//          var count = 2,
//             cost = 5,
//             fruitName = "Banana";
//          console.log(fruitName);
//          console.log("cost ==> " + cost);
//          console.log("count = " + count);

// ---------how to merge two variable in new variable-----------------

//          var msg = "hello world";
//          console.log(msg);

//          var lname = "Abedi";
//          var massage = "hello " + lname + "!";
//          console.log(massage);

// ---------example of array and vaariables-----------------

var grades = [12, 14, 19, 20]; //list of grade
         var person1 = {
            fname: "Yegane",
            lname: "Abedi",
            age: 21,
            height: 158,
            type: "enfj",
         };
         console.log("Array 1 : ");
         console.log(grades);
         console.log("Array 2");
         console.log(person1);
         console.log("Just write the name of person :");
         console.log(person1.fname);
         console.log("Math grade = " + grades[2]);

// ---------sum two index of array-----------------

var arr3 = [12, [14, 15, 16], 22, 26];
         var sum = arr3[2] + arr3[3];
         console.log("Array 3 :");
         console.log(arr3);
         console.log("sum index 2 and 3 :");
         console.log("sum = ", sum);
         console.log("Show index one in list of index 2");
         console.log(arr3[1][2]);

// ---------one way to add new content in our array-----------------

var arr2 = ["ali", "ygn", "fateme"];
         console.log("Array 4 :");
         console.log(arr2);
         arr2.push("nima", "reza");
         console.log("After push :");
         console.log(arr2);

         console.log("========================");
         console.log("You can even go to file custome.js to see and run other comments code");
         console.log("========================");