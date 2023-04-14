const year = document.getElementById("yam")
const pass = document.getElementById("pass")
const agpass = document.getElementById("agpass")

var et = document.getElementById("agpass").innerHTML


let date =  new Date().getFullYear();

cy = date - year


function verifyyear(){

if (year < 1900) {
et = "Nemůžete použít rok před 1900"
} 

if (year > 2020) {
et = "Jste moc mladí, nemůžete se přihlásit s " + cy + " lety"
}

else {
    alert("Nastala nějaká chyba s rokem narození, zkuste znova, nebo kontaktujete vývojáře")
}}



function verifypass(){
if (pass == "") {
    
} 

if (agpass == "") {
    
}


if (pass == agpass) {
    
}

else {
    
}


}





function doallr(){
    verifyyear()


}