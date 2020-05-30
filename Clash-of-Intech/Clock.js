
var Clock = new Object;
	
	let secondes;
	let start;
	let minutes;
	
	function Clock () {
		this.secondes = 0;
		this.start = false;
	}
	
	function StartClock(end) {
		if(this.start == false) {
			start = true;
		}
		
		for (GetSecondes(); GetSecondes() < end; this.secondes++) {
			try {
			    Thread.sleep(1000);
			} 
			catch (InterruptedException) {
			
			}
			System.out.println("nbr seconde: " + this.GetSecondes());
		}
		System.out.println("fini");
	}
	
	function GetSecondes(){
		return secondes;
	}

