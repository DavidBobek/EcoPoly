//////////////////////////////////////////////////////////////////////////////////////////
// Monopoly
// Javascript Game Code

// Sqaure Class
//Properties: 
// // name: name of the square
// // pricetext: text to display when showing the price of the square
// // color: color of the square
// // owner: player who owns the square (0 if unowned)
// // mortgage: true if the square is mortgaged
// // house: number of houses on the square
// // hotel: number of hotels on the square
// // token: token to display on the square
// // groupNumber: group number of the square
// // price: price of the square
// // baserent: rent of the square with no houses
// // rent1: rent of the square with 1 house
// // rent2: rent of the square with 2 houses
// // rent3: rent of the square with 3 houses
// // rent4: rent of the square with 4 houses
// // rent5: rent of the square with a hotel
// // houseprice: price of a house on this square
// // landcount: number of times the square has been landed on

function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5, token) {
    this.name = name;
    this.pricetext = pricetext;
    this.color = color;
    this.owner = 0;
    this.mortgage = false;
    this.house = 0;
    this.hotel = 0;
    this.token = token;
    this.groupNumber = groupNumber || 0;
    this.price = price || 0;
    this.baserent = baserent || 0;
    this.rent1 = rent1 || 0;
    this.rent2 = rent2 || 0;
    this.rent3 = rent3 || 0;
    this.rent4 = rent4 || 0;
    this.rent5 = rent5 || 0;
    this.landcount = 0;
    // Set house price based on group number
    if (groupNumber === 3 || groupNumber === 4) {
        this.houseprice = 50;
    } else if (groupNumber === 5 || groupNumber === 6) {
        this.houseprice = 100;
    } else if (groupNumber === 7 || groupNumber === 8) {
        this.houseprice = 150;
    } else if (groupNumber === 9 || groupNumber === 10) {
        this.houseprice = 200;
    } else {
        this.houseprice = 0;
    }
}
// Card Class
// Properties:
// // text: text to display on the card
// // action: function to call when the card is drawn = each card has a function that is called when the card is drawn
function Card(text, action, tokenCost) {
  this.text = text;
  this.action = action;
  this.tokenCost = tokenCost
}

function corrections() {


  // Add images to enlarges.
  document.getElementById("enlarge1token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge3token").innerHTML +=
  '<h2>4 Tokens</h2/';
  document.getElementById("enlarge5token").innerHTML +=
    '<h2>2 Tokens</h2/';
    document.getElementById("enlarge6token").innerHTML +=
    '<h2>2 Tokens</h2/';
    document.getElementById("enlarge8token").innerHTML +=
    '<h2>2 Tokens</h2/';
    document.getElementById("enlarge9token").innerHTML +=
    '<h2>4 Tokens</h2/';
    document.getElementById("enlarge11token").innerHTML +=
    '<h2>2 Tokens</h2/';
    document.getElementById("enlarge12token").innerHTML +=
    '<h2>2 Tokens</h2/';
    document.getElementById("enlarge13token").innerHTML +=
    '<h2>2 Tokens</h2/';
    document.getElementById("enlarge14token").innerHTML +=
    '<h2>6 Tokens</h2/';
  document.getElementById("enlarge15token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge16token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge18token").innerHTML +=
  '<h2>4 Tokens</h2/';
  document.getElementById("enlarge19token").innerHTML +=
  '<h2>6 Tokens</h2/';
  document.getElementById("enlarge21token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge23token").innerHTML +=
  '<h2>6 Tokens</h2/';
  document.getElementById("enlarge24token").innerHTML +=
  '<h2>8 Tokens</h2/';
  document.getElementById("enlarge25token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge26token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge27token").innerHTML +=
  '<h2>4 Tokens</h2/';
  document.getElementById("enlarge28token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge29token").innerHTML +=
  '<h2>8 Tokens</h2/';
  document.getElementById("enlarge31token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge32token").innerHTML +=
  '<h2>6 Tokens</h2/';
  document.getElementById("enlarge34token").innerHTML +=
  '<h2>8 Tokens</h2/';
  document.getElementById("enlarge35token").innerHTML +=
  '<h2>2 Tokens</h2/';
  document.getElementById("enlarge37token").innerHTML +=
  '<h2>6 Tokens</h2/';
  document.getElementById("enlarge39token").innerHTML +=
  '<h2>8 Tokens</h2/';
}

// Following functions are just a TAX functions that apply to the game in certain situations.

function utiltext() {
  return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
  return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
  addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
  player[turn].pay(100, 0);

  $("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}

function citytax() {
  addAlert(player[turn].name + " paid $200 for landing on City Tax.");
  player[turn].pay(200, 0);

  $("#landed").show().text("You landed on City Tax. Pay $200.");
}

// var square is an array of all the squares on the board.
var square = [];

// The following initializes the properties for each square on the board by calling the Square() constructor.

//Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5, group)
square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Paper", "$60", "#6ed995", 60, 3, 2, 10, 30, 90, 160, 250, 2);
square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[3] = new Square("Tablet", "$60", "#6ed995", 60, 3, 4, 20, 60, 180, 320, 450, 4);
square[4] = new Square("Eco Tax", "Pay $200", "#FFFFFF");
square[5] = new Square("Bicycle", "$200", "#FFFFFF", 200, 1, null, null, null,null,null,null,1);
square[6] = new Square("Big Ben", "$100", "#67c1d9", 100, 4, 6, 30, 90, 270, 400, 550, 2);
square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[8] = new Square("Watch", "$100", "#67c1d9", 100, 4, 6, 30, 90, 270, 400, 550, 2);
square[9] = new Square("Smart Watch", "$120", "#67c1d9", 120, 4, 8, 40, 100, 300, 450, 600, 4);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("Walkman", "$140", "#fb8930", 140, 5, 10, 50, 150, 450, 625, 750, 2);
square[12] = new Square("Fusion Reactor", "$150", "#FFFFFF", 150, 2, null, null, null,null,null,null,3);
square[13] = new Square("Mp3", "$140", "#fb8930", 140, 5, 10, 50, 150, 450, 625, 750, 4);
square[14] = new Square("Spotify", "$160", "#fb8930", 160, 5, 12, 60, 180, 500, 700, 900, 6);
square[15] = new Square("Train", "$200", "#FFFFFF", 200, 1, null, null, null,null,null,null,2);
square[16] = new Square("Foto Album", "$180", "#fcd925", 180, 6, 14, 70, 200, 550, 750, 950, 2);
square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[18] = new Square("Digital Album", "$180", "#fcd925", 180, 6, 14, 70, 200, 550, 750, 950, 4);
square[19] = new Square("Cloud Album", "$200", "#fcd925", 200, 6, 16, 80, 220, 600, 800, 1000, 6);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Landline Phone", "$220", "#9e7fbb", 220, 7, 18, 90, 250, 700, 875, 1050, 2);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Mobile Phone", "$220", "#9e7fbb", 220, 7, 18, 90, 250, 700, 875, 1050, 4);
square[24] = new Square("Social Media", "$240", "#9e7fbb", 240, 7, 20, 100, 300, 750, 925, 1100, 8);
square[25] = new Square("Car", "$200", "#FFFFFF", 200, 1, null, null, null,null,null,null,3);
square[26] = new Square("Theatre", "$260", "#e22426", 260, 8, 22, 110, 330, 800, 975, 1150, 2);
square[27] = new Square("Cinema", "$260", "#e22426", 260, 8, 22, 110, 330, 800, 975, 1150, 4);
square[28] = new Square("Data Processing", "$150", "#FFFFFF", 150, 2, null, null, null,null,null,null,3);
square[29] = new Square("Netflix", "$280", "#e22426", 280, 8, 24, 120, 360, 850, 1025, 1200, 8);
square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
square[31] = new Square("Library", "$300", "#fed4bc", 300, 9, 26, 130, 390, 900, 1100, 1275, 2);
square[32] = new Square("Google", "$300", "#fed4bc", 300, 9, 26, 130, 390, 900, 1100, 1275, 6);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("Chat GPT", "$320", "#fed4bc", 320, 9, 28, 150, 450, 1000, 1200, 1400, 8);
square[35] = new Square("Plane", "$200", "#FFFFFF", 200, 1, null, null, null,null,null,null,4);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("Online Banking", "$350", "#e2eaec", 350, 10, 35, 175, 500, 1100, 1300, 1500, 6);
square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
square[39] = new Square("Crypto", "$400", "#e2eaec", 400, 10, 50, 200, 600, 1400, 1700, 2000, 8);

// Community Chest
var communityChestCards = [];
var chanceCards = [];

// Chest Cards
communityChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();}, 0);
communityChestCards[1] = new Card("You have won second prize in a innovation contest. Collect $10 and lose 2 carbon points.", function() { addamount(10, 'Community Chest');}, -2);
communityChestCards[2] = new Card("You get 50$ for visiting the library instead using Chat GPT.", function() { addamount(50, 'Community Chest');}, 0);
communityChestCards[3] = new Card("You used too much paper in office, pay 50$", function() { substractamount(50, 'Community Chest');}, 0);
communityChestCards[4] = new Card("Your mom makes bugers out of roaches. Collect $20.", function() { addamount(20, 'Community Chest');}, 0);
communityChestCards[5] = new Card("You sell your CO2 certificates. Receive $100 and gain 2 carbon points", function() { addamount(100, 'Community Chest');}, 2);
communityChestCards[6] = new Card("You develop a automated driving system, gain $100.", function() { addamount(100, 'Community Chest');}, 0);
communityChestCards[7] = new Card("You tell Elon Musk to invest in Doge Coin get $25 consultancy fee.", function() { addamount(25, 'Community Chest');}, 0);
communityChestCards[8] = new Card("Your investment in Blue Origin failde, you lose $100.", function() { subtractamount(100, 'Community Chest');}, 0);
communityChestCards[9] = new Card("You steal a new batterie technologie, Collect $200.", function() { addamount(200, 'Community Chest');}, 0);
communityChestCards[10] = new Card("Pay your Netflix subscription of $50.", function() { subtractamount(50, 'Community Chest');}, 0);
communityChestCards[11] = new Card("You buy a new smart Fridge. Pay $50 and gain 1 carbon point.", function() { subtractamount(50, 'Community Chest');}, 1);
communityChestCards[12] = new Card("It is your birthday. Collect $10 from every player.", function() { collectfromeachplayer(10, 'Community Chest');}, 0);
communityChestCards[13] = new Card("Advance to \"GO\" (Collect $200).", function() { advance(0);}, 0);
communityChestCards[14] = new Card("You research facilities areon strike. Pay $40 per lab. $115 per research facility.", function() { streetrepairs(40, 115);}, 0);
communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();}, 0);


// Chance Cards
chanceCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();}, 0);
chanceCards[1] = new Card("Your Facilities need new technoligcal equipment. For each lab pay $25. For each research facility $100.", function() { streetrepairs(25, 100);}, 0);
chanceCards[2] = new Card("Eco fine, get 2 Carbon points as penalty.", function() { subtractamount(15, 'Chance');}, 2);
chanceCards[3] = new Card("You have been elected chairman of the board. Pay each player $50.", function() { payeachplayer(50, 'Chance');}, 0);
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();}, 0);
chanceCards[5] = new Card("ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestUtility();}, 0);
chanceCards[6] = new Card("Bank pays you dividend of $50.", function() { addamount(50, 'Chance');}, 0);
chanceCards[7] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();}, 0);
chanceCards[8] = new Card("Pay poor tax of $15.", function() { subtractamount(15, 'Chance');}, 0);
chanceCards[9] = new Card("Take a trip to SMART WATCH If you pass \"GO\" collect $200.", function() { advance(9);}, 0);
chanceCards[10] = new Card("ADVANCE to Crypto", function() { advance(39);}, 0);
chanceCards[11] = new Card("ADVANCE to Mobile Phone If you pass \"GO\" collect $200.", function() { advance(23);}, 0);
chanceCards[12] = new Card("Your building loan matures. Collect $150.", function() { addamount(150, 'Chance');}, 0);
chanceCards[13] = new Card("Take a trip to Spotify If you pass \"GO\" collect $200.", function() { advance(14);}, 0);
chanceCards[14] = new Card("ADVANCE to Walkman. If you pass \"GO\" collect $200.", function() { advance(11);}, 0);
chanceCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();}, 0);

