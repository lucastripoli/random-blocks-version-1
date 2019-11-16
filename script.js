
var tamanho = 5;
var itens = [];

for(var i = 0; i < tamanho; i++){

  for(var j = 0; j < tamanho; j++){
    if(j == 0){
      itens[i] = [];
    }

    var newitem = document.createElement("div");

    newitem.style.backgroundColor = getRandomColor();

    newitem.style.height = Math.floor((document.getElementById("magicPlace").offsetHeight / tamanho)-4)+ "px";

    newitem.style.width = Math.floor((document.getElementById("magicPlace").offsetWidth / tamanho)-4)+ "px";


    newitem.classList.add('item');

    itens[i][j] = newitem;

    document.getElementById("magicPlace").appendChild(itens[i][j]);

  } 

}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(myFunction, 5000);


function myFunction(){

  for(var i = 0; i < tamanho; i++){

    for(var j = 0; j < tamanho; j++){

      itens[i][j].style.backgroundColor = getRandomColor();


    }
  }

}