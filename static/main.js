
var speed = 75;
var delSpeed = 100;
var i = 0;
let j = 0;


var iam = [
  'Steven M. Sullivan'
];


var idos = [
  'JavaScript',
  'Node....Express',
  'Python',
  'Flask',
  'Perl...lots of Perl',
  'React...Redux',
  'SQL'
];


function typeOnce() {
  
  if (i < iam[j].length){
    document.getElementById("iamTitle").innerHTML += iam[j].charAt(i);
    i++;
    setTimeout(typeOnce, speed);
  }
  
}


function typeIt() {

  if (i < idos[j].length){
    document.getElementById("iamTitle").innerHTML += idos[j].charAt(i);
    i++;
    setTimeout(typeIt, speed);
  }
  else {
    setTimeout(untypeIt, 1500);
  }
  
}

function untypeIt(){
  
  if (document.getElementById("iamTitle").innerHTML.length > 0){
    document.getElementById("iamTitle").innerHTML = document.getElementById("iamTitle").innerHTML.slice(0,-1);
    setTimeout(untypeIt, delSpeed);
  }
  else if (j >= idos.length) {
    // That's it...let's leave it to the last one.
  }
  else {
    j++;
    i = 0;
    if (j >= idos.length){
      j = 0;
    }
    setTimeout(typeIt, speed);
  }

}