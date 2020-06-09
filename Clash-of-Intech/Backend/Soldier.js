
class Soldier{

	name;
	attPoint;
	defPoint;
	deplacementSpeed;
	attSpeed;

	constructor (name, attack, defense, deplacement, attackSpeed){
		this.attPoint = attack;
		this.name = name;
		this.defPoint = defense;
		this.deplacementSpeed = deplacement;
		this.attSpeed = attackSpeed;
	};

	GetNom (){
		return this.name;
	};

	GetAttackPoint (){
		return this.attPoint;
	};

	GetDefensePoint (){
		return this.defPoint;
	};

	GetSpeed (){
		return this.deplacementSpeed;
	};

	GetAttSpeed (){
		return this.attSpeed;
	};

	ToAttack (ennemies){
		ennemies.defPoint = ennemies.defPoint - this.attPoint;
		if(ennemies.defPoint == 0){
			console.log("Vous avez vaincu l'ennemi " + ennemies.GetNom());
		}
		else{
			console.log("Il reste " + ennemies.GetDefensePoint() + " points de vie à l'énnemi " + ennemies.GetNom());
		}
	};

	ToDeplace (){
	
	};
}

soldat1 = new Soldier("Soldat1", 10, 10, 3, 1);
soldat2 = new Soldier("Soldat2", 15, 10, 2, 0.5);
soldat3 = new Soldier("Soldat3", 5, 5, 2, 2);
console.log(soldat1);
console.log(soldat2);
console.log(soldat3);
soldat1.ToAttack(soldat2);
console.log(soldat2);
soldat3.ToAttack(soldat1);
console.log(soldat1);

module.exports = Soldier;