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

var waifus = [
  ["Ichika",
    ["197t", "290", "316t", "325t", "381t", "416t"]
  ],
  ["Luka",
    ["161t", "193t", "238", "320t", "406t"]
  ],
  ["MEIKO",
    ["103t", "251t", "408t", "442t", "453t"]
  ],
  ["Nene",
    ["144", "181t", "269", "348", "348t", "359", "411", "450t", "475"]
  ],
  ["Rui",
    ["119t", "182t", "220", "228t", "301t", "304", "349t", "412t"]
  ],
  ["ProsekaOther",
    ["218t", "260t", "262t", "289", "289t", "294t", "313t", "350t", "361t", "392t", "399t", "404", "410t", "422t", "456", "192", "191t", "437t"]
  ],
];

(function() {
  window.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < waifus.length; i++) {
      var waifuData = waifus[i];
      console.log(waifuData);
      var waifu = waifuData[0];
      var waifuLower = waifu.toLowerCase();

      var cards = waifuData[1];
      console.log(cards);
      var cardsShuffled = shuffle(cards);

      for (var j = 0; j < cardsShuffled.length; j++) {
        var card = cardsShuffled[j];
        console.log(card);

        var grid = gID('cards-' + waifuLower);
        var gridLink = cE('a');
        grid.appendChild(gridLink);
        gridLink.setAttribute('href', 'assets/cards/' + waifuLower + '/' + card + '.jpg');
        var gridDiv = cE('div');
        gridLink.appendChild(gridDiv);
        gridDiv.className = 'bg';
        gridDiv.setAttribute('style', 'background-image: url("assets/cards/' + waifuLower + '/' + card + '.jpg");');
      }
    }

//<a href="assets/cards/bandori/ran/398t.jpg"><div class="bg" style="background-image: url('assets/cards/bandori/ran/398t_th.jpg');"></div></a>
    });
})();
