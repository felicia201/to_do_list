let metre = document.getElementById("metre");
let kilometre = document.getElementById("kilometre");
let Pieds = document.getElementById("Pieds");

metre.addEventListener("input", function() {
    Dist("metre", this.value);
});

kilometre.addEventListener("input", function() {
    Dist("kilometre", this.value); // element reçu
});

Pieds.addEventListener("input", function() {
    Dist("Pieds", this.value);
});
function Dist(id, value){
 if(id == "metre"){
 kilometre.value = value / 1000;
 Pieds.value = value * 0.3000;
 }else if(id == "kilometre"){
  metre.value = value * 1000;
  Pieds.value = value * 2.2046;
 }else if(id == "Pieds"){
 metre.value = value/0.0022046;
 kilometre.value = value / 2.2046;
  }
 }



























































// let num = 1 ;

// num = 1;// 1
// num+= 1;//2
// num++ ;//3

// console.log("bonjour"+num)
// console.log('bonjour ${num}')

// let num2 = "3"
// num == num2 
// num === num2

// if(num == num2){

// }else if (num == num2){
    
// }else{

// }

// if(num == num2){

// }else{

// }

 

// let cake = "chocolat"
// if (cake==="chocolat") {
//     a
// }

// // conditions?si "true":si "false"

// num ? console.log(num) : (num=1);
// if (num) {
//     console.log(num);
// }else {
//     num = 1;
// }

// switch (num) {
//     case 1 :
//         console.log("num est egale 1");
//         break;
//         default:
//             console.log("num n'est rentré dans aucuns des cas du switch");
//             break;

// }

// while(condition){
    
// }
// do{

// } while (condition)
