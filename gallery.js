var chico = ["Bidwell Mansion","Bidwell Park","Titan Missile Silo",
             "Esplanade Blvd","Sierra Nevada Brewing Co"];
var current = 0;


function shuffleGallery()
{
  do {
    var i = Math.floor(Math.random() * 5); // generates random intiger between 0 and 4
  } while (i == current);
  current = i;
  return i;
}
