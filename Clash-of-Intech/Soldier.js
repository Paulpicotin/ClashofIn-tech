
let name;
let attPoint;
let defPoint;
let deplacementSpeed;
let attSpeed;

function Soldier(name, attack, defense, deplacement, attackSpeed){
	this.attPoint = attack;
	this.name = name;
	this.defPoint = defense;
	this.deplacementSpeed = deplacement;
	this.attSpeed = attackSpeed;
}

function GetNom (){
	return name;
}

function GetAttackPoint (){
	return attPoint;
}

function GetDefensePoint (){
	return defPoint;
}

function GetSpeed (){
	return deplacementSpeed;
}

function GetAttSpeed (){
	return attSpeed;
}