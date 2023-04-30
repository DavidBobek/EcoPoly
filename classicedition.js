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
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

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

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="img/icon.jpg" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="img/icon.jpg" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="img/icon.jpg" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="img/icon.jpg" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="img/icon.jpg" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="img/icon.jpg" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

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

var square = [];

square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF", -1);
square[1] = new Square("Paper", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250,2);
square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[3] = new Square("Tablet", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450,2);
square[4] = new Square("Eco Tax", "Pay $200", "#FFFFFF");
square[5] = new Square("Bycicle", "$200", "#FFFFFF", 200, 1,1);
square[6] = new Square("Big Ben", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550,2);
square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[8] = new Square("Watch", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550,2);
square[9] = new Square("Smart Watch", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600,2);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("Walkmen", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750,4);
square[12] = new Square("Fusion Reactor", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("Mp3", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750,4);
square[14] = new Square("Spotify", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900,4);
square[15] = new Square("Train", "$200", "#FFFFFF", 200, 1,2);
square[16] = new Square("Foto Album", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950,4);
square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[18] = new Square("Digital Album", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950,4);
square[19] = new Square("Cloud Album", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000,4);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Landline Phone", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050,6);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Mobile Phone", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050,6);
square[24] = new Square("Social Media", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100,6);
square[25] = new Square("Car", "$200", "#FFFFFF", 200, 1,3);
square[26] = new Square("Theatre", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150,6);
square[27] = new Square("Cinema", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150,6);
square[28] = new Square("Data Processing Center", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Netflix", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200,6);
square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
square[31] = new Square("Library", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275,8);
square[32] = new Square("Google", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275,8);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("Chat GPT", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400,8);
square[35] = new Square("Plane", "$200", "#FFFFFF", 200, 1,4);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("Online Banking", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500,8);
square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
square[39] = new Square("Crypto", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000,8);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("You have won second prize in a innovation contest. Collect $10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("You get 50$ for visiting the library instead using Chat GPT.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("You used too much paper in office, pay 50$", function() { substractamount(50, 'Community Chest');});
communityChestCards[4] = new Card("Your mom makes bugers out of roaches. Collect $20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("You sell your CO2 certificates. Receive $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("You develop a automated driving system, gain $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("You tell Elon Musk to invest in Doge Coin get $25 consultancy fee.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Your investment in Blue Origin failed, you lose $100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("You steal a new batterie technologie, Collect $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Pay your Netflix subscription of $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("You buy a new smart Fridge. Pay $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("It is your birthday. Collect $10 from every player.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Advance to \"GO\" (Collect $200).", function() { advance(0);});
communityChestCards[14] = new Card("You research facilities areon strike. Pay $40 per lab. $115 per research facility.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});


chanceCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Your Facilities need new technoligcal equipment. For each lab pay $25. For each research facility $100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Eco fine $15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("You have been elected chairman of the board. Pay each player $50.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Bank pays you dividend of $50.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Pay poor tax of $15.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Take a trip to ********************** If you pass \"GO\" collect $200.", function() { advance(5);});
chanceCards[10] = new Card("ADVANCE to ***********************.", function() { advance(39);});
chanceCards[11] = new Card("ADVANCE to ****************************. If you pass \"GO\" collect $200.", function() { advance(24);});
chanceCards[12] = new Card("Your building loan matures. Collect $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("ADVANCE to *********************. If you pass \"GO\" collect $200.", function() { advance(11);});
chanceCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});
