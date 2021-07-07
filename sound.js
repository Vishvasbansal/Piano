//adding event listeners
for (i = 0; i < document.querySelectorAll(".white").length; i++) {
  document.querySelectorAll(".white")[i].addEventListener("click", naturalNotes)
}
for (i = 0; i < document.querySelectorAll(".black").length; i++) {
  document.querySelectorAll(".black")[i].addEventListener("click", sharpsAndFlat)
}

//adding sound to natural Notes
//here some sound notes were not working thus made some specific cases
function naturalNotes() {
  var audio = new Audio('notes/Piano.mf.' + this.id + '.mp3');
  audio.play();
  // if(this.id==="D3"){
  //   setTimeout(function(){
  //     audio.volume=0.01;
  //   },1700);
  // }else {
    setTimeout(function(){
      audio.volume=0.01;
    },900);
  // }
}

//adding sound to black Notes
//here some sound notes were not working thus made some specific cases
function sharpsAndFlat() {
  var audio = new Audio('notes/Piano.mf.' + this.id + '.mp3');
  audio.play();
  setTimeout(function(){
    audio.volume=0.01;
  },900);
}
