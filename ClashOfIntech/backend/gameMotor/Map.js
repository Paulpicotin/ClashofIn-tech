const Square = require('./Square.js');
const Soldier = require('./Soldier.js')

class Map{

	longueur;
	largeur;
	//ArrayList <Buiding> buildings;
	goldCounter;
	ironCounter;
	woodCounter;
	waterCounter; 
	wheatCounter;
	soldier;

	constructor(long, larg){
		this.longueur = long;
		this.largeur = larg;
	};
	
	getLongueur() {
		return this.longueur;
	};

	setLongueur(longueur) {
		this.longueur = longueur;
	};

	getLargeur() {
		return this.largeur;
	};

	setLargeur(largeur) {
		this.largeur = largeur;
	};
	
	getGoldCounter() {
		return this.goldCounter;
	};


	setGoldCounter(goldCounter) {
		this.goldCounter = goldCounter;
	};


	getIronCounter() {
		return this.ironCounter;
	};


	setIronCounter(ironCounter) {
		this.ironCounter = ironCounter;
	};


	getWoodCounter() {
		return this.woodCounter;
	};


	setWoodCounter(woodCounter) {
		this.woodCounter = woodCounter;
	};


	getWaterCounter() {
		return this.waterCounter;
	};


	setWaterCounter(waterCounter) {
		this.waterCounter = waterCounter;
	};


	getWheatCounter() {
		return this.wheatCounter;
	};


	setWheatCounter(wheatCounter) {
		this.wheatCounter = wheatCounter;
	};


	getSoldier() {
		return this.soldier;
	};


	setSoldier(soldier) {
		this.soldier = soldier;
	};
	
	createMap (){
		var i=0;
		var j=0;
		var k = 0;
		var squares = [];
		for (i; i < this.getLongueur(); i++){
			for (j; j < this.getLargeur(); j++){
				var square = new Square(i,j);
				console.log(square);
				squares.push(Square);
				
			}
		}
	};

	draw (longueur, largeur){
		this.longueur = longueur;
		this.largeur = largeur;
		return (this.longueur, this.largeur);
	}
}

/*var map1 = new Map(2,3);
console.log(map1);
map1.setWheatCounter(20);
console.log("blé: " + map1.getWheatCounter());
map1.setGoldCounter(100);
console.log("or: " +map1.getGoldCounter());
map1.setWaterCounter(50);
console.log("eau: " +map1.getWaterCounter());
map1.setIronCounter(25);
console.log("metal: " +map1.getIronCounter());
map1.setWoodCounter(25);
console.log("bois: " + map1.getWoodCounter());
var soldier = new Soldier("Soldat1", 10, 10, 3, 1);
var square1 = new Square(1, 3);
soldier.ToPlace(square1.longitude, square1.latitude);
console.log(soldier);*/
	
module.exports = Map;	
	

	


