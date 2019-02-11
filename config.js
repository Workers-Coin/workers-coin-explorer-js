var api = 'http://127.0.0.1:18238';
var donationAddress = "";
var blockTargetInterval = 30; // enter the block interval in seconds
var coinUnits = 10000000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  18446744073709551615; // enter the total supply in atomic units
var symbol = 'work'; // enter the coin's ticker
var refreshDelay = 60;

// pools stats by MainCoins
var networkStat = {
 "trtl": [
	["z-pool.com", "http://z-pool.com:8117"],
	["eu.turtlepool.space", "http://eu.turtlepool.space:8117"],
	["us.turtlepool.space", "http://us.turtlepool.space:8117"],
	["hk.turtlepool.space", "http://hk.turtlepool.space:8117"],
	["turtlecoinpool.ddns.net", "http://turtlecoinpool.ddns.net:8127"],
	["trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
	["trtl.heigh-ho.funkypenguin.co.nz", "https://api.trtl.heigh-ho.funkypenguin.co.nz"],
	["trtl.radicaldelta.org", "http://trtl.radicaldelta.org:8117"],
	["turtle.atpool.party", "http://turtle-eu.atpool.party:8117"],
	["ny.minetrtl.us", "http://ny.minetrtl.us:8117"],
	["xk.is", "https://xk.is/api"],
	["trtl.llama.horse","http://pool.llama.horse:8118"],
	["trtl.hackerknowledge.de", "https://pool.trtl.hackerknowledge.de:8119"]
 ]
};

var networkStat2 = {
    "trtl": [
	[""]
 ]
};
