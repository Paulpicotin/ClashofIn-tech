const Square = require("./Square");

class Building {
    nom;
    AttPoint;
    DefPoint;
    Square;

    constructor(n,AP, DP){
        this.nom = n;
        this.AttPoint = AP;
        this.DefPoint = DP;
        this.Square = null; 
    };

    BuildingPlacement(long, lat){
        this.Square = new Square(long, lat);
    }

    toShow (){
		var buildingPicture = new Image();
		buildingPicture.onload =function(){

		}
		buildingPicture.src = "";

	}
};

var test1 = new Building("tour", 10, 20);
console.log(test1);


module.exports = Building;
