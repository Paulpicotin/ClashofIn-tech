class Building {
    nom;
    AttPoint;
    DefPoint;

    constructor(n,AP, DP){
        this.nom = n;
        this.AttPoint = AP;
        this.DefPoint = DP; 
    };
};

test1 = new Building("tour", 10, 20);
console.log(test1);


module.exports = Building;
