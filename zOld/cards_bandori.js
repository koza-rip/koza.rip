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
  ["Hagumi",
    ["297", "379t", "520", "568t", "589", "589t", "791", "791t", "807t", "821t", "950t", "1062", "1229t", "1388t", "1505t", "1585"]
  ],
  ["Kanon",
    ["296t", "404t", "463t", "501t", "1064t", "1186t", "1302t", "1506", "1511t"]
  ],
  ["Nanami",
    ["1068t", "1204t", "1364t", "1407t", "1529", "1532t", "1586t"]
  ],
  ["YukiLisa",
    ["148", "283", "377", "487t", "630t", "710", "757", "758t", "780t", "792t", "802", "838", "1079t", "1175t", "1219", "1318t", "1322", "1362", "1384t", "1495t", "1538"]
  ],
  ["BandoriOther",
    ["181t", "241t", "415t", "467t", "473t", "502t", "567t", "569t", "728t", "760t", "812t", "862t", "951t", "971t", "1045t", "1050t", "1071t", "1078t", "1098", "1124", "1156t", "1158t", "1179", "1208t", "1209t", "1211t", "1231t", "1235", "1285t", "1303", "1307", "1312", "1324t", "1422t", "1423t", "1499t", "1512", "1526t", "1533"]
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
