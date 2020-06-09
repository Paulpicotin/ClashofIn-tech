class Clock{
	secondes;
	start;
	minutes;

	constructor(){
		this.secondes = 0;
		this.start = false;
	}
	
	StartClock(end) {
		if(this.start == false) {
			this.start = true;
		}
		var timeStart = new Date();
		while(this.start == true){
			var timeStop = new Date();
			var passedTime = timeStop - timeStart;
			this.secondes = passedTime / 1000 ;
			console.log(this.secondes);
		}

		console.log("fini");
	}
	
	GetSecondes(){
		return secondes;
	}

}

test1 = new Clockt();
console.log(test1);
test1.StartClock();
	
module.exports = Clock;
