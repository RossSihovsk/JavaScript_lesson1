//1
 var admin;
var name = "John";

admin = name;

console.log(admin + " " + name);

console.log()

//2
login = "Admin";
password = "TheMaster";

console.log("Who`s there?")
if (login=="Admin"){
 console.log(login+" Enter your password")
 if (password=="TheMaster"){
  console.log("Welcome")
 }
 else if (password=="canceled"){
  console.log("Canceled")
 }
 else console.log("Wrong password")
}
else if (login=="cansel")
 console.log("Canceled")
else console.log("I dont know you")