// 5 animals

document.getElementsByClassName('chicken')[0].onclick=chickenMove;
document.getElementsByClassName('dog')[0].onclick=dogMove;
document.getElementsByClassName('pig')[0].onclick=pigMove;
// ?document.getElementsByClassName('crackhead')[0].onclick=crackheadMove;
document.getElementsByClassName('cow')[0].onclick=cowMove;
document.getElementsByClassName('shark')[0].onclick=sharkMove;

var goTop;
var goLeft;

function sliders(){
//
 goTop = Math.floor(Math.random() * 300);
 goLeft = Math.round(Math.random()*300);
// conditionial
if(goTop >620 && goLeft >1368){
  goTop = Math.floor(Math.random() * 200);
  goLeft = Math.round(Math.random()*300);

}
else if (goTop >620) {
   goTop = Math.floor(Math.random() * 200);
}else if (goLeft >1368) {
  goLeft = Math.round(Math.random()*300);
}

console.log(goLeft);
console.log(goTop);
// return  goTop;
// return goLeft;
}


// this fuunction controls the chicken sound and movement
function chickenMove(){
  // var goTop = Math.floor(Math.random() * 500);
  // var goLeft = Math.round(Math.random()*600);
  sliders();
  document.getElementsByClassName('chicken')[0].style.left = goLeft +"px";
  document.getElementsByClassName('chicken')[0].style.top = goTop +"px";
  document.getElementsByClassName('audio')[0].src= 'http://www.wavlist.com/soundfx/009/chicken-2.wav';
  document.getElementsByClassName('audio')[0].play();
  }


// this fuunction controls the Dogs sound and movement
function dogMove(){
  sliders();
  // var goTop = Math.floor(Math.random() * 500);
  // var goLeft = Math.round(Math.random()*600);
  document.getElementsByClassName('dog')[0].style.left = goLeft +"px";
  document.getElementsByClassName('dog')[0].style.top = goTop +"px";
  document.getElementsByClassName('audio')[0].src= 'http://www.wavlist.com/soundfx/001/dog-bark1.wav';
  document.getElementsByClassName('audio')[0].play();

}
// this fuunction controls the Pig sound and movement
function pigMove() {
  sliders();
  // var goTop = Math.floor(Math.random() * 500);
  // var goLeft = Math.round(Math.random()*600);
  document.getElementsByClassName('pig')[0].style.left = goLeft +"px";
  document.getElementsByClassName('pig')[0].style.top = goTop +"px";
  document.getElementsByClassName('audio')[0].src= 'http://www.wavlist.com/soundfx/016/pig-4.wav';
  document.getElementsByClassName('audio')[0].play();

}

// this fuunction controls the Crackhead sound and movement
// function crackheadMove() {
//   var goTop = Math.floor(Math.random() * 300);
//   var goLeft = Math.round(Math.random()*300);
//   document.getElementsByClassName('crackhead')[0].style.left = goLeft +"px";
//   document.getElementsByClassName('crackhead')[0].style.top = goTop +"px";
//   document.getElementsByClassName('audio')[0].src= 'http://www.wavlist.com/soundfx/003/cow-madcow.wav';
//   document.getElementsByClassName('audio')[0].play();
// }


// this fuunction controls the Cow sound and movement
function cowMove(){
  sliders();
  // var goTop = Math.floor(Math.random() * 500);
  // var goLeft = Math.round(Math.random()*400);
  document.getElementsByClassName('cow')[0].style.left = goLeft +"px";
  document.getElementsByClassName('cow')[0].style.top = goTop +"px";
  document.getElementsByClassName('audio')[0].src= 'http://www.wavlist.com/soundfx/003/cow-moo1.wav';
  document.getElementsByClassName('audio')[0].play();
}

function sharkMove(){
  sliders();
  // var goTop = Math.floor(Math.random() * 500);
  // var goLeft = Math.round(Math.random()*600);
  document.getElementsByClassName('shark')[0].style.left = goLeft +"px";
  document.getElementsByClassName('shark')[0].style.top = goTop +"px";
  document.getElementsByClassName('audio')[0].src= 'http://www.wavlist.com/movies/331/jaws-boat.wav';
  document.getElementsByClassName('audio')[0].play();



}



// to make it fallow the leader you only need one slider function




// all have to make there own noise when cliclked on





// each noise is disinctive to each animals
