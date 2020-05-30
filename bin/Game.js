

    let name;
    let owner;
    let clock;
    let end;

    function Game(){
        this.name = SetName();
        this.owner = SetOwnerName();
        this.clock = new Clock();
        this.end = 180;
    }
    
    function StartGame () {
    	var c = new Clock();
    	c.StartClock(end);
    }

    function SetName (){
    	System.out.println("Entrez le nom de votre partie");
    	let gameName = sc.next();
    	return gameName;
    }

    function SetOwnerName (){
    	System.out.println("Entrez votre nom");
    	let ownerName = sc.next();
    	return ownerName;
    }
    
    function GetClock() {
    	return this.clock;
    }
    function GetEnd() {
    	return this.end;
    }

