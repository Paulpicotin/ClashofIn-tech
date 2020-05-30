


	
	let longitude;
	let longueur;
	let largeur;
	let latitude;
	List <Buiding> buildings;
	let goldCounter;
	let ironCounter;
	let woodCounter;
	let waterCounter; 
	let cornCounter;
	//todo compteur ressources
	let soldier = new Soldier();
	
	function Map (lat, longit, longu, larg) {
		this.latitude = lat;
		this.longitude = longit;
		this.longueur = longu;
		this.largeur = larg;
	}
	
	
	function getLatitude() {
		return latitude;
	}

	function setLatitude(latitude) {
		this.latitude = latitude;
	}

	function getLongitude() {
		return longitude;
	}

	function setLongitude(longitude) {
		this.longitude = longitude;
	}

	function getLongueur() {
		return longueur;
	}

	function setLongueur(longueur) {
		this.longueur = longueur;
	}

	function getLargeur() {
		return largeur;
	}

	function setLargeur(largeur) {
		this.largeur = largeur;
	}
	
	function getGoldCounter() {
		return goldCounter;
	}


	function setGoldCounter(goldCounter) {
		this.goldCounter = goldCounter;
	}


	function getIronCounter() {
		return ironCounter;
	}


	function setIronCounter(ironCounter) {
		this.ironCounter = ironCounter;
	}


	function getWoodCounter() {
		return woodCounter;
	}


	function setWoodCounter(woodCounter) {
		this.woodCounter = woodCounter;
	}


	function getWaterCounter() {
		return waterCounter;
	}


	function setWaterCounter(waterCounter) {
		this.waterCounter = waterCounter;
	}


	function getCornCounter() {
		return cornCounter;
	}


	function setCornCounter(cornCounter) {
		this.cornCounter = cornCounter;
	}


	function getSoldier() {
		return soldier;
	}


	function setSoldier(soldier) {
		this.soldier = soldier;
	}



