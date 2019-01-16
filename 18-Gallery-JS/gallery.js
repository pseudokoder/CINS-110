// Wes Leiter
var chico = [
  { description:"Chico State Campus",
    picture:"http://www.csuchico.edu/maps/images/photo-tour/phototour-kendall-768.jpg",
    from:"csuchico.edu"
  },
  { description:"Bidwell Park",
    picture:"http://1.bp.blogspot.com/-iQmg1olEo8E/UolfG6zFwBI/AAAAAAAAI1k/72tpB2V4xNI/s1600/2013_1111_044.jpg",
    from:"adunnphotography.blogspot.com"
  },
  { description:"Titan Missile Silo",
    picture:"https://tylerashresume.files.wordpress.com/2012/11/chico-missile-silos.jpg",
    from:"tylerashresume.files.wordpress.com"
  },
  { description:"Esplanade Blvd",
    picture:"https://photos.smugmug.com/News-Week-of-12-5-2016/i-6KMHqBS/0/XL/Esplanade%24%24EB8-XL.jpg",
    from:"media.chicoer.com"
  },
  { description:"Sierra Nevada Brewing Co",
    picture:"http://brewpublic.com/wp-content/uploads/2008/12/roadtrip-petaluma-to-sf-and-back-08-369.jpg",
    from:"brewpublic.com"
  },
];
var current = 0;

function shuffleGallery()
{
  var i = 0;
  do {
    i = Math.floor(Math.random() * 5); // generates random intiger between 0 and 4
  } while (i == current);
  current = i;
  document.getElementById("picture").src = chico[i].picture;
  document.getElementById("caption").innerHTML = chico[i].description;
  document.getElementById("source").innerHTML = "Image courtesy of: " + chico[i].from;
  return i;
}
