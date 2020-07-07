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
			var passedTime = timeStop.getUTCSeconds() - timeStart.getUTCSeconds();
			if(passedTime != holdPassedTime){
				time ++;
				console.log(time);
			}
			holdPassedTime = passedTime;
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

/*var clock1 = new Clock();
console.log(clock1);
clock1.StartClock(30);*/
	
module.exports = Clock;
