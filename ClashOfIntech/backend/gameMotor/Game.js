const Clock = require("./Clock");

class Game{

    name;
    clock;
    owner;
    end;

    constructor(){
        this.name = this.SetName();
        this.owner = this.SetOwnerName();
        this.clock = new Clock();
        this.end = 30;
    };

    const 

    StartGame () {
    	var c = new Clock();
    	c.StartClock(this.end);
    };

    SetName (name){
        this.name = name;
    };

    SetOwnerName (owner){
        this.owner = owner;
    }
    
    GetClock() {
    	return this.clock;
    }
    GetEnd() {
    	return this.end;
    };
};

/*var game1 = new Game();
game1.name = "partie 1";
game1.owner = "j'ai la Ref"
console.log(game1);
game1.StartGame(); */   
    
module.exports = Game;
    

