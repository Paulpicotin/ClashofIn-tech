
class Square {

	longitude;
	latitude;

	constructor(long, lat){
		this.longitude = long;
		this.latitude = lat;
	};

	GetLongitude(){
		return this.longitude;
	};

	GetLatitude(){
		return this.latitude;
	};

};
test1 = new Square(10, 5);
console.log(test1);

module.exports = Square;





