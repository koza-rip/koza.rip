function gID(sID) {
  return document.getElementById(sID);
}

function cE(sName) {
  return document.createElement(sName);
}

function cT(sD) {
  return document.createTextNode(sD);
}

function sC(oID, cN) {
  oID.setAttribute('class', cN, 0);
  oID.className = cN;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

var popipaFav = [];
var afterglowFav = [];
var pasupareFav = [];
var roseliaFav = [];
var hhwFav = [];
var morfonicaFav = [];
var rasFav = [];
var bands = [];

function startup() {
  Papa.parse("https://koza.rip/assets/csv/bandori_fav.csv", {
    download: true,
    complete: function(results) {
      //console.log("begin parsing csv");
      for (var i = 1; i < results.data.length; i++) {

        switch(results.data[i][0]) {
          case 'popipa':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            popipaFav.push(temp);
            break;
          case 'afterglow':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            afterglowFav.push(temp);
            break;
          case 'pasupare':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            pasupareFav.push(temp);
            break;
          case 'roselia':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            roseliaFav.push(temp);
            break;
          case 'hhw':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            hhwFav.push(temp);
            break;
          case 'morf':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            morfonicaFav.push(temp);
            break;
          case 'ras':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            rasFav.push(temp);
            break;
        }
      }
      //console.log("csvReader func ran");
      bands = [["popipa", popipaFav], ["afterglow", afterglowFav], ["pasupare", pasupareFav], ["roselia", roseliaFav], ["hhw", hhwFav], ["morfonica", morfonicaFav], ["ras", rasFav]];

      //console.log("startup began");

      for (var i = 0; i < bands.length; i++) {
        var bandData = bands[i];

        var band = bandData[0];
        var bandLower = band.toLowerCase();

        var favorites = bandData[1];

        for (var j = 0; j < favorites.length; j++) {

          var type = favorites[j][0];
          var item = favorites[j][1];
          var filename = favorites[j][2];
          //console.log("card: " + card);

          var grid = gID('favs-' + bandLower);
          //console.log("grid: " + grid);

          var gridCol = cE('div');
          grid.appendChild(gridCol);
          gridCol.className = 'col text-center';

          var gridServiceItem = cE('div');
          gridCol.appendChild(gridServiceItem);
          gridServiceItem.className = 'service-item position-relative';

          var gridServiceImg = cE('img');
          gridServiceItem.appendChild(gridServiceImg);
          gridServiceImg.className = 'img-fluid fav-img';
          gridServiceImg.setAttribute('src', '/assets/fav/bandori/' + filename);

          var gridServiceH4 = cE('h4');
          gridServiceItem.appendChild(gridServiceH4);

          var gridServiceH4Link = cE('a');
          gridServiceH4.appendChild(gridServiceH4Link);
          gridServiceH4Link.className = 'stretched-link';
          //gridServiceH4Link.setAttribute('href', '');
          gridServiceH4Link.textContent = type;

          var gridServiceP = cE('p');
          gridServiceItem.appendChild(gridServiceP);
          gridServiceP.textContent = item;
        }
      }

      /**
       * Initiate glightbox
       */
      const glightbox = GLightbox({
        selector: '.glightbox'
      });
    }
  });
}
