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

/*var batiment1 = new Building("tour", 10, 20);
var square1 = new Square(10, 5);
batiment1.BuildingPlacement(square1.longitude, square1.latitude)
console.log(batiment1);*/


module.exports = Building;
