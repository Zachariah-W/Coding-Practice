function exfilefunction1(){
     document.getElementById('exfp1').innerHTML = 'Practice for Js External file';
}
document.getElementById('pfhtml').innerHTML = 3 + 7;
function alertFunction(){
     alert("the text will change");
     document.getElementById('pfalert').innerHTML = "I smell demon";
     console.log("The function work")
}
function statementFunction(){
     let x, y, z;
     y = 8; x = 4; z = y + x;
     document.getElementById('pfstatement').innerHTML = "The value for statement practice " + z + ".";
}
function srnmFunction(){
     document.getElementById('pfsr2').remove(); // The "remove()" will delete the id "pfsr2" 
     let x = document.createElement('img')//Create an image and show it 
     x.src = 'Img3dmp.webp'; //Attatching the source
     x.setAttribute('width' , '30%') //Setting the size of the image
     document.getElementById('psfr3').appendChild(x); //attaching image to the reference id location which is "psfr3"
     document.getElementById('pfsr21').innerHTML = "Slayer Demon";
     console.log ("function work")
}
function varFunction(){
     let x = "Demon", y = "Slayer";
     document.getElementById('vpf1').innerHTML =  x + " " + y + "." ;
     console.log("Function works")
}
function var2Function(){
     let x = 7 + 8 + "9", y = "0" + 2 + 5;
     document.getElementById('vpf2').innerHTML = x;
     document.getElementById('vpf3').innerHTML = y;
}
function dt1Function(){
     let x = 24 + "Fire";
     document.getElementById('dtp1').innerHTML = x;
     console.log("Function Works")
}
function dt2Function(){
     let x = 1, y = 2, z = 1;
     document.getElementById('dtp2').innerHTML = 
     (x == z) + "<br>" + (y == z);
}
function dt3Function(){
     const attack = ["water", "fire", "sound", "wind"]
     document.getElementById('dtp3').innerHTML = attack[0] + " " + attack[3]
}
function dt4Function(){
     const Demon = {
          Name : "Akaza",
          Age : "???",
          Rank : "Upper Moon 3"
     }
     document.getElementById('dtp4').innerHTML = 
     Demon.Name + " is " + Demon.Age + " " + " years old, and is rank as " + Demon.Rank + " in the Demons.";
}
function tfFunction(){
     document.getElementById('dtp5').innerHTML = 
     typeof "Blade" + typeof 20;
}
function fFunction(f1, f2){
     return f1 + f2;
}
document.getElementById('pf1').innerHTML = fFunction(5, 6);
document.getElementById('pf2').innerHTML = fFunction(7, 8);

let ppff = f2Function(5, 7);
document.getElementById('pf3').innerHTML = ppff;
function f2Function(ff1, ff2){
     return ff1 * ff2;
}

function f3Function(s){
     return s/5 + s/2;
}
document.getElementById('pf4').innerHTML = f3Function(20);
document.getElementById('pf5').innerHTML = "The answer to 40/5 + 40/2 is " + f3Function(40);

const slayer = {name: "Demon Slayer", topSlayernum: "9"}
document.getElementById('obpf1').innerHTML = "The number of Hashira in DS is " + slayer.topSlayernum;