let input = document.getElementsByClassName("inputs");
let btn= document.getElementById("validate");
let list=document.getElementById("list");
let allUser=[];




function user(nom,prenom,mail,pass){
    this.noms = [nom,prenom];
    this.email = mail;
    this.password=pass;
}