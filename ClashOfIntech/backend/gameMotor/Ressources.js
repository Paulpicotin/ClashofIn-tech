const Clock = require("./Clock");

class Ressources{

    name;
    ressourcesCounter;

    constructor(n){
        this.name = n;
        this.ressourcesCounter = 0;
    }

    addRessources(Clock){
        if(Clock.start == true){
            while (Clock.passedTime != 0){
                this.ressourcesCounter = this.ressourcesCounter + 50;
            }
        }
    }

    useRessources(neededRessources){
        this.ressourcesCounter = this.ressourcesCounter - neededRessources;
    }

    
}
var ressources = new Ressources();
var clock = new Clock();
ressources.addRessources(clock);
console.log(ressources);
ressources.useRessources(25);
console.log(ressources);

module.exports = Ressources;