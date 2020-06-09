
class Game{

    name;
    clock;
    owner;
    end;

    constructor(){
        this.name = this.SetName();
        this.owner = this.SetOwnerName();
        this.clock = new Clock();
        this.end = 180;
    };

    const 

    StartGame () {
    	var c = new Clock();
    	c.StartClock(end);
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

test1 = new Game();
console.log(test1);
test1.StartGame();    
    
module.exports = Game;
    

