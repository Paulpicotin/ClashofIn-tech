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

module.exports = Ressources;