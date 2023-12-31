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

let cardsArr = [];
let cardsTemp = [];
let cardsMatch = [];

Papa.parse("https://koza.rip/assets/csv/proseka_4scard.csv", {
	download: true,
	complete: function(results) {
    var count = 0;

    for (var i = 1; i < results.data.length; i++) {
      if (results.data[i][0] != '') {
        cardsTemp.push(parseInt(results.data[i][0]));

        cardsMatch.push([parseInt(results.data[i][0]), parseInt(results.data[i][1])])
        count++;
      }
    }

    var countDiv = gID('proseka-count');
    var countDivSpan = cE('span');
    countDiv.appendChild(countDivSpan);
    countDivSpan.textContent = count;
	}
});

async function startup() {
  const loader = document.querySelector('#loader');

  loader.style.display = 'block';
  await cardData();
  loader.style.display = 'none';

  for (var i = 0; i < cardsArr.length; i++) {
    var card = cardsArr[i];

    var grid = gID('proseka-cards');

    var cardLink = cE('a');
    grid.appendChild(cardLink);
    cardLink.setAttribute('href', 'https://sekai.best/card/' + card[0]);

    var cardBody = cE('div');
    cardLink.appendChild(cardBody);
    cardBody.className = 'card-body';

    var cardImgDiv = cE('div');
    cardBody.appendChild(cardImgDiv);
    cardImgDiv.className = 'card-bg';
    cardImgDiv.setAttribute('style', 'background: url(../../assets/cards/icon/proseka/' + card[0] + '.webp); background-size: 100% 100%;');

    //var cardImg = cE('img');
    //cardBody.appendChild(cardImg);
    //cardImg.className = 'card-bg';
    //cardImg.setAttribute('src', '../../assets/cards/icon/proseka/' + card[0] + '.png');

    var cardFrame = cE('div');
    cardBody.appendChild(cardFrame);
    if (card[2] === "rarity_birthday") {
      cardFrame.className = 'card-frame frame-bd';
    } else {
      cardFrame.className = 'card-frame frame-4';
    }

    var cardAttr = cE('div');
    cardFrame.appendChild(cardAttr);
    cardAttr.className = 'card-attr attr-' + card[3];

    if (card[2] === "rarity_birthday") {
      var cardStar = cE('div');
      cardFrame.appendChild(cardStar);
      cardStar.className = 'card-star birthday-pos birthday';
    } else {
      for (var j = 0; j < 4; j++) {
        var cardStar = cE('div');
        cardFrame.appendChild(cardStar);
        cardStar.className = 'card-star star-pos-' + (j+1) + ' star';
      }
    }
    console.log(card[4].isInteger);
    console.log(card[4]);
    if (card[4] != "NaN") {
      var cardMR = cE('div');
      cardFrame.appendChild(cardMR);
      cardMR.className = 'card-mr mr-' + card[4];
    }
  }
}

async function cardData() {
  var characters = await getAllChars();
  var cards = await getAllJPCards();

  let charsID = Object.keys(characters);
  let cardsJPArr = Object.keys(cards);

  var cardsID = [];
  for (var i = 0; i < cardsJPArr.length; i++) {
    cardsID.push(cards[i].id);
  }

  for (var i = 0; i < cardsID.length; i++) {
    var cardID = parseInt(cardsID[i]);
    var characterID = cards[i].characterId;
    var character = characters[characterID];
    var cardRarity = cards[i].cardRarityType;
    var cardAttribute = cards[i].attr;

    var card = [];

    //console.log(cardsMatch[i][1]);

    if (cardsTemp.includes(cardID)) {
      let cardIndex = cardsTemp.indexOf(cardID);
      let cardMasterRank = cardsMatch[cardIndex][1];
      card.push(cardID, characterID, cardRarity, cardAttribute, cardMasterRank);
      cardsArr.push(card);
    }
  }
  return cardsArr;
}
