//task 1
// var array1 = [1,2,3,4,5];
// var array2 = [1,2,3,4,6,8];
// var unique=[]

// var array3 = array1.filter(function(element){
//      return array2.indexOf(element) == -1;
//      });
// var array4 = array2.filter(function(element) { 
//     return array1.indexOf(element) == -1;
//  });

// unique=array3.concat(array4)
// document.write(unique)

//task 1 again

// var array1 = [1,2,3,4,5];
// var array2 = [1,2,3,4,6,8];
// var unique=[];
// for(var i = 0; i < array1.length; i++){
//     var found = false;

//     for(var j = 0; j < array2.length; j++){ // j < is missed;
//      if(array1[i] == array2[j]){
//       found = true;
//       break; 
//     }
//    }
//    if(found == false){
//    unique.push(array1[i]);
   
//   }
// }
// for(var i = 0; i < array2.length; i++){
//     var found = false;

//     for(var j = 0; j < array1.length; j++){ // j < is missed;
//      if(array1[i] == array2[j]){
//       found = true;
//       break; 
//     }
//    }
//    if(found == false){
//    unique.push(array2[i]);
   
//   }
// }
// document.write(unique);
// console.log(unique)


//task 2

// var birthdate =prompt("enter you birth date in the following format (DD – MM – YYYY) :");
// var array=birthdate.split('-');
// console.log(array);

// var old=new Date(array[2],array[1]-1,array[0]);
// console.log(array[2]);//year
// console.log(array[1]-1);//month and we make it -1 because it start from 0
// console.log(array[0]);//day


// function test(birthdate){
//     if (birthdate.length !== 10 || birthdate.charAt(2) !== '-' || birthdate.charAt(5) !== '-') {
//       alert("Wrong Date Format");
//       return;
//     }
//     else{
//         alert(old)
//     }
// }

// test(birthdate);



//task 3

// var FullName=prompt("enter your full name :");
// var Email=prompt("enter your Email :");

// function check(FullName ,Email){
//     if(Email.includes('@')==true){
//         document.write("email is crrect and your email is :" + ' ' + Email);
//         document.write('<br>');
//     }
//     else{
//         document.write("wrong email")
//         document.write("<br>")
//     }
//     if(typeof FullName =='string' && FullName.length >3 ){
//         document.write("your name is crrect and you Name is : " + ' ' + FullName)
//     }
//     else{
//         document.write("wrong name")
//     }
    
// }

// var x= check(FullName ,Email)


// task 3

// var randomNum=Math.floor(Math.random()*10)



// var inputNum=prompt("enter num between 1 to 10 : ")

// if(randomNum==inputNum){
//     document.write("goodguess")
// }
// else{
//     document.write('bad luck');
// }


//task 4

var arr=[1,2,3,'ahmed',true]
var sum=0;
arr.forEach(element => {
    if(typeof element=='number'){
        sum+=element;
        
    }
});
document.write(sum);