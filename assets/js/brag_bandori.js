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
let cardsMatch = [];

Papa.parse("https://koza.rip/assets/csv/bandori_4scard.csv", {
	download: true,
	complete: function(results) {
    var count = 0;
    for (var i = 1; i < results.data.length; i++) {
      if (results.data[i][0] != '') {
        cardsMatch.push(parseInt(results.data[i][0]));
        count++;
      }
    }
    var countDiv = gID('bandori-count');
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
    console.log(card);

    var grid = gID('bandori-cards');

    var cardLink = cE('a');
    grid.appendChild(cardLink);
    cardLink.setAttribute('href', 'https://bestdori.com/info/cards/' + card[0]);

    var cardBody = cE('div');
    cardLink.appendChild(cardBody);
    cardBody.className = 'card-body';

    var cardImgDiv = cE('div');
    cardBody.appendChild(cardImgDiv);
    cardImgDiv.className = 'card-bg';
    cardImgDiv.setAttribute('style', 'background: url(../../assets/cards/icon/bandori/' + card[0] + '.webp); background-size: 100% 100%;');

    //var cardImg = cE('img');

    //cardImgDiv.appendChild(cardImg);
    //cardImg.className = 'card-bg-img';
    //cardImg.setAttribute('src', '../../assets/cards/icon/bandori/' + card[0] + '.webp');

    var cardFrame = cE('div');
    cardBody.appendChild(cardFrame);
    if (card[3] === 5) {
      cardFrame.className = 'card-frame frame-5';
    } else {
      cardFrame.className = 'card-frame frame-4';
    }

    var cardAttr = cE('div');
    cardFrame.appendChild(cardAttr);
    cardAttr.className = 'card-attr attr-' + card[4];

    var cardBand = cE('div');
    cardFrame.appendChild(cardBand);
    cardBand.className = 'card-band band-' + card[2];

    if (card[3] === 5) {
      for (var j = 0; j < 5; j++) {
        var cardStar = cE('div');
        cardFrame.appendChild(cardStar);
        cardStar.className = 'card-star star-pos-' + (j+1) + ' star';
      }
    } else {
      for (var j = 0; j < 4; j++) {
        var cardStar = cE('div');
        cardFrame.appendChild(cardStar);
        cardStar.className = 'card-star star-pos-' + (j+1) + ' star';
      }
    }
  }
}

async function cardData() {
  var characters = await getAllChars();
  var cards = await getAllCards();

  let charsID = Object.keys(characters);
  let cardsID = Object.keys(cards);

  for (var i = 0; i < cardsID.length; i++) {
    var cardID = parseInt(cardsID[i]);
    var characterID = cards[cardsID[i]].characterId;
    var character = characters[characterID];
    var charBandID = character.bandId;
    var cardType = cards[cardsID[i]].type;
    var cardRarity = cards[cardsID[i]].rarity;
    var cardAttribute = cards[cardsID[i]].attribute;

    var card = [];

    if (cardsMatch.includes(cardID)) {
      card.push(cardID, characterID, charBandID, cardRarity, cardAttribute);
      cardsArr.push(card);
    }
  }
  return cardsArr;
}
