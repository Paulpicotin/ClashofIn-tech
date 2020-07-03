class Clock{
	secondes;
	start;
	minutes;

	constructor(){
		this.secondes = 0;
		this.start = false;
	}
	
	StartClock(end) {
		var holdPassedTime = 0;
		var time =0;
		if(this.start == false) {
			this.start = true;
		}
		var timeStart = new Date();
		while(this.start == true){
			var timeStop = new Date();
			//console.log (timeStop.getTime());
			var passedTime = timeStop.getUTCSeconds() - timeStart.getUTCSeconds();
			//console.log(passedTime);
			if(passedTime != holdPassedTime){
				time ++;
				console.log(time);
			}
			holdPassedTime = passedTime;
			//this.secondes = passedTime / 1000 ;
			//console.log(this.secondes);
			if(time == end){
				this.start = false;
			}
		}

		console.log("fini");
	}
	
	GetSecondes(){
		return this.secondes;
	}

}

var test1 = new Clock();
console.log(test1);
test1.StartClock(50);
	
module.exports = Clock;
