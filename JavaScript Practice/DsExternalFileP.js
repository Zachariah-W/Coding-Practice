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
