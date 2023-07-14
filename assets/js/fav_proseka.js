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

var leoniFav = [];
var mmjFav = [];
var vbsFav = [];
var wxsFav = [];
var niigoFav = [];

function startup() {
  Papa.parse("https://koza.rip/assets/csv/proseka_fav.csv", {
    download: true,
    complete: function(results) {
      for (var i = 1; i < results.data.length; i++) {

        switch(results.data[i][0]) {
          case 'leoni':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            leoniFav.push(temp);
            break;
          case 'mmj':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            mmjFav.push(temp);
            break;
          case 'vbs':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            vbsFav.push(temp);
            break;
          case 'wxs':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            wxsFav.push(temp);
            break;
          case 'niigo':
            var type = results.data[i][1];
            var item = results.data[i][2];
            var filename = results.data[i][3];
            var temp = [];
            temp.push(type, item, filename);
            niigoFav.push(temp);
            break;
        }
      }
      //console.log(popipaFav);

      bands = [["leoni", leoniFav], ["mmj", mmjFav], ["vbs", vbsFav], ["wxs", wxsFav], ["niigo", niigoFav]];

      for (var i = 0; i < bands.length; i++) {
        var bandData = bands[i];
        //console.log(bandData);
        var band = bandData[0];
        var bandLower = band.toLowerCase();

        var favorites = bandData[1];
        //console.log(favorites);

        //var cards = bandData[1];
        //console.log("cards: " + cards);
        //var cardsShuffled = shuffle(cards);
        //console.log("cards: " + cardsShuffled);

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
          gridServiceImg.setAttribute('src', '/assets/fav/proseka/' + filename);

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
